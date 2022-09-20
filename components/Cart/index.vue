<template>
  <div>
    <mini v-if="screen == 'mini'" id="mini" />
    <mobile v-if="screen == 'mobile' || screen == 'desktop'" id="mobile" />
  </div>
</template>

<script>
import mini from "@/components/cart/screen/mini";
import mobile from "@/components/cart/screen/mobile";

export default {
  components: {
    mini,
    mobile,
  },

  computed: {
    screen() {
      return this.$store.state.screen
    }
  }
}
</script>
