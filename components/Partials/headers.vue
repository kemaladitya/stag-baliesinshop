<template>
  <v-app-bar
    class="headers"
    color="white"
    scroll-target="#scrolling-techniques-7"
    elevate-on-scroll
    absolute
  >
    <v-app-bar-nav-icon :ripple="false" class="ml-2 pa-2" color="white" depressed>
      <v-btn
        v-if="
          ($route.name == 'site-store-checkout')
          || (
            store
            && $route.name == 'site-store-userprofile'
            && !store.registered_mode
          )
        "
        :to="($route.name == 'site-store-checkout') ? cart_url : checkout_url"
        :ripple="false"
        class="ml-4 headers--back"
        x-small
        depressed
        fab
        text
      >
        <v-icon small>mdi-arrow-left</v-icon>
      </v-btn>
      <v-img
        v-if="store"
        :src="store.image"
        :to="home_url"
        class="headers--image"
        width="40"
        height="40"
        max-width="53"
        max-height="53"
        loading=lazy
      />
      <v-icon v-else>mdi-store</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <v-btn
      v-if="($route.name == 'site-store') && store && store['store_type'] && merchant"
      :to="merchant_url"
      :ripple="false"
      class="ml-4 headers--merchant"
      x-small
      fab
      text
      depressed
    >
      <v-icon>mdi-home-search</v-icon>
    </v-btn>
    <v-badge
      v-if="cart_on_headers"
      id="b-shop-cart-badge"
      class="headers--badge"
      top="-5px"
      color="red darken-1"
      min-width="16px"
      height="16px"
      bordered
      overlap
      :icon="cart_qty_item"
    >
      <v-btn
        :to="cart_url"
        :ripple="false"
        max-width="38"
        min-width="38"
        color="#fcfcfc"
        class="headers--badge--cart-icon"
        rounded
        depressed
      >
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    cart_url() {
      const { params, query } = this.$route;

      return `/site/${params.store}/cart?u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
    },
  
    merchant_url() {
      const { params, query } = this.$route;
      const { market_id } = this.merchant;

      return `/site/${params.store}/merchant?market=${market_id}&u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
    },

    checkout_url() {
      const { params, query } = this.$route;

      return `/site/${params.store}/checkout?u=${query.u}&mtd=view&src=${query.src}&c=${query.c}`;
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    merchant() {
      return this.$store.state.merchant
    },

    cart_on_headers() {
      return this.$route.name === 'site-store-pid' ||
        this.$route.name === 'site-store-checkout'
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

    cart_qty_item() {
      let total_item = 0

      if (this.order_type === 'single-order') {
        this.cart.forEach(element => {
          total_item += element.qty
        })
      } else if (this.order_type === 'subscription-order') {
        this.subscription_cart.forEach(el => {
          el.items.forEach(item => {
            total_item += item.qty
          })
        })
      } else if (this.order_type === 'package-order') {
        this.package_cart.forEach(el => {
          el.items.forEach(item => {
            total_item += item.qty
          })
        })
      }

      return String(total_item)
    },

    cart_url() {
      const { store, uuid, source, category } = this.$store.state.site

      return `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`
    },

    home_url() {
      const { store, uuid, source, category } = this.$store.state.site

      return `/site/${store}?u=${uuid}&src=${source}&c=${category}`
    }
  },
}
</script>

<style lang="scss" scoped>
.headers {
  border-bottom: 1px solid #ccc !important;
  z-index: 9;
  height: 56px;
  max-height: 56px;

  &--back {
    color: black !important;
  }

  &--image {
    border-radius: 3px;
  }

  &--merchant {
    color: black !important;
  }

  &--badge {
    font-size: 10px

    &--cart-icon {
      color: black !important;
      border: 1px solid #fcfcfc !important;
    }
  }
}
</style>