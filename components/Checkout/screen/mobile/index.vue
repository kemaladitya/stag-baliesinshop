<template>
  <div class="pa-2">
    <FailedDialog
      :show="show_dialog"
      :message="show_dialog_message"
      :event_handler="event_handler"
    />

    <v-dialog v-model="invalid_voucher">
      <v-card style="padding: 20px;">
        <v-img :src="require('@/assets/images/invalid-card.jpeg')" width="80" />
        <center>
          <div class="pt-2" style="font-size: 16px; font-weight: 600; color: #5a5a5a;" v-html="invalid_message" />
        </center>
      </v-card>
    </v-dialog>
    <div
      style="
        padding-bottom: 100px;
        min-height: calc(100vh - 140px) !important;
        max-height: calc(100vh - 140px) !important;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-bottom: 180px;
      "
    >
      <Customer />
      <v-divider />
      <Voucher
        :voucher="voucher"
        :submit="submit_voucher"
        :use_custom_voucher="use_custom_voucher"
      />
      <v-divider />
      <OrderInfo :voucher="voucher" :courier="courier && courier.selected ? courier.selected : courier" />
      <v-divider />
      <Courier
        v-if="!loading_courier"
        :courier="courier"
        :select="select_courier"
        :general_total_order="general_total_order"
        :custom_rules="custom_rules"
      />
      <v-divider />
      <Payment
        :payment="payment"
        :select="select_payment"
        :general_total_order="general_total_order"
        :custom_rules="custom_rules"
        :courier="courier.selected ? courier.selected.name : ''"
        :checked_button="checked_button"
      />
    </div>
    <!-- <v-snackbar
      id="b-cour-unavailable"
      v-model="courier.unavailable_cour"
      color="error"
      timeout="3000"
      style="z-index: 999 !important"
      absolute
      multi-line
      top
      center
    >
      Oops.. Service is not available for your city
    </v-snackbar> -->
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
    <v-bottom-sheet v-model="order_failed">
      <v-sheet>
        <center class="pa-3">
          <v-img
            class="mb-4"
            width="50"
            src="https://www.clipartmax.com/png/full/120-1203855_error-handling-in-swift-error-logo-png.png"
          />
          <div style="">Proses order gagal,</div>
          <div style="">mohon untuk memuat ulang halaman</div>
          <div style="">jika tetap gagal, silahkan menghubungi customer service.</div>
        </center>
      </v-sheet>
    </v-bottom-sheet>
    
    <checkout-footer
      :execute_order="execute_order"
      :general_total_order="general_total_order"
      :checked_button="checked_button"
      :subtotal="subtotal"
    />
  </div>
</template>

<script>
import Customer from "@/components/checkout/screen/mobile/constants/customer";
import Voucher from "@/components/checkout/screen/mobile/constants/voucher";
import OrderInfo from "@/components/checkout/screen/mobile/constants/order-info";
import Courier from "@/components/checkout/screen/mobile/constants/courier";
import Payment from "@/components/checkout/screen/mobile/constants/payment";
import Format from "@/components/general.json";
import Footer from "@/components/partials/footer/checkout";
import FailedDialog from "@/components/dialogs/failed-message";

import API from "@/components/general.js";

export default {
  components: {
    Customer,
    Voucher,
    OrderInfo,
    Courier,
    Payment,
    "checkout-footer": Footer,
    FailedDialog,
  },

  data: () => ({
    loading_courier: true,
    show_dialog: false,
    show_dialog_message: "",
    invalid_voucher: false,
    invalid_message: "INVALID VOUCHER",
    voucher: {
      lists: [],
      is_custom_voucher: false,
      selected: null,
      results: null,
      form: false,
      loading: false,
    },
    courier: {
      lists: [],
      selected: null,
      loading: false,
      unavailable_cour: false,
      prices: [],
    },
    payment: {
      lists: Format.payment_type,
      selected: null,
      loading: false,
    },
    order_loading: false,
    order_failed: false,
    custom_rules: {
      min: 0,
      max: 0,
      message: '',
    }
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    merchant() {
      return this.$store.state.merchant
    },

    customer() {
      return this.$store.state.customer
    },

    products() {
      return this.$store.state.products
    },

    package_cart() {
      return this.$store.state.package_cart
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart
      }
    },

    parsed_product() {
      let total = 0;
      const product = [];

      this.cart.forEach(el => {
        const find = this.products.filter(
          product => product.id === el.id && product.SKU === el.sku
        );

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
            qty            : el.qty,
            express_delivery: find[0].express_delivery,
            express_delivery_setup: find[0].express_delivery_setup,
          });

          total += (find[0].discount_price || find[0].normal_price) * el.qty;
        }
      });

      return { product, total };
    },

    list_product_id() {
      if (this.order_type === 'single-order') {
        return this.cart.map(item => String(item.id))
      } else if (this.order_type === 'subscription-order' || this.order_type === 'package-order') {
        const list_ids = []

        this.cart.forEach(el => {
          el.items.forEach(item => {
            list_ids.push(String(item.id))
          })
        })

        return list_ids
      }
    },

    package_cart() {
      return this.$store.state.package_cart
    },

    checked_button() {
      if ((!this.store.max_order && !this.store.min_order)) {
        if (this.courier.selected && this.payment.selected) {
          return false
        } else {
          return true
        }
      } else {
        if (this.order_type === 'single-order') {
          if (this.courier.selected && this.courier.selected.name == "Express Delivery") {
            const list_items = [];

            this.parsed_product.product.forEach(_ => {
              if (_.express_delivery) {
                if (this.subtotal < _.express_delivery_setup.min_order) {
                  list_items.push(_.name)
                }
              }
            });

            return list_items.length ? true : false;
          }

          if (this.general_total_order <= this.store.max_order) {
            if (this.general_total_order >= this.store.min_order) {
              if (this.courier.selected) {
                if (this.payment.selected) {
                  return false
                }
              }
            }
          }
        } else if (this.order_type === 'subscription-order') {
          let is_valid = false

          this.cart.forEach(el => {
            if (!is_valid) {
              let total = 0

              el.items.forEach(item => {
                const find = this.products.filter(
                  product => product.id === item.id && product.SKU === item.sku
                )

                total += ((find[0].discount_price || find[0].normal_price) * item.qty)
              })

              if (total < this.store.min_order || total > this.store.max_order) {
                is_valid = true
              }
            }
          })

          return is_valid || !this.courier.selected || !this.payment.selected
        } else if (this.order_type === 'package-order') {
          if (this.store.customize_setup) {
            const order_type = this.package_cart[0].type
            const find_rules = JSON.parse(this.store.customize_setup).packaging.rules.detail.filter(el => el.type === order_type)

            if (find_rules.length) {
              this.custom_rules = {
                min: find_rules[0].min,
                max: find_rules[0].max,
              }
            }

            if (this.custom_rules.min > this.general_total_order || this.custom_rules.max < this.general_total_order) {
              return true
            } else {
              if (this.courier.selected && this.payment.selected) {
                return false
              }
            }
          }
        }

        return true
      }
    },

    user_notes() {
      return this.$store.state.user_notes
    },

    general_total_order() {
      let total = 0

      if (this.order_type === 'single-order') {
        this.cart.forEach(el => {
          const find = this.products.filter(
            product => product.id === el.id && product.SKU === el.sku
          )

          if (find.length) {
            total += (find[0].discount_price || find[0].normal_price) * el.qty
          }
        })
      } else if (this.order_type === 'subscription-order') {
        this.cart.forEach(({ items }) => {
          items.forEach(el => {
            const find = this.products.filter(
              product => product.id === el.id && product.SKU === el.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * el.qty
            }
          })
        })
      } else if (this.order_type === 'package-order') {
        this.cart.forEach(el => {
          el.items.forEach(item => {
            const find = this.products.filter(
              product => product.id === item.id && product.SKU === item.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * item.qty
            }
          })
        })
      }

      return total + +(this.courier.selected ? this.courier.selected.price : 0)
    },

    subtotal() {
      let total = 0

      if (this.order_type === 'single-order') {
        this.cart.forEach(el => {
          const find = this.products.filter(
            product => product.id === el.id && product.SKU === el.sku
          )

          if (find.length) {
            total += (find[0].discount_price || find[0].normal_price) * el.qty
          }
        })
      } else if (this.order_type === 'subscription-order') {
        this.cart.forEach(({ items }) => {
          items.forEach(el => {
            const find = this.products.filter(
              product => product.id === el.id && product.SKU === el.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * el.qty
            }
          })
        })
      } else if (this.order_type === 'package-order') {
        this.cart.forEach(el => {
          el.items.forEach(item => {
            const find = this.products.filter(
              product => product.id === item.id && product.SKU === item.sku
            )

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * item.qty
            }
          })
        })
      }

      return total;
    },
  },

  watch: {
    store(newval, oldval) {
      if (newval.hasOwnProperty('courier') && !oldval.hasOwnProperty('courier')) {
        this.courier.lists = newval.courier.map(el => {
          if (el.includes('custom')) {
            return `${el.split('|')[1]}|${el.split('|')[2]}`
          } else {
            return el
          }
        })

        // this.select_courier(this.courier.lists[0])
      }
    },

    // cart(newval, oldval) {
    //   this.select_courier(this.courier.lists[0])
    // },
  },

  async mounted() {
    this.courier.loading = true
    this.loading_courier = true

    await this.get_list_voucher()

    const cart = await API.cart_manager(this, {
      method: 'get',
      info: {
        item: null,
        store: {
          name   : this.site.store,
          source : this.site.source,
          uuid   : this.site.uuid,
          outlet : this.site.category,
        },
      },
    })

    if (cart && cart.voucher) {
      this.submit_voucher(true, cart.voucher)
    }

    if (this.store.hasOwnProperty('courier')) {
      if (this.store.courier.length) {
        console.log(this.store.courier);
        this.courier.lists = this.store.courier.map(el => {
          return el
          // if (el.includes('custom')) {
          // } else {
          //   return el
          // }
        })

        this.get_courier_prices(this.courier.lists);

        // console.log("courier --> ", this.courier.lists)
        // // hardcode
        // this.courier.lists.unshift("custom|Hawker|Express Delivery|5000|1");

        // console.log("this.store.courier", this.courier.lists);

        // if (this.courier.lists.length === 1) {
        //   this.select_courier(this.courier.lists[0])
        // }
      }

      if (this.store.store_type) {
        const store = this.store;

        store.payment_type = this.merchant.payment.split(",");

        this.$store.dispatch("setState", {
          payload: {
            key : "store",
            data: this.store
          }
        })
      }
    }

    this.loading_courier = false
  },

  methods: {
    event_handler(key, value) {
      this[key] = value;
    },

    async get_courier_prices(lists) {
      if (this.store.store_type) {
        this.courier.loading = true;

        const pricing = await this.$store.dispatch('request', {
            url: '/api/courier',
            method: 'post',
            data: {
              merchant : this.$route.query.c,
              customer : this.customer.id,
              items    : this.cart,
            },
          });

        console.log(pricing);
        this.courier.lists = pricing.data;

        this.courier.loading = false;
      } else {
        for (let index = 0; index < lists.length; index++) {
          const element = lists[index];
          console.log("get_courier_prices", element);
          
          const pricing = await this.$store.dispatch('request', {
            url: '/api/deliverycost/check',
            method: 'post',
            data: {
              name                  : element,
              store_id              : this.store.id,
              store_name            : this.store.name,
              uuid                  : this.customer.chatkey,
              customer_address      : this.customer.address,
              customer_city         : this.customer.city,
              customer_urban        : this.customer.urban,
              customer_sub_district : this.customer.sub_district,
              items                 : this.list_product_id,
            },
          });
  
          this.courier.prices.push(pricing.data);
        }
      }
    },

    check_delivery_order() {
      const list_items = [];

      this.parsed_product.product.forEach(_ => {
        if (_.express_delivery) {
          if (this.general_total_order < _.express_delivery_setup.min_order) {
            list_items.push(_.name)
          }
        }
      });

      return list_items.length;
    },

    // async
    select_courier(cour) {
      // this.courier.loading = true
      console.log(cour)

      this.courier.selected = {
        custom  : false,
        message : cour.range,
        name    : cour.name,
        price   : cour.final_price,
        range   : cour.range,
        service : cour.service,
        status  : true,
      }

      // if (cour === "custom|Hawker|Express Delivery|5000|1") {
      //   this.courier.selected = {
      //     "custom"  : true,
      //     "message" : null,
      //     "name"    : "Express Delivery",
      //     "price"   : 5000,
      //     "range"   : "Today",
      //     "service" : "Sari Roti",
      //     "status"  : true,
      //   };
      //   this.courier.loading = false;

      //   return true;
      // }

      // console.log("cour check bablas")

      // const pricing = await this.$store.dispatch('request', {
      //   url: '/api/deliverycost/check',
      //   method: 'post',
      //   data: {
      //     name                  : cour,
      //     store_id              : this.store.id,
      //     store_name            : this.store.name,
      //     uuid                  : this.customer.chatkey,
      //     customer_address      : this.customer.address,
      //     customer_city         : this.customer.city,
      //     customer_urban        : this.customer.urban,
      //     customer_sub_district : this.customer.sub_district,
      //     items                 : this.list_product_id,
      //   },
      // });

      // if (pricing.status == 200 && (pricing.data.status || pricing.data.service === "gojek") && pricing.data.name.length) {
      //   pricing.data.status = true;
      //   this.courier.selected = pricing.data
      // } else if (pricing.status == 200 && !pricing.data.status && pricing.data.name.length) {
      //   this.courier.unavailable_cour = true
      // }

      // this.courier.loading = false;
    },

    select_payment(type) {
      this.payment.selected = type
    },

    async get_list_voucher() {
      this.voucher.loading = true

      const request = await this.$store.dispatch('request', {
        url: '/api/vouchers',
        method: 'post',
        data: { store_id: this.store.id }
      })
      const results = request.data.map(el => {
        el.sku_product = JSON.parse(el.sku_product)

        return el
      })
      const map_voucher = (() => {
        const rp_mode = results.filter(el => el.sku_product.mode === 'rp')
        const so_mode = results.filter(el => el.sku_product.mode === 'so')
        const all_mode = results.filter(el => el.sku_product.mode === 'all')

        if (this.order_type === 'single-order') {
          return [ ...so_mode, ...all_mode, ...rp_mode ]
        } else if (this.order_type === 'subscription-order') {
          return [ ...rp_mode, ...all_mode, ...so_mode ]
        } else {
          return all_mode
        }
      })()
      
      this.voucher.is_custom_voucher = !!map_voucher.filter(el => !el.show_select).length
      this.voucher.lists = map_voucher
      this.voucher.loading = false
    },

    use_custom_voucher() {
      this.voucher.form = true
    },

    validate_voucher_mode(code) {
      /**
       ** INSERT VOUCHER CODE
       ** MATCH VOUCHER MODE
       **  - IF VOUCHER_MODE === ALL
       **    RETURN TRUE

       **  - IF VOUCHER_MODE === RP 
       **    -> IF ORDER_TYPE === SUBSCRIPTION-ORDER 
       **      RETURN TRUE
       **  - ELSE IF VOUCHER_MODE === SO
       **    -> IF ORDER_TYPE === SINGLE-ORDER
       **      RETURN TRUE
       **  - ELSE IF VOUCHER_MODE === PO
       **    -> IF ORDER_TYPE === PACKAGE-ORDER
       **      RETURN TRUE

       **  RETURN FALSE
       */

      const convert_order_type = (() => {
        if (this.order_type === 'subscription-order') return 'rp'
        if (this.order_type === 'single-order') return 'so'
        if (this.order_type === 'package-order') return 'so'

        return null;
      })();
      const is_selection_mode = this.voucher.lists.filter(_ => _.show_select && _.name && _.name.toLowerCase() === code.toLowerCase());
      const is_exist_custom_with_all_mode = this.voucher.lists.filter(_ => !_.show_select && _.sku_product.mode === 'all');
      const is_exist_custom_without_all_mode = this.voucher.lists.filter(_ => !_.show_select && _.sku_product.mode === convert_order_type);

      console.log("@code |", code)
      console.log("@convert_order_type |", convert_order_type)
      console.log("@is_selection_mode |", is_selection_mode)
      console.log("@is_exist_custom_with_all_mode |", is_exist_custom_with_all_mode)
      console.log("@is_exist_custom_without_all_mode |", is_exist_custom_without_all_mode)
      console.log("@this.voucher.lists |", this.voucher.lists)

      if (is_selection_mode.length) return true;
      if (is_exist_custom_with_all_mode.length) return true;
      if (is_exist_custom_without_all_mode.length) return true;

      this.invalid_voucher = true;
      this.invalid_message = `MAAF KODE VOUCHER <span style="color: #1565c0;">${code}</span>, TIDAK BERLAKU`

      return false;
    },

    async submit_voucher(status, code) {
      this.voucher.loading = true

      if (status && this.validate_voucher_mode(code)) {
        const request = await this.$store.dispatch('request', {
          url: '/voucher/apply',
          method: 'post',
          data: {
            id: this.store.id,
            bot_id: this.store.bot_id,
            store_name: this.store.name,
            bot_name: this.store.bot_name,
            uuid: this.customer.chatkey,
            category: this.$route.query.c,
            voucher_code: code,
          }
        })

        if (request.data.status) {  
          this.voucher.results = request.data.result.items
          this.voucher.selected = {
            name  : code,
            value : Math.abs(request.data.result.old_total - request.data.result.total)
          }

          const new_product = this.products.map(el => {
            request.data.result.items.forEach(date => {
              date.items.forEach(item => {
                if (item.id === el.id && item.SKU === el.SKU) {
                  el.normal_price = item.normal_price
                  el.discount_price = item.discount_price
                  el.is_promo = !!item.discount_price || false

                  return el
                }
              })
            })

            return el
          })

          this.$store.dispatch('setState', {
            payload: {
              key: 'products',
              data: new_product
            }
          })
        } else {
          // /voucher/remove
          this.show_dialog = true;
          this.show_dialog_message = request.data.message;
          this.voucher.selected = null;
          this.$store.dispatch("request", {
            url   : "/voucher/remove",
            method: "post",
            data: {
              uuid     : this.customer.uuid,
              bot_name : this.site.store
            }
          })
        }
      }

      this.voucher.form = false
      this.voucher.loading = false
    },

    async execute_referral() {
      // * buat di checkout
      const submit = await this.$store.dispatch("request", {
        url: "/referral/event/redeem/referral_ext_val",
        method: "post",
        data: {
          botid   : this.store.bot_id,
          source  : this.site.source,
          userloc : this.customer.city,
          data    : { e_data: this.voucher.selected.name },
          uuid    : this.customer.uuid
        }
      })

      console.log("execute_referral", submit)
    },

    async execute_order() {
      this.order_loading = true

      // if (this.store.event && list_development.includes(this.$route.query.u) && this.payment.selected == 'cod') {
      //   await this.execute_referral()
      // }

      // console.log("submit", submit)

      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth()
      const years = date.getFullYear()
      const request = await this.$store.dispatch('request', {
        url: '/transaction/order',
        method: 'post',
        data: {
          method   : 'create',
          store_id : this.store.id,
          outlet   : this.$route.query.c,
          bot_name : this.site.store,
          uuid     : this.site.uuid,
          source   : this.site.source,
          order    : {
            courier       : this.courier.selected,
            harga_ongkir  : this.courier.selected.price,
            nama_kurir    : this.courier.selected.name,
            payment       : this.payment.selected,
            payment_type  : this.payment.selected,
            set_date      : `${years}-${month}-${day}`,
            delivery_time : '08:00 - 17:00',
            delivery_date : null,
            voucher_code  : this.voucher.selected,
            notes         : this.user_notes,
          }
        }
      })

      this.order_loading = false

      if (request.status === 200 && request.data.status) {
        this.$router.push(`/success/checkout/${this.store.phone}`)
      } else {
        this.order_failed = true
      }
    }
  }
}
</script>

<style lang="scss">
#b-cour-unavailable > div > .v-snack__content {
  font-weight: 600 !important;
  color: black;
}
</style>