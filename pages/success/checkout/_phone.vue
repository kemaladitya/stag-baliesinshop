<template>
  <v-app>
    <div class="b-font" height="100vh" style="padding-top: 30vh;">
      <center>
        <v-img
          width="180"
          height="180"
          src="https://s3-ap-southeast-1.amazonaws.com/alatteknikkitaassets/logos/success.gif"
        />
        <div style="font-weight: 600; font-size: 23px">Pesanan Berhasil</div>
        <center style="color: #999999; font-size: 16px">
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
