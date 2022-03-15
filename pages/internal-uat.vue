<template>
  <div id="internal-uat" class="pa-3 pt-12">
    <center class="mb-8 mt-3">
      <v-img src="/icon.ico" width="210" />
      <div class="mt-6 title">balesin shop - Internal testing</div>
    </center>
    <v-text-field v-model="uuid" label="Phone" placeholder="628123456789" outlined />
    <v-text-field v-model="bot_name" label="Bot Name" placeholder="sarirotiwa" outlined />
    <v-btn :disabled="active_btn" color="#FD0" block @click="find_user">shop</v-btn>
    <v-btn :disabled="active_btn" class="mt-4" color="#FD0" block @click="reg_user">
      register
    </v-btn>
    <v-card height="5vh" flat />
  </div>
</template>

<script>
export default {
  layout: "empty",

  data: () => ({
    uuid: "",
    bot_name: "sarirotiwa",
  }),

  watch: {
    uuid(newval, oldval) {
      if (newval[0] == "0") {
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
      const find_user = await this.$store.dispatch("request", {
        url: "/api/balesin/user",
        method: "post",
        data: { uuid, bot_name }
      });

      console.log(find_user.data.status);
      console.log(`/site/${bot_name}?u=${uuid}&src=${find_user.data.source}&c=${find_user.data.category}`);

      if (find_user.data.status) {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=${find_user.data.source}&c=${find_user.data.category}`)
      } else {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=web-url&c=all`)
        console.log("access danied.")
      }
    },

    async reg_user() {
      const { uuid, bot_name } = this
      const find_user = await this.$store.dispatch("request", {
        url: "/api/balesin/user",
        method: "post",
        data: { uuid, bot_name }
      })

      this.$router.replace(`/site/${bot_name}/userprofile?u=${uuid}&src=${find_user.data.source}&mtd=reg`)
    }
  }
}
</script>

<style lang="scss" scoped>
#internal-uat {
  overflow-y: scroll !important;
  max-height: 100vh;

  .title {
    font-weight: 600;
  }
}
</style>
