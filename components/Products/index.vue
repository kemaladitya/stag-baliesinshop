<template>
  <div>
    <Mini
      v-if="screen === 'mini'"
      id="mini"
      :productdetail="productdetail"
      :loadingproduct="loadingproduct"
    />
    <Mobile
      v-if="screen === 'mobile'"
      id="mobile"
      :productdetail="productdetail"
      :loadingproduct="loadingproduct"
    />
    <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :productdetail="productdetail"
      :loadingproduct="loadingproduct"
    />
  </div>
</template>

<script>
import Mini from '@/components/Products/Platforms/mini'
import Mobile from '@/components/Products/Platforms/mobile'
import Desktop from '@/components/Products/Platforms/desktop'

export default {
  components: {
    Mini,
    Mobile,
    Desktop
  },

  props: {
    productdetail: {
      type: Function,
      required: true
    },

    loadingproduct: {
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
