<template>
  <div>
    <!-- <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :changehandler="changehandler"
      :appliedvoucher="appliedvoucher"
      :date="date"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :expansion="expansion"
      :grandtotal="grandtotal"
      :selectedpayment="selectedpayment"
      :applyingvoucher="applyingvoucher"
    />
    v-else -->
    <Mobile
      id="mobile"
      :changehandler="changehandler"
      :appliedvoucher="appliedvoucher"
      :date="date"
      :parsedate="parsedate"
      :parseprice="parseprice"
      :expansion="expansion"
      :grandtotal="grandtotal"
      :selectedpayment="selectedpayment"
      :selectedcourier="selectedcourier"
      :applyingvoucher="applyingvoucher"
      :shippingcostloading="shippingcostloading"
    />
  </div>
</template>

<script>
import Mobile from '@/components/Checkout/Platforms/mobile/index'
import Desktop from '@/components/Checkout/Platforms/desktop/index'

export default {
  components: {
    Mobile,
    Desktop
  },

  props: {
    changehandler: {
      type: Function,
      required: true
    },

    selectedcourier: {
      type: Object,
      required: true
    },

    appliedvoucher: {
      type: Object,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    parsedate: {
      type: Function,
      required: true
    },

    parseprice: {
      type: Function,
      required: true
    },

    expansion: {
      type: Array,
      required: true
    },

    grandtotal: {
      type: Number,
      required: true
    },

    applyingvoucher: {
      type: Boolean,
      required: true
    },

    shippingcostloading: {
      type: Boolean,
      required: true
    },

    selectedpayment: {
      type: String,
      required: true
    }
  },

  computed: {
    screen () {
      return this.$store.state.screen
    }
  }
}
</script>
