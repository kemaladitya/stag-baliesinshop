<template>
  <div class="pb-12" style="100vh">
    <div id="b-find-merchant" class="ma-1 mb-0 d-flex flex-row" style="margin-top: 13px !important">
      <div style="width: 100%">
        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Cari nama toko"
          style="font-size: 13px"
          dense
          outlined
          hide-details
          v-model="search_value"
        />
      </div>
    </div>
    <div
      id="b-list-merchant"
      class="ma-1 mt-2"
      style="overflow-y: scroll"
      :style="
        loading_merchant
          ? 'height: calc(100vh - 180px);'
          : 'height: calc(100vh - 120px);'
      "
      @scroll="handleScroll"
    >
      <v-card
        v-for="(merchant, idx) in list_merchant"
        :key="idx"
        class="mt-2 mb-1"
        outlined
        @click="select_merchant(merchant)"
      >
        <div class="d-flex flex-row">
          <div class="ma-2 pa-2" style="border: 0.5px solid lightgrey; border-radius: 3px">
            <v-img width="40" :src="merchant.image || require('@/assets/images/merchant.jpg')" />
          </div>
          <div style="align-self: center">
            <div style="font-size: 14px; color: black; text-align: left">{{ merchant.name }}</div>
            <div style="font-size: 11px; color: #999999; text-align: left">{{ merchant.description }}</div>
          </div>
        </div>
      </v-card>
      <div v-show="loading_merchant">
        <v-card v-for="num in 3" :key="num" class="mt-2 mb-1" min-height="75" max-height="75" outlined>
          <div class="d-flex flex-row">
            <div
              class="ma-2 pa-2"
              style="
                border: 0.5px solid lightgrey;
                border-radius: 3px;
                height: 57px;
                width: 57px;
                background: lightgrey;
              "
            >
              &nbsp;
            </div>
            <div style="padding-top: 20px">
              <v-card class="mb-2" style="background: lightgrey" height="14" min-width="130" max-width="130" flat>&nbsp;</v-card>
              <v-card style="background: lightgrey" height="11" min-width="180" max-width="180" flat>&nbsp;</v-card>
            </div>
          </div>
        </v-card>
      </div>
      <div style="min-height: 110px">&nbsp;</div>
    </div>
    <!-- <div id="b-find-product" class="ma-1 mb-0 d-flex flex-row" style="margin-top: 13px !important">
      <div class="mr-1" style="width: 100%">
        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Mau cari apa hari ini?"
          style="font-size: 13px"
          dense
          outlined
          hide-details
          v-model="search_value"
        />
      </div>
      <div style="width: 47px;">
        <v-select
          id="b-search-product-by"
          :items="select_search_type"
          placeholder="Search by"
          width="80"
          max-width="80"
          min-width="80"
          append-icon="mdi-cog"
          dense
          outlined
          hide-details
          v-model="search_type"
        />
      </div>
    </div>
    <div class="ml-2" style="font-size: 8px; color: #999; padding-top: 2px; text-align: left">
      Cari Produk berdasarkan : <span style="color: #0D47A1">"{{ search_type }}"</span>
    </div>
    <v-row v-if="search_result.length" style="margin-bottom: 180px" no-gutters>
      <v-col v-for="(item, index) in search_result" :key="index" cols="6">
        <v-card class="ma-1 mt-2 mb-0" outlined>
          <v-img class="image" :src="item.main_image" loading=lazy>
            <div v-if="item.is_promo" class="promo-badge">
              PROMO
            </div>
          </v-img>
          <div class="pa-2" style="text-align: left">
            <div class="name pt-2">{{ item.name }}</div>
            <div class="discount-price">
              <div>
                <div v-if="item.is_promo">
                  Rp {{
                    item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div :class="item.is_promo ? 'lined' : null">
                  Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div v-if="!item.is_promo">&nbsp;</div>
              </div>
            </div>

            <div v-if="item.variant.length === 1" class="d-flex flex-row pt-3">
              <v-btn
                class="show-detail"
                depressed
                dense
                text
                small
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
              >
                <v-icon class="product-mdi-icon">mdi-eye</v-icon> &nbsp;Lihat
              </v-btn>
              <v-spacer />
              <v-btn
                class="add-to-cart"
                color="#fffbbb"
                depressed
                dense
                small
                @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
                style="color: black; border: 1px solid #cccccc !important"
              >
                <v-icon class="product-mdi-icon">mdi-cart-plus</v-icon> &nbsp;Tambah
              </v-btn>
            </div>
            <div v-else-if="item.variant.length > 1" class="d-flex flex-row pt-3" outlined>
              <v-btn
                class="select-variant"
                color="#FD0"
                depressed
                dense
                small
                style="color: black; border: 1px solid #cccccc !important"
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
              >
                <v-icon class="product-mdi-icon">mdi-checkbox-multiple-marked-outline</v-icon>
                &nbsp;Pilih Variant
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div v-else>
      <center v-if="!search_value.length" style="margin-top: 30%">
        <v-img class="empty-image" :src="require('@/assets/images/product-empty.png')" loading=lazy />
        <div class="empty-info pa-3 pr-4 pl-4 mt-4" style="font-size: 12px">
          Toko ini belum memiliki produk.
        </div>
      </center>
      <center v-else style="margin-top: 30%">
        <v-img class="empty-image" :src="require('@/assets/images/product-not-found.png')" loading=lazy />
        <div class="empty-info pa-3 pr-4 pl-4 mt-4" style="font-size: 12px">
          Produk tidak ditemukan.
        </div>
      </center>
    </div>

    <v-bottom-sheet
      :value="sheet"
      @click:outside="sheet = false"
    >
      <v-sheet style="text-align: left">
        <div class="d-flex flex-row">
          <div
            class="pl-2"
            style="align-self: center; font-size: 13px; font-weight: 600"
          >
            Pilih Tanggal
          </div>
          <v-spacer />
          <v-btn
            icon
            text
            color="red"
            @click="sheet = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div
          class="pa-2"
          style="overflow-y: scroll !important; max-height: 450px !important;"
        >
          <v-card
            v-for="(order, idx) in subscription_cart"
            :key="idx"
            class="mb-2"
            flat
          >
            <v-card
              class="d-flex flex-row pa-2 pl-3 pr-3"
              style="border: 1px solid lightgrey"
              flat
              @click="add_subscription_order(order.date)"
            >
              <div>
                <div style="font-size: 13px; font-weight: bold">
                  {{ parse_date(order.date) }}
                </div>
                <div style="font-size: 11px; color: lightslategray">
                  Waktu pengantaran : {{ order.delivery_time }}
                </div>
              </div>
              <v-spacer></v-spacer>
              <div>
                <div style="font-size: 13px; font-weight: bold">
                  Rp {{
                    count_total_order(order.items)
                      .total
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}
                </div>
                <div style="font-size: 11px; color: lightslategray">
                  {{ count_total_order(order.items).item }} Item
                </div>
              </div>
            </v-card>
          </v-card>
        </div>
      </v-sheet>
    </v-bottom-sheet> -->
  </div>
</template>

<script>
import API from '@/components/General'

export default {
  props: {
    // productdetail: {
    //   type: Function,
    //   required: true
    // },

    loadingmerchant: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
  //   select_search_type: ['Nama', 'Varian', 'Kategori'],
  //   search_type: 'Nama',
  //   search_value: '',
  //   sheet: false,
  //   target_subs_date: null
    scroll: 'this is self scroll state',
    page: 0,
    windowWidth: null,
    windowHeight: null,
    loading_merchant: false,
    scrollTop: 0,
    clientHeight: 0,
    scrollHeight: 0,
    end: false,
    search_type: [],
    search_value: [],
    select_search_type: [],
  }),

  computed: {
    store() {
      return this.$store.state.store
    },

    list_merchant() {
      return this.$store.state.list_merchant
    },

    checkScroll() {
      if (this.$document.scrollTop() > 250) {
        return true
      } else {
        return false
      }
    }
  },

  mounted() {
    const self = this

    this.$store.dispatch('setState', {
      payload: {
        key: 'list_merchant',
        data: []
      }
    })

    this.get_list_merchant(this.page)

    this.$nextTick(() => {
      window.addEventListener('scroll', self.handleScroll)
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
      this.scrollTop = scrollTop
      this.clientHeight = clientHeight
      this.scrollHeight = scrollHeight
      if (scrollTop >= (Math.floor(scrollHeight - clientHeight) - 1) && !this.end) {
        console.log('im on bottom')
        console.log(this.scroll)
        this.page += 1
        this.get_list_merchant(this.page)
      }
      // this.scroll = window.scrollY || window.scrollTop
    },

    async get_list_merchant(page) {
      this.loading_merchant = true
      this.$store.dispatch('setState', {
        payload: {
          key: 'general_loading',
          data: true
        }
      })

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

      this.loading_merchant = false
      this.$store.dispatch('setState', {
        payload: {
          key: 'general_loading',
          data: false
        }
      })

      if (list_merchant.data.response.length != 10) {
        this.end = true
      }

      this.$store.dispatch('setState', {
        payload: {
          key: 'list_merchant',
          data: [ ...this.list_merchant, ...list_merchant.data.response ]
        }
      })
    },

    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    },

    select_merchant(merchant) {
      const { params: { store }, query: { market, c, src, u } } = this.$route

      console.log('@select_merchant |', merchant)
      this.$store.dispatch('setState', {
        payload: {
          key: 'merchant',
          data: merchant
        }
      })

      this.$router.push(`/site/${store}?market=${market}&u=${u}&src=${src}&c=${merchant.id}`)
    }
  }

  // computed: {
  //   site() {
  //     return this.$store.state.site
  //   },

  //   order_type() {
  //     return this.$store.state.order_type
  //   },

  //   cart() {
  //     return this.$store.state.cart
  //   },

  //   subscription_cart() {
  //     return this.$store.state.subscription_cart
  //   },

  //   package_cart() {
  //     return this.$store.state.package_cart
  //   },

  //   list_subscription_date() {
  //     const dates = this.subscription_cart.map(el => el.date)

  //     return dates
  //   },

  //   products() {
  //     return this.$store.state.products
  //   },

  //   search_result() {
  //     if (this.search_value.length) {
  //       if (this.search_type === 'Nama') {
  //         const results = this.products.filter(
  //           ({ name }) => name.toLowerCase()
  //             .includes(this.search_value.toLowerCase())
  //         )

  //         return results
  //       }

  //       if (this.search_type === 'Kategori') {
  //         const results = this.products.filter(
  //           ({ category }) => category.toLowerCase()
  //             .includes(this.search_value.toLowerCase())
  //         )

  //         return results
  //       }

  //       if (this.search_type === 'Varian') {
  //         const results = this.products.filter((el) => {
  //           const find = el.variant.filter(({ name }) => name.toLowerCase()
  //             .includes(this.search_value.toLowerCase())
  //           )

  //           return find.length ? el : null
  //         })

  //         return results
  //       }
  //     }

  //     return this.products
  //   },
  // },

  // methods: {
  //   async add_to_cart(id, detail_id, sku, qty) {
  //     if (this.order_type === 'single-order') {
  //       await this.add_single_order(id, detail_id, sku, qty)
  //     } else if (this.order_type === 'subscription-order') {
  //       this.target_subs_date = { id, detail_id, sku, qty }
  //       this.sheet = true
  //     }
  //   },

  //   async add_single_order(id, detail_id, sku, qty) {
  //     this.$store.dispatch('setState', {
  //       payload: {
  //         key: 'loading',
  //         data: true
  //       }
  //     })

  //     await API.cart_manager(this, {
  //       method: 'add',
  //       info: {
  //         mode: 'single-order',
  //         item: { id, detail_id, sku, qty },
  //         store: {
  //           name   : this.site.store,
  //           source : this.site.source,
  //           uuid   : this.site.uuid,
  //           outlet : this.site.category,
  //         },
  //       },
  //     })

  //     this.$store.dispatch('setState', {
  //       payload: {
  //         key: 'loading',
  //         data: false
  //       }
  //     })
  //   },

  //   async add_subscription_order(date) {
  //     this.$store.dispatch('setState', {
  //       payload: {
  //         key: 'loading',
  //         data: true
  //       }
  //     })

  //     const newval = []

  //     this.subscription_cart.forEach(el => {
  //       if (el.date === date) {
  //         const list_ids = el.items.map(el => el.detail_id)

  //         if (list_ids.includes(this.target_subs_date.detail_id)) {
  //           el.items = el.items.filter(item => {
  //             if (el.date === date && item.detail_id === this.target_subs_date.detail_id) {
  //               item.qty += 1
  //             }

  //             return item
  //           })
  //         } else {
  //           el.items.push({...this.target_subs_date, qty: 1})
  //         }
  //       }

  //       newval.push(el)
  //     })

  //     console.log(JSON.stringify(newval, null, 2))

  //     await API.cart_manager(this, {
  //       method: 'set',
  //       info: {
  //         mode : 'subscription-order',
  //         item : newval,
  //         store: {
  //           name   : this.site.store,
  //           source : this.site.source,
  //           uuid   : this.site.uuid,
  //           outlet : this.site.category,
  //         },
  //       },
  //     })

  //     this.target_subs_date = null
  //     this.sheet = false

  //     this.$store.dispatch('setState', {
  //       payload: {
  //         key: 'loading',
  //         data: false
  //       }
  //     })
  //   },

  //   count_total_order(items) {
  //     console.log('@count_total_order |', items)
  //     let total = 0
  //     let item  = 0

  //     items.forEach(el => {
  //       const find = this.products.filter(
  //         product => product.id === el.id && product.SKU === el.sku
  //       )

  //       if (find.length) {
  //         total += (find[0].discount_price || find[0].normal_price) * el.qty
  //         item  += el.qty
  //       }
  //     })

  //     return { total, item }
  //   },

  //   parse_date(date) {
  //     const list_month = [
  //       '',
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //       'Oct',
  //       'Nov',
  //       'Dec',
  //     ]
  //     const day = date.split('-')[2]
  //     const month = list_month[+date.split('-')[1]]
  //     const years = date.split('-')[0]

  //     return `${day} ${month} ${years}`
  //   }
  // }
}
</script>

<style lang="scss">
</style>