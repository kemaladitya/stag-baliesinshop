<template>

  <div id="success-checkout" class="b-font" height="100vh">
    <center>
      <img width="100" height="180" src="/success.gif" />
      <div class="title">Pesanan Berhasil</div>
      <center class="information">
        <div>Proses pemesanan kamu telah selesai.</div>
        <div>Kamu akan kembali ke bot secara</div>
        <div>otomatis.</div>
      </center>
    </center>
  </div>

</template>

<script>
export default {
  layout: 'emptyV2',

  data: () => ({
    bs: true
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
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

  img {
    width: 150px;
    object-fit: contain;
  }

  .title {
    font-weight: 600;
    font-size: 14px;
  }

  .information {
    color: #999999;
    font-size: 12px;
  }
}
</style>