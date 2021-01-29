<template>
  <div>
    <div class="d-flex flex-row mt-4 mb-4 pa-1">
      <div style="font-weight: 600; width: 50%">
        <v-btn
          class="pulse-button"
          block
          color="#fd0"
          style="text-transform: none"
          @click="changehandler('courier', true)"
        >
          Kurir
        </v-btn>
      </div>
      <v-spacer />
      <div style="font-weight: 600; align-self: center">
        <div style="font-size: 11px">Hawker|Sari Roti</div>
        <div style="font-size: 13px">Rp. 0</div>
      </div>
    </div>

    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    }
  }
}
</script>