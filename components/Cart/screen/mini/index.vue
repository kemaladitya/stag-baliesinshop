<template>
  <div>
    <div class="pa-1" style="padding-bottom: 180px !important">
      <Subscription v-if="order_type === 'subscription-order'" />
      <Single v-if="order_type === 'single-order'" />
      <Package v-if="order_type === 'package-order' || order_type === 'single-order'" />

      <div
        v-if="
          (order_type === 'single-order' && cart.length) ||
          (order_type === 'package-order' && package_cart.length) ||
          (order_type === 'subscription-order' && subscription_cart.length)
        "
      >
        <div class="mt-2 pa-1" style="text-align:left">
          <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
          <v-textarea
            id="b-customer-notes"
            hide-details
            no-resize
            outlined
            style="font-size: 13px; border-radius: 8px"
            @change="write_notes"
          />
          <!-- :value="notes"
          @change="changenotes" -->
        </div>
        <div class="d-flex flex-row pa-1">
          <div>Subtotal</div>
          <div
            v-if="order_type !== 'package-order'"
            class="d-flex flex-row pl-1"
            style="align-self: center; color: red; font-size: 11px; font-style: italic"
          >
            <div style="margin: 2px 2px 0 2px">
              min. {{ store.min_order ? store.min_order / 1000 : 0 }}k -
            </div>
            <div style="margin: 2px 2px 0 2px">
              max. {{ store.max_order ? store.max_order / 1000 : 0 }}k
            </div>
          </div>
          <v-spacer></v-spacer>
          <div style="font-weight: 600">
            Rp {{
              general_total_order
                ? general_total_order.toLocaleString().replace(/,/g, '.')
                : 0
              }}
          </div>
        </div>
      </div>
    </div>
    
    <cart-footer :general_total_order="general_total_order" />
  </div>
</template>

<script>
import Single from "@/components/cart/screen/mini/type/single-order";
import Subscription from "@/components/cart/screen/mini/type/subscription-order";
import Package from "@/components/cart/screen/mini/type/package-order";
import Footer from "@/components/partials/footer/cart";

export default {
  components: {
    Single,
    Package,
    Subscription,
    "cart-footer": Footer,
  },

  data: () => ({
    sheet: true,
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    customer() {
      return this.$store.state.customer
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

    checkout() {
      if ((this.store.registered_mode && this.customer) || !this.store.registered_mode && this.customer) {
        return `/site/${this.$route.params.store}/checkout?src=${this.$route.query.src}&u=${this.$route.query.u}&c=${this.$route.query.c}`
      } else if (!this.store.registered_mode && !this.customer) {
        return `/site/${this.$route.params.store}/userprofile?u=${this.$route.query.u}&src=${this.$route.query.src}&mtd=reg`
      }
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
        for (let i = 0; i < this.subscription_cart.length; i++) {
          const items = this.subscription_cart[i].items
          let subsciption_total = 0

          for (let j = 0; j < items.length; j++) {
            const el = items[j]
            
            const find = this.list_product.filter(
              product => product.id === el.id && product.SKU === el.sku
            )

            if (find.length) {
              subsciption_total += (find[0].discount_price || find[0].normal_price) * el.qty
            }
          }

          total += subsciption_total;
        }
      } else if (this.order_type === 'package-order') {
        this.package_cart.forEach(el => {
          el.items.forEach(items => {
            const find = this.list_product.filter(
              product => product.id === items.id && product.SKU === items.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * items.qty
            }
          })
        })
      }

      return total
    },
  },

  methods: {
    write_notes(e) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'user_notes',
          data: e,
        },
      })
    }
  }
}
</script>