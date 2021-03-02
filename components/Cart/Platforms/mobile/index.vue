<template>
  <v-card flat tile>
    <div class="pb-4" style="height: 80vh; overflow-y: scroll">

      <v-card
        v-if="!rp_order"
        class="ma-2 mt-3 mb-0 d-flex flex-row"
        flat
      >
        <v-card flat style="font-size: 12px; font-weight: 600">
          Waktu Pengantaran :
        </v-card>
        <v-card
          v-if="!delivery_time_normal"
          class="ml-2"
          flat
          style="
            color: red;
            font-size: 10px;
            font-weight: 500;
            padding-top: 2px;
          "
        >
          Pilih waktu pengantaran
        </v-card>
        <v-card
          v-if="delivery_time_normal == 'day'"
          class="ml-2"
          flat
          style="
            color: grey;
            font-size: 10px;
            font-weight: 500;
            padding-top: 2px;
          "
        >
          Pagi (jam 08.00 - 13.00)
        </v-card>
        <v-card
          v-else-if="delivery_time_normal == 'night'"
          class="ml-2"
          flat
          style="
            color: grey;
            font-size: 10px;
            font-weight: 500;
            padding-top: 2px;
          "
        >
          Sore (jam 14.00 - 18.00)
        </v-card>

        <v-spacer />
        <v-card class="d-flex flex-row" flat>
          <v-btn
            x-small
            depressed
            @click="changedeliverysingletime('day')"
            :color="delivery_time_normal == 'day' ? 'primary' : null"
            style="font-weight: 600; text-transform: capitalize"
          >
            Pagi
            <!-- <v-icon x-small>mdi-white-balance-sunny</v-icon> -->
          </v-btn>
          <v-btn
            class="ml-1"
            x-small
            depressed
            @click="changedeliverysingletime('night')"
            :color="delivery_time_normal == 'night' ? 'primary' : null"
            style="font-weight: 600; text-transform: capitalize"
          >
            Sore
            <!-- <v-icon x-small>mdi-weather-night</v-icon> -->
          </v-btn>
        </v-card>
      </v-card>

      <!-- normal cart order -->
      <NormalOrder :changeqty="changeqty" :updatecache="updatecache" />

      <!-- list items rp order -->
      <RPOrder
        :parsedate="parsedate"
        :parseprice="parseprice"
        :expanddetail="expanddetail"
        :expansion="expansion"
        :changeqtysubsitem="changeqtysubsitem"
        :deleterp="deleterp"
        :selectsubsdate="selectsubsdate"
        :changehandler="changehandler"
        :changedeliverytime="changedeliverytime"
      />
      <!-- customer notes -->
      <div class="mt-4 pa-2" style="text-align:left">
        <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
        <v-textarea
          id="b-customer-notes"
          hide-details
          no-resize
          outlined
          :value="notes"
          @change="changenotes"
        />
      </div>

      <!-- subtotal -->
      <div class="d-flex flex-row pa-2 pb-1">
        <div>Subtotal</div>
        <div
          v-show="!rp_order"
          class="pa-2 pt-2"
          style="font-size: 9px; font-weight: 600; padding-top: 2px; color: rgb(255 111 111); font-style: italic;"
        >
          min. {{ store.min_order / 1000 }}k - max. {{ store.max_order / 1000 }}k
        </div>
        <v-spacer />
        <div v-if="rp_order" style="font-weight: 600">
          Rp. {{
            subsorder
              .toLocaleString()
              .replace(/,/g, '.')
          }}
        </div>
        <div v-else style="font-weight: 600">
          Rp. {{
            normalorder
              .toLocaleString()
              .replace(/,/g, '.')
          }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import NormalOrder from '@/components/Cart/Platforms/mobile/normal'
import RPOrder from '@/components/Cart/Platforms/mobile/rp-order'

export default {
  components: {
    NormalOrder,
    RPOrder
  },

  props: {
    expanddetail: {
      type: Function,
      required: true
    },
    updatecache: {
      type: Function,
      required: true
    },
    expansion: {
      type: Array,
      required: true
    },
    subsorder: {
      type: Number,
      required: true
    },
    normalorder: {
      type: Number,
      required: true
    },
    changeqty: {
      type: Function,
      required: true
    },
    parsedate: {
      type: Function,
      required: true
    },
    parseprice: {
      type: Function,
      required: true
    },
    changeqtysubsitem: {
      type: Function,
      required: true
    },
    deleterp: {
      type: Function,
      required: true
    },
    selectsubsdate: {
      type: Function,
      required: true
    },
    changehandler: {
      type: Function,
      required: true
    },
    changenotes: {
      type: Function,
      required: true
    },
    changedeliverytime: {
      type: Function,
      required: true
    },
    changedeliverysingletime: {
      type: Function,
      required: true
    },
  },

  computed: {
    delivery_time_normal() {
      return this.$store.state.delivery_time_normal
    },

    store() {
      return this.$store.state.store
    },

    rp_order () {
      return this.$store.state.rp_order
    },

    cart () {
      return this.$store.state.cart
    },

    notes () {
      return this.$store.state.user_notes
    },

    dates () {
      return this.$store.state.dates
    }
  },
}
</script>
