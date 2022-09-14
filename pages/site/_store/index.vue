<template>
  <div>
    <!-- <v-card v-if="loading_product" flat tile> -->
    <div v-if="loading_product">
      <Loadingv2 />
    </div>
    <!-- </v-card> -->
    <div v-else>
      <!-- <h1>fsdfafa</h1>
          <small>
          <pre>{{JSON.stringify(list_product, null,2)}}</pre>
        </small> -->
      <SendToBar />
      <HelloBar />
      <SlickProduct />
      <v-progress-linear v-show="loading" class="linear-loading" color="blue darken-2" height="3" indeterminate />
      <ListProductCategory :list_product="list_product" />
      <FloatItemButton />
    </div>

    <v-snackbar v-model="snackbar">information</v-snackbar>

    <!-- <catalog-footer :loading_product="loading_product" /> -->
  </div>
</template>

<script>
import API from "@/components/general";
import Products from "@/components/product-catalog/index";
import Loading from "@/components/loading/list_product";
import Footer from "@/components/partials/footer/product-catalog";
import { mode } from "../../../config.json";
import ListProductCategory from "~/components/product/ListProductCategory.vue";
import HelloBar from "~/components/product/HelloBar.vue";
import SendToBar from "~/components/product/SendToBar.vue";
import Loadingv2 from "~/components/shared/Loadingv2.vue";
import SlickProduct from "~/components/product/SlickProduct.vue";
import FloatItemButton from "~/components/product/FloatItemButton.vue";

export default {
  layout: "layoutv2",

  components: {
    Loading,
    "products": Products,
    "catalog-footer": Footer,
    ListProductCategory,
    HelloBar,
    SendToBar,
    Loadingv2,
    SlickProduct,
    FloatItemButton
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
      if (this.order_type === "single-order") {
        return this.$store.state.cart
      } else if (this.order_type === "subscription-order") {
        return this.$store.state.subscription_cart
      } else if (this.order_type === "package-order") {
        return this.$store.state.package_cart
      }
    },
  },

  async mounted() {
    this.loading_product = true

    await this.init_page()
    await this.get_list_merchant(0)

    const cart = await API.cart_manager(this, {
      method: "get",
      info: {
        item: null,
        store: {
          name: this.site.store,
          source: this.site.source,
          uuid: this.site.uuid,
          outlet: this.site.category,
        },
      },
    })

    if (!this.$store.state.fullpath.length) {
      this.$store.dispatch("setState", {
        payload: {
          key: "fullpath",
          data: this.$route.fullPath
        }
      })
    }

    this.loading_product = false
  },

  methods: {
    async init_page() {
      const { c, u } = this.$route.query

      if (!this.store.hasOwnProperty("id")) {
        await this.get_base_info("site-store")
      }

      if (this.store.store_type) {
        await this.get_merchant_detail(c)
      }

      if (!this.customer) {
        await this.get_customer_detail(this.store.bot_id)
        this.check_express_delivery();
      }

      const get_product = await API.get_list_products(this.$store, {
        category: c,
        uid: u,
        bot_id: this.$route.params.store,
        merchant: this.merchant ? this.merchant.id : 0,
      })
      console.log(get_product, 'prod')

      if (!get_product.status && mode == "production") {
        if (get_product.message == "Expired.") {
          this.$router.replace("/error/link/expired")
        }

        if (get_product.message == "Invalid URL.") {
          this.$router.replace("/error/link/invalid")
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

    async get_merchant_detail(merchant_id) {
      const request = await this.$store.dispatch("request", {
        url: "/api/store/market/info",
        method: "post",
        data: { merchant_id }
      })

      this.$store.dispatch("setState", {
        payload: {
          key: "merchant",
          data: request.data.response
        }
      })
    },

    async get_list_merchant(page) {
      console.log("ini get list merchant :: pages")
      const { query: { market } } = this.$route
      const list_merchant = await this.$store.dispatch("request", {
        url: "/api/store/market/merchant",
        method: "post",
        data: {
          bot_id: this.store.bot_id,
          market_id: market,
          page
        }
      });
      console.log("list_merchant.data.response", list_merchant.data.response);

      try {
        list_merchant.data.response = list_merchant.data.response.map(_ => {
          if (_.params) {
            console.log("parse params merchant");
            _.params = JSON.parse(_.params);
          }

          return _;
        });
      } catch (error) {
        console.log("error.parse");
      }

      let results = [...this.list_merchant, ...list_merchant.data.response];
      const filter_merchant = [];
      const _list_merchant = [];

      results.forEach(_ => {
        if (!filter_merchant.includes(_.id)) {
          _list_merchant.push(_);
          filter_merchant.push(_.id);
        }
      });

      this.$store.dispatch('setState', {
        payload: {
          key: 'list_merchant',
          data: _list_merchant,
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

      this.$store.dispatch("setState", {
        payload: {
          key: "dates",
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
        method: "set",
        uuid: this.site.uuid,
        detail: {
          type: "rp-order",
          notes: this.notes,
          items: mapped
        }
      })
    },

    async get_product() {
      this.loading_product = true

      const { c, u } = this.$route.query
      const request = await this.$store.dispatch("request", {
        url: "/api/products",
        method: "post",
        data: {
          category: c,
          uid: u,
          bot_id: this.$route.params.store,
          merchant: this.merchant ? this.merchant.id : 0,
        }
      })

      this.$store.dispatch("setState", {
        payload: {
          key: "products",
          data: request.data.sort((a, b) => b.priority - a.priority)
        }
      })

      this.loading_product = false

      return true
    },

    async get_base_info(page) {
      const store = await this.$store.dispatch("request", {
        url: "/api/store",
        method: "post",
        data: {
          store_name: this.$route.params.store,
          page: page,
        },
      })

      if (store.status != 200) {
        this.$router.replace("/error/link/invalid")

        return false
      }

      this.$store.dispatch("setState", {
        payload: {
          key: "store",
          data: {
            ...this.store,
            ...store.data
          }
        }
      })
    },

    async get_customer_detail(bot_id) {
      try {
        const request = await this.$store.dispatch("request", {
          url: "/api/customer",
          method: "post",
          data: {
            chatkey: this.$route.query.u,
            bot_id
          }
        })

        this.$store.dispatch("setState", {
          payload: {
            key: "customer",
            data: request.data.response
          }
        })

        try {
          if (request.data.response && !request.data.response.category) {
            this.$store.dispatch("request", {
              url: "/backup/register",
              method: "post",
              data: { uuid: this.$route.query.u },
            });
          }
        } catch (error) {
          console.log("re-registering failed!");
        }
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.productv2 {
  position: relative;
}

.center {
  height: 100vh;
}
</style>

<!-- <style lang="scss">
#b-search-product-by {
  width: 0 !important;
  min-width: 0 !important;
  max-width: 0 !important;
}

#b-list-products {
  .linear-loading {
    z-index: 9999 !important;
  }

  .wrapper {
    width: 100%;

    .loading {
      &--active {
        width: 100%;

        .center {
          width: 100%;

          .content {
            width: 50%;
            margin-top: 30vh;

            .status {
              font-size: 13px;
              color: gray;
              padding-top: 13px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  div.v-card.v-card--flat.v-sheet.theme--light.rounded-0>div.ma-1.mt-4.mb-0.d-flex.flex-row>div:nth-child(2)>div>div>div {
    div.v-select__slot {
      height: 40px !important;

      div.v-input__append-inner {
        padding-left: 0 !important;
      }
    }
  }

  div.v-card.v-card--flat.v-sheet.theme--light.rounded-0>div.ma-1.mb-0.d-flex.flex-row>div:nth-child(2)>div>div {
    height: 40px !important;

    div {
      padding-left: 2px !important;
    }
  }
}

#scrolling-techniques-7>div>div.basket-background-shadow.v-card.v-sheet.theme--light.rounded-0 {
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
</style> -->