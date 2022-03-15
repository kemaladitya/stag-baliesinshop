<template>
  <div>
    <Mini
      v-if="screen == 'mini'"
      id="mini"
    />
    <Mobile
      v-if="screen == 'mobile' || screen == 'desktop'"
      id="mobile"
    />
  </div>
</template>

<script>
import Mini from "@/components/cart/screen/mini/index";
import Mobile from "@/components/cart/screen/mobile/index";

export default {
  components: {
    Mini,
    Mobile,
  },

  computed: {
    screen () {
      return this.$store.state.screen
    }
  }
}
</script>
