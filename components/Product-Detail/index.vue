<template>
  <div>
    <!-- <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
      :selectedvariant="selectedvariant"
      :selectedqty="selectedqty"
      :productdetail="productdetail"
      :selectqty="selectqty"
      :selectvariant="selectvariant"
      :addtocart="addtocart"
    />
    v-else -->
    <Mobile
      id="mobile"
      :selectedvariant="selectedvariant"
      :selectedqty="selectedqty"
      :productdetail="productdetail"
      :selectqty="selectqty"
      :selectvariant="selectvariant"
      :addtocart="addtocart"
    />
  </div>
</template>

<script>
import Mobile from '@/components/Product-Detail/Platforms/mobile'
import Desktop from '@/components/Product-Detail/Platforms/desktop'

export default {
  components: {
    Mobile,
    Desktop
  },

  props: {
    selectedvariant: {
      type: Object,
      required: true
    },
    selectedqty: {
      type: Number,
      required: true
    },
    productdetail: {
      type: Object,
      required: true
    },
    selectqty: {
      type: Function,
      required: true
    },
    selectvariant: {
      type: Function,
      required: true
    },
    addtocart: {
      type: Function,
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
