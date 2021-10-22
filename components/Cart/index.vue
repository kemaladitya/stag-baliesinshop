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
import Mini from '@/components/Cart/Platforms/mini/index'
import Mobile from '@/components/Cart/Platforms/mobile/index'
import Desktop from '@/components/Cart/Platforms/desktop/index'

export default {
  components: {
    Mini,
    Mobile,
    Desktop
  },

  computed: {
    screen () {
      return this.$store.state.screen
    }
  }
}
</script>
