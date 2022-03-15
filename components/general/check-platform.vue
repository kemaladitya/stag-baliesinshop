<template>
  <div></div>
</template>

<script>
const platform = require('platform');

export default {
  computed: {
    screen() {
      return this.$store.state.screen;
    },

    customer() {
      return this.$store.state.customer;
    },

    store() {
      return this.$store.state.store;
    },
  },

  mounted() {
    if (process.browser) {
      this.$store.dispatch(
        "insert_device",
        {
          "screen-size": this.screen,
          chatkey      : this.customer.chatkey,
          bot_id       : this.store.bot_id,
          description  : platform.description,
          layout       : platform.layout,
          manufacturer : platform.manufacturer,
          name         : platform.name,
          os           : {
            architecture : platform.os.architecture,
            family       : platform.os.family,
            toString     : platform.os.toString,
            version      : platform.os.version,
          },
          prerelease   : platform.prerelease,
          product      : platform.product,
          ua           : platform.ua,
          version      : platform.version
        },
      );
    }
  }
}
</script>
