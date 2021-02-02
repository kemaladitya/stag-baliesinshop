<template>
  <div>
    <div class="mt-4 mb-4 pa-1">
      <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
      {{ notes }}
    </div>
    <br v-if="notes.length" />

    <v-divider />
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