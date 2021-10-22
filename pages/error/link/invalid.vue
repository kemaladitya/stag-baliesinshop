<template>
  <div class="b-font">
    <center>
      <v-card width="380" style="margin-top: 25vh" flat>
        <div class="pa-4 pt-8">
          <v-img
            src="https://faq.balesin.id/icon.ico"
            width="200"
          />
        </div>
        <div style="font-size: 18px; font-weight: 600">
          Invalid URL
        </div>
        <br />
        <div style="font-size: 14px">
          The requested catalogue products link has expired. Please request new link in bot.
        </div>
        <br />
      </v-card>
    </center>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  computed: {
    store() {
      return this.$store.state.store
    }
  }
}
</script>