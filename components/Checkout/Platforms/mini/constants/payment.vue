<template>
  <div class="d-flex flex-row mt-4 pa-1" style="height: 100px">
    <div style="font-weight: 600; width: 50%">
      <v-btn
        color="#fd0"
        style="text-transform: none"
        :class="!payment.selected ? 'pulse-button' : null"
        block
        depressed
        @click="select_payment_dialog = true"
      >
        Pilih Pembayaran
      </v-btn>
    </div>
    <v-spacer />
    <div class="pt-2" style="font-weight: 600">
      <div v-if="!payment.selected" style="font-size: 13px">
        Belum Dipilih
      </div>
      <div v-else style="font-size: 13.9px; text-transform: uppercase">
        {{ payment.selected }}
      </div>
    </div>

    <v-bottom-sheet
      :value="select_payment_dialog"
      @click:outside="select_payment_dialog = false"
    >
      <v-sheet style="text-align: left">
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
            @click="select_payment_dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div
          class="pb-2"
          style="overflow-y: scroll !important; max-height: 450px !important;"
        >
          <v-card
            v-for="(pm, idx) in store.payment_type"
            :key="payment.lists[pm.toLowerCase()].name"
            :class="!idx ? 'pb-0' : null"
            class="pa-2 pl-0 pb-2"
            flat
          >
            <div v-if="order_type === 'subscription-order'">
              <v-card
                v-if="pm != 'COD'"
                class="ml-2 pa-2"
                style="text-align:left"
                outlined
                :disabled="
                  payment.selected === payment.lists[pm.toLowerCase()].name
                "
                @click="select_payment(payment.lists[pm.toLowerCase()].name)"
              >
                <div
                  :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl"
                >
                  <div v-if="payment.lists[pm.toLowerCase()].img">
                    <v-img
                      :src="payment.lists[pm.toLowerCase()].img"
                      :height="payment.lists[pm.toLowerCase()].height"
                      :width="payment.lists[pm.toLowerCase()].width"
                    />
                  </div>
                  <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
                </div>
                <div class="pt-2 pl-2" style="font-size: 12px">
                  {{ payment.lists[pm.toLowerCase()].desc }}
                </div>
              </v-card>
            </div>
            <div v-else>
              <v-card
                class="ml-2 pa-2"
                style="text-align:left"
                outlined
                :disabled="
                  payment.selected === payment.lists[pm.toLowerCase()].name
                "
                @click="select_payment(payment.lists[pm.toLowerCase()].name)"
              >
                <div style="padding: 1px 1px 0px 0px">
                  <div
                    :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl"
                  >
                    <div v-if="payment.lists[pm.toLowerCase()].img">
                      <v-img
                        :src="payment.lists[pm.toLowerCase()].img"
                        :height="payment.lists[pm.toLowerCase()].height"
                        :width="payment.lists[pm.toLowerCase()].width"
                      />
                    </div>
                    <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
                  </div>
                </div>
                <div class="pt-2 pl-2" style="font-size: 12px">
                  {{ payment.lists[pm.toLowerCase()].desc }}
                </div>
              </v-card>
            </div>
          </v-card>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      required: true,
    },

    select: {
      type: Function,
      required: true,
    },
  },

  data: () => ({
    select_payment_dialog: false
  }),

  computed: {
    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },
  },

  methods: {
    select_payment(type) {
      this.select_payment_dialog = false
      this.select(type)
    }
  }
}
</script>