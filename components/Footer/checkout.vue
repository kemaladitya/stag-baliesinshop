<template>
  <div
    id="b-footer"
    class="pa-1"
    style="background-color: white !important;"
  >
    <div class="d-flex flex-row pa-1">
      <div style="font-weight: 600">TOTAL HARGA</div>
      <v-spacer />
      <div style="font-weight: 600">
        Rp.
        {{ grandtotal.toLocaleString().replace(',', '.') }}
      </div>
    </div>
    <v-btn
      depressed
      style="text-transform: capitalize; font-weight: 600"
      color="#FD0"
      min-width="100%"
      height="45"
      :disabled="!!processbtn"
      @click="executeorder"
    >
      Proses
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    grandtotal: {
      type: Number,
      required: true
    },

    processbtn: {
      type: Boolean,
      required: true
    },

    executeorder: {
      type: Function,
      required: true
    }
  }
}
</script>