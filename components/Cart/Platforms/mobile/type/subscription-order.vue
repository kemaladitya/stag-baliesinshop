<template>
  <div>
    <v-dialog
      ref="dialog"
      v-model="select_date"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <v-date-picker
        v-model="date"
        :min="min_date"
        :max="max_date"
        :events="list_date_at_cart"
        :show-current="min_date"
        event-color="green lighten-1"
        scrollable
      >
        <v-spacer />
        <v-btn text color="primary" @click="select_date = false">Cancel</v-btn>
        <v-btn text color="primary" @click="push_date">OK</v-btn>
      </v-date-picker>
    </v-dialog>
    
    <v-dialog
      ref="dialog"
      v-model="delete_date"
      persistent
      width="290px"
    >
      <v-card style="text-align: left">
        <v-card-title class="headline">
          Hapus Tanggal?
        </v-card-title>
        <v-card-text>
          Tanggal ini akan dihapus dari daftar mode langganan kamu.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            style="text-transform: capitalize; letter-spacing: normal"
            @click="dialog_delete_date(null, null)"
          >
            batal
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="confirmed_delete_date"
            style="text-transform: capitalize; letter-spacing: normal"
          >
            Hapus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-bottom-sheet
      v-model="select_list_items"
      @click:outside="select_list_item(null, false)"
    >
      <v-sheet style="text-align: left">
        <div class="d-flex flex-row">
          <div
            class="pa-2"
            style="align-self: center; font-size: 13px; font-weight: 600"
          >
            Pilih Produk
            <div style="font-size: 11px; color: grey">
              {{ target_date }}
            </div>
          </div>
          <v-spacer />
          <v-btn
            class="mt-2"
            icon
            text
            color="red"
            @click="select_list_item(null, false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div class="pa-2" style="overflow-y: scroll; max-height: 70vh">
          <div v-for="(product, idx) in list_update_products" :key="idx">
            <v-card class="d-flex flex-row mb-2 pr-1" outlined>
              <v-card class="d-flex flex-row" flat width="100%">
                <v-card class="ma-2 mt-3" flat>
                  <v-img
                    :src="product.main_image"
                    width="45"
                    height="45"
                    loading=lazy
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
                    {{ product.name }}
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
                    {{ product.variant[0].name }}
                  </div>
                  <div style="font-size: 12px; font-weight: 600">
                    Rp
                    {{
                      product.normal_price.toLocaleString().replace(/,/g, '.')
                    }}, -
                  </div>
                </div>
                <div
                  id="b-checkbox-subs-product"
                  class="d-flex flex-row pl-1 pr-1"
                  style="align-self: center"
                >
                  <v-checkbox
                    v-model="product.selected"
                    color="primary"
                    hide-details
                    dense
                    @change="select_product_at_list(product, $event)"
                  />
                </div>
              </v-card>
            </v-card>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <v-expand-transition>
      <!-- <v-card v-show="rp_order" flat tile> -->
        <v-card v-if="list_cart.length" height="100%" class="pa-1 pt-2" flat tile>
          <div
            v-for="(item, index) in list_cart"
            :key="index"
            class="mb-2"
            style="border: 1px solid #e0e0e0; border-radius: 5px"
          >
            <div>
              <div class="d-flex flex-row pa-2">
                <div class="pt-2 pl-1" style="font-size: 13px; font-weight: 600">
                  <!-- {{ parsedate(item.date) }} -->
                  {{ date_parser(item.date) }}
                </div>
                <v-spacer />
                <div
                  class="pr-1"
                  style="font-size: 13px; font-weight: 600; color: #2196f3"
                >
                  <div style="font-size: 13px; font-weight: 600; color: #2196f3; text-align: right">
                    <v-spacer />
                    Rp {{
                      item_parser(item.items).total
                        ? item_parser(item.items).total.toLocaleString().replace(/,/g, '.')
                        : item_parser(item.items).total
                    }}
                  </div>
                  <div
                    style="font-size: 9px; font-weight: 600; padding-top: 2px; font-style: italic;"
                    :style="
                      item_parser(item.items).total < store.min_order || item_parser(item.items).total > store.max_order ?
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
                  @click="expand_detail(index)"
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
                <v-card class="d-flex flex-row" flat>
                  <v-card
                    class="d-flex flex-row"
                    flat
                  >
                    <v-card flat style="font-size: 12px; font-weight: 600">
                      Waktu Pengantaran :
                    </v-card>
                    <v-card
                      class="ml-2"
                      flat
                      style="
                        color: grey;
                        font-size: 10px;
                        font-weight: 500;
                        padding-top: 2px;
                      "
                    >
                      jam 08:00 - 17:00
                    </v-card>
                  </v-card>
                  <v-spacer />
                </v-card>
              </div>
            </div>

            <v-expand-transition>
              <div
                class="pa-2"
                v-if="expansion.length"
                v-show="expansion[index].show"
                style="border-top: 1px solid #eaeaea"
              >
                <div
                  v-for="(cart_item, idx) in item_parser(item.items).product"
                  :key="idx"
                  class="mb-2"
                >
                  <v-card class="d-flex flex-row pr-1" outlined>
                    <v-card flat>
                      <center>
                        <v-card
                          class="pt-6"
                          small
                          style="
                            padding: 0;
                            border-color: #4caf50 !important;
                            color: red !important;
                            background: #fee;
                            border-radius: 3px 0 0 3px !important;
                          "
                          max-width="26"
                          width="26"
                          min-width="26"
                          max-height="100%"
                          height="100%"
                          min-height="74px"
                          depressed
                          rounded
                          text
                          flat
                          @click="delete_item(item.date, cart_item.detail_id.id)"
                        >
                          <v-icon color="red" small>mdi-close</v-icon>
                        </v-card>
                      </center>
                    </v-card>
                    <v-card class="ma-2 mt-3" width="52" height="52" outlined>
                      <v-img :src="cart_item.main_image" loading=lazy />
                    </v-card>
                    <div class="pa-2 pt-3" style="width: 100%; text-align:left">
                      <div
                        style="
                          font-size: 12px;
                          max-width: 140px;
                          min-width: 140px;
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
                          max-width: 140px;
                          min-width: 140px;
                          white-space: nowrap;
                          overflow: hidden !important;
                          text-overflow: ellipsis;
                          color: grey;
                        "
                      >
                        {{ cart_item.detail_id.name }}
                      </div>
                      <div style="font-size: 12px; font-weight: 600">
                        {{ cart_item.qty }} x {{ cart_item.discount_price || cart_item.normal_price }}
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
                          @click="manage_item(item.date, cart_item.detail_id.id, 'reduce')"
                        >
                          <!-- @click="changeqtysubsitem(index, idx, '-')" -->
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
                          @click="manage_item(item.date, cart_item.detail_id.id, 'add')"
                        >
                          <!-- @click="changeqtysubsitem(index, idx, '+')" -->
                          <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </div>
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
                      @click="dialog_delete_date(item.date, true)"
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
                      @click="select_list_item(item.date, true)"
                    >
                      <v-icon style="font-size: 12px">mdi-plus</v-icon>
                      &nbsp;tambah produk
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-expand-transition>
          </div>
        </v-card>
      <!-- </v-card> -->
    </v-expand-transition>
    <div class="pa-1 pt-2">
      <v-btn
        block
        depressed
        color="#fd0"
        style="font-size: 13px; text-transform: capitalize"
        @click="select_date = true"
      >
        <v-icon style="font-size: 12px">mdi-calendar-plus</v-icon>
        &nbsp;&nbsp;tambah tanggal
      </v-btn>
    </div>

    <div v-if="!list_cart.length">
      <center style="margin-top: 30vh; margin-bottom: 30px">
        <div style="width: 264px">
          <v-icon color="grey lighten-2" style="font-size: 120px;">mdi-cart-outline</v-icon>
          <div
            style="
              font-weight: 600;
              border-radius: 5px;
              width: fit-content;
              font-size: 13px;
            "
          >
            Keranjang belanja Anda kosong.
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import API from '@/components/General'

export default {
  props: {},

  data: () => ({
    select_date: false,
    delete_date: false,
    select_list_items: false,
    target_date: null,
    date: null,
    list_cart: [],
    expansion: [],
  }),

  computed: {
    rp_order() {
      return this.$store.state.rp_order
    },

    subscription_cart() {
      return this.$store.state.subscription_cart
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    list_product() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    limit_recurring_purchase() {
      if (this.store && this.store.limit_recurring_purchase) {
        return JSON.parse(this.$store.state.store.limit_recurring_purchase)
      }

      return null
    },

    min_date() {
      const self = this
      const date = new Date()

      date.setDate(date.getDate() + self.limit_recurring_purchase.date_range)
      date.setMonth(date.getMonth() + 1)

      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()

      return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
    },

    max_date() {
      const self = this
      const date = new Date()

      date.setDate(date.getDate() + self.limit_recurring_purchase.date_between)
      date.setMonth(date.getMonth() + 1)

      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()

      return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
    },

    list_date_at_cart() {
      return this.list_cart.map(el => el.date)
    },

    parsed_lists() {
      const product = []

      this.cart.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
          })
        }
      })

      console.log('product', product)

      return product
    },

    list_update_products() {
      if (this.target_date) {
        const target_list = this.list_cart.filter(el => el.date === this.target_date)
        const lists = this.list_product.map(el => {
          const list_ids = []
          
          target_list[0].items.forEach(item => {
            list_ids.push(item.detail_id)
          })

          if (list_ids.includes(el.variant[0].id)) {
            el.selected = true
          } else {
            el.selected = false
          }

          return el
        })

        return lists
      }
    }
  },

  mounted() {
    this.date = this.min_date
    this.expansion = this.subscription_cart.map(_ => ({ show: false }))

    this.list_cart = this.subscription_cart
  },

  methods: {
    item_parser(items) {
      let total = 0
      const product = []

      items.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            id             : find[0].id,
            sku            : find[0].SKU,
            detail_id      : find[0].variant[0],
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
            is_promo       : find[0].is_promo,
            qty            : el.qty
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },

    expand_detail(index) {
      this.expansion[index].show = !this.expansion[index].show
    },

    parse_price_per_item (price) {
      return `Rp ${price.toLocaleString().replace(/,/, '.')}`
    },

    push_date() {
      // ? find is selected date already exist at list subs cart
      const is_exist_date = this.list_date_at_cart.filter(el => el === this.date)

      if (!is_exist_date.length) {
        this.expansion.push({ show: false })
        this.list_cart.push({
          date: this.date,
          delivery_time: '08:00 - 17:00',
          items: this.cart,
        })

        this.update_cart(this.list_cart)
      } else {
        console.log('date is already exist')
      }

      this.select_date = false
    },

    async update_cart(new_cart) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })

      await API.cart_manager(this, {
        method: 'set',
        info: {
          mode : 'subscription-order',
          item : new_cart,
          store: {
            name   : this.site.store,
            source : this.site.source,
            uuid   : this.site.uuid,
            outlet : this.site.category,
          },
        },
      })

      console.log('@for-cart-redis', new_cart)
      this.$store.dispatch('setState', {
        payload: {
          key : 'subscription_cart',
          data: new_cart,
        },
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })
    },

    dialog_delete_date(date, status) {
      if (status) {
        this.target_date = date
      } else {
        this.target_date = null
      }

      this.delete_date = status
    },

    confirmed_delete_date() {
      this.list_cart = this.list_cart.filter(({ date }) => date !== this.target_date)
      this.dialog_delete_date(null, false)

      this.update_cart(this.list_cart)
    },

    delete_item(date, detail_id) {
      this.list_cart = this.list_cart.map(el => {
        if (el.date === date) {
          console.log(el.items)
          const filter_item = el.items.filter(
            item => item.detail_id !== detail_id
          )

          el.items = filter_item
        }

        return el
      })

      this.update_cart(this.list_cart)
    },

    manage_item(date, detail_id, action) {
      const list_cart = []

      for (let i = 0; i < this.list_cart.length; i++) {
        const el = this.list_cart[i]
        const items = []

        for (let j = 0; j < el.items.length; j++) {
          const item = el.items[j];

          if (el.date === date && detail_id === item.detail_id) {
            item.qty = action === 'add' ? item.qty + 1 : item.qty - 1 
          }

          if (item.qty) {
            items.push({
              detail_id : item.detail_id,
              id        : item.id,
              qty       : item.qty,
              sku       : item.sku
            })
          }
        }

        el.items = items
        list_cart.push(el)
      }

      this.list_cart = list_cart

      this.update_cart(this.list_cart)
    },

    select_list_item(date, status) {
      this.select_list_items = status
      this.target_date = date
    },

    select_product_at_list(product, status) {
      this.list_cart = this.list_cart.map(el => {
        if (el.date === this.target_date) {
          if (status) {
            el.items = [
              ...el.items,
              {
                id: product.id,
                sku: product.SKU,
                detail_id: product.variant[0].id,
                qty: 1
              }
            ]
          } else {
            el.items = el.items.filter(
              item => item.id !== product.id && item.detail_id !== product.variant[0].id
            )
          }
        }

        return el
      })

      this.update_cart(this.list_cart)
    },

    date_parser(date) {
      console.log(date, 'date_parser')
      const _ = date.split('-')
      const day = _[2]
      const month = _[1]
      const years = _[0]
      const _month = [
        '',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]

      return `${day} ${_month[+month]} ${years}`
    }
  },
}
</script>
