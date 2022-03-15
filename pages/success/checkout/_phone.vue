<template>
  <v-app>
    <div id="success-checkout" class="b-font" height="100vh">
      <center>
        <v-img width="180" height="180" src="/success.gif" />
        <div class="title">Pesanan Berhasil</div>
        <center class="information">
          <div>Proses pemesanan kamu telah selesai.</div>
          <div>Kamu akan kembali ke bot secara</div>
          <div>otomatis.</div>
        </center>
      </center>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',

  data: () => ({
    bs: true
  }),

  computed: {
    site () {
      return this.$store.state.site
    },

    store () {
      return this.$store.state.store
    }
  },

  mounted() {
    const self = this

    setTimeout(() => {
      if (self.site.source.includes('Whatsapp')) {
        window.location.replace(`https://wa.me/${self.$route.params.phone}`)
      } else {
        window.location.replace(`https://faq.balesin.id/bot/${self.site.store}`)
      }
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
#success-checkout {
  padding-top: 30vh;

  .title {
    font-weight: 600;
    font-size: 23px;
  }

  .information {
    color: #999999;
    font-size: 16px;
  }
}
</style>