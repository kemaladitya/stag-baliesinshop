<template>
  <div id="merchant">
    <Mini
      v-if="screen === 'mini'"
      id="mini"
      :loadingmerchant="loadingmerchant"
    />
    <Mobile
      v-if="screen === 'mobile'"
      id="mobile"
      :loadingmerchant="loadingmerchant"
    />
    <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :loadingmerchant="loadingmerchant"
    />
  </div>
</template>

<script>
import Mini from '@/components/Merchant/Platforms/mini'
import Mobile from '@/components/Merchant/Platforms/mobile'
import Desktop from '@/components/Merchant/Platforms/desktop'

export default {
  components: {
    Mini,
    Mobile,
    Desktop
  },

  props: {
    loadingmerchant: {
      type: Boolean,
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
