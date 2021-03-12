<template>
  <div style="text-align: left">
    <div v-if="notes">
      <div class="mt-4 mb-4 pa-1">
        <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
        <div
          class="mt-1"
          style="font-size: 13px; color: grey; font-weight: 600"
        >
          {{ notes }}
        </div>
      </div>
      <br v-if="notes.length" />

      <v-divider />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notes () {
      return this.$store.state.user_notes
    }
  }
}
</script>