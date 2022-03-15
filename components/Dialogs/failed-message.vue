<template>
  <v-dialog
    v-model="show_dialog"
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card class="pa-4">
      <center>
        <v-icon color="error" x-large>
          mdi-alert-circle-outline
        </v-icon>
        <div
          v-html="'<div>' + message + '</div>'"
          class="mt-3 error-message-text"
        />
      </center>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
    message: String,
    event_handler: Function,
  },

  data: () => ({
    show_dialog: false,
  }),

  watch: {
    show(_, __) {
      if (_) {
        this.show_dialog = true;
      }
    },

    show_dialog(_, __) {
      if (!_) {
        this.event_handler("show_dialog", false);
        this.event_handler("show_dialog_message", "");
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.error-message-text {
  font-size: 14px;
  font-weight: 500;
  color: #4e4e4e;
}
</style>