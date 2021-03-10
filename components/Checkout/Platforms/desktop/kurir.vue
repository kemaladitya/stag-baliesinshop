<template>
  <div>
    <div class="d-flex flex-row mt-4 mb-4 pa-1">
      <div style="font-weight: 600; width: 50%">
        <v-btn
          :class="!selectedcourier.status ? 'pulse-button' : null"
          block
          color="#fd0"
          :style="selectedcourier.status ? 'box-shadow: none; text-transform: none' : 'text-transform: none'"
          :disabled="shippingcostloading"
          @click="changehandler('courier', true)"
        >
          Kurir
        </v-btn>
      </div>
      <v-spacer />
      <div v-if="shippingcostloading" class="pt-1">
        <v-progress-circular
          :size="25"
          color="primary"
          indeterminate
        />
      </div>
      <div v-else>
        <div v-if="!selectedcourier.name.length" class="pt-2" style="font-weight: 600; align-self: center">
          <div style="font-size: 13px">Belum Dipilih</div>
        </div>
        <div v-else style="font-weight: 600; align-self: center">
          <div v-if="selectedcourier.status">
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 11px">{{ selectedcourier.name }} | {{ selectedcourier.service }}</div>
              <v-icon class="ml-1" small>mdi-truck</v-icon>
            </div>
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 13px">Rp. {{ selectedcourier.price.toLocaleString().replace(/,/g, '.') }}</div>
              <v-icon class="ml-1" small>mdi-cash</v-icon>
            </div>
            <div v-if="!selectedcourier.custom" class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 11px">{{ selectedcourier.range }}</div>
              <v-icon class="ml-1" small>mdi-clock-time-four</v-icon>
            </div>
          </div>
          <div v-else style="font-size: 9px; max-width: 120px; color: red">
            {{ selectedcourier.message }}
          </div>
        </div>
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
    },

    selectedcourier: {
      type: Object,
      required: true
    },

    shippingcostloading: {
      type: Boolean,
      required: true
    },
  }
}
</script>