<template>
  <v-card class="pt-12">
    <v-dialog
      ref="dialog"
      v-model="select_date"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <v-date-picker
        v-model="date"
        :min="min_rp"
        :max="max_rp"
        :events="selected_dates"
        :show-current="min_rp"
        event-color="green lighten-1"
        scrollable
      >
        <v-spacer />
        <v-btn text color="primary" @click="select_date = false">Cancel</v-btn>
        <v-btn text color="primary" @click="push_date">OK</v-btn>
      </v-date-picker>
    </v-dialog>

    <v-dialog v-model="dialog_delete_rp" persistent max-width="80%">
      <RemoveConfirmation :confirmdeleterp="confirm_delete_rp" />
    </v-dialog>

    <v-dialog v-model="min_order">
      <Minimum />
    </v-dialog>

    <v-dialog v-model="max_order">
      <Maximum />
    </v-dialog>

    <v-card
      v-if="(cart.length || dates.length) && customized_values == null"
      id="b-subs-mode"
      class="mt-2 pr-0"
      :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
      color="#dfdfdf"
      min-width="100%"
      flat
      tile
      :style="screen == 'mini' ? 'position: fixed; max-height: 59px !important' : null"
    >
      <div class="d-flex flex-row">
        <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
          MODE LANGGANAN
        </div>
        <v-spacer />
        <v-switch
          class="pt-0 mt-0"
          :class="screen == 'mini' ? 'ml-1 mr-0 pr-0' : null"
          hide-details
          dense
          v-model="switch_rp"
          @change="subs_controller"
        />
      </div>
      <div style="text-align:left" :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')">
        Anda dapat mengatur waktu pengiriman roti pesanan Anda, <br />
        untuk dijadwalkan hingga 30 hari kedepan.
      </div>
    </v-card>

    <v-card
      v-if="customized_values"
      id="b-subs-mode"
      class="mt-2 pr-0"
      :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
      color="#dfdfdf"
      min-width="100%"
      flat
      tile
      :style="screen == 'mini' ? 'position: fixed; max-height: 59px !important' : null"
    >
      <div class="d-flex flex-row">
        <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
          MODE PAKET
        </div>
        <v-spacer />
      </div>
      <div style="text-align:left" :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')">
        Tentukan variasi roti yang Anda inginkan dalam bentuk pembelian paket<br />
        Sari Roti (Kemasan Box & Parcel). Min order untuk parcel 60k
      </div>
    </v-card>

    <div :style="screen == 'mini' ? 'margin-top: 65px' : null">
      <CartDetail
        v-if="cart.length || dates.length"
        :expansion="expansion"
        :subsorder="subs_order"
        :normalorder="normal_order"
        :changeqty="change_qty"
        :parsedate="parse_date"
        :parseprice="parse_price"
        :changeqtysubsitem="change_qty_subs_item"
        :deleterp="delete_rp"
        :selectsubsdate="select_subs_date"
        :changehandler="change_handler"
        :changenotes="change_notes"
        :expanddetail="expand_detail"
        :changedeliverytime="change_delivery_time"
        :changedeliverysingletime="change_delivery_single_time"
        :updatecache="update_cache"
      />

      <div class="mt-12" v-else>
        <center>
          <div class="pa-12 pb-6">
            <v-img
              src="https://shop.balesin.id/static/plugins/img/cart-empty-icon.png"
              width="300"
            />
          </div>
          <div style="font-size: 18px; font-weight: 600">
            Keranjang belanja kosong
          </div>
          <div class="mt-2" style="font-size: 16px; color: #999">
            Kamu belum memilih produk yang diinginkan
          </div>
          <div class="pa-2 mt-4">
            <v-btn
              color="#ffdd00"
              block
              :to="`/site/${site.store}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
            >
              Mulai Belanja
            </v-btn>
          </div>
        </center>
      </div>
    </div>

    <v-bottom-sheet
      :value="products"
      @click:outside="change_handler('products', false)"
    >
      <Products
        :selectatsubs="select_at_subs"
        :selectedsubsdate="selected_subs_date"
        :selecteddate="selected_date"
        :changehandler="change_handler"
        :products="products"
      />
    </v-bottom-sheet>

    <v-footer fixed padless color="white" style="width: 100%;">
      <Footer :checkout="checkout" :total="normal_order" />
    </v-footer>
  </v-card>
</template>

<script>
import API from '@/components/General'
import CartDetail from '@/components/Cart/index'
import RemoveConfirmation from '@/components/Dialogs/Cart/remove-confirm'
import Minimum from '@/components/Dialogs/Cart/min-order'
import Maximum from '@/components/Dialogs/Cart/max-order'
import Products from '@/components/Bottom-Sheet/Cart/products'
import Footer from '@/components/Footer/cart'

export default {
  components: {
    CartDetail,
    RemoveConfirmation,
    Minimum,
    Maximum,
    Products,
    Footer
  },

  data: () => ({
    switch_rp: false,
    page: 1,
    alignments: ['start', 'center', 'end'],
    min_order: false,
    max_order: false,
    products: false,
    select_date: false,
    subs_mode: false,
    date: new Date().toISOString().substr(0, 10),
    expansion: [],
    dialog_delete_rp: false,
    selected_rm: '',
    selected_subs_date: ''
  }),

  computed: {
    delivery_time_normal () {
      return this.$store.state.delivery_time_normal
    },

    customized_values () {
      return this.$store.state.customized_values
    },

    default_date () {
      const date = new Date()
      const day = date.getDate()

      date.setDate(day + 3)

      return date.toISOString().substr(0, 10)
    },

    cart () {
      return this.$store.state.cart
    },

    min_rp () {
      return this.$store.state.min_rp
    },

    max_rp () {
      return this.$store.state.max_rp
    },

    site () {
      return this.$store.state.site
    },

    store () {
      return this.$store.state.store
    },

    dates () {
      return this.$store.state.dates
    },

    rp_order () {
      return this.$store.state.rp_order
    },

    list_products () {
      return this.$store.state.products
    },

    month () {
      return this.$store.state.month
    },
    
    notes () {
      return this.$store.state.user_notes
    },

    single_order_date() {
      const date = new Date()
      const day = date.getDate()

      date.setDate(day + 1)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
    },

    customer () {
      return this.$store.state.customer
    },

    selected_dates () {
      const selected_dates = this.dates.map(({ date }) => date)

      return selected_dates
    },

    total () {
      if (!this.cart.length) return 0

      const self = this
      const mapped = this.cart.map(el => el.qty * el.detail[0].normal_price)
      const reduced = mapped.reduce((t, n) => t + n)

      return (reduced * self.dates.length).toLocaleString().replace(/,/g, '.')
    },

    normal_order() {
      let total = 0

      this.cart.forEach(el => {
        const pricing = el.detail[0].discount_price
          ? el.detail[0].discount_price
          : el.detail[0].normal_price

        total += el.qty * pricing
      })

      return total
    },

    subs_order() {
      let total = 0

      this.dates.forEach(el => {
        el.items.forEach(item => {
          const pricing = item.discount_price
            ? item.discount_price
            : item.normal_price

          total += item.qty * pricing
        })
      })

      return total
    },

    grand_total() {
      if (!this.rp_order) {
        return this.normal_order
      } else {
        return this.subs_order
      }
    },

    selected_date () {
      const filtered = this.dates.filter(el => {
        // console.log(el)

        return el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
      })

      if (filtered.length) {
        return filtered[0].items
      } else {
        return []
      }
    },

    screen () {
      return this.$store.state.screen
    }
  },

  watch: {
    switch_rp (newval, oldval) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'rp_order',
          data: newval
        }
      })
    },

    select_date (newval, oldval) {
      this.date = this.default_date
    },

    dates (newval, oldval) {
      const temp_expansion = []

      newval.forEach(el => {
        temp_expansion.push({ show: false })
      })

      this.expansion = temp_expansion

      if (this.rp_order) {

        const mapped = newval.map(el => {
          const filtered = el.items.filter(item => item.qty > 0)

          return {
            date: el.date,
            items: filtered.map(_i => ({
              id: _i.id,
              qty: _i.qty,
              variant: _i.variant
            }))
          }
        })
        const results = { type: 'RP', lists: mapped }

        // console.log(results, ' rp mode')
      } else {
        const filtered = this.cart.filter(item => item.qty > 0)
        const mapped = filtered.map(el => ({
          id: el.id,
          qty: el.qty
        }))
        const result = { type: 'SO', lists: mapped }

        // console.log(result, ' single mode')
      }
    },

    subs_mode (newval, oldval) {
      if (newval) {
        this.rp_mode(true)
      } else {
        this.rp_mode(null)
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'rp_order',
          data: newval
        }
      })
    }
  },

  async mounted () {
    const { c, u } = this.$route.query
    
    const get_product = await API.get_list_products(this.$store, {
      category: c,
      uid: u,
      bot_id: this.$route.params.store
    })

    
    if (!get_product.status) {
      if (get_product.message == 'Expired.') {
        this.$router.replace('/error/link/expired')
      }

      if (get_product.message == 'Invalid URL.') {
        this.$router.replace('/error/link/invalid')
      }
    }



    // await API.cart_detail(this.$store, {
    //   bot_id: this.store.bot_id,
    //   store_name: this.site.store,
    //   source: this.site.source,
    //   method: 'get',
    //   uuid: this.site.uuid,
    //   category: this.site.category
    // })
    console.log(this.products, ' this.products')
    this.cart_detail()

    if (!this.$store.state.fullpath.length) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'fullpath',
          data: this.$route.fullPath
        }
      })
    }

    if (!this.store || !this.store.bot_id) {
      this.$router.go(-1)
    }

    this.expansion = this.dates.map((el, index) => {
      if (!index) {
        return { show: true }
      }

      return { show: false }
    })
    this.switch_rp = this.rp_order
  },

  methods: {
    async cart_detail() {
      try {
        console.log('get cart detail')
        const self = this.$store
        const data = {
          bot_id: this.store.bot_id,
          store_name: this.site.store,
          source: this.site.source,
          method: 'get',
          uuid: this.site.uuid,
          category: this.site.category
        }
        const request = await self.dispatch('request', {
          url: '/cache/cart',
          method: 'post',
          data
        })
        const cart =  request.data

        if (cart && cart.status && cart.results) {
          if (cart.results.type === 'single-order') {
            if (cart.results.items.length) {
              const list_cart = cart.results.items.map(el => {
                const product_list = this.list_products.map(prd => prd)
                const search_product = product_list.filter(
                  prod => prod.id === el.items[0].id
                )

                if (search_product.length) {
                  search_product[0].select_date = true
                  search_product[0].qty = el.items[0].qty

                  let selected_variant = search_product[0].detail

                  if (selected_variant.length > 1) {
                    const find_detail = search_product[0].detail.filter(sel_var => sel_var.variant === el.items[0].variant)

                    selected_variant = find_detail
                  }

                  console.log(search_product[0], ' search_product[0]')

                  return {
                    SKU: search_product[0].SKU,
                    category: search_product[0].category,
                    description: search_product[0].description,
                    detail: selected_variant,
                    id: search_product[0].id,
                    name: search_product[0].name,
                    qty: search_product[0].qty,
                    select_date: search_product[0].select_date,
                    weight: search_product[0].weight,
                  }
                  
                  // search_product[0]
                }
              })
              console.log(list_cart, ' list_cart')
              const cleaned_cart = list_cart.filter(el => typeof el == 'object')

              console.log(cleaned_cart, ' cleaned_cart')

              self.dispatch('setState', {
                payload: {
                  key: 'cart',
                  data: cleaned_cart
                }
              })
            }

            self.dispatch('setState', {
              payload: {
                key: 'notes',
                data: cart.results.notes
              }
            })
            this.rp_mode(null)
          }

          if (cart.results.type === 'rp-order') {
            console.log(cart.results, ' cart.results')
            if (cart.results.items.length) {
              const list_dates = cart.results.items.map(el => {
                const list_items = el.items.map(item => {
                  const search_product = self.state.products.filter(prod => {
                    console.log(prod, ' prod get cart')
                    console.log(el.variant, ' variant get cart --')
                    if (prod.id === item.id) {
                      return prod
                    }
                  })
                  console.log(search_product, item, el)
                  console.log('search_product, item, el')
                  const _item = {
                    SKU: search_product[0].SKU,
                    detail_id: search_product[0].detail[0].detail_id,
                    discount_price: search_product[0].detail[0].discount_price,
                    id: search_product[0].id,
                    main_image: search_product[0].detail[0].main_image,
                    name: search_product[0].name,
                    normal_price: search_product[0].detail[0].normal_price,
                    product_id: search_product[0].id,
                    qty: item.qty,
                    select_date: true,
                    variant: search_product[0].detail[0].variant
                  }

                  return _item
                })
                
                  const merge_items = self.state.products.map(el => {
                    const find_selected = list_items.filter(s_el => s_el.id == el.id)

                    if (find_selected.length) return find_selected[0]

                    const _item = {
                      SKU: el.SKU,
                      detail_id: el.detail[0].detail_id,
                      discount_price: el.detail[0].discount_price,
                      id: el.id,
                      main_image: el.detail[0].main_image,
                      name: el.name,
                      normal_price: el.detail[0].normal_price,
                      product_id: el.id,
                      qty: 0,
                      select_date: false,
                      variant: el.detail[0].variant
                    }

                    return _item
                  })

                  return {
                    date: el.delivery_date,
                    delivery_time: el.delivery_time,
                    items: merge_items
                  }
              })

              self.dispatch('setState', {
                payload: {
                  key: 'dates',
                  data: list_dates
                }
              })

              self.dispatch('setState', {
                payload: {
                  key: 'rp_order',
                  data: true
                }
              })
            }

            self.dispatch('setState', {
              payload: {
                key: 'notes',
                data: cart.results.notes
              }
            })
          }
          this.rp_mode(true)
        }
        // const request = await self.dispatch('request', {
        //   url: '/cache/cart',
        //   method: 'post',
        //   data
        // })
        return request.data
      } catch (error) {
        console.log(error)
      }
    },

    change_delivery_single_time(mode) {
      console.log(mode, ' s')
      this.$store.dispatch('setState', {
        payload: {
          key: 'delivery_time_normal',
          data: mode
        }
      })
      this.update_cache('single-order')
    },

    expand_detail (index) {
      this.expansion = this.expansion.map((el, idx) => {
        if (idx == index) {
          return { show: true }
        }

        return { show: false }
      })
      // this.expansion[index].show = !this.expansion[index].show
    },

    push_date () {
      const self = this
      const dates = this.dates
      const is_already_exist_date = dates.filter(el => el.date == this.date)

      if (is_already_exist_date.length) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'alert',
            data: {
              status: true,
              text: 'Date is already exist.'
            }
          }
        })

        setTimeout(() => {
          self.$store.dispatch('setState', {
            payload: {
              key: 'alert',
              data: {
                status: false,
                text: ''
              }
            }
          })
        }, 3000)

        return false
      }

      const temp_product = this.list_products.slice(0)

      dates.push({
        date: this.date,
        delivery_time: '08:00 - 17:00',
        items: []
      })
      this.date = new Date().toISOString().substr(0, 10)
      this.select_date = false

      const cart_ids = this.cart.map(el => el.id)
      const mapped = temp_product.map(el => {
        const index_cart = cart_ids.indexOf(el.id)

        if (index_cart !== -1) {
          return {
            SKU: this.cart[index_cart].SKU,
            detail_id: this.cart[index_cart].detail[0].detail_id,
            discount_price: this.cart[index_cart].detail[0].discount_price,
            main_image: this.cart[index_cart].detail[0].main_image,
            normal_price: this.cart[index_cart].detail[0].normal_price,
            product_id: this.cart[index_cart].detail[0].product_id,
            variant: this.cart[index_cart].detail[0].variant,
            id: this.cart[index_cart].id,
            name: this.cart[index_cart].name,
            qty: this.cart[index_cart].qty,
            select_date: true
          }
        } else {
          return {
            SKU: el.SKU,
            detail_id: el.detail[0].detail_id,
            discount_price: el.detail[0].discount_price,
            main_image: el.detail[0].main_image,
            normal_price: el.detail[0].normal_price,
            product_id: el.detail[0].product_id,
            variant: el.detail[0].variant,
            id: el.id,
            name: el.name,
            qty: 0,
            select_date: false
          }
        }
      })

      dates[dates.length - 1].items = mapped

      const shorted = dates
        .sort((a,b) =>
          (+a.date.replace(/-/g, '') > +b.date.replace(/-/g, '')) ? 1 : ((b.date > a.date) ? -1 : 0))

      this.$store.dispatch('setState', {
        payload: {
          key: 'dates',
          data: shorted
        }
      })
      this.update_cache('rp-order')
    },

    change_handler (key, value) {
      this[key] = value
    },

    subs_controller (e) {
      if (!e) {
        this.subs_mode = false
        this.update_cache('single-order')
      } else {
        this.subs_mode = e
        this.update_cache('rp-order')
      }
    },

    rp_mode_controller (e) {
      if (!e.length) {
        this.subs_mode = false
      } else {
        // this.dates = e
        // this.sort_dates()
      }
    },

    select_subs_date (params) {
      this.selected_subs_date = params
      this.change_handler('products', true)
    },

    rp_mode (status) {
      console.log('change rp mode', ' status', status)

      if (status) {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        let years = date.getFullYear()

        var firstDay = new Date(date.getFullYear(), date.getMonth(), day);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        console.log(firstDay, ' firstDay')
        console.log(lastDay, ' lastDay')
        const build_min_rp = (() => {
          const min_date = firstDay.getDate() + 3
          const min_month = firstDay.getMonth() + 1
          const min_year = firstDay.getFullYear()

          console.log(min_date, ' min_date')
          console.log(min_month, ' min_month')
          console.log(min_year, ' min_year')

          return `${min_year}-${min_month < 10 ? '0'+String(min_month) : min_month}-${min_date < 10 ? '0'+String(min_date) : min_date}`
        })()
        const build_max_rp = (() => {
          firstDay.setDate(firstDay.getDate() + 30)

          console.log(firstDay, ' at firstDay')

          const max_date = firstDay.getDate()
          const max_month = firstDay.getMonth() + 1
          const max_year = firstDay.getFullYear()

          console.log(max_date, ' max_date')
          console.log(max_month, ' max_month')
          console.log(max_year, ' max_year')

          return `${max_year}-${max_month < 10 ? '0'+String(max_month) : max_month}-${max_date < 10 ? '0'+String(max_date) : max_date}`
        })()
        console.log(build_min_rp, ' build_min_rp')
        console.log(build_max_rp, ' build_max_rp')

        // date.setDate((date.getDate() - 30) + 1); 
        // console.log(date, ' date 0')
        // date.setMonth(month + 1)

        // console.log(date, ' date 1')

        const parsed_date =
          date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()
        const parsed_month =
          date.getMonth() < 10 ? '0' + String(date.getMonth()) : date.getMonth()
        console.log(`${years}-${
              !+parsed_month ? '12' : parsed_month
            }-${parsed_date}`, ' parsed_date')

        this.$store.dispatch('setState', {
          payload: {
            key: 'min_rp',
            data: build_min_rp
          }
        })

        date.setDate(day + 14)
        // date.setMonth(month + 1)

        const parsed_date2 =
          date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()

        let parsed_month2 =
          lastDay.getMonth() < 10 ? '0' + String(lastDay.getMonth() + 1) : lastDay.getMonth() + 1

        if (parsed_month2 === '00') {
          parsed_month2 = '01'
          years += 1
        }

        // console.log(date, ' date 01')
        // console.log(date, ' date 11')


        this.$store.dispatch('setState', {
          payload: {
            key: 'max_rp',
            data: build_max_rp
          }
        })
        this.update_cache('rp-order')
      } else {
        const date  = new Date()
        const day   = date.getDate()
        const month = date.getMonth()
        let years   = date.getFullYear()
        const cart  = {
          type: 'single-order',
          items: this.cart.map(el => ({
            delivery_date: this.single_order_date,
            items: [{
              id: el.id,
              qty: el.qty,
              price: el.detail[0].discount_price || el.detail[0].normal_price,
              variant: el.detail[0].variant,
            }]
          }))
        }

        date.setDate(day + 1)
        date.setMonth(month + 1)

        console.log(`${years}-${!+date.getMonth() ? '12' : date.getMonth()}-${
          date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()
        }`, ' date ==== 001')

        this.date = `${years}-${!+date.getMonth() ? '12' : date.getMonth()}-${
          date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()
        }`

        this.$store.dispatch('setState', {
          payload: {
            key: 'min_rp',
            data: `${years}-${!+date.getMonth() ? '12' : date.getMonth()}-${
              date.getDate() < 10 ? '0' + String(date.getDate()) : date.getDate()
            }`
          }
        })

        console.log(this.date, ' this.date ----+ dddd +')
        this.update_cache('single-order')
      }
    },

    checkout () {
      const { source, uuid, category, store } = this.site

      const self = this
      console.log(this.grand_total, ' grand_total')

      console.log(this.rp_order)

      if (!this.rp_order) {
        if (this.grand_total > this.store.max_order) {
          this.$store.dispatch('setState', {
            payload: {
              key: 'alert',
              data: {
                status: true,
                text: JSON.parse(this.store.response.max_order).message[0]
              }
            }
          })

          setTimeout(() => {
            self.$store.dispatch('setState', {
              payload: {
                key: 'alert',
                data: {
                  status: false,
                  text: ''
                }
              }
            })
          }, 3000)

          return false
        }

        if (this.grand_total < this.store.min_order) {
          this.$store.dispatch('setState', {
            payload: {
              key: 'alert',
              data: {
                status: true,
                text: JSON.parse(this.store.response.min_order).message[0]
              }
            }
          })

          setTimeout(() => {
            self.$store.dispatch('setState', {
              payload: {
                key: 'alert',
                data: {
                  status: false,
                  text: ''
                }
              }
            })
          }, 3000)

          return false
        }
      }

      console.log(this.customer, ' this.customer')

      if (this.customer.hasOwnProperty('message') && this.customer.message == 'Customer is not registered yet.') {
        this.$router.replace(
          `/site/${store}/userprofile?u=${uuid}&src=${source}&mtd=reg`
        )
      } else {
        this.$router.replace(
          `/site/${store}/checkout?src=${source}&u=${uuid}&c=${category}`
        )
      }
    },

    change_notes (text) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'user_notes',
          data: text
        }
      })

      if (this.rp_order) {
        this.update_cache('rp-order')
      } else {
        this.update_cache('single-order')
      }
    },

    change_qty (index, operator, item) {
      console.log(item, ' item')
      const self = this
      let updated = this.$store.state.cart.slice(0)

      if (operator) {
        if (this.cart[index].qty + 1 <= this.cart[index].detail[0].stock) {
          updated[index].qty = this.cart[index].qty + 1
        }
      } else {
        updated[index].qty = this.cart[index].qty - 1
      }

      if (!updated[index].qty) {
        const multivariant = this.cart.filter(el => el.id == item.id)

        if (multivariant.length > 1) {
          const filtered2 = this.cart.filter(el => el.qty !== 0)

          updated = filtered2
        } else {
          updated = this.cart.filter(el => el.id !== item.id)
        }
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'cart',
          data: updated
        }
      })
      this.update_cache('single-order')
    },

    parse_price (params) {
      let total = 0

      params.items.forEach(el => {
        if (el.qty) {
          const price = el.discount_price ? el.discount_price : el.normal_price

          total += price * el.qty
        }
      })

      return `Rp. ${total.toLocaleString().replace(',', '.')}`
    },

    parse_date (date) {
      // console.log(date, ' date')
      if (date) {
        const splitted = date.split('-')

        return `${splitted[2]} ${this.month[+splitted[1]]} ${splitted[0]}`
      }
      // return ''
    },

    delete_rp ({ status, data }) {
      this.dialog_delete_rp = status
      this.selected_rm = data.date
    },

    confirm_delete_rp (params) {
      if (params) {
        const dates = this.dates.filter(el => el.date !== this.selected_rm)

        this.$store.dispatch('setState', {
          payload: {
            key: 'dates',
            data: dates
          }
        })
        this.dialog_delete_rp = false
        this.update_cache('rp-order')
      } else {
        this.dialog_delete_rp = false
      }
    },

    select_at_subs (item, e) {
      const dates = this.dates.filter(
        el => el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
      )

      dates[0].items[item].select_date = e
      dates[0].items[item].qty = e ? 1 : 0

      this.change_handler('dates', dates)
      this.update_cache('rp-order')
    },

    change_qty_subs_item (parent, item, op) {
      const dates = this.dates

      if (op === '!!') {
        dates[parent].items[item].qty = 0
        this.update_cache('rp-order')
      } else if (op === '+') {
        dates[parent].items[item].qty += 1
        this.update_cache('rp-order')
      } else {
        dates[parent].items[item].qty -= 1
        this.update_cache('rp-order')
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'dates',
          data: dates
        }
      })
    },

    update_cache(mode) {
      const self = this

      if (mode == 'single-order') {
        const cart = {
          type: 'single-order',
          notes: this.user_notes,
          items: this.cart.map(el => ({
            delivery_date: this.single_order_date,
            delivery_time: this.delivery_time_normal,
            items: [{
              id: el.id,
              qty: el.qty,
              SKU: el.SKU,
              name: el.name,
              variant: el.detail[0].variant,
            }]
          }))
        }

        API.manage_cart(self.$store, {
          store_name: this.site.store,
          source: this.site.source,
          method: 'set',
          uuid: this.site.uuid,
          detail: cart
        })
      } else {
        const self = this
        const mapped = this.dates.map(el => {
          const items = el.items.filter(item => item.qty)
          const cut = items.map(item => ({
            id: item.id,
            qty: item.qty,
            variant: item.variant,
            SKU: item.SKU,
            name: item.name,
          }))

          return {
            delivery_date: el.date,
            delivery_time: el.delivery_time,
            items: cut
          }
        })

        API.manage_cart(self.$store, {
          store_name: this.site.store,
          source: this.site.source,
          method: 'set',
          uuid: this.site.uuid,
          detail: {
            type: 'rp-order',
            notes: this.user_notes,
            items: mapped
          }
        })
      }
    },

    change_delivery_time(index, new_date, mode) {
      const self = this

      this.$store.dispatch('setState', {
        payload: {
          key: 'set_delivery_time',
          data: {
            index, 
            new_date,
            mode
          }
        }
      })
      this.update_cache('rp-order')
    }
  }
}
</script>

<style lang="scss">
  @media (min-width: 481px) {
    /* CSS */
    #b-footer {
      min-width: 650px !important;
    }
  }

  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {
    /* CSS */
    #b-footer {
      min-width: 100% !important;
    }
  }

  #b-subs-mode > div.d-flex.flex-row > div.v-input.pt-0.mt-0.v-input--hide-details.v-input--dense.theme--light.v-input--selection-controls.v-input--switch.ml-1.mr-0.pr-0 > div > div > div {
    margin-right: 0 !important;
  }
</style>