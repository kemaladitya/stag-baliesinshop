<template>
  <div>
    <div  v-if="notes">
      <div class="mt-4 mb-4 pa-1">
        <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
        <div
          class="mt-1 pa-1 pl-2"
          style="border: 1px solid #e0e0e0; border-radius: 3px; font-size: 13px"
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