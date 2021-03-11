<template>
  <div
    style="
      background-color: rgb(253 251 238);
      text-align: center;
      text-align: -moz-center;
      text-align: -webkit-center;
    "
  >
    <v-app
      class="b-font overflow-hidden"
      style="
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
      "
    >
      <!-- timeout="3000" -->
      <v-snackbar
        id="b-snackbar"
        v-model="alert.status"
        width="100%"
        fixed
        top
      >
        <div class="d-flex flex-row">
          <div>
            <v-icon color="#fd0" small>mdi-alert</v-icon>
          </div>
          <div style="padding-top: 1px; margin-left: 8px; font-weight: 600">{{ alert.text }}</div>
        </div>
      </v-snackbar>
      <v-alert
        type="success"
        color="success"
        border="left"
        elevation="2"
        dense
        :value="added_to_cart"
        style="
          width: 98%;
          margin: 1%;
          margin-top: 8px;
          z-index: 9999;
          position: fixed;
        "
        transition="scale-transition"
      >
        Success add to cart.
      </v-alert>
      <div class="pb-12">
        <div>
          <v-app-bar
            absolute
            color="white"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
            style="border-bottom: 1px solid #ccc !important; z-index: 9; height: 55px"
          >
            <v-app-bar-nav-icon
              depressed
              :ripple="false"
              class="ml-2 pa-2"
              color="white"
            >
              <v-btn
                v-if="$route.name == 'site-store-checkout'"
                class="ml-4"
                style="color: black !important"
                x-small
                fab
                text
                depressed
                :ripple="false"
                :to="gotocart"
              >
                <v-icon small>mdi-arrow-left</v-icon>
              </v-btn>
              <v-img
                v-if="store"
                :src="store.image"
                width="40"
                height="40"
                max-width="53"
                max-height="53"
                @click="back"
              />
              <v-icon v-else>mdi-store</v-icon>
            </v-app-bar-nav-icon>
            <v-spacer />
            <v-badge
              v-if="(cart_btn && $route.name == 'site-store-checkout') || ($route.name == 'site-store-pid')"
              id="b-shop-cart-badge"
              top="-5px"
              color="red darken-1"
              style="font-size: 10px"
              min-width="16px"
              height="16px"
              :icon="String(total_qty_item)"
              bordered
              overlap
            >
              <v-btn
                v-if="cart_btn"
                rounded
                depressed
                :ripple="false"
                max-width="38"
                min-width="38"
                :to="gotocart"
                color="#fcfcfc"
                style="
                  color: black !important;
                  border: 1px solid #fcfcfc !important;
                "
              >
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn>
            </v-badge>
          </v-app-bar>
          <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
            max-height="100vh"
            v-if="store"
          >
            <nuxt />
          </v-sheet>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    snackbar: true,
    cart_btn: null
  }),

  watch: {
    added_to_cart(newval, oldval) {
      const self = this

      if (newval) {
        setTimeout(() => {
          self.$store.dispatch('setState', {
            payload: {
              key: 'added_to_cart',
              data: false
            }
          })
        }, 1500)
      }
    }
  },

  computed: {
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

          // console.log(filtered, ' filtered')

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

    dates() {
      return this.$store.state.dates
    },

    added_to_cart() {
      return this.$store.state.added_to_cart
    }
  },

  async beforeCreate() {
    try {
      // console.log = () => ''
      // console.info = () => ''
      // console.warn = () => ''
      // console.clear()

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
      // console.log(, ' this.$route')
    } catch (error) {
      // console.log(error)

      return error
    }
  },

  async mounted () {
    const self = this

    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      this.getWindowWidth()
      this.getWindowHeight()
    })

    const store = await this.$store.dispatch('request', {
      url: '/api/store',
      method: 'post',
      data: {
        store_name: this.$route.params.store
      }
    })

    if (store.status != 200) {
      this.$router.replace('/error/link/invalid')

      return false
    }

    this.$store.dispatch('setState', {
      payload: {
        key: 'store',
        data: store.data
      }
    })

    this.get_customer_detail(store.data.bot_id)

    if (process.browser) {
      if (window.innerWidth <= 320) {
        console.log('mini')
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mini'
          }
        })
      } else if (window.innerWidth <= 650) {
        console.log('mobile')
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

    if (this.$route.name === 'site-store-userprofile') {
      this.cart_btn = null
    } else {
      this.cart_btn = true
    }
  },

  methods: {
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
            data: request.data
          }
        })
      } catch (error) {
        console.log(error)
      }
    },

    getWindowWidth(event) {
      const self = this
      this.windowWidth = document.documentElement.clientWidth

      console.log(this.windowWidth, ' this.windowWidth')

      if (this.windowWidth <= 390) {
        console.log('mini')
        self.$store.dispatch('setState', {
          payload: {
            key: 'screen',
            data: 'mini'
          }
        })
      } else if (this.windowWidth <= 650) {
        console.log('mobile')
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

    get_rp_total_qty() {

    },

    get_so_total_qty() {

    }
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
