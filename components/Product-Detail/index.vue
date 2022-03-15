<template>
  <div>
    <Mini v-if="screen === 'mini'" id="mini" />
    <Mobile v-if="screen === 'mobile' || screen === 'desktop'" id="mobile" />
  </div>
</template>

<script>
import Mini from "@/components/product-detail/screen/mini";
import Mobile from "@/components/product-detail/screen/mobile";

export default {
  components: {
    Mini,
    Mobile,
  },

  computed: {
    screen () {
      return this.$store.state.screen;
    },
  },
}
</script>
