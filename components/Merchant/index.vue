<template>
  <div id="merchant">
    <Mini v-if="screen === 'mini'" id="mini" :loadingmerchant="loadingmerchant" />
    <Mobile v-if="screen === 'mobile'" id="mobile" :loadingmerchant="loadingmerchant" />
    <Desktop v-if="screen === 'desktop'" id="desktop" :loadingmerchant="loadingmerchant" />
  </div>
</template>

<script>
import Mini from "@/components/merchant/screen/mini"
import Mobile from "@/components/merchant/screen/mobile"
import Desktop from "@/components/merchant/screen/desktop"

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
