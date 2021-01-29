<template>
  <div>
    <div class="d-flex flex-row mt-4 mb-3 pa-1">
      <div style="font-size: 12px" />
      <v-spacer />
      <div class="d-flex flex-row pa-1">
        <div style="font-weight: 600">Subtotal:</div>
        &nbsp;
        <v-spacer />
        <div style="font-weight: 600; color: #2196f3">
          Rp.
          {{ grandtotal.toLocaleString().replace(',', '.') }}
        </div>
      </div>
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
  }
}
</script>