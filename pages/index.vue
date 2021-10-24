<template>
  <div class="pa-3 pt-12" style="overflow-y: scroll !important; max-height: 100vh;">
    <center class="mb-8" style="margin-top: 20vh">
      <v-img src="https://faq.balesin.id/icon.ico" width="210" />
      <div class="mt-6" style="font-weight: 600">
        balesin - Shop
      </div>
      <div class="mt-6" style="font-weight: 600">
        Silakan chat ke nomor WhatsApp store untuk membuka katalog produk.
      </div>
    </center>
    <v-card height="5vh" flat />
  </div>
</template>

<script>
export default {
  layout: 'empty',

  data: () => ({
    uuid: '',
    bot_name: 'sarirotiwa',
  }),

  watch: {
    uuid(newval, oldval) {
      if (newval[0] == '0') {
        this.uuid = `62${newval.slice(1)}`
      }
    }
  },

  computed: {
    active_btn () {
      return this.uuid.length == 0
    }
  },

  methods: {
    async find_user() {
      const { uuid, bot_name } = this
      const find_user = await this.$store.dispatch('request', {
        url: '/api/balesin/user',
        method: 'post',
        data: { uuid, bot_name }
      })

      if (find_user.data.status) {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=${find_user.data.source}&c=${find_user.data.category}`)
      } else {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=web-url&c=all`)
      }
    },

    async reg_user() {
      const { uuid, bot_name } = this
      const find_user = await this.$store.dispatch('request', {
        url: '/api/balesin/user',
        method: 'post',
        data: { uuid, bot_name }
      })

      this.$router.replace(`/site/${bot_name}/userprofile?u=${uuid}&src=${find_user.data.source}&mtd=reg`)
    }
  }
}
</script>