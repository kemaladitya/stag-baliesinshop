<template>
  <div
    class="pa-1"
    style="background-color: white !important; width: 100%;"
  >
    <div class="d-flex flex-row pa-1">
      <div style="font-weight: 600">TOTAL HARGA</div>
      <v-spacer />
      <div v-if="!customized_values" style="font-weight: 600">
        Rp.
        {{ grandtotal.toLocaleString().replace(',', '.') }}
      </div>
      <div v-else style="font-weight: 600">
        Rp.
        {{ customized_values_total.toLocaleString().replace(',', '.') }}
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
  },

  computed: {
    customized_values() {
      return this.$store.state.customized_values
    },

    customized_values_total() {
      let total = 0

      if (this.customized_values) {
        this.customized_values.forEach(el => {
          total += el.total
        })
      }

      return total
    },
  }
}
</script>