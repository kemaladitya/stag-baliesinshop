<template>
  <div>
    <v-card v-if="loading_cart" width="100%" flat tile>
      <center style="width: 100%">
        <div style="width: 50%; margin-top: 35vh">
          <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading=lazy />
          <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
            Mohon menunggu...
          </div>
        </div>
      </center>
    </v-card>

    <div v-else>
      <v-card
        v-if="order_type === 'package-order'"
        :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
        id="b-subs-mode"
        class="pr-0"
        color="#dfdfdf"
        min-width="100%"
        style="margin-top: 50px"
        flat
        tile
      >
        <div class="d-flex flex-row pa-2 pb-1">
          <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
            MODE PAKET
          </div>
          <v-spacer />
        </div>
        <div
          :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')"
          class="pa-2 pt-1"
          style="text-align: left;"
        >
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
        :class="screen == 'mini' ? 'pa-1 pl-2 pr-2' : 'pa-2'"
        id="b-subs-mode"
        class="pr-0"
        color="#dfdfdf"
        min-width="100%"
        style="margin-top: 50px"
        flat
        tile
      >
        <div class="d-flex flex-row pa-2 pb-1">
          <div style="font-size: 12px; padding-top: 1px; font-weight: 600">
            MODE LANGGANAN
          </div>
          <v-spacer />
          <v-switch
            v-model="switch_rp"
            :class="screen == 'mini' ? 'ml-1 mr-0 pr-0' : null"
            class="pt-0 mt-0"
            hide-details
            dense
            @change="subs_controller"
          />
        </div>
        <div
          :style="'font-size: ' + (screen == 'mini' ? '8px;' : '10px;')"
          class="pa-2 pt-0"
          style="text-align: left;"
        >
          Anda dapat mengatur waktu pengiriman roti pesanan Anda, <br />
          untuk dijadwalkan hingga 30 hari kedepan.
        </div>
      </v-card>

      <v-card v-if="!store.recurring_purchase" min-height="50" height="50" flat />

      <v-card
        v-if="
          order_type !== 'subscription-order'
          && !loading_cart
          && cart.length
        "
        class="ma-2 mt-2 d-flex flex-row pa-2 pb-0"
        flat
      >
        <v-card style="font-size: 12px; font-weight: 600" flat>
          Waktu Pengantaran :
        </v-card>
        <v-card
          class="ml-2"
          style="
            color: grey;
            font-size: 10px;
            font-weight: 500;
            padding-top: 2px;
          "
          flat
        >
          jam 08.00 - 17.00
        </v-card>
      </v-card>
      <div 
        :style="
          order_type === 'subscription-order'
            ? 'min-height: calc(100vh - 205px) !important; max-height: calc(100vh - 205px) !important; overflow-y: scroll;'
            : 'min-height: calc(100vh - 135px) !important; max-height: calc(100vh - 135px) !important; overflow-y: scroll;'
        "
        class="pa-2 pt-0"
        style="padding-bottom: 100px;"
      >
        <v-progress-linear
          v-show="loading && order_type !== 'package-order'"
          style="z-index: 9999 !important;"
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
import API from '@/components/general'
import CartDetail from '@/components/cart'
import { mode } from "../../../../config.json"

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
        this.check_express_delivery();
      }

      const get_product = await API.get_list_products(this.$store, {
        category: c,
        uid: u,
        bot_id: this.$route.params.store
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

    async check_express_delivery() {
      try {
        console.log("jalan?");
        const request = await this.$store.dispatch("request", {
          url: "/express-availability",
          method: "post",
          data: {
            city: this.customer.city,
            subdistrict: this.customer.sub_district,
            urban: this.customer.urban,
          },
        });

        console.log("check_express_delivery", request);
        if (request.status == 200) {
          this.$store.dispatch("setState", {
            payload: {
              key: "is_available_express",
              data: +request.data.item.is_express
            }
          })
        }
      } catch (error) {
        console.log(error);
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
