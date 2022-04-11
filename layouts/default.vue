<template>
  <div
    style="
      background-color: rgb(253 251 238);
      text-align: center;
      text-align: -moz-center;
      text-align: -webkit-center;
    "
  >
    <div
      v-if="$nuxt.isOffline"
      class="b-font"
      style="
        padding-top: 38vh;
        position: fixed;
        z-index: 9999;
        background-color: rgba(255, 247, 198, 0.9);
        color: rgb(95, 95, 95);
        border: .2px solid #fd0;
        width: 100%;
        height: 100vh;
        font-size: 12px;
        font-weight: 600;
      "
    >
      <div>
        <center>
          <v-icon style="font-size: 70px">mdi-signal-off</v-icon>
          <div style="margin-top: 5px; font-size: 14px; font-weight: 600">
            You are offline
          </div>
        </center>
      </div>
    </div>
    <div
      v-if="loading"
      class="b-font"
      style="
        position: fixed;
        z-index: 9999;
        background-color: rgb(255 255 255 / 0%);
        color: rgb(95, 95, 95);
        border: .2px solid #fd0;
        width: 100%;
        height: 100vh;
        font-size: 12px;
        font-weight: 600;
      "
    >
      <v-progress-linear
        style="z-index: 9999 !important"
        color="success"
        height="3"
        indeterminate
      />
    </div>
    <v-app
      class="b-font overflow-hidden"
      style="
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
      "
    >
      <div>
        <div>
          <Headers />
          <v-sheet
            id="scrolling-techniques-7"
            class="overflow-hidden b-main-page"
            height="100vh"
            v-if="store"
          >
            <v-progress-linear
              v-if="general_loading"
              style="z-index: 9999 !important"
              color="success"
              height="3"
              indeterminate
            />
            <v-card v-else height="3" flat />
            <nuxt />
          </v-sheet>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
import Headers from '@/components/partials/headers';
import { recommendation_api, mode } from '@/config.json'

export default {
  components: {
    Headers,
  },

  data: () => ({
    page: 1,
    snackbar: true,
    cart_btn: null
  }),

  // watch: {
  //   added_to_cart(newval, oldval) {
  //     const self = this

  //     if (newval) {
  //       setTimeout(() => {
  //         self.$store.dispatch('setState', {
  //           payload: {
  //             key: 'added_to_cart',
  //             data: false
  //           }
  //         })
  //       }, 1500)
  //     }
  //   }
  // },

  computed: {
    loading() {
      return this.$store.state.loading
    },

    general_loading() {
      return this.$store.state.general_loading
    },

    screen() {
      return this.$store.state.screen
    },

    total_qty_item() {
      if (this.rp_order) {
        const rp_qty = this.get_rp_qty_item()

        return rp_qty
      }

      const so_qty = this.get_so_qty_item()

      return so_qty
    },

    gotocart() {
      const { store, uuid, source, category } = this.$store.state.site

      return `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    alert() {
      return this.$store.state.alert
    },

    cart() {
      if (this.rp_order) {
        const merge_cart = []

        this.dates.forEach(el => {
          const filtered = el.items.filter(item => item.select_date)

          if (filtered.length) {
            merge_cart.push(...filtered)
          }
        })

        return merge_cart
      }

      return this.$store.state.cart
    },

    store() {
      return this.$store.state.store
    },

    site() {
      return this.$store.state.site
    },

    customer() {
      return this.$store.state.customer
    },

    dates() {
      return this.$store.state.dates
    },

    // added_to_cart() {
    //   return this.$store.state.added_to_cart
    // }
  },

  async beforeCreate() {
    try {
      // console.log = () => ''
      // console.info = () => ''
      console.warn = () => ''
      console.clear()

      this.$store.dispatch('setState', {
        payload: {
          key: 'site',
          data: {
            category: this.$route.query.c,
            source: this.$route.query.src,
            uuid: this.$route.query.u,
            store: this.$route.params.store
          }
        }
      })
      this.$store.dispatch('setState', {
        payload: {
          key: 'fullpath',
          data: this.$route.fullPath
        }
      })
    } catch (error) {
      console.error(error)

      return error
    }
  },

  async mounted () {
    console.log("recommendation_api", recommendation_api)
    const self = this
    const { name, params: { store }, query: { c, src, u } } = this.$route

    if (name !== 'site-store-userprofile') {
      const check_area = await this.$store.dispatch('request', {
        url: '/api/customer/session',
        method: 'post',
        data: {
          bot_id: store,
          uid : u,
          category: c,
        }
      })

      if (!check_area.data.status && mode == "production") {
        // this.$router.push('/error/link/expired')
      }
    }

    await this.get_base_info('site-store')
    
    if (this.$route.name === 'site-store-userprofile') {
      this.cart_btn = null
    } else {
      this.cart_btn = true
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      this.getWindowWidth()
      this.getWindowHeight()
    })

    // await this.get_customer_detail(this.store.bot_id)

    if (process.browser) {
      if (window.innerWidth <= 375) {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mini'
          }
        })
      } else if (window.innerWidth <= 650) {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mobile'
          }
        })
      } else {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'desktop'
          }
        })
      }
    }

    // if (recommendation_api) {
      // this.get_recomendation();
    // }
  },

  methods: {
    async get_recomendation() {
      try {
        const self = this;
        const request = await axios({
          url: 'https://master.balesin.id/profiling',
          method: 'post',
          data: {
            "uuid"  : self.$route.query.u,
            "bot_id": self.store.bot_id,
          }
        });
        if (request.status == 200) {
          this.$store.dispatch("setState", {
            payload: {
              key: "recomendation_items",
              data: request.data.result.recommendation_items
            }
          })
          this.$store.dispatch("setState", {
            payload: {
              key: "frequent_items",
              data: request.data.result.frequent_items
            }
          })
        }
      } catch (error) {
        console.error(error)
      }
    },

    back() {
      const { store, uuid, source, category } = this.$store.state.site

      if (this.screen == 'desktop') {
        this.$router.push(`/site/${store}?u=${uuid}&src=${source}&c=${category}`)
      }
    },

    get_so_qty_item() {
      let total = 0

      this.cart.forEach(el => {
        total += el.qty
      })

      return total
    },

    get_rp_qty_item() {
      let total = 0

      this.dates.forEach(el => {
        el.items.forEach(item => {
          if (item.qty) {
            total += item.qty
          }
        })
      })

      return total
    },

    getWindowWidth(event) {
      const self = this
      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth <= 390) {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mini'
          }
        })
      } else if (this.windowWidth <= 650) {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mobile'
          }
        })
      } else {
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'desktop'
          }
        })
      }
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    },

    async get_base_info(page) {
      const store = await this.$store.dispatch('request', {
        url: '/api/store',
        method: 'post',
        data: {
          store_name: this.$route.params.store,
          page: page,
        },
      });

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
html {
  scrollbar-width: none;

  #app > div > div.pb-12 > div > header > div {
    height: 55px !important;
  }
}

#b-shop-cart-badge > span > span {
  top: -5px !important;
  height: 18px;
  min-width: 18px;
  font-size: 9px;
  padding-top: 4.1px !important;

  i {
    font-style: inherit;
    font-size: 9px;
  }
}
</style>
