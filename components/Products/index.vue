<template>
  <div>
    <!-- <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :listproduct="listproduct"
      :productdetail="productdetail"
      :addtocart="addtocart"
      :loadingproduct="loadingproduct"
    />
    v-else -->
    <Mobile
      id="mobile"
      :listproduct="listproduct"
      :productdetail="productdetail"
      :addtocart="addtocart"
      :loadingproduct="loadingproduct"
    />
  </div>
</template>

<script>
import Mobile from '@/components/Products/Platforms/mobile'
import Desktop from '@/components/Products/Platforms/desktop'

export default {
  components: {
    Mobile,
    Desktop
  },

  props: {
    listproduct: {
      type: Array,
      required: true
    },
    productdetail: {
      type: Function,
      required: true
    },
    addtocart: {
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
