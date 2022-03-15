<template>
  <v-footer class="full-width" color="white" padless fixed>
    <v-card class="pa-2 d-flex flex-row full-width" flat tile>
      <v-btn
        v-if="order_type !== 'subscription-order' && order_type !== 'package-order'"
        :to="catalog_url"
        class="footer-button footer-button--back"
        min-width="calc(50% - 4px)"
        max-width="calc(50% - 4px)"
        depressed
      >
        Kembali Belanja
      </v-btn>
      <v-spacer />
      <v-btn
        :to="checkout"
        :min-width="subscription_style"
        :max-width="subscription_style"
        :disabled="disabled_checkout"
        :style="'color: ' + disabled_checkout ? 'grey' : 'black'"
        class="footer-button footer-button--next"
        color="#FD0"
        depressed
      >
        Lanjut Pembayaran
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: {
    general_total_order: Number,
  },

  computed: {
    catalog_url() {
      const { params, query } = this.$route;

      return `/site/${params.store}?u=${query.u}&src=${query.src}&c=${query.c}`;
    },

    subscription_style() {
      return this.order_type !== 'subscription-order'
        && this.order_type !== 'package-order'
          ? 'calc(50% - 4px)'
          : '100%';
    },

    store() {
      return this.$store.state.store;
    },

    limit_recurring_purchase() {
      if (this.store && this.store.limit_recurring_purchase) {
        return JSON.parse(this.$store.state.store.limit_recurring_purchase)
      }

      return null
    },

    customer() {
      return this.$store.state.customer
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

    products() {
      return this.$store.state.products
    },

    order_type() {
      return this.$store.state.order_type;
    },

    checkout() {
      if ((this.store.registered_mode && this.customer) || !this.store.registered_mode && this.customer) {
        return `/site/${this.$route.params.store}/checkout?src=${this.$route.query.src}&u=${this.$route.query.u}&c=${this.$route.query.c}`;
      } else if (!this.store.registered_mode && !this.customer) {
        return `/site/${this.$route.params.store}/userprofile?u=${this.$route.query.u}&src=${this.$route.query.src}&mtd=reg`;
      }
    },

    disabled_checkout() {
      if (this.order_type === 'subscription-order') {
        let disabled = null;

        this.subscription_cart.forEach(({ items }) => {
          let total = 0;
        
          items.forEach(({ id, sku, qty }) => {
            const find = this.products
              .filter(product => 
                product.id === id
                && product.SKU === sku
              );

            total += (find[0].discount_price || find[0].normal_price) * qty
          });

          if (!disabled) {
            const rules = total > this.store.max_order
              || total < this.store.min_order;

            if (rules) disabled = true;
            if (!rules) disabled = false;
          }
        });

        return this.subscription_cart.length < this.limit_recurring_purchase.min_selected_date
          || disabled;
      } else {
        return this.general_total_order > this.store.max_order || this.general_total_order < this.store.min_order
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}

.footer-button {
  text-transform: capitalize;
  color: black !important;
  letter-spacing: initial;
  border-radius: 8px;

  &--next {
    border: none;
  }

  &--back {
    border: 1px solid #ccc !important;
  }
}
</style>