<template>
  <transition
    v-if="!loading_product"
    name="scroll-y-reverse-transition"
    mode="out-in"
    appear
  >
    <div v-show="(cart.length)" class="pa-2 pt-1 footer-wrapper">
      <v-card
        :to="cart_url"
        color="#fd0"
        class="d-flex flex-row pa-3 pr-3 pl-3 content"
      >
        <v-card class="content--show-cart" color="transparent" flat>
          Lihat Keranjang
        </v-card>
        <v-spacer />
        <v-card class="content--item-info" color="transparent" flat>
          {{ order_info.qty_item }}
          {{ order_info.qty_item > 1 ? 'items' : 'item' }}
        </v-card>
        <v-spacer />
        <v-card class="content--total-info" color="transparent" flat>
          Rp {{
            order_info.total
              .toLocaleString()
              .replace(/,/g, '.')
          }}
        </v-card>
      </v-card>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loading_product: Boolean,
  },

  computed: {
    order_info() {
      let qty_item = 0
      let total    = 0

      if (this.order_type === 'single-order' && this.cart) {
        this.cart.forEach(el => {
          const find = this.list_product.filter(
            product => product.id === el.id && product.SKU === el.sku
          )

          if (find.length) {
            qty_item += el.qty
            total    += (find[0].discount_price || find[0].normal_price) * el.qty
          }
        })
      } else if (this.order_type === 'subscription-order' && this.cart) {
        this.cart.forEach(date => {
          date.items.forEach(item => {
            const find = this.list_product
              .filter(product =>
                product.id === item.id
                && product.SKU === item.sku
              );

            if (find.length) {
              qty_item += item.qty;
              total    += (find[0].discount_price || find[0].normal_price) * item.qty;
            }
          })
        })
      }

      return { qty_item, total };
    },

    list_product() {
      return this.$store.state.products;
    },

    cart_url() {
      return `/site/${this.$route.params.store}/cart?u=${this.$route.query.u}&mtd=view&src=${this.$route.query.src}&c=${this.$route.query.c}`;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;

  .content {
    border-radius: 8px;

    &--show-cart {
      font-size: 13px;
      font-weight: 500;
    }

    &--item-info {
      font-size: 13px;
      font-weight: 600;
      color: grey;
    }

    &--total-info {
      font-size: 13px;
      font-weight: 600;
    }
  }
}
</style>