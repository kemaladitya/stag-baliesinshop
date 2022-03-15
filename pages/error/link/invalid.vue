<template>
  <div class="b-font">
    <center>
      <v-card class="wrapper" width="380" flat>
        <v-img src="/icon.ico" width="200" />
        <div class="label">Link Expired</div>
        <br />
        <div class="description">
          The requested catalogue products link has expired. Please request new link in bot.
        </div>
      </v-card>
    </center>
  </div>
</template>

<script>
export default {
  layout: "empty",

  computed: {
    store() {
      return this.$store.state.store;
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 25vh;

  .label {
    font-size: 18px;
    font-weight: 600;
    margin-top: 15px;
  }

  .description {
    font-size: 14px;
  }
}
</style>