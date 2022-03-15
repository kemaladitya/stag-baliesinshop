<template>
  <v-card class="b-font pt-12" style="overflow-x: hidden" flat tile>
    <v-progress-linear
      v-show="loading"
      style="z-index: 9999 !important"
      color="blue darken-2"
      height="3"
      indeterminate
    />
    <div class="pl-1 pr-1">
      <v-card v-if="loading_checkout" width="100%" flat tile>
        <center style="width: 100%">
          <div style="width: 50%; margin-top: 30vh">
            <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading=lazy />
            <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
              Mohon menunggu...
            </div>
          </div>
        </center>
      </v-card>

      <Checkout v-else-if="store && customer" />
    </div>
  </v-card>
</template>

<script>
import API from "@/components/general";
import Checkout from "@/components/checkout/index";
import InsertVoucherCode from "@/components/dialogs/checkout/insert-voucher-code";
import Courier from "@/components/bottom-sheet/checkout/courier";
import Voucher from "@/components/bottom-sheet/checkout/voucher";
import Payment from "@/components/bottom-sheet/checkout/payment";
import Footer from "@/components/partials/footer/checkout";
import { mode } from "../../../../config.json"

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
    loading_checkout: false
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

    products() {
      return this.$store.state.products
    },
  },

  async mounted () {
    this.loading_checkout = true

    await this.init_page()

    if (!this.store.hasOwnProperty('min_order')) {
      await this.get_base_info('site-store-cart')
    }

    await this.get_base_info('site-store-checkout')
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

    this.loading_checkout = false
  },

  methods: {
    async init_page() {
      const { c, u } = this.$route.query

      if (!this.store) {
        await this.get_base_info('site-page')
      }

      if (!this.customer) {
        await this.get_customer_detail(this.store.bot_id)
        this.check_express_delivery()
      }

      if (!this.products.length) {
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