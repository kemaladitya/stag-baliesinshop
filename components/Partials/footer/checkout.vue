<template>
  <v-footer class="footer-wrapper" color="grey lighten-3" padless fixed>
    <div class="pa-3 content">
      <div class="d-flex flex-row pa-1">
        <div class="content--label">TOTAL HARGA</div>
        <v-spacer />
        <div class="content--total">
          Rp {{ general_total_order.toLocaleString().replace(/,/g, '.') }}
        </div>
      </div>
      <v-btn
        :disabled="checked_button"
        class="content--process"
        min-width="100%"
        height="45"
        color="#FD0"
        depressed
        @click="execute_order"
      >
        Proses
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    general_total_order: Number,
    execute_order: Function,
    checked_button: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;

  .content {
    background-color: white !important;
    width: 100%;

    &--label {
      font-weight: 500;
      letter-spacing: normal;
    }

    &--total {
      font-weight: 600;
    }

    &--process {
      text-transform: capitalize;
      font-weight: 500;
      border-radius: 8px;
      letter-spacing: normal;
    }
  }
}
</style>