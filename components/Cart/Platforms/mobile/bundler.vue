<template>
  <div
    v-if="store.customize_setup"
    class="pa-1"
    style="text-align: right"
  >
    <v-dialog
      v-model="rm_dialog"
      persistent
      max-width="90%"
    >
      <v-card
        class="pa-2 pl-4 pr-4"
        flat
        tile
        style="text-align: left;"
      >
        <div style="font-size: 20px; font-weight: 600; padding-bottom: 10px">
          Hapus Paket?
        </div>
        <div style="font-size: 13px; color: grey; padding-bottom: 10px">
          Paket ini akan dihapus dari mode paket Anda.
        </div>
      </v-card>
      <v-card
        class="d-flex flex-row pa-2"
        style="justify-content: flex-end;"
        flat
        tile
      >
        <v-btn
          class="mr-2"
          small
          dense
          depressed
          text
          style="text-transform: capitalize"
          @click="rm_dialog = false"
        >
          Batal
        </v-btn>
        <v-btn
          color="error"
          small
          dense
          depressed
          style="text-transform: capitalize"
          @click="remove_bundle"
        >
          Hapus
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="90%"
    >
      <v-card>
        <div
          style="background-color: lightgray;"
        >
          <div
            class="pa-2 pb-0"
            style="text-align: left; font-weight: 600; font-size: 12px;"
          >
            Pilih Tipe Paket:
          </div>
          <v-card class="d-flex flex-row pa-2" style="background-color: lightgray !important;" flat>
            <v-card
              class="pt-1"
              width="48%"
              style="font-size: 13px;"
              height="28"
              light
              flat
              :color="type == 'box' ? 'success' : 'white'"
              :style="type == 'box' ? 'color: white' : 'color: grey'"
              @click="type = 'box'"
            >
              Box
            </v-card>
            <v-card width="4%" flat tile style="background-color: lightgray !important;" />
            <v-card
              class="pt-1"
              width="48%"
              style="font-size: 13px;"
              height="28"
              light
              flat
              :color="type == 'parcel' ? 'success' : 'white'"
              :style="type == 'parcel' ? 'color: white' : 'color: grey'"
              @click="type = 'parcel'"
            >
              Parcel
            </v-card>
          </v-card>
          <div
            v-if="type == 'box'"
            class="pb-2"
            style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic;"
            :style="total < 30000 ? 'color: red;' : 'color: grey;'"
          >
            Minimum order 30k.
          </div>
          <div
            v-if="type == 'parcel'"
            class="pb-2"
            style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic;"
            :style="total < 60000 ? 'color: red;' : 'color: grey;'"
          >
            Minimum order 60k.
          </div>
        </div>
        <v-card v-if="list_items.length" class="pa-2" flat tile max-height="400" style="overflow-y: scroll">
          <v-card
            v-for="(item, index) in list_items"
            :key="index"
            class="d-flex flex-row mb-2"
            outlined
          >
            <div class="pa-2">
              <v-img :src="item.image" width="70" height="70" />
            </div>
            <div class="pa-3 pl-1" style="text-align: left">
              <div style="font-size: 14px">
                {{ item.name }}
              </div>
              <div style="font-size: 12px">
                {{ item.variant }}
              </div>
              <div style="font-size: 12px">
                Rp. {{
                  item.discount_price
                    ? item.discount_price.toLocaleString().replace(/,/g, '.')
                    : item.normal_price.toLocaleString().replace(/,/g, '.')
                }}, -
              </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex flex-row pl-1 pr-2" style="align-self: center">
              <div>
                <v-btn
                  color="success"
                  style="padding: 0; border-color: #4caf50 !important"
                  max-width="26"
                  width="26"
                  min-width="26"
                  max-height="26"
                  height="26"
                  min-height="26"
                  depressed
                  outlined
                  rounded
                  small
                  text
                  :disabled="!item.qty"
                  @click="change_group_qty(false, index)"
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
                {{ item.qty }}
              </v-card>
              <div>
                <v-btn
                  color="success"
                  style="padding: 0; border-color: #4caf50 !important"
                  max-width="26"
                  width="26"
                  min-width="26"
                  max-height="26"
                  height="26"
                  min-height="26"
                  depressed
                  outlined
                  rounded
                  small
                  text
                  @click="change_group_qty(true, index)"
                >
                  <v-icon small>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-card>
        <div
          class="pa-2"
          style="text-align: right; font-size: 12px"
          :style="total ? 'color: red' : 'color: grey'"
        >
          Total : Rp. {{ total.toLocaleString().replace(/,/g, '.') }}, -
        </div>
        <v-card class="d-flex flex-row mt-0 pa-2 pt-0" flat>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-2"
            color="black"
            depressed
            small
            text
            @click="cancel"
          >
            Kembali
          </v-btn>
          <v-btn
            color="#fd0"
            style="color: black"
            depressed
            small
            :disabled="create_btn"
            @click="submit_bundle"
          >
            Tambah
          </v-btn>
        </v-card>
      </v-card>
    </v-dialog>

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
              <div class="d-flex flex-row mt-1 pt-1">
                <v-spacer />
                <v-btn
                  color="red"
                  small
                  text
                  depressed
                  dense
                  style="text-transform: capitalize"
                  @click="confirm_remove_bundle(idx)"
                >
                  <v-icon class="mr-1" color="red" small>mdi-close-circle-outline</v-icon>
                  Hapus paket
                </v-btn>
              </div>
            </div>
          </v-expand-transition>
        </v-card>
      </v-card>
    </transition>

    <div class="d-flex flex-row">
      <div class="pa-1 pt-0" style="text-align: left; width: 70%;">
        <div class="d-flex flex-row">
          <v-img
            class="mr-2"
            src="https://cdn.onlinewebfonts.com/svg/img_569342.png"
            width="22"
            height="22"
            max-width="22"
            max-height="22"
            style="margin-top: 6px; border-radius: 2px"
          />
          <div>
            <div
              v-if="!customized_values"
              style="font-size: 12px; font-weight: 600"
            >
              Beli Paket
            </div>
            <div
              v-if="customized_values"
              style="font-size: 12px; font-weight: 600"
            >
              Tambah Paket Lainnya
            </div>
            <div style="font-size: 10px; color: grey">
              Pembelian roti dalam bentuk paket.
            </div>
          </div>
        </div>
      </div>
      <div style="width: 30%;">
        <v-btn
          class="mt-1 mr-1"
          color="success"
          small
          style="text-transform: capitalize; letter-spacing: normal"
          depressed
          @click="dialog = true"
        >
          Tambah
        </v-btn>
      </div>
    </div>
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

  watch: {
    customized_values(newval, oldval) {
      if (newval) {
        this.expansion = newval.map(el => ({ show: false }))
      }
    }
  },

  computed: {
    store() {
      return this.$store.state.store
    },

    create_btn() {
      if (this.type == 'box' && this.total < 30000) {
        return true
      }

      if (this.type == 'parcel' && this.total < 60000) {
        return true
      }

      return false
    },

    customized_values() {
      return this.$store.state.customized_values
    },

    user_notes() {
      return this.$store.state.user_notes
    },

    cart() {
      return this.$store.state.cart
    },

    dates() {
      return this.$store.state.dates
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    total() {
      let total = 0

      this.list_items.forEach(el => {
        const price = el.discount_price ? el.discount_price : el.normal_price

        total += (el.qty * price)
      })

      return total
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
  },

  methods: {
    created_notes() {
      const user_notes = this.user_notes.split('----------------------------#\n')
      const notes = this.customized_values
        .map((el, index) =>
          `bundle-${index+1} :\n* tipe = ${el.type}\n${el.items.map(item => `- "${item.SKU}" = ${item.qty} item.`).join('\n')}\n`)
        .join('\n')

      this.$store.dispatch('setState', {
        payload: {
          key: 'user_notes',
          data: `${notes}\n----------------------------#\n${user_notes.length > 1 ? user_notes[1] : user_notes[0]}\n`
        }
      })
    },

    confirm_remove_bundle(index) {
      this.target_rm = index
      this.rm_dialog = true
    },

    remove_bundle() {
      this.rm_dialog = false

      const filtered_bundle = this.customized_values.filter((el, index) => index != this.target_rm)

      if (filtered_bundle.length) {
        this.$store.dispatch('setState', {
          payload: {
            key : 'customized_values',
            data: filtered_bundle
          }
        })

        return
      }

      this.$store.dispatch('setState', {
        payload: {
          key : 'customized_values',
          data: null
        }
      })
    },

    cancel() {
      this.total      = 0
      this.dialog     = false
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
      })
      this.list_items = this.list_items.slice(this.cart.length)
    },

    change_group_qty(status, index) {
      this.list_items.forEach((el, i) => {
        if (i == index) {
          if (status) {
            this.list_items[i].qty += 1
          } else {
            this.list_items[i].qty -= 1
          }
        }
      })
    },

    submit_bundle() {
      const bundle = this.list_items.slice(0)

      if (!this.customized_values) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'customized_values',
            data: [
              {
                type  : this.type,
                items : bundle.filter(el => el.qty),
                total : this.total
              }
            ]
          }
        })
      } else {
        this.$store.dispatch('setState', {
          payload: {
            key: 'customized_values',
            data: [...this.customized_values, {
              type  : this.type,
              items : bundle.filter(el => el.qty),
              total : this.total
            }]
          }
        })
      }

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
      })

      this.list_items = this.list_items.slice(bundle.length)
      this.dialog     = false
    }
  }
}
</script>