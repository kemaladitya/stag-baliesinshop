<template>
  <div>
    <div class="pt-3 pl-1 mb-2" style="font-size: 12px">
      DETAIL PESANAN & WAKTU PENGANTARAN
    </div>

    <Normal :date="date" />

    <Subscription
      :parsedate="parsedate"
      :parseprice="parseprice"
      :expansion="expansion"
    />
  </div>
</template>

<script>
import Normal from '@/components/Checkout/Platforms/mobile/orders/normal'
import Subscription from '@/components/Checkout/Platforms/mobile/orders/subscription'

export default {
  components: {
    Normal,
    Subscription
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
  }
}
</script>
