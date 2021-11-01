<template>
  <div>
    <v-card id="b-list-products" class="pt-12 mb-12" flat tile>
      <v-progress-linear
        v-show="loading"
        style="z-index: 9999 !important"
        color="blue darken-2"
        height="3"
        indeterminate
      />
      <v-card style="width: 100%" flat tile>
        <v-card v-if="loading_product" width="100%" flat tile>
          <center style="width: 100%">
            <div style="width: 50%; margin-top: 30vh">
              <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading="lazy" />
              <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
                Mohon menunggu...
              </div>
            </div>
          </center>
        </v-card>
        <div v-else>
          <Products
            :productdetail="product_detail"
            :loadingproduct="loading_product"
          />
        </div>
      </v-card>
      <v-snackbar v-model="snackbar">information</v-snackbar>
    </v-card>

    <transition v-if="!loading_product" name="scroll-y-reverse-transition" mode="out-in" appear>
      <div
        v-show="(cart.length)"
        style="position: fixed; bottom: 0; padding: 10px 8px; width: 100%; z-index: 9;"
      >
        <v-card
          class="d-flex flex-row pa-3 pr-3 pl-3"
          color="#fd0"
          :to="cart_url"
        >
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            Lihat Keranjang
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600; color: grey"
            flat
          >
            {{ order_info.qty_item }} item
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            <div style="font-weight: 600">
              Rp {{
                order_info.total
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}
            </div>
          </v-card>
        </v-card>
      </div>
    </transition>
    <!-- <v-card
      v-show="(!rp_order && cart.length) || rp_order && dates.length"
      class="basket-background-shadow"
      width="100%"
      height="40px"
      style="position: fixed; bottom: -5px; z-index: 8"
      tile
    >
      &nbsp;
    </v-card>
    <v-dialog
      max-width="290"
      persistent
      v-model="dialog_list_dates"
    >
      <v-card class="pa-2">
        <div class="d-flex flex-row">
          <div style="font-size: 14px; font-weight: 600;">Select date:</div>
          <v-spacer />
          <div class="d-flex flex-row">
            <v-icon small color="red" @click="dialog_list_dates = false">mdi-close</v-icon>
          </div>
        </div>
        <v-card
          v-for="(item, index) in dates"
          :key="index"
          class="mt-1 pa-2"
          style="
            background-color: aliceblue;
            border-color: #0D47A1 !important;
            font-size: 13px;
            font-weight: 600;
          "
          outlined
          @click="add_to_rp_cart(item.date)"
        >
          {{ item.date }}
        </v-card>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
/** 
 * * get store info
 * * get products if not exist
 * * get customer info if not exist (for get cart)
 * * get cart
 */

import API from '@/components/General'
import Products from '@/components/Products/index'
import Loading from '@/components/Loading/list_product'
import { mode } from "../../../config.json"

export default {
  components: {
    Loading,
    Products
  },

  data: () => ({
    page: 1,
    snackbar: false,
    loading_product: false,
    dialog_list_dates: false,
    temp_product: {}
  }),

  computed: {
    loading() {
      return this.$store.state.loading
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    customer() {
      return this.$store.state.customer
    },

    order_type() {
      return this.$store.state.order_type
    },

    list_product() {
      return this.$store.state.products
    },

    list_merchant() {
      return this.$store.state.list_merchant
    },

    merchant() {
      return this.$store.state.merchant
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

    order_info() {
      let qty_item = 0
      let total    = 0

      if (this.order_type === 'single-order' && this.cart) {
        this.cart.forEach(el => {
          const find = this.list_product.filter(
            product => product.id === el.id && product.SKU === el.sku
          )

          if (find.length) {
            qty_item += el.qty
            total    += (find[0].discount_price || find[0].normal_price) * el.qty
          }
        })
      } else if (this.order_type === 'subscription-order' && this.cart) {
        this.cart.forEach(date => {
          date.items.forEach(item => {
            const find = this.list_product.filter(
              product => product.id === item.id && product.SKU === item.sku
            )

            if (find.length) {
              qty_item += item.qty
              total    += (find[0].discount_price || find[0].normal_price) * item.qty
            }
          })
        })
      }

      return { qty_item, total }
    },

    cart_url() {
      const { store, uuid, source, category } = this.site

      return `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`
    },
  },

  async mounted () {
    this.loading_product = true

    await this.init_page()
    await this.get_list_merchant(0)

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

    if (!this.$store.state.fullpath.length) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'fullpath',
          data: this.$route.fullPath
        }
      })
    }

    this.loading_product = false
  },

  methods: {
    async init_page() {
      const { c, u } = this.$route.query

      if (!this.store.hasOwnProperty('id')) {
        await this.get_base_info('site-store')
      }

      if (this.store.store_type) {
        await this.get_merchant_detail(c)
      }

      if (!this.customer) {
        await this.get_customer_detail(this.store.bot_id)
      }

      const get_product = await API.get_list_products(this.$store, {
        category: c,
        uid: u,
        bot_id: this.$route.params.store,
        merchant: this.merchant ? this.merchant.id : 0,
      })

      if (!get_product.status && mode == "production") {
        if (get_product.message == 'Expired.') {
          this.$router.replace('/error/link/expired')
        }

        if (get_product.message == 'Invalid URL.') {
          this.$router.replace('/error/link/invalid')
        }
      }
    },

    async get_merchant_detail(merchant_id) {
      const request = await this.$store.dispatch('request', {
        url: '/api/store/market/info',
        method: 'post',
        data: { merchant_id }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'merchant',
          data: request.data.response
        }
      })
    },

    async get_list_merchant(page) {
      const { query: { market } } = this.$route
      const list_merchant = await this.$store.dispatch('request', {
        url: '/api/store/market/merchant',
        method: 'post',
        data: {
          bot_id: this.store.bot_id,
          market_id: market,
          page
        }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'list_merchant',
          data: [ ...this.list_merchant, ...list_merchant.data.response ]
        }
      })
    },

    product_detail(item) {
      const { uuid, source, category, store } = this.site

      this.$router.replace(
        `/site/${store}/${item.id}?u=${uuid}&src=${source}&c=${category}`
      )
    },

    add_to_rp_cart(date) {
      const updated_dates = this.dates.map(cart => {
        if (date === cart.date) {
          cart.items = cart.items.map(item => {
            if (item.id === this.temp_product.id) {
              item.select_date = true
              item.qty = item.qty + 1
            }

            return item
          })
        }
        
        return cart
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'dates',
          data: updated_dates
        }
      })
      this.dialog_list_dates = false

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

      API.manage_cart(this.$store, {
        store_name: this.site.store,
        source: this.site.source,
        method: 'set',
        uuid: this.site.uuid,
        detail: {
          type: 'rp-order',
          notes: this.notes,
          items: mapped
        }
      })
    },

    async get_product() {
      this.loading_product = true

      const { c, u } = this.$route.query
      const request = await this.$store.dispatch('request', {
        url: '/api/products',
        method: 'post',
        data: {
          category: c,
          uid: u,
          bot_id: this.$route.params.store,
          merchant: this.merchant ? this.merchant.id : 0,
        }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'products',
          data: request.data.sort((a, b) => b.priority - a.priority)
        }
      })

      this.loading_product = false

      return true
    },

    async get_base_info(page) {
      const store = await this.$store.dispatch('request', {
        url: '/api/store',
        method: 'post',
        data: {
          store_name: this.$route.params.store,
          page: page,
        },
      })

      if (store.status != 200) {
        this.$router.replace('/error/link/invalid')

        return false
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'store',
          data: {
            ...this.store,
            ...store.data
          }
        }
      })
    },

    async get_customer_detail(bot_id) {
      try {
        const request = await this.$store.dispatch('request', {
          url: '/api/customer',
          method: 'post',
          data: {
            chatkey: this.$route.query.u,
            bot_id
          }
        })

        this.$store.dispatch('setState', {
          payload: {
            key: 'customer',
            data: request.data.response
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<style lang="scss">
  #b-search-product-by {
    width: 0 !important;
    min-width: 0 !important;
    max-width: 0 !important;
  }
  #b-list-products > div.v-card.v-card--flat.v-sheet.theme--light.rounded-0 > div.ma-1.mt-4.mb-0.d-flex.flex-row > div:nth-child(2) > div > div > div {
    div.v-select__slot {
      height: 40px !important;

      div.v-input__append-inner {
        padding-left: 0 !important;
      }
    }
  }

  #b-list-products > div.v-card.v-card--flat.v-sheet.theme--light.rounded-0 > div.ma-1.mb-0.d-flex.flex-row > div:nth-child(2) > div > div {
    height: 40px !important;

    div {
      padding-left: 2px !important;
    }
  }

  #scrolling-techniques-7 > div > div.basket-background-shadow.v-card.v-sheet.theme--light.rounded-0 {
    max-width: 100% !important;
  }

  @media (min-width: 481px) {
    /* CSS */
    #b-footer {
      min-width: 635px !important;
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