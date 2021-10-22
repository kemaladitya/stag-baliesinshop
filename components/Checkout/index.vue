<template>
  <div>
    <Mini
      v-if="screen == 'mini'"
      id="mini"
    />
    <Mobile
      v-if="screen == 'mobile'"
      id="mobile"
    />
    <Desktop
      v-if="screen == 'desktop'"
      id="desktop"
    />
  </div>
</template>

<script>
import Mini from '@/components/Checkout/Platforms/mini/index'
import Mobile from '@/components/Checkout/Platforms/mobile/index'
import Desktop from '@/components/Checkout/Platforms/desktop/index'

export default {
  components: {
    Mini,
    Mobile,
    Desktop
  },

  props: {},

  computed: {
    screen () {
      return this.$store.state.screen
    }
  }
}
</script>
