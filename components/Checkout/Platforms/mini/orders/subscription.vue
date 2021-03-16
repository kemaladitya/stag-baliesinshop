<template>
  <v-card class="pa-1 pt-0" flat>
    <div v-if="rp_order">
      <transition name="fade" mode="out-in" appear>
        <div class="pb-0">
          <div v-if="rp_order && dates.length" class="pt-2">
            <v-card
              v-for="(rp_date, index) in dates"
              :key="index"
              id="b-rp-date-items"
              class="mb-2"
              max-width="100%"
              outlined
            >
              <v-card-actions class="pa-3 pr-2">
                <div style="font-size: 13px; font-weight: 600">
                  {{ parsedate(rp_date) }}
                </div>
                <v-spacer />
                <div
                  class="pr-1"
                  style="font-size: 13px; font-weight: 600; color: #2196f3"
                >
                  {{ total_per_date(rp_date) }}
                </div>
                <v-btn
                  icon
                  depressed
                  dense
                  small
                  :ripple="false"
                  @click="expansion[index].show = !expansion[index].show"
                >
                  <v-icon v-if="expansion.length">
                    {{ expansion[index].show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div class="pa-2" v-if="expansion.length" v-show="expansion[index].show">
                  <v-card
                    class="ma-1 d-flex flex-row"
                    flat
                  >
                    <v-card flat style="font-size: 12px; font-weight: 600">
                      Waktu Pengantaran :
                    </v-card>
                    <v-card
                      v-if="rp_date.delivery_time == '08:00 - 17:00'"
                      class="ml-2"
                      flat
                      style="
                        color: grey;
                        font-size: 10px;
                        font-weight: 500;
                        padding-top: 2px;
                      "
                    >
                      <v-icon x-small>mdi-white-balance-sunny</v-icon>
                      jam 08:00 - 17:00
                    </v-card>
                    <v-card
                      v-else-if="rp_date.delivery_time == 'day'"
                      class="ml-2"
                      flat
                      style="
                        color: grey;
                        font-size: 10px;
                        font-weight: 500;
                        padding-top: 2px;
                      "
                    >
                      <v-icon x-small>mdi-white-balance-sunny</v-icon>
                      Pagi (jam 08.00 - 12.00)
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
                      <v-icon x-small>mdi-weather-night</v-icon>
                      Sore (jam 13.00 - 18.00)
                    </v-card>
                  </v-card>
                  <v-spacer />
                  <div v-for="(cart_item, idx) in rp_date.items" :key="idx">
                    <v-card
                      v-if="cart_item.qty && cart_item.select_date"
                      class="d-flex flex-row mb-2 pr-1"
                      outlined
                    >
                      <v-card class="d-flex flex-row" flat width="100%">
                        <v-card class="ma-2 mt-3" flat>
                          <v-img :src="cart_item.main_image" width="45" height="45" />
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
                            {{ cart_item.name }}
                          </div>
                          <div v-if="cart_item.discount_price" class="d-flex flex-row">
                            <div class="mr-2" style="font-size: 13px; font-weight: 600">
                              {{ cart_item.qty }} x Rp.
                              {{
                                cart_item.discount_price
                                  .toLocaleString()
                                  .replace(/,/g, '.')
                              }}, -
                            </div>
                            <div style="font-size: 13px; font-weight: 600; text-decoration: line-through; color: #999">
                              {{ cart_item.qty }} x Rp. {{
                                cart_item.normal_price
                                  .toLocaleString()
                                  .replace(/,/g, '.')
                              }}, -
                            </div>
                          </div>
                          <div v-else style="font-size: 13px; font-weight: 600">
                            {{ cart_item.qty }} x Rp. {{
                              cart_item.normal_price
                                .toLocaleString()
                                .replace(/,/g, '.')
                            }}, -
                          </div>
                        </div>
                      </v-card>
                    </v-card>
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </div>
      </transition>
    </div>
  </v-card>
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

    // expansion: {
    //   type: Array,
    //   required: true
    // }
  },

  data: () => ({
    expansion: []
  }),

  computed: {
    rp_order () {
      return this.$store.state.rp_order
    },

    dates () {
      return this.$store.state.dates
    }
  },

  mounted() {
    this.expansion = this.dates.map(el => ({ show: false }))
  },

  methods: {
    total_per_date (detail) {
      let total = 0

      detail.items.forEach(el => {
        if (el.select_date) {
          if (el.discount_price) {
            total += el.discount_price * el.qty
          } else {
            total += el.normal_price * el.qty
          }
        }
      })

      return `Rp. ${ total.toLocaleString().replace(/,/g, '.') }`
    }
  }
}
</script>