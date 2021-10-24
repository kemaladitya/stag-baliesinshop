<template>
  <div class="pa-1 pt-2 text-left">
    <div style="font-size: 12px">
      DETAIL PESANAN & WAKTU PENGANTARAN
    </div>
    <Subscription v-if="order_type === 'subscription-order'" :voucher="voucher" />
    <Single v-if="order_type === 'single-order'" />
    <Package v-if="order_type === 'package-order'" />

    <div class="pt-2">
      <v-card
        class="mt-2 pt-2 pb-2"
        style="
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          font-size: 13px;
        "
        flat
        tile
      >
        <div>Catatan untuk penjual:</div>
        <div style="font-weight: 600; color: dimgray">
          <div v-if="user_notes.length" class="pt-2">{{ user_notes }}</div>
          <div v-else class="pt-2">-</div>
        </div>
      </v-card>
    </div>

    <div class="d-flex flex-row mt-3 mb-1 pa-1">
      <div style="font-size: 12px" />
      <v-spacer />
      <div class="d-flex flex-row pa-1">
        <div style="font-weight: 600">Subtotal:</div>
        &nbsp;
        <v-spacer />
        <div style="font-weight: 600; color: rgb(25, 118, 210)">
          Rp
          {{ general_total_order.toLocaleString().replace(/,/g, '.') }}
        </div>
      </div>
    </div>

    <div
      v-show="store.min_order && store.max_order"
      style="font-size: 9px; color: red; text-align: center"
    >
      {{ validate_total }}
    </div>
    <!-- <div v-if="rp_order">
      <div v-if="grandtotal < store.min_order" style="font-size: 9px; color: red; text-align: center">
        {{ JSON.parse(store.response.min_order).message[0] }}
      </div>
      <div v-if="grandtotal > store.max_order" style="font-size: 9px; color: red; text-align: center">
        {{ JSON.parse(store.response.max_order).message[0] }}
      </div>
    </div>
    <div v-if="!rp_order">
      <div v-if="grandtotal < store.min_order" style="font-size: 9px; color: red; text-align: center">
        {{ JSON.parse(store.response.min_order).message[0] }}
      </div>
      <div v-if="grandtotal > store.max_order" style="font-size: 9px; color: red; text-align: center">
        {{ JSON.parse(store.response.max_order).message[0] }}
      </div>
    </div> -->
  </div>
</template>

<script>
import Subscription from '@/components/Checkout/Platforms/mini/constants/order-type/subscription-order'
import Single from '@/components/Checkout/Platforms/mini/constants/order-type/single-order'
import Package from '@/components/Checkout/Platforms/mini/constants/order-type/package-order'

export default {
  props: {
    voucher: {
      type: Object,
      required: true,
    },
  },

  components: {
    Subscription,
    Single,
    Package,
  },

  computed: {
    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    list_product() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    subscription_cart() {
      return this.$store.state.subscription_cart
    },

    package_cart() {
      return this.$store.state.package_cart
    },

    parsed_lists() {
      let total = 0
      const product = []

      this.cart.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            id             : find[0].id,
            sku            : find[0].SKU,
            detail_id      : find[0].variant[0],
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
            is_promo       : find[0].is_promo,
            qty            : el.qty
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },

    user_notes() {
      return this.$store.state.user_notes
    },

    general_total_order() {
      let total = 0

      if (this.order_type === 'single-order') {
        this.cart.forEach(el => {
          const find = this.list_product.filter(
            product => product.id === el.id && product.SKU === el.sku
          )

          if (find.length) {
            total += (find[0].discount_price || find[0].normal_price) * el.qty
          }
        })
      } else if (this.order_type === 'subscription-order') {
        this.subscription_cart.forEach(({ items }) => {
          items.forEach(el => {
            const find = this.list_product.filter(
              product => product.id === el.id && product.SKU === el.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * el.qty
            }
          })
        })
      } else if (this.order_type === 'package-order') {
        this.package_cart.forEach(el => {
          el.items.forEach(item => {
            const find = this.list_product.filter(
              product => product.id === item.id && product.SKU === item.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * item.qty
            }
          })
        })
      }

      return total
    },

    validate_total() {
      if (this.order_type === 'single-order') {
        if (this.general_total_order < this.store.min_order) {
          return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
        }

        if (this.general_total_order > this.store.max_order) {
          return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`
        }
      } else if (this.order_type === 'subscription-order') {
        let is_valid = 1

        this.subscription_cart.forEach(el => {
          if (is_valid === 1) {
            let total = 0

            el.items.forEach(item => {
              const find = this.list_product.filter(product => product.id === item.id && product.SKU === item.sku)

              total += ((find[0].discount_price || find[0].normal_price) * item.qty)
            })

            if (total > this.store.max_order) {
              is_valid = 2
            }

            if (total < this.store.min_order) {
              is_valid = 0
            }
          }
        })

        if (is_valid === 0) {
          return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
        } else if (is_valid === 2) {
          return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`
        }

        return ''
      } else if (this.order_type === 'package-order') {
        if (this.store.customize_setup) {
          const order_type = this.package_cart[0].type
          const find_rules = JSON.parse(this.store.customize_setup).packaging.rules.detail.filter(el => el.type === order_type)

          if (find_rules[0].min > this.general_total_order) {
            return `Minimum pembelian Rp ${find_rules[0].min.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`
          } else if (find_rules[0].max < this.general_total_order) {
            return `Maksimum pembelian Rp ${find_rules[0].max.toLocaleString().replace(/,/g, '.')}.`
          }
        }
      }

      return ''
    }
  },
}
</script>