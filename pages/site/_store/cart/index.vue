<template>
  <div>
    <v-card v-if="loading_cart" width="100%" flat tile>
      <center style="width: 100%">
        <div style="width: 50%; margin-top: 35vh">
          <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading="lazy" />
          <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
            Mohon menunggu...
          </div>
        </div>
      </center>
    </v-card>
    <div v-else>
      <v-card
        v-if="order_type === 'package-order'"
        id="b-subs-mode"
        class="pr-0"
        :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
        color="#dfdfdf"
        min-width="100%"
        flat
        tile
        style="margin-top: 50px"
      >
        <!-- style="margin-top: 52px; position: fixed; z-index: 1" -->
        <!-- :style="screen == 'mini' ? 'position: fixed; max-height: 59px !important' : null" -->
        <div class="d-flex flex-row">
          <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
            MODE PAKET
          </div>
          <v-spacer />
        </div>
        <div style="text-align:left" :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')">
          Tentukan variasi roti yang Anda inginkan dalam bentuk pembelian paket <br />
          Sari Roti (Kemasan Box & Parcel).
        </div>
      </v-card>

      <v-card
        v-if="
          store.recurring_purchase
          && (
            order_type === 'single-order'
            || order_type === 'subscription-order'
          )
        "
        id="b-subs-mode"
        class="pr-0"
        :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
        color="#dfdfdf"
        min-width="100%"
        flat
        tile
        style="margin-top: 50px"
      >
        <!-- style="margin-top: 52px; position: fixed; z-index: 1" -->
        <!-- :style="screen == 'mini' ? 'position: fixed; max-height: 59px !important' : null" -->
        <div class="d-flex flex-row">
          <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
            MODE LANGGANAN
          </div>
          <v-spacer />
          <v-switch
            v-model="switch_rp"
            class="pt-0 mt-0"
            hide-details
            dense
            :class="screen == 'mini' ? 'ml-1 mr-0 pr-0' : null"
            @change="subs_controller"
          />
        </div>
        <div style="text-align:left" :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')">
          Anda dapat mengatur waktu pengiriman roti pesanan Anda, <br />
          untuk dijadwalkan hingga 30 hari kedepan.
        </div>
      </v-card>
      <!-- <v-card v-if="!store.recurring_purchase" min-height="120" height="120" flat /> -->
      <v-card v-if="!store.recurring_purchase" min-height="50" height="50" flat />

      <v-card
        v-if="order_type !== 'subscription-order' && cart.length && !loading_cart"
        class="ma-2 mt-2 d-flex flex-row"
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
          jam 08.00 - 17.00
        </v-card>
      </v-card>
      <div 
        style="padding-bottom: 100px"
        :style="
          order_type === 'subscription-order'
            ? 'min-height: calc(100vh - 175px) !important; max-height: calc(100vh - 175px) !important; overflow-y: scroll;'
            : 'min-height: calc(100vh - 205px) !important; max-height: calc(100vh - 205px) !important; overflow-y: scroll;'
        "
      >
        <v-progress-linear
          v-show="loading && order_type !== 'package-order'"
          style="z-index: 9999 !important"
          color="blue darken-2"
          height="3"
          indeterminate
        />
        <CartDetail />
      </div>
    </div>
  </div>
</template>

<script>
/** 
 * * get store info
 * * get customer info if not exist
 * * get products if not exist
 * * get cart
 */

import API from '@/components/General'
import CartDetail from '@/components/Cart'

export default {
  components: {
    CartDetail,
  },

  data: () => ({
    switch_rp: false,
    loading_cart: false,
  }),

  computed: {
    loading() {
      return this.$store.state.loading
    },

    screen() {
      return this.$store.state.screen
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    order_type() {
      return this.$store.state.order_type
    },

    customer() {
      return this.$store.state.customer
    },

    products() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    subscription_cart() {
      return this.$store.state.subscription_cart
    },
  },

  async mounted() {
    this.loading_cart = true

    await this.init_page()
    await this.get_base_info('site-store-cart')
    await API.cart_manager(this, {
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

    if (this.order_type === 'subscription-order') {
      this.switch_rp = true
    }

    this.loading_cart = false
  },

  watch: {
    async switch_rp(newval, oldval) {
      if (newval) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'order_type',
            data: 'subscription-order'
          }
        })

        await API.cart_manager(this, {
          method: 'set',
          info: {
            mode: 'subscription-order',
            item: this.subscription_cart,
            store: {
              name   : this.site.store,
              source : this.site.source,
              uuid   : this.site.uuid,
              outlet : this.site.category,
            },
          },
        })
      } else {
        await API.cart_manager(this, {
          method: 'set',
          info: {
            mode: 'single-order',
            item: this.cart,
            store: {
              name   : this.site.store,
              source : this.site.source,
              uuid   : this.site.uuid,
              outlet : this.site.category,
            },
          },
        })
      }
    },
  },

  methods: {
    async init_page() {
      const { c, u } = this.$route.query

      if (!this.store) {
        await this.get_base_info('site-page')
      }

      if (!this.customer) {
        await this.get_customer_detail(this.store.bot_id)
      }

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
    },

    subs_controller(e) {
      if (e) {
        this.$store.dispatch('setState', {
          payload: {
            key: 'order_type',
            data: 'subscription-order'
          }
        })
        this.subs_mode = false
      } else {
        this.subs_mode = e
        this.$store.dispatch('setState', {
          payload: {
            key: 'order_type',
            data: 'single-order'
          }
        })
      }
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

        if (this.customer.ex_callback && this.$route.name == 'site-store') {
          // if (this.site.category != this.customer.ex_callback || this.site.category != 'all' || this.site.category.length) {
          //   window.open(`https://shop.balesin.id/site/${this.site.store}?u=${this.site.uuid}&src=${this.site.source}&c=${this.customer.ex_callback}`, '_self')
          // }
        }
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>
