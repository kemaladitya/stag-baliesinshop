<template>
  <div class="d-flex flex-row mt-4 pa-1" style="height: 100px">
    <div style="font-weight: 600; width: 50%">
      <v-btn
        :class="selectedpayment == '' ? 'pulse-button' : null"
        block
        color="#fd0"
        :style="selectedpayment ? 'box-shadow: none; text-transform: none' : 'text-transform: none'"
        @click="changehandler('payment', true)"
      >
        Pilih Pembayaran
      </v-btn>
    </div>
    <v-spacer />
    <div class="pt-2" style="font-weight: 600">
      <div v-if="!selectedpayment" style="font-size: 13px">
        Belum Dipilih
      </div>
      <div v-else style="font-size: 13.9px; text-transform: uppercase">
        {{ selectedpayment }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedpayment: {
      type: String,
      required: true
    },

    changehandler: {
      type: Function,
      required: true
    }
  }
}
</script>