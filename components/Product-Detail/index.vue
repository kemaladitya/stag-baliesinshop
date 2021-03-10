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
    <Mini
      v-if="screen === 'mini'"
      id="mini"
      :selectedvariant="selectedvariant"
      :selectedqty="selectedqty"
      :productdetail="productdetail"
      :selectqty="selectqty"
      :selectvariant="selectvariant"
      :addtocart="addtocart"
    />
    <Mobile
      v-if="screen === 'mobile'"
      id="mobile"
      :selectedvariant="selectedvariant"
      :selectedqty="selectedqty"
      :productdetail="productdetail"
      :selectqty="selectqty"
      :selectvariant="selectvariant"
      :addtocart="addtocart"
    />
    <Desktop
      v-if="screen === 'desktop'"
      id="desktop"
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
import Mini from '@/components/Product-Detail/Platforms/mini'
import Mobile from '@/components/Product-Detail/Platforms/mobile'
import Desktop from '@/components/Product-Detail/Platforms/desktop'

export default {
  components: {
    Mini,
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
