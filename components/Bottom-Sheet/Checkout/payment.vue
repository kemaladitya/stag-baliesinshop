<template>
  <v-sheet v-if="store">
    <div class="d-flex flex-row">
      <div
        class="pl-2"
        style="align-self: center; font-size: 13px; font-weight: 600"
      >
        Pilih Pembayaran
      </div>
      <v-spacer />
      <v-btn
        icon
        text
        color="red"
        @click="changehandler('payment', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <v-card
      v-for="(pm, idx) in store.payment_type"
      :key="paymentdetail[pm.toLowerCase()].name"
      :class="!idx ? 'pb-0' : null"
      class="pa-2 pl-0 pb-2"
      flat
    >
      <div v-if="rp_order == true">
        <v-card
          v-if="pm != 'COD'"
          class="ml-2 pa-2"
          outlined
          :disabled="
            selectedpayment === paymentdetail[pm.toLowerCase()].name
          "
          @click="selectpayment(paymentdetail[pm.toLowerCase()].name)"
        >
          <div
            :class="'pt-1 pl-' + paymentdetail[pm.toLowerCase()].pl"
          >
            <div v-if="paymentdetail[pm.toLowerCase()].img">
              <v-img
                :src="paymentdetail[pm.toLowerCase()].img"
                :height="paymentdetail[pm.toLowerCase()].height"
                :width="paymentdetail[pm.toLowerCase()].width"
              />
            </div>
            <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
          </div>
          <div class="pt-2 pl-2" style="font-size: 12px">
            {{ paymentdetail[pm.toLowerCase()].desc }}
          </div>
        </v-card>
      </div>
      <div v-else>
        <v-card
          class="ml-2 pa-2"
          outlined
          :disabled="
            selectedpayment === paymentdetail[pm.toLowerCase()].name
          "
          @click="selectpayment(paymentdetail[pm.toLowerCase()].name)"
        >
          <div
            :class="'pt-1 pl-' + paymentdetail[pm.toLowerCase()].pl"
          >
            <div v-if="paymentdetail[pm.toLowerCase()].img">
              <v-img
                :src="paymentdetail[pm.toLowerCase()].img"
                :height="paymentdetail[pm.toLowerCase()].height"
                :width="paymentdetail[pm.toLowerCase()].width"
              />
            </div>
            <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
          </div>
          <div class="pt-2 pl-2" style="font-size: 12px">
            {{ paymentdetail[pm.toLowerCase()].desc }}
          </div>
        </v-card>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    },

    selectpayment: {
      type: Function,
      required: true
    },

    paymentdetail: {
      type: Object,
      required: true
    },

    selectedpayment: {
      type: String,
      required: true
    }
  },

  computed: {
    store () {
      return this.$store.state.store
    },

    rp_order () {
      return this.$store.state.rp_order
    }
  }
}
</script>