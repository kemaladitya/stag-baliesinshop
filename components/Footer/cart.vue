<template>
  <div class="pa-1 d-flex flex-row" style="width: 100%">
    <v-btn
      v-show="!rp_order"
      depressed
      style="
        text-transform: capitalize;
        color: black !important;
        border: 1px solid #ccc !important;
        letter-spacing: initial;
      "
      min-width="49.5%"
      :to="back"
      :disabled="rp_order"
      height="45"
    >
      Lanjut Belanja
    </v-btn>
    <v-card v-show="!rp_order" flat min-width="1%" />
    <v-btn
      depressed
      style="text-transform: capitalize; letter-spacing: initial"
      color="#FD0"
      :min-width="!rp_order ? '49.5%' : '100%'"
      height="45"
      :disabled="checkout_btn"
      @click="checkout"
    >
      Check out order
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    checkout: {
      type: Function,
      required: true
    }
  },

  computed: {
    fullpath () {
      return this.$store.state.fullpath
    },

    rp_order () {
      return this.$store.state.rp_order
    },

    dates () {
      return this.$store.state.dates
    },
    
    back() {
      const site = this.$store.state.site

      return `/site/${site.store}?u=${site.uuid}&src=${site.source}&c=${site.category}`
    },

    cart () {
      return this.$store.state.cart
    },

    checkout_btn () {
      let status = true

      if (this.rp_order && this.dates.length) {
        status = false
      } else if (!this.rp_order && this.cart.length) {
        status = false
      } else {
        status = true
      }

      return status
    }
  }
}
</script>