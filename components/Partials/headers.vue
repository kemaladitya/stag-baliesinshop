<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    style="border-bottom: 1px solid #ccc !important; z-index: 9; height: 55px"
  >
    <v-app-bar-nav-icon
      depressed
      :ripple="false"
      class="ml-2 pa-2"
      color="white"
    >
      <v-btn
        v-if="($route.name == 'site-store-checkout') || ($route.name == 'site-store-userprofile' && store && !store.registered_mode)"
        class="ml-4"
        style="color: black !important"
        x-small
        fab
        text
        depressed
        :ripple="false"
        :to="($route.name == 'site-store-checkout')
          ? `/site/${site.store}/cart?u=${site.uuid}&mtd=view&src=${site.source}&c=${site.category}`
          : `/site/${site.store}/checkout?u=${site.uuid}&mtd=view&src=${site.source}&c=${site.category}`
        "
      >
        <!-- :to="gotocart" -->
        <v-icon small>mdi-arrow-left</v-icon>
      </v-btn>
      <!-- <v-btn
        v-if="$route.name == 'site-store-userprofile' && store && !store.registered_mode"
        class="ml-4"
        style="color: black !important"
        x-small
        fab
        text
        depressed
        :ripple="false"
        :to="`/site/${site.store}/checkout?u=${site.uuid}&mtd=view&src=${site.source}&c=${site.category}`"
      >
        <v-icon small>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-img
        v-if="store"
        :src="store.image"
        width="40"
        height="40"
        max-width="53"
        max-height="53"
        style="border-radius: 3px"
        loading=lazy
        :to="home_url"
      />
      <v-icon v-else>mdi-store</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <v-btn
      v-if="($route.name == 'site-store') && store && store['store_type'] && merchant"
      class="ml-4"
      style="color: black !important"
      x-small
      fab
      text
      depressed
      :ripple="false"
      :to="`/site/${site.store}/merchant?market=${merchant.market_id}&u=${site.uuid}&mtd=view&src=${site.source}&c=${site.category}`"
    >
      <!-- :to="gotocart" -->
      <v-icon>mdi-home-search</v-icon>
    </v-btn>
    <v-badge
      v-if="cart_on_headers"
      id="b-shop-cart-badge"
      top="-5px"
      color="red darken-1"
      style="font-size: 10px"
      min-width="16px"
      height="16px"
      bordered
      overlap
      :icon="cart_qty_item"
    >
      <v-btn
        rounded
        depressed
        max-width="38"
        min-width="38"
        color="#fcfcfc"
        style="
          color: black !important;
          border: 1px solid #fcfcfc !important;
        "
        :ripple="false"
        :to="cart_url"
      >
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
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
