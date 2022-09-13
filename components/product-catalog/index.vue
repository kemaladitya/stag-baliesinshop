<template>
  <div>
    <Platform v-if="store && customer" />
    <Mini v-if="screen === 'mini'" id="mini" :productdetail="productdetail" :loadingproduct="loadingproduct" />
    <Mobile v-if="screen === 'mobile' || screen === 'desktop'" id="mobile" :productdetail="productdetail"
      :loadingproduct="loadingproduct" />
  </div>
</template>

<script>
import Platform from "@/components/general/check-platform"
import Mini from "@/components/product-catalog/screen/mini";
import Mobile from "@/components/product-catalog/screen/mobile";

export default {
  components: {
    Platform,
    Mini,
    Mobile,
  },

  props: {
    productdetail: Function,
    loadingproduct: Boolean,
  },

  computed: {
    screen() {
      return this.$store.state.screen;
    },

    store() {
      return this.$store.state.store;
    },

    customer() {
      return this.$store.state.customer;
    },
  }
}
</script>
