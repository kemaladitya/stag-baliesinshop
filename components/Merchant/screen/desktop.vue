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

      this.$store.dispatch('setState', {
        payload: {
          key: 'merchant',
          data: merchant
        }
      })

      this.$router.push(`/site/${store}?market=${market}&u=${u}&src=${src}&c=${merchant.id}`)
    }
  }
}
</script>

<style lang="scss">
</style>