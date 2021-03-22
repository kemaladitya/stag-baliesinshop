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
          Paket ini akan dihapus dari mode paket kamu.
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
        <v-card class="d-flex flex-row pa-2" flat>
          <v-card
            width="48%"
            style="font-size: 13px;"
            height="22"
            light
            :color="type == 'box' ? 'primary' : 'white'"
            :style="type == 'box' ? 'color: white' : 'color: grey'"
            @click="type = 'box'"
          >
            Box
          </v-card>
          <v-card width="4%" flat tile />
          <v-card
            width="48%"
            style="font-size: 13px;"
            height="22"
            light
            :color="type == 'parcell' ? 'primary' : 'white'"
            :style="type == 'parcell' ? 'color: white' : 'color: grey'"
            @click="type = 'parcell'"
          >
            Parcell
          </v-card>
        </v-card>
        <div
          v-if="type == 'box'"
          style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic;"
          :style="total < 30000 ? 'color: red;' : 'color: grey;'"
        >
          Minimum order 30k.
        </div>
        <div
          v-if="type == 'parcell'"
          style="font-size: 10px; text-align: left; padding-left: 10px; font-style: italic;"
          :style="total < 60000 ? 'color: red;' : 'color: grey;'"
        >
          Minimum order 60k.
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
            color="green darken-1"
            depressed
            small
            text
            @click="cancel"
          >
            Kembali
          </v-btn>
          <v-btn
            color="green darken-1"
            style="color: white"
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
                    max-width="18px"
                    min-width="18px"
                    max-height="18px"
                    min-height="18px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBV7tG8dA-CP6cR2y_s-msDWxSZFpRohWGw&usqp=CAU"
                  />
                </center>
                <center v-if="item.type == 'parcell'" style="width: 25px">
                  <v-img
                    class="mr-2"
                    max-width="8px"
                    min-width="8px"
                    max-height="18"
                    min-height="18"
                    src="https://www.pikpng.com/pngl/b/299-2992890_red-ribbon-png.png"
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
                  <v-card class="ma-2 ml-0" flat>
                    <v-img :src="detail_item.image" width="75" height="75" />
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

    <v-btn
      color="primary"
      small
      depressed
      @click="created_notes"
    >
      <v-icon small>mdi-typewriter</v-icon>
    </v-btn>

    <v-btn
      class="mr-1"
      color="success"
      small
      style="text-transform: capitalize; letter-spacing: normal"
      depressed
      @click="dialog = true"
    >
      Tambah paket
    </v-btn>
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

      if (this.type == 'parcell' && this.total < 60000) {
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