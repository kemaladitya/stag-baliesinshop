<template>
  <!-- <v-container class="b-font pt-12 pl-1 pr-1" style="overflow-x: hidden">
    <v-dialog v-model="voucher_form" persistent max-width="100%">
      <InsertVoucherCode :usevoucher="use_voucher" :changehandler="change_handler" />
    </v-dialog>

    <div v-if="on_progress_load">
      loading...
    </div>

    <div v-else>
      <Checkout
        v-if="cart.length || dates.length || customized_values"
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
        :processbtn="process_btn"
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

    <v-footer
      v-if="cart.length || dates.length"
      fixed
      padless
      color="grey lighten-3"
      style="width: 100%;"
    >
      <Footer
        :grandtotal="grand_total"
        :processbtn="process_btn"
        :executeorder="execute_order"
      />
    </v-footer>
  </v-container> -->
</template>

<script>
// import API from '@/components/General'
// import Checkout from '@/components/___Checkout/index'
// import InsertVoucherCode from '@/components/Dialogs/Checkout/insert-voucher-code'
// import Courier from '~/components/Bottom-Sheet/Checkout/courier.vue'
// import Voucher from '~/components/Bottom-Sheet/Checkout/voucher.vue'
// import Payment from '~/components/Bottom-Sheet/Checkout/payment.vue'
// import Footer from '~/components/Footer/checkout.vue'
// import Format from '~/components/General.json'

// export default {
//   components: {
//     Checkout,
//     InsertVoucherCode,
//     Voucher,
//     Courier,
//     Payment,
//     Footer
//   },

//   data: () => ({
//     all_voucher: [],
//     applying_voucher: false,
//     order_loading: false,
//     shipping_cost_loading: false,
//     triggered: false,
//     select_date: false,
//     date: new Date().toISOString().substr(0, 10),
//     page: 1,
//     max_rp: '',
//     voucher_code: '',
//     applied_voucher: { name: null, value: 0 },
//     menu: false,
//     expansion: [],
//     products: false,
//     payment: false,
//     voucher: false,
//     courier: false,
//     voucher_form: false,
//     list_vouchers: [],
//     custom_voucher: false,
//     selected_payment: '',
//     selected_courier: {
//       status: false,
//       name: '',
//       price: 0
//     },
//     payment_detail: Format.payment_type
//   }),

//   computed: {
//     min_rp() {
//       return this.$store.state.min_rp
//     },

//     store() {
//       return this.$store.state.store
//     },

//     dates() {
//       return this.$store.state.dates
//     },

//     notes() {
//       return this.$store.state.user_notes
//     },

//     list_products() {
//       return this.$store.state.products
//     },

//     month() {
//       return this.$store.state.month
//     },

//     customer() {
//       return this.$store.state.customer
//     },

//     cart() {
//       return this.$store.state.cart
//     },

//     site () {
//       return this.$store.state.site
//     },

//     single_order_date() {
//       const date = new Date()
//       const day = date.getDate()

//       date.setDate(day + 1)

//       return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
//     },

//     rp_order() {
//       return this.$store.state.rp_order
//     },

//     customized_values() {
//       return this.$store.state.customized_values
//     },

//     total() {
//       if (!this.cart.length) return 0

//       const self = this
//       const mapped = this.cart.map(el => el.qty * el.detail[0].normal_price)
//       const reduced = mapped.reduce((t, n) => t + n)

//       return (reduced * self.dates.length).toLocaleString().replace(/,/g, '.')
//     },

//     selected_date() {
//       const filtered = this.dates.filter(el => 
//         el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
//       )

//       if (filtered.length) {
//         return filtered[0].items
//       } else {
//         return []
//       }
//     },

//     grand_total() {
//       if (this.customized_values) {
//         return this.$store.state.grand_total
//       } else if (!this.rp_order) {
//         return this.normal_order()
//       } else {
//         return this.subs_order()
//       }
//     },

//     list_product() {
//       return this.$store.state.products.map(el => {
//         el.select_date = false

//         if (el.qty) {
//           el.select_date = true
//         }

//         return el
//       })
//     },

//     process_btn() {
//       if (this.rp_order) {
//         if (this.dates.length && this.selected_payment && this.selected_courier.status) {
//           return false
//         } else {
//           return true
//         }
//       } else {
//         if (this.cart.length && this.selected_payment && this.grand_total >= this.store.min_order && this.grand_total <= this.store.max_order && this.selected_courier.status) {
//           return false
//         } else {
//           return true
//         }
//       }
//     },

//     delivery_time_normal() {
//       return this.$store.state.delivery_time_normal
//     }
//   },
  
//   watch: {
//     dates(newval, oldval) {
//       const temp_expansion = []

//       newval.forEach(el => {
//         temp_expansion.push({ show: false })
//       })

//       this.expansion = temp_expansion
//     },
//   },

//   async beforeDestroy() {
//     await this.reset_cart()
//   },

//   async mounted () {
//     const date        = new Date()
//     const { c, u }    = this.$route.query
//     const get_product = await API.get_list_products(this.$store, {
//       category: c,
//       uid: u,
//       bot_id: this.$route.params.store
//     })
    
//     if (!get_product.status) {
//       if (get_product.message == 'Expired.') {
//         this.$router.replace('/error/link/expired')
//       }

//       if (get_product.message == 'Invalid URL.') {
//         this.$router.replace('/error/link/invalid')
//       }
//     }

//     if (this.customized_values != null || !this.rp_order) {
//       date.setHours(date.getHours() + 7)
//       date.setDate(date.getDate() + 1)

//       this.$store.dispatch('setState', {
//         payload: {
//           key : 'min_rp',
//           data: date.toISOString().slice(0, 10)
//         }
//       })
//     }

//     console.log(this.store.courier, ' this.store.courier')
//     if (this.store.courier.length == 1) {
//       const cour_name = this.store.courier[0].split('|').slice(1, 3).join('|')
//       await this.select_courier({
//         name                 : cour_name,
//         store_id             : this.store.id,
//         store_name           : this.site.store,
//         uuid                 : this.site.uuid,
//         customer_city        : this.customer.city,
//         customer_urban       : this.customer.urban,
//         customer_sub_district: this.customer.sub_district
//       })
//     }

//     if (!get_product.status) {
//       if (get_product.message == 'Expired.') {
//         this.$router.replace('/error/link/expired')
//       }

//       if (get_product.message == 'Invalid URL.') {
//         this.$router.replace('/error/link/invalid')
//       }
//     }

//     const cart_detail = await API.cart_detail(this.$store, {
//       bot_id    : this.store.bot_id,
//       store_name: this.site.store,
//       source    : this.site.source,
//       method    : 'get',
//       uuid      : this.site.uuid,
//       category  : this.site.category
//     })

//     console.log('cart_detail', cart_detail)

//     if (cart_detail.results && cart_detail.results.hasOwnProperty('type') && (cart_detail.results.type === 'box-order' || cart_detail.results.type === 'parcel-order')) {
//       const list_skus = []
//       let pkg_total   = 0

//       cart_detail.results.items.forEach(({ items }) => {
//         items.forEach(el => {
//           list_skus.push(el.SKU)
//           pkg_total += el.qty * (el.discount_price ? el.discount_price : el.normal_price)
//         })
//       })

//       const list_for_cart = this.list_products.filter(el => {
//         el.qty = 1

//         if (list_skus.includes(el.SKU)) {
//           return el
//         }
//       })

//       this.$store.dispatch('setState', {
//         payload: {
//           key : 'cart',
//           data: list_for_cart
//         }
//       })

//       this.$store.dispatch('setState', {
//         payload: {
//           key : 'customized_values',
//           data: cart_detail.results.items
//         }
//       })

//       this.$store.dispatch('setState', {
//         payload: {
//           key : 'grand_total',
//           data: pkg_total
//         }
//       })
//     }

//     if (!this.$store.state.fullpath.length) {
//       this.$store.dispatch('setState', {
//         payload: {
//           key : 'fullpath',
//           data: this.$route.fullPath
//         }
//       })
//     }

//     if (!this.store || !this.store.bot_id) {
//       this.$router.go(-1)
//     }

//     this.expansion = this.dates.map(el => ({ show: true }))

//     await this.check_voucher()

//     try {
//       if (cart_detail && cart_detail.results && cart_detail.results.used_voucher && cart_detail.results.used_voucher.length) {
//         const find_voucher = this.list_vouchers.filter(el => el.name === cart_detail.results.used_voucher)

//         console.log(find_voucher, 'find_voucher')

//         if (find_voucher.length) {
//           await this.use_voucher({ is_custom_voucher: false, value: find_voucher[0] })
//         }
//       }
//     } catch (error) {
//       console.log(error)
//       this.$router.go(-1)
//     }
//   },

//   methods: {
//     async select_courier(data) {
//       this.courier = false
//       const pricing = await this.$store.dispatch('request', {
//         url: '/deliverycost/check',
//         method: 'post',
//         data
//       })

//       if (pricing.status == 200) {
//         this.selected_courier = pricing.data
//       }
//     },

//     change_handler (key, value) {
//       this[key] = value
//     },

//     select_subs_date(params) {
//       this.selected_subs_date = params
//       this.change_handler('products', true)
//     },

//     select_at_subs(item, e) {
//       const dates = this.dates.filter(
//         el => el.date.split('-')[2] === this.selected_subs_date.split(' ')[0]
//       )

//       dates[0].items[item].select_date = e
//       dates[0].items[item].qty = 1

//       this.change_handler('dates', dates)
//     },

//     normal_order() {
//       if (this.cart.length) {
//         let total = 0

//         this.cart.forEach(el => {
//           console.log('count total ', el)
//           const pricing = el.detail[0].discount_price
//             ? el.detail[0].discount_price
//             : el.detail[0].normal_price

//           total += el.qty * pricing
//         })

//         return total
//       }
//     },

//     subs_order() {
//       let total = 0

//       this.dates.forEach(el => {
//         el.items.forEach(item => {
//           const pricing = item.discount_price
//             ? item.discount_price
//             : item.normal_price

//           total += item.qty * pricing
//         })
//       })

//       return total
//     },

//     parse_price(params) {
//       let total = 0

//       params.items.forEach(el => {
//         if (el.qty) {
//           const price = el.discount_price ? el.discount_price : el.normal_price

//           total += price * el.qty
//         }
//       })

//       return `Rp ${total.toLocaleString().replace(',', '.')}`
//     },

//     parse_date({ date }) {
//       const splitted = date.split('-')

//       return `${splitted[2]} ${this.month[+splitted[1]]} ${splitted[0]}`
//     },

//     expand(index) {
//       this.expansion[index].show = !this.expansion[index].show
//     },

//     sort_dates() {
//       // this.dates = this.dates.sort()
//     },

//     select_payment(type) {
//       this.selected_payment = type
//       this.payment = false
//     },

//     get_cour() {
//       if (this.store) {
//         const lists = this.store.courier.map(el => {
//           if (el.includes('custom')) {
//             return `${el.split('|')[1]}|${el.split('|')[2]}`
//           } else {
//             return el
//           }
//         })

//         return lists
//       }
//     },

//     async check_voucher() {
//       console.log('get voucher')
//       const request = await this.$store.dispatch('request', {
//         url: '/api/vouchers',
//         method: 'post',
//         data: {
//           store_id: this.store.id
//         }
//       })

//       console.log('get voucher', request)

//       this.list_vouchers = request.data.filter(el => el.show_select)
//       this.all_voucher = request.data

//       const custom = request.data.filter(el => !el.show_select)

//       if (custom.length) {
//         this.custom_voucher = true
//       }
//     },

//     async implement_voucher(type, params) {
//       try {
//         const self = this
//         const cat_list = type == 'static' ? params.value.categories_product.split(',') : []

//         if (type == 'static' && !cat_list.includes(this.site.category)) {
//           this.$store.dispatch('setState', {
//             payload: {
//               key : 'alert',
//               data: {
//                 status: true,
//                 text  : 'Voucher tidak berlaku di area Anda.'
//               }
//             }
//           })
//         }

//         const body  = {
//           id           : this.store.id,
//           bot_id       : this.store.bot_id,
//           store_name   : this.store.name,
//           bot_name     : this.site.store,
//           uuid         : this.site.uuid,
//           category     : this.site.category,
//           voucher_code : 
//             type == 'static'
//               ? params.value.name
//               : params.value
//         }

//         console.log(body, ' body')

//         const execute_voucher = await this.$store.dispatch('request', {
//           url: '/voucher/apply',
//           method: 'post',
//           data: body
//         })

//         // if (!execute_voucher.data) {
//         //   this.$store.dispatch('setState', {
//         //     payload: {
//         //       key : 'alert',
//         //       data: {
//         //         status: true,
//         //         text  : 'Voucher not valid!'
//         //       }
//         //     }
//         //   })

//         //   setTimeout(() => {
//         //     self.$store.dispatch('setState', {
//         //       payload: {
//         //         key : 'alert',
//         //         data: {
//         //           status: false,
//         //           text  : ''
//         //         }
//         //       }
//         //     })
//         //   }, 3000)
//         // }

//         if (execute_voucher.status == 200 && execute_voucher.data.status) {
//           const order_type = execute_voucher.data.result.order_type

//           if (order_type == 'single-order') {
//             const items = execute_voucher.data.result.items[0].items
//             const mapped_cart = []

//             this.cart.forEach(el => {
//               const filtered = items.filter(item => item.id === el.id && item.SKU == item.SKU)

//               if (filtered.length) {
//                 el.detail[0].normal_price   = filtered[0].normal_price
//                 el.detail[0].discount_price = filtered[0].discount_price
//               }

//               mapped_cart.push(el)
//             })

//             this.$store.dispatch('setState', {
//               payload: {
//                 key: 'cart',
//                 data: mapped_cart
//               }
//             })
//           } else if (order_type == 'rp-order') {
//             const mapped_dates = this.dates.map(el => {
//               const filtered_items = execute_voucher.data.result.items.filter(item => item.delivery_date == el.date)
//               const { items }      = filtered_items[0]
//               const date_items     = el.items.map(item => {
//                 const selected_item = items.filter(s_item => s_item.id === item.id)

//                 if (selected_item.length) {
//                   if (item.discount_price) {
//                     item.normal_price   = item.discount_price
//                     item.discount_price = selected_item[0].discount_price
//                   } else {
//                     item.discount_price = selected_item[0].discount_price
//                   }
//                 }

//                 return item
//               })

//               return {
//                 date          : el.date,
//                 delivery_time : el.delivery_time,
//                 items         : date_items
//               }
//             })

//             this.$store.dispatch('setState', {
//               payload: {
//                 key  : 'dates',
//                 data : mapped_dates
//               }
//             })
//           } else if (order_type == 'pkg-order') {
//             const mapped_results = execute_voucher.data.result.items.map(({ type, items }) => {
//               let total = 0

//               items.forEach(el => {
//                 if (el.discount_price) {
//                   total += (el.discount_price * el.qty)
//                 } else {
//                   total += (el.normal_price * el.qty)
//                 }
//               })

//               return { type, items, total}
//             })

//             this.$store.dispatch('setState', {
//               payload: {
//                 key  : 'customized_values',
//                 data : mapped_results
//               }
//             })
//           }

//           this.applied_voucher = {
//             name  : type == 'static' ? params.value.name : params.value,
//             value : Math.abs(execute_voucher.data.result.old_total - execute_voucher.data.result.total)
//           }
//         } else {
//           if (execute_voucher.data.message == 'Voucher code is out of stock.') {
//             this.check_voucher()
//           }

//           this.$store.dispatch('setState', {
//             payload: {
//               key : 'alert',
//               data: {
//                 status: true,
//                 text  : execute_voucher.data.message
//               }
//             }
//           })

//           setTimeout(() => {
//             self.$store.dispatch('setState', {
//               payload: {
//                 key : 'alert',
//                 data: {
//                   status: true,
//                   text  : execute_voucher.data.message
//                 }
//               }
//             })
//           }, 3000)
//         }
//       } catch (error) {
//         console.log(error)
//       }
//     },

//     async reset_cart() {
//       // const { c, u } = this.$route.query

//       // await API.get_list_products(this.$store, {
//       //   category: c,
//       //   uid: u,
//       //   bot_id: this.$route.params.store
//       // })

//       // if (!this.rp_order) {
//       //   console.log('reset so')
//       //   const cart        = this.cart.slice(0)
//       //   const mapped_cart = cart.map(el => {
//       //     let filtered = this.list_products.filter(product => el.id == product.id)

//       //     filtered[0].qty = el.qty

//       //     return filtered[0]
//       //   })

//       //   this.$store.dispatch('setState', {
//       //     payload: {
//       //       key: 'cart',
//       //       data: mapped_cart
//       //     }
//       //   })
//       // } else {
//       //   console.log('reset rp dates', this.dates)
//       //   const dates = []

//       //   this.dates.forEach(order => {
//       //     console.log(order, ';orders')
//       //     order.items = order.items.map(item => {
//       //       console.log(item, ' ; order - item')
//       //       const filtered = this.list_products.filter(product =>
//       //         item.select_date && item.qty && product.id == item.id
//       //       )

//       //       if (filtered.length) {
//       //         const f_item  = filtered[0]
//       //         const updated = {
//       //           SKU              : f_item.SKU,
//       //           detail_id        : f_item.detail[0].detail_id,
//       //           discount_price   : f_item.detail[0].discount_price,
//       //           id               : f_item.id,
//       //           main_image       : f_item.detail[0].main_image,
//       //           name             : f_item.name,
//       //           normal_price     : f_item.detail[0].normal_price,
//       //           product_id       : f_item.id,
//       //           qty              : item.qty,
//       //           select_date      : item.select_date,
//       //           variant          : f_item.detail[0].variant
//       //         }

//       //         return updated
//       //       } else {
//       //         return item
//       //       }
//       //     })
          
//       //     dates.push(order)
//       //   })

//       //   this.$store.dispatch('setState', {
//       //     payload: {
//       //       key: 'dates',
//       //       data: dates
//       //     }
//       //   })
//       // }
//     },

//     async use_voucher(params) {
//       this.used_voucher     = false
//       this.applying_voucher = true

//       if (!params.is_custom_voucher && typeof params.value != 'boolean') {
//         this.voucher   = false

//         await this.reset_cart()
//         await this.implement_voucher('static', params)

//         console.log('static voucher')
//       } else if (params.is_custom_voucher && typeof params.value == 'boolean') {
//         this.voucher      = false
//         this.voucher_form = true

//         console.log('custom voucher')
//       } else if (params.is_custom_voucher && typeof params.value != 'boolean') {
//         const filter_voucher = this.list_vouchers.filter(el => el.name.toLowerCase() == params.value.toLowerCase())
  
//         console.log('filter_voucher', filter_voucher)

//         if ((filter_voucher.length && filter_voucher[0].show_select != 1) || !filter_voucher.length) {
//           const find_null = this.all_voucher.filter(el => !el.name)

//           if (find_null.length) {
//             const find_mode = JSON.parse(find_null[0].sku_product)
            
//             if ((find_mode.mode == 'so' && !this.rp_order) || (find_mode.mode == 'rp' && !this.rp_order)) {
//               await this.reset_cart()

//               this.voucher_form = false

//               await this.implement_voucher('custom', params)

//               this.voucher = false

//               console.log('use custom voucher')
//             }
//           }
//         }
//       }

//       this.applying_voucher = false
//     },

//     update_cache(mode, voucher_code) {
//       const self = this

//       if (mode == 'single-order') {
//         const cart = {
//           type: 'single-order',
//           notes: this.notes,
//           voucher_code: voucher_code,
//           items: this.cart.map(el => ({
//             delivery_date: this.single_order_date,
//             delivery_time: this.delivery_time_normal,
//             items: [{
//               id: el.id,
//               qty: el.qty,
//               SKU: el.SKU,
//               name: el.name,
//               variant: el.detail[0].variant,
//             }]
//           }))
//         }

//         API.manage_cart(self.$store, {
//           store_name: this.site.store,
//           source: this.site.source,
//           method: 'set',
//           uuid: this.site.uuid,
//           detail: cart
//         })
//       } else {
//         const self = this
//         const mapped = this.dates.map(el => {
//           const items = el.items.filter(item => item.qty)
//           const cut = items.map(item => ({
//             id: item.id,
//             qty: item.qty,
//             variant: item.variant,
//             SKU: item.SKU,
//             name: item.name,
//           }))

//           return {
//             delivery_date: el.date,
//             delivery_time: el.delivery_time,
//             items: cut
//           }
//         })

//         API.manage_cart(self.$store, {
//           store_name: this.site.store,
//           source: this.site.source,
//           method: 'set',
//           uuid: this.site.uuid,
//           detail: {
//             type: 'rp-order',
//             notes: this.notes,
//             voucher_code: voucher_code,
//             items: mapped
//           }
//         })
//       }
//     },

//     async validate_voucher() {
//       try {
//         console.log()
//         const validate = await this.$store.dispatch('request', {
//           url: '/api/voucher',
//           method: 'post',
//           data: {
//             voucher: '',
//             uuid: '',
//             botname: '',
//             categories: '',
//             products: '',
//           }
//         })
//       } catch (error) {
//         return error
//       }
//     },

//     async execute_order() {
//       this.order_loading = true

//       console.log('kesini0')

//       if (this.customized_values) {
//         console.log('kesini1')
//         const customize_setup = JSON.parse(this.store.customize_setup).packaging.rules.detail
//         const mapped_customized_values = this.customized_values.map(el => {
//           const selected_mode = customize_setup.filter(setup => setup.type == el.type)

//           return { ...el, min_order: selected_mode[0].min, max_order: selected_mode[0].max}
//         })
//         const validate_total = mapped_customized_values.filter(el => el.total > el.max_order || el.total < el.min_order)

//         if (validate_total.length) {
//           this.order_loading = false

//           this.$store.dispatch('setState', {
//             payload: {
//               key: 'alert',
//               data: {
//                 status: true,
//                 text: 'Order gagal, total belanja anda belum memenuhi syarat.'
//               }
//             }
//           })

//           return true
//         }
//       }

//       if (!this.customized_values && this.rp_order) {
//         console.log('kesini2')
//         if (this.grand_total < this.store.min_order || this.grand_total > this.store.max_order) {
//           this.$store.dispatch('setState', {
//             payload: {
//               key: 'alert',
//               data: {
//                 status: true,
//                 text: 'Order gagal, total belanja anda tidak memenuhi syarat.'
//               }
//             }
//           })

//           return true
//         }
//       }

//       if (!this.customized_values && !this.rp_order) {
//         console.log('kesini3')
//         if (this.grand_total < this.store.min_order || this.grand_total > this.store.max_order) {
//           this.$store.dispatch('setState', {
//             payload: {
//               key: 'alert',
//               data: {
//                 status: true,
//                 text: 'Order gagal, total belanja anda tidak memenuhi syarat.'
//               }
//             }
//           })

//           return true
//         }
//       }

//       const notes         = this.notes && this.notes.length ? this.notes : ''
//       const voucher_code  = this.applied_voucher.name ? this.applied_voucher.name : this.voucher_code
//       const delivery_date = this.customized_values ? this.min_rp : null

//       const request = await this.$store.dispatch('request', {
//         url    : '/transaction/order',
//         method : 'post',
//         data   : {
//           method   : 'create',
//           store_id : this.store.id,
//           bot_name : this.site.store,
//           uuid     : this.site.uuid,
//           source   : this.site.source,
//           order    : {
//             courier       : this.selected_courier,
//             harga_ongkir  : this.selected_courier.price,
//             nama_kurir    : this.selected_courier.name,
//             payment       : this.selected_payment,
//             payment_type  : this.selected_payment,
//             set_date      : this.date,
//             delivery_time : this.delivery_time_normal,
//             delivery_date,
//             voucher_code,
//             notes
//           }
//         }
//       })

//       console.log(JSON.stringify(request, null, 2))

//       if (request.status == 200)  {
//         if (request.data.status) {
//           this.order_loading = false
//           this.$router.replace('/success/checkout')

//           return true
//         }
//       }

//       this.$store.dispatch('setState', {
//         payload: {
//           key: 'alert',
//           data: {
//             status: true,
//             text: 'Order gagal, silahkan coba lagi.'
//           }
//         }
//       })
//       this.order_loading = false
//     }
//   }
// }
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
</style>