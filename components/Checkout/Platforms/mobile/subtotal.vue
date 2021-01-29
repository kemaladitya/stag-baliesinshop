<template>
  <div>
    <div class="d-flex flex-row mt-4 mb-1 pa-1">
      <div style="font-size: 12px" />
      <v-spacer />
      <div class="d-flex flex-row pa-1">
        <div style="font-weight: 600">Subtotal:</div>
        &nbsp;
        <v-spacer />
        <div style="font-weight: 600; color: #2196f3">
          Rp.
          {{ grandtotal.toLocaleString().replace(/,/g, '.') }}
        </div>
      </div>
    </div>
    <div v-if="grandtotal < store.min_order" style="font-size: 9px; color: red; text-align: center">
      {{ JSON.parse(store.response.min_order).message[0] }}
    </div>
    <div v-if="grandtotal > store.max_order" style="font-size: 9px; color: red; text-align: center">
      {{ JSON.parse(store.response.max_order).message[0] }}
    </div>

    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    grandtotal: {
      type: Number,
      required: true
    }
  },

  computed: {
    store() {
      return this.$store.state.store
    },
  }
}
</script>