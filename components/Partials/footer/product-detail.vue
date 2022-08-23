<template>
  <v-footer class="footer-wrapper" color="transparent" fixed padless>
    <div class="content d-flex flex-row pa-3">
      <v-btn :to="home_url" class="content--back" depressed>
        Lanjut Belanja
      </v-btn>
      <v-spacer />
      <v-btn class="content--next" color="#FD0" depressed @click="manage_cart">
        Tambah ke keranjang
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    manage_cart: Function,
  },

  computed: {
    home_url() {
      const { params, query } = this.$route;

      return `/site/${params.store}?u=${query.u}&src=${query.src}&c=${query.c}`;
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;

  .content {
    width: 100%;

    &--back {
      width: calc(50% - 5px);
      letter-spacing: normal;
      text-transform: none;
      font-size: 13px;
    }

    &--next {
      width: calc(50% - 5px);
      letter-spacing: normal;
      text-transform: none;
      font-size: 13px;
    }
  }
}
</style>