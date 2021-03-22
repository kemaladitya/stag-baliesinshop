<template>
  <div>
    <transition
      v-if="customized_values"
      name="fade"
      mode="out-in"
      appear
    >
      <v-card class="pa-1" flat tile>
        <v-card
          v-for="(item, idx) in customized_values"
          :key="idx"
          class="mb-2 pa-2"
          outlined
          style="text-align: left"
        >
          <div class="d-flex flex-row">
            <div
              style="text-transform: capitalize; font-size: 12px; color: grey"
              :style="item.type == 'box' ? 'margin-right: 20px' : null"
            >
              <!-- packaging type:  -->
              <div class="d-flex flex-row mt-2">
                <center v-if="item.type == 'box'" style="width: 25px">
                  <v-img
                    class="mr-2"
                    max-width="15px"
                    min-width="15px"
                    max-height="18px"
                    min-height="18px"
                    height="18px"
                    width="15px"
                    src="https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"
                  />
                </center>
                <center v-if="item.type == 'parcel'" style="width: 25px">
                  <v-img
                    class="mr-2"
                    max-width="18px"
                    min-width="18px"
                    max-height="18px"
                    min-height="18px"
                    height="18px"
                    width="18px"
                    src="https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"
                  />
                </center>
                <div style="font-weight: 600">{{ item.type }}</div>
              </div>
            </div>
            <div
              class="ml-12"
              style="
                text-transform: capitalize;
                font-size: 14px;
                color: grey;
                padding-top: 8px;
                text-align: left;
                width: 60%;
              "
            >
                <div
                  class="mr-1"
                  style="font-size: 12px; color: grey; font-weight: 600"
                >
                  Rp. {{ item.total.toLocaleString().replace(/,/g, '.') }}, -
                </div>
            </div>
            <v-spacer></v-spacer>
            <div style="padding: 4px 0 4px 4px;">
              <v-btn
                icon
                depressed
                dense
                small
                :ripple="false"
                @click="expansion[idx].show = !expansion[idx].show"
              >
                <v-icon v-if="expansion.length">
                  {{ expansion[idx].show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </v-btn>
            </div>
          </div>

          <v-expand-transition>
            <div
              v-if="expansion.length"
              v-show="expansion[idx].show"
            >
              <v-card
                v-for="(detail_item, index) in item.items"
                :key="index"
                class="mt-2 ml-0 mr-0"
                outlined
              >
                <v-card class="d-flex flex-row" flat width="100%">
                  <v-card class="ma-2 ml-0" style="padding-top: 2px" flat>
                    <v-img :src="detail_item.image" width="70" height="70" />
                  </v-card>
                  <div class="pa-2" style="text-align:left">
                    <div
                      style="
                        font-size: 13px;
                        max-width: 150px;
                        display: inline-block;
                        min-width: 150px;
                        white-space: nowrap;
                        overflow: hidden !important;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ detail_item.name }}
                    </div>
                    <div
                      style="
                        font-size: 13px;
                        max-width: 150px;
                        display: inline-block;
                        min-width: 150px;
                        white-space: nowrap;
                        overflow: hidden !important;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ detail_item.variant }}
                    </div>
                    <div class="d-flex flex-row" style="font-size: 13px">
                      <div class="mr-2" style="font-size: 13px; font-weight: 600; color: black">
                        {{ detail_item.qty }} x
                      </div>
                      <div v-if="detail_item.discount_price">
                        <div style="font-size: 13px; font-weight: 600; text-decoration: line-through; color: #999">
                          Rp. {{
                            detail_item.normal_price
                              .toLocaleString()
                              .replace(/,/g, '.')
                          }}, -
                        </div>
                        <div style="font-size: 13px; font-weight: 600">
                          Rp.
                          {{
                            detail_item.discount_price
                              .toLocaleString()
                              .replace(/,/g, '.')
                          }}, -
                        </div>
                      </div>
                      <div v-else style="font-size: 13px; font-weight: 600">
                        Rp. {{
                          detail_item.normal_price
                            .toLocaleString()
                            .replace(/,/g, '.')
                        }}, -
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-card>
            </div>
          </v-expand-transition>
        </v-card>
      </v-card>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    type       : 'box',
    dialog     : false,
    rm_dialog  : false,
    target_rm  : null,
    list_items : [],
    expansion  : []
  }),

  computed: {
    customized_values() {
      return this.$store.state.customized_values
    },

    cart() {
      return this.$store.state.cart
    }
  },

  beforeMount() {
    this.cart.forEach(el => {
      this.list_items.push({
        id             : el.id,
        name           : el.name,
        SKU            : el.SKU,
        qty            : 0,
        image          : el.detail[0].main_image,
        variant        : el.detail[0].variant,
        normal_price   : el.detail[0].normal_price,
        discount_price : el.detail[0].discount_price
      })
      this.expansion.push({ show: false })
    })
  }
}
</script>