<template>
  <v-app>
    <div class="b-font" height="100vh">
      <center>
        <v-img
          style="margin-top: 55%"
          width="180"
          height="180"
          src="https://s3-ap-southeast-1.amazonaws.com/alatteknikkitaassets/logos/success.gif"
        />
        <div style="font-weight: 600; font-size: 23px">Terima Kasih</div>
        <center style="color: #999999; font-size: 16px">
          <div>Proses pencatatan diri kamu telah</div>
          <div>selesai. Kamu akan kembali ke bot secara</div>
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
    },

    site () {
      return this.$store.state.site
    }
  },

  mounted() {
    const self = this

    setTimeout(() => {
      if (self.site.source === 'Whatsapp') {
        window.location.replace(`https://wa.me/${self.store.whatsapp}`)
      } else {
        this.$router.replace(
          `/site/${self.site.store}/checkout?src=${self.site.source}&u=${self.site.uuid}&c=${self.site.category}`
        )
      }
    }, 3000)
  }
}
</script>
