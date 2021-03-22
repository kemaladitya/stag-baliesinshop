<template>
  <div style="text-align:left">
    <div class="pt-3 pl-1 mb-2" style="font-size: 12px">
      DETAIL PESANAN & WAKTU PENGANTARAN
    </div>

    <div v-if="!customized_values">
      <Normal :date="date" />

      <Subscription
        :parsedate="parsedate"
        :parseprice="parseprice"
        :expansion="expansion"
      />
    </div>

    <!-- <Bundler v-if="customized_values" :date="date" /> -->

  </div>
</template>

<script>
import Normal from '@/components/Checkout/Platforms/mobile/orders/normal'
import Subscription from '@/components/Checkout/Platforms/mobile/orders/subscription'
import Bundler from '@/components/Checkout/Platforms/mobile/orders/bundler'

export default {
  components: {
    Normal,
    Subscription,
    Bundler
  },

  props: {
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
    }
  },

  computed: {
    customized_values() {
      return this.$store.state.customized_values
    }
  }
}
</script>
