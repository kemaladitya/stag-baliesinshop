<template>
  <div>
    <div class="pa-1">
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
            style="font-size: 13px"
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
    <v-footer fixed padless color="white" style="width: 100%;">
      <v-card
        class="pa-1 d-flex flex-row" style="width: 100%;"
        flat
        tile
      >
        <v-btn
          v-if="order_type !== 'subscription-order' && order_type !== 'package-order'"
          depressed
          style="
            text-transform: capitalize;
            color: black !important;
            border: 1px solid #ccc !important;
            letter-spacing: initial;
          "
          min-width="49.5%"
          max-width="49.5%"
          :to="`/site/${this.$route.params.store}?u=${this.$route.query.u}&src=${this.$route.query.src}&c=${this.$route.query.c}`"
        >
          Kembali Belanja
        </v-btn>
        <!-- v-show="!rp_order"
        :to="back"
        :style="screen == 'mini' ? 'font-size: 11px' : null"
        :height="screen == 'mini' ? 35 : 45" -->
        <v-spacer></v-spacer>
        <!-- 
        <v-card v-show="!rp_order" flat min-width="1%" /> -->
        <v-btn
          depressed
          style="text-transform: capitalize; letter-spacing: initial"
          color="#FD0"
          :min-width="order_type !== 'subscription-order' && order_type !== 'package-order' ? '49.5%' : '100%'"
          :max-width="order_type !== 'subscription-order' && order_type !== 'package-order' ? '49.5%' : '100%'"
          :disabled="checkout_requirement"
          :to="checkout"
        >
          Lanjut Pembayaran
        </v-btn>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Single from '@/components/Cart/Platforms/desktop/type/single-order.vue'
import Subscription from '@/components/Cart/Platforms/desktop/type/subscription-order.vue'
import Package from '@/components/Cart/Platforms/desktop/type/package-order.vue'

export default {
  components: {
    Single,
    Package,
    Subscription,
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

    checkout_requirement() {
      if (this.order_type === 'subscription-order') {
        if (this.general_total_order > this.store.max_order || this.general_total_order < this.store.min_order) {
          return true
        } else if (this.limit_recurring_purchase !== null) {
          if (this.limit_recurring_purchase.min_selected_date > this.subscription_cart.length) {
            return true
          }
        }

        return false
      } else {
        return this.general_total_order > this.store.max_order || this.general_total_order < this.store.min_order
      }
    },

    limit_recurring_purchase() {
      if (this.store && this.store.limit_recurring_purchase) {
        return JSON.parse(this.$store.state.store.limit_recurring_purchase)
      }

      return null
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

          total = 0

          for (let j = 0; j < items.length; j++) {
            const el = items[j]
            
            const find = this.list_product.filter(
              product => product.id === el.id && product.SKU === el.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * el.qty
            }
          }

          if (total < this.store.min_order || total > this.store.max_order) return total
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