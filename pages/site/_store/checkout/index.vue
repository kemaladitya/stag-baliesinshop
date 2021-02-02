<template>
  <v-container class="b-font pt-12 pl-1 pr-1" style="overflow-x: hidden">
    <v-dialog v-model="voucher_form" persistent max-width="100%">
      <InsertVoucherCode :changehandler="change_handler" />
    </v-dialog>

    <Checkout
      v-if="cart.length || dates.length"
      :date="date"
      :customer="customer"
      :changehandler="change_handler"
      :appliedvoucher="applied_voucher"
      :parsedate="parse_date"
      :parseprice="parse_price"
      :expansion="expansion"
      :grandtotal="grand_total"
      :selectedpayment="selected_payment"
      :selectedcourier="selected_courier"
      :applyingvoucher="applying_voucher"
      :shippingcostloading="shipping_cost_loading"
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

    <v-bottom-sheet
      :value="voucher"
      @click:outside="change_handler('voucher', false)"
    >
      <Voucher
        :changehandler="change_handler"
        :listvouchers="list_vouchers"
        :usevoucher="use_voucher"
        :customvoucher="custom_voucher"
      />
    </v-bottom-sheet>

    <v-bottom-sheet
      :value="courier"
      @click:outside="change_handler('courier', false)"
    >
      <Courier
        :changehandler="change_handler"
        :getcour="get_cour"
      />
    </v-bottom-sheet>

    <v-bottom-sheet
      :value="payment"
      @click:outside="change_handler('payment', false)"
    >
      <Payment
        :changehandler="change_handler"
        :paymentdetail="payment_detail"
        :selectedpayment="selected_payment"
        :selectpayment="select_payment"
      />
    </v-bottom-sheet>

    <v-bottom-sheet
      :value="order_loading"
      persistent
    >
      <v-sheet>
        <center class="pa-3">
          <v-img
            width="130"
            src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          />
          <div style="">Pesanan kamu sedang diproses,</div>
          <div style="">harap menunggu untuk beberapa</div>
          <div style="">saat.</div>
        </center>
      </v-sheet>
    </v-bottom-sheet>

    <v-footer v-if="cart.length || dates.length" fixed padless color="grey lighten-3">
      <Footer
        :grandtotal="grand_total"
        :processbtn="process_btn"
        :executeorder="execute_order"
      />
    </v-footer>
  </v-container>
</template>

<script>
import API from '@/components/General'
import Checkout from '@/components/Checkout/index'
import InsertVoucherCode from '@/components/Dialogs/Checkout/insert-voucher-code'
import Courier from '~/components/Bottom-Sheet/Checkout/courier.vue'
import Voucher from '~/components/Bottom-Sheet/Checkout/voucher.vue'
import Payment from '~/components/Bottom-Sheet/Checkout/payment.vue'
import Footer from '~/components/Footer/checkout.vue'
import Format from '~/components/General.json'

export default {
  components: {
    Checkout,
    InsertVoucherCode,
    Voucher,
    Courier,
    Payment,
    Footer
  },

  data: () => ({
    applying_voucher: false,
    order_loading: false,
    shipping_cost_loading: false,
    triggered: false,
    select_date: false,
    date: new Date().toISOString().substr(0, 10),
    page: 1,
    min_rp: '',
    max_rp: '',
    voucher_code: '',
    applied_voucher: { name: null, value: 0 },
    menu: false,
    expansion: [],
    products: false,
    payment: false,
    voucher: false,
    courier: false,
    voucher_form: false,
    list_vouchers: [],
    custom_voucher: false,
    selected_payment: '',
    selected_courier: {
      status: false,
      name: '',
      price: 0
    },
    payment_detail: Format.payment_type
  }),

  computed: {
    store() {
      return this.$store.state.store
    },

    dates() {
      return this.$store.state.dates
    },

    notes() {
      return this.$store.state.user_notes
    },

    list_products() {
      return this.$store.state.products
    },

    month() {
      return this.$store.state.month
    },

    customer() {
      return this.$store.state.customer
    },

    cart() {
      return this.$store.state.cart
    },

    site () {
      return this.$store.state.site
    },

    single_order_date() {
      const date = new Date()
      const day = date.getDate()

      date.setDate(day + 1)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    total() {
      if (!this.cart.length) return 0

      const self = this
      const mapped = this.cart.map(el => el.qty * el.detail[0].normal_price)
      const reduced = mapped.reduce((t, n) => t + n)

      return (reduced * self.dates.length).toLocaleString().replace(/,/g, '.')
    },

    selected_date() {
      const filtered = this.dates.filter(el => 
        el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
      )

      if (filtered.length) {
        return filtered[0].items
      } else {
        return []
      }
    },

    grand_total() {
      if (!this.rp_order) {
        return this.normal_order()
      } else {
        return this.subs_order()
      }
    },

    list_product() {
      return this.$store.state.products.map(el => {
        el.select_date = false

        if (el.qty) {
          el.select_date = true
        }

        return el
      })
    },

    process_btn() {
      if (this.rp_order) {
        if (this.dates.length && this.selected_payment && this.grand_total > this.store.min_order && this.grand_total < this.store.max_order && this.selected_courier.status) {
          return false
        } else {
          return true
        }
      } else {
        if (this.cart.length && this.selected_payment && this.grand_total > this.store.min_order && this.grand_total < this.store.max_order && this.selected_courier.status) {
          return false
        } else {
          return true
        }
      }
    }
  },
  
  watch: {
    dates(newval, oldval) {
      const temp_expansion = []

      newval.forEach(el => {
        temp_expansion.push({ show: false })
      })

      this.expansion = temp_expansion
    },
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



    const cart_detail = await API.cart_detail(this.$store, {
      bot_id: this.store.bot_id,
      store_name: this.site.store,
      source: this.site.source,
      method: 'get',
      uuid: this.site.uuid,
      category: this.site.category
    })

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

    this.expansion = this.dates.map(el => ({ show: true }))

    await this.check_voucher()

    try {
      if (cart_detail && cart_detail.results && cart_detail.results.used_voucher && cart_detail.results.used_voucher.length) {
        const find_voucher = this.list_vouchers.filter(el => el.name === cart_detail.results.used_voucher)

        console.log(find_voucher, 'find_voucher')

        if (find_voucher.length) {
          await this.use_voucher({ is_custom_voucher: false, value: find_voucher[0] })
        }
      }
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    change_handler (key, value) {
      this[key] = value
    },

    select_subs_date(params) {
      this.selected_subs_date = params
      this.change_handler('products', true)
    },

    select_at_subs(item, e) {
      const dates = this.dates.filter(
        el => el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
      )

      dates[0].items[item].select_date = e
      dates[0].items[item].qty = 1

      this.change_handler('dates', dates)
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

    parse_price(params) {
      let total = 0

      params.items.forEach(el => {
        if (el.qty) {
          const price = el.discount_price ? el.discount_price : el.normal_price

          total += price * el.qty
        }
      })

      return `Rp. ${total.toLocaleString().replace(',', '.')}`
    },

    parse_date({ date }) {
      const splitted = date.split('-')

      return `${splitted[2]} ${this.month[+splitted[1]]} ${splitted[0]}`
    },

    expand(index) {
      this.expansion[index].show = !this.expansion[index].show
    },

    sort_dates() {
      // this.dates = this.dates.sort()
    },

    select_payment(type) {
      this.selected_payment = type
      this.payment = false
    },

    get_cour() {
      if (this.store) {
        const lists = this.store.courier.map(el => {
          if (el.includes('custom')) {
            return `${el.split('|')[1]}|${el.split('|')[2]}`
          } else {
            return el
          }
        })

        return lists
      }
    },

    async check_voucher() {
      console.log('get voucher')
      const request = await this.$store.dispatch('request', {
        url: '/api/vouchers',
        method: 'post',
        data: {
          store_id: this.store.id
        }
      })

      console.log('get voucher', request)

      this.list_vouchers = request.data.filter(el => el.show_select)

      const custom = request.data.filter(el => !el.show_select)

      if (custom.length) {
        this.custom_voucher = true
      }
    },

    async use_voucher(params) {
      console.log(params, 'use params')
      const total = this.grand_total
      console.log(total, ' total')

      this.voucher = false
      this.applying_voucher = true

      if (params.is_custom_voucher) {
        console.log('custom voucher')
        this.voucher_form = params.value
      } else {
        console.log('static voucher', params)
        const body = {
          id: this.store.id,
          bot_id: this.store.bot_id,
          store_name: this.store.name,
          bot_name: this.site.store,
          uuid: this.site.uuid,
          voucher_code: params.value.name,
          category: this.site.category
        }
        const execute_voucher = await this.$store.dispatch('request', {
          url: '/voucher/apply',
          method: 'post',
          data: body
        })

        console.log(execute_voucher.data.status, ' execute_voucher.data.status')

        if (execute_voucher.status == 200 && execute_voucher.data.status) {
          if (!this.rp_order) {
            const mapped_cart = []

            this.cart.forEach(el => {
              const filtered = execute_voucher.data.result.items.filter(item => item.id === el.id && item.SKU == item.SKU)

              if (filtered.length) {
                el.detail[0].normal_price = filtered[0].normal_price
                el.detail[0].discount_price = filtered[0].discount_price
              }

              mapped_cart.push(el)
            })

            this.$store.dispatch('setState', {
              payload: {
                key: 'cart',
                data: mapped_cart
              }
            })
          } else {
            const dates = this.dates.map(el => el)
            const mapped_dates = dates.map(order => {
              const merged_orders = execute_voucher.data.result.merged_orders
              const find_result = merged_orders.filter(el => el.delivery_date === order.date)

              if (find_result.length) {
                order.items = order.items.map(order_item => {
                  if (order_item.select_date) {
                    const combine_detail = find_result[0].items.filter(m_item => m_item.id === order_item.product_id)

                    if (combine_detail.length) {
                      order_item.discount_price = combine_detail[0].discount_price
                      order_item.normal_price = combine_detail[0].normal_price
                    }
                  }

                  return order_item
                })
              }

              
              return order
            })

            console.log(mapped_dates)

            // this.$store.dispatch('setState', {
            //   payload: {
            //     key: 'dates',
            //     data: mapped_dates
            //   }
            // })
          }

          console.log(execute_voucher.data.result, ' execute_voucher.data.result')
          const new_total = this.grand_total
          console.log(new_total, ' new_total')


          this.applied_voucher = {
            name: params.value.name,
            value: execute_voucher.data.result.old_total != execute_voucher.data.result.total
              ? Math.abs(total - new_total)
              : 0
          }

          // console.log(execute_voucher)
          // this.update_cache('single-order', params.value.name)
        } else {
          const self = this

          if (execute_voucher.data.message == 'Voucher code is out of stock.') {
            this.check_voucher()
          }

          this.$store.dispatch('setState', {
            payload: {
              key: 'alert',
              data: {
                status: true,
                text: execute_voucher.data.message
              }
            }
          })

          setTimeout(() => {
            self.$store.dispatch('setState', {
              payload: {
                key: 'alert',
                data: {
                  status: true,
                  text: execute_voucher.data.message
                }
              }
            })
          }, 3000)
        }
      }

      // this.applied_voucher = params.value
      this.applying_voucher = false
    },

    update_cache(mode, voucher_code) {
      const self = this

      if (mode == 'single-order') {
        const cart = {
          type: 'single-order',
          notes: this.notes,
          voucher_code: voucher_code,
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
            notes: this.notes,
            voucher_code: voucher_code,
            items: mapped
          }
        })
      }
    },

    async validate_voucher() {
      try {
        console.log()
        const validate = await this.$store.dispatch('request', {
          url: '/api/voucher',
          method: 'post',
          data: {
            voucher: '',
            uuid: '',
            botname: '',
            categories: '',
            products: '',
          }
        })
      } catch (error) {
        return error
      }
    },

    async execute_order() {
      // console.log('execute order')
      this.order_loading = true

      const data = {
        store: {
          id: this.store.id,
          bot_id: this.store.bot_id,
          store_name: this.store.name,
          bot_name: this.site.store,
          use_ext_callback: this.store.ext_api_callback,
          use_ext_api_payment: this.store.ext_api_payment
        },
        customer: {
          uuid: this.site.uuid,
          method: "create",
          source: this.site.source,
          category: this.site.category,
          address: this.customer.address,
          city: this.customer.city,
          email: this.customer.email,
          name: this.customer.name,
          phone: this.customer.phone,
          province: this.customer.province,
          sub_district: this.customer.sub_district,
          urban: this.customer.urban,
          zip_code: this.customer.zip_code
        },
        order: {
          courier: this.selected_courier,
          harga_ongkir: this.selected_courier.price,
          voucher_code: this.applied_voucher.name ? this.applied_voucher.name : this.voucher_code,
          nama_kurir: this.selected_courier.name,
          payment: this.selected_payment,
          payment_type: this.selected_payment,
          set_date: this.date,
          notes: this.notes && this.notes.length ? this.notes : '',
        }
      }

      const request = await this.$store.dispatch('request', {
        url: '/order',
        method: 'post',
        data
      })

      if (request.status == 200)  {
        if (request.data.status) {
          this.order_loading = false
          this.$router.replace('/success/checkout')

          return true
        }
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'alert',
          data: {
            status: true,
            text: 'Order gagal, silahkan coba lagi.'
          }
        }
      })
      this.order_loading = false
    }
  }
}
</script>
