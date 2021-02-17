<template>
  <v-expand-transition>
    <v-card v-show="rp_order" flat tile>
      <v-card v-if="dates.length" height="100%" class="pa-2" flat tile>
        <div
          v-for="(item, index) in dates"
          :key="index"
          class="mb-2"
          style="border: 1px solid #e0e0e0; border-radius: 5px"
        >
          <!-- <v-card-actions class="pa-3 pr-2"> -->
          <div>
            <div class="d-flex flex-row pa-2">
              <div class="pt-2 pl-1" style="font-size: 13px; font-weight: 600">
                {{ parsedate(item.date) }}
              </div>
              <v-spacer />
              <div
                class="pr-1"
                style="font-size: 13px; font-weight: 600; color: #2196f3"
              >
                <div style="font-size: 13px; font-weight: 600; color: #2196f3; text-align: right">
                  <v-spacer />
                  {{ parseprice(item) }}
                </div>
                <div
                  style="font-size: 9px; font-weight: 600; padding-top: 2px; font-style: italic;"
                  :style="
                    +parseprice(item).match(/[^\D]/g).join('') < store.min_order || +parseprice(item).match(/[^\D]/g).join('') > store.max_order ?
                      'color: rgb(255 111 111);'
                      : 'color: rgb(222 222 222)'
                  "
                >
                  min. {{ store.min_order / 1000 }}k - max. {{ store.max_order / 1000 }}k
                </div>
              </div>
              <v-btn
                icon
                depressed
                dense
                small
                :ripple="false"
                @click="expanddetail(index)"
              >
                <v-icon v-if="expansion.length">
                  {{
                    expansion[index].show
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'
                  }}
                </v-icon>
              </v-btn>
            </div>

            <div class="pa-3">
              <v-card class="d-flex flex-row mb-2" flat>
                <v-card
                  class="d-flex flex-row"
                  flat
                >
                  <v-card flat style="font-size: 12px; font-weight: 600">
                    Waktu Pengantaran :
                  </v-card>
                  <v-card
                    v-if="item.delivery_time == 'day'"
                    class="ml-2"
                    flat
                    style="
                      color: grey;
                      font-size: 10px;
                      font-weight: 500;
                      padding-top: 2px;
                    "
                  >
                    mulai pukul 08.00 - 17.00
                  </v-card>
                  <v-card
                    v-else
                    class="ml-2"
                    flat
                    style="
                      color: grey;
                      font-size: 10px;
                      font-weight: 500;
                      padding-top: 2px;
                    "
                  >
                    mulai pukul 16.00 - 20.00
                  </v-card>
                </v-card>
                <v-spacer />
                <v-card class="d-flex flex-row" flat>
                  <v-btn
                    x-small
                    depressed
                    :color="item.delivery_time == 'day' ? 'primary' : null"
                    @click="changedeliverytime(index, item.date, 'day')"
                  >
                    <v-icon x-small>mdi-white-balance-sunny</v-icon>
                  </v-btn>
                  <v-btn
                    class="ml-1"
                    x-small
                    depressed
                    :color="item.delivery_time == 'night' ? 'primary' : null"
                    @click="changedeliverytime(index, item.date, 'night')"
                  >
                    <v-icon x-small>mdi-weather-night</v-icon>
                  </v-btn>
                </v-card>
              </v-card>
            </div>
          </div>
          <!-- </v-card-actions> -->

          <v-expand-transition>
            <div
              class="pa-2"
              v-if="expansion.length"
              v-show="expansion[index].show"
              style="border-top: 1px solid #eaeaea"
            >
              <div
                v-for="(cart_item, idx) in item.items"
                :key="idx"
                class="mb-2"
              >
                <v-card
                  v-if="cart_item.qty && cart_item.select_date"
                  class="d-flex flex-row pr-1"
                  outlined
                >
                  <v-card class="d-flex flex-row" flat width="100%">
                    <v-card flat tile>
                      <center>
                        <v-card
                          class="pt-5"
                          small
                          style="
                            padding: 0;
                            border-color: #4caf50 !important;
                            color: red !important;
                          "
                          max-width="26"
                          width="26"
                          min-width="26"
                          max-height="70"
                          height="70"
                          min-height="70"
                          depressed
                          rounded
                          text
                          flat
                          @click="changeqtysubsitem(index, idx, '!!')"
                        >
                          <v-icon small>mdi-close</v-icon>
                        </v-card>
                      </center>
                    </v-card>
                    <v-card class="ma-2 mt-3" flat>
                      <v-img
                        :src="cart_item.main_image"
                        width="45"
                        height="45"
                      />
                    </v-card>
                    <div class="pa-2" style="width: 100%">
                      <div
                        style="
                          font-size: 12px;
                          max-width: 350px;
                          min-width: 150px;
                          white-space: nowrap;
                          overflow: hidden !important;
                          text-overflow: ellipsis;
                          font-weight: 600;
                        "
                      >
                        {{ cart_item.name }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          max-width: 350px;
                          min-width: 150px;
                          white-space: nowrap;
                          overflow: hidden !important;
                          text-overflow: ellipsis;
                          color: grey;
                        "
                      >
                        {{ cart_item.variant }}
                      </div>
                      <div style="font-size: 12px; font-weight: 600">
                        {{ cart_item.qty }} x
                        {{
                          cart_item.discount_price ?
                            parse_price_per_item(cart_item.discount_price)
                            : parse_price_per_item(cart_item.normal_price)
                        }}
                      </div>
                    </div>
                    <div
                      class="d-flex flex-row pl-1 pr-1"
                      style="align-self: center"
                    >
                      <div>
                        <v-btn
                          color="success"
                          small
                          style="
                            padding: 0;
                            border-color: #4caf50 !important;
                          "
                          max-width="26"
                          width="26"
                          min-width="26"
                          max-height="26"
                          height="26"
                          min-height="26"
                          depressed
                          outlined
                          rounded
                          text
                          @click="changeqtysubsitem(index, idx, '-')"
                        >
                          <v-icon small>mdi-minus</v-icon>
                        </v-btn>
                      </div>
                      <v-card
                        class="pt-1 text-center"
                        min-width="30"
                        style="font-size: 14px"
                        flat
                      >
                        {{ cart_item.qty }}
                      </v-card>
                      <div>
                        <v-btn
                          color="success"
                          small
                          style="
                            padding: 0;
                            border-color: #4caf50 !important;
                          "
                          max-width="26"
                          width="26"
                          min-width="26"
                          max-height="26"
                          height="26"
                          min-height="26"
                          depressed
                          outlined
                          rounded
                          text
                          @click="changeqtysubsitem(index, idx, '+')"
                        >
                          <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-card>
                </v-card>
              </div>
              <div
                class="d-flex flex-row pt-2 pb-2 mb-2"
                style="width: 100%; height: 30px"
              >
                <v-card color="transparent" width="100%" flat />
                <div class="d-flex flex-row">
                  <v-btn
                    small
                    depressed
                    dense
                    text
                    class="mr-1"
                    color="#a8a8a9"
                    style="
                      text-transform: capitalize;
                      letter-spacing: normal;
                      text-shadow: 0 0 black;
                    "
                    @click="deleterp({ status: true, data: item })"
                  >
                    &nbsp;hapus tanggal
                  </v-btn>
                  <v-btn
                    small
                    depressed
                    dense
                    color="#fd0"
                    style="
                      text-transform: capitalize;
                      letter-spacing: normal;
                    "
                    @click="selectsubsdate(parsedate(item.date))"
                  >
                    <v-icon style="font-size: 12px">mdi-plus</v-icon>
                    &nbsp;tambah produk
                  </v-btn>
                </div>
              </div>
            </div>
          </v-expand-transition>
        </div>
        <br />
      </v-card>
      <div class="pa-2">
        <v-btn
          block
          depressed
          color="#fd0"
          style="font-size: 13px; text-transform: capitalize"
          @click="changehandler('select_date', true)"
        >
          <v-icon style="font-size: 12px">mdi-calendar-plus</v-icon>
          &nbsp;&nbsp;tambah tanggal
        </v-btn>
      </div>
    </v-card>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    parsedate: {
      type: Function,
      required: true
    },

    parseprice: {
      type: Function,
      required: true
    },

    expanddetail: {
      type: Function,
      required: true
    },

    expansion: {
      type: Array,
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

    changedeliverytime: {
      type: Function,
      required: true
    }
  },

  computed: {
    rp_order () {
      return this.$store.state.rp_order
    },

    dates () {
      return this.$store.state.dates
    },

    store () {
      return this.$store.state.store
    }
  },

  methods: {
    parse_price_per_item (price) {
      return `Rp. ${price.toLocaleString().replace(/,/, '.')}`
    }
  }
}
</script>
