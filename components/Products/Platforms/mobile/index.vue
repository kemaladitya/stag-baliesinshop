<template>
  <div
    class="pb-12"
    :style="
      cart.length || subscription_cart.length || package_cart.length
        ? 'text-align: left; max-height: calc(100vh - 178px); height: calc(100vh - 178px)'
        : '100vh'
    "
  >
    <div v-if="store.store_type">
      <!-- <v-snackbar id="b-snackbar" v-model="alert" timeout="3000">
        Alamat berhasil dipilih!
      </v-snackbar> -->
      <div>
        <v-menu v-if="customer" disabled id="b-list-outlet" transition="slide-y-transition" origin="center center" min-width="100%" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card
              class="pa-2"
              style="
                font-size: 11px;
                background: #fffbbb;
                align-self: center;
                padding-top: 10px !important;
              "
              flat
              tile
              v-bind="attrs"
              v-on="on"
            >
              <div class="d-flex flex-row">
                <v-icon class="mr-1" x-small>mdi-map-marker</v-icon>
                <div style="padding-top: 1px; font-weight: 600">
                  Pengiriman ke <span style="text-transform: capitalize"> {{ customer.urban.toLowerCase() }}, {{ customer.city.toLowerCase() }}</span>
                </div>
                <v-spacer />
                <!-- <v-icon style="margin-top: 2px" small>mdi-chevron-down</v-icon> -->
              </div>
            </v-card>
          </template>
          <v-list class="d-flex flex-row pa-1" max-height="40vh" style="overflow-y: scroll">
            <v-btn
              v-for="(item, i) in mt_address" :key="i"
              class="b-merchant-item pa-2 pl-3 mr-2"
              width="200"
              height="150"
              style="
                font-size: 13px;
                letter-spacing: normal;
                text-align: left !important;
              "
              :style="
                item.address === customer.address
                  ? 'border: 2px solid #fd0 !important; background: rgb(255, 251, 187)'
                  : 'border: 2px solid #ccc !important; background: white'
              "
              :class="i !== (mt_address.length - 1) ? 'mb-1' : null"
              depressed
              hover
              tile
              @click="select_address(item)"
            >
              <div style="text-align: left !important">
                <div style="font-weight: bold">{{ customer.name }}</div>
                <div style="font-size: 11px">{{ customer.phone }}</div>
                <div class="mt-2" style="height: 15px">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: none;
                      max-width: 170px;
                      display: inline-block;
                      min-width: 80px;
                      white-space: nowrap;
                      overflow: hidden !important;
                      text-overflow: ellipsis;
                    "
                  >
                    {{ item.address }}
                  </div>
                </div>
                <div style="height: 15px">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: capitalize;
                      max-width: 170px;
                      display: inline-block;
                      min-width: 80px;
                      white-space: nowrap;
                      overflow: hidden !important;
                      text-overflow: ellipsis;
                    "
                  >
                    {{ item.urban.toLowerCase() }},
                  </div>
                </div>
                <div style="height: 15px">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: capitalize;
                      max-width: 170px;
                      display: inline-block;
                      min-width: 80px;
                      white-space: nowrap;
                      overflow: hidden !important;
                      text-overflow: ellipsis;
                    "
                  >
                    Kec. {{ item.sub_district.toLowerCase() }},
                  </div>
                </div>
                <div style="height: 15px">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: capitalize;
                      max-width: 170px;
                      display: inline-block;
                      min-width: 80px;
                      white-space: nowrap;
                      overflow: hidden !important;
                      text-overflow: ellipsis;
                    "
                  >
                    Kota {{ item.city.toLowerCase() }}
                  </div>
                </div>
              </div>
            </v-btn>
            <div>
              <v-card @click="add_sub_address" class="pa-3 mt-12 mr-1" style="" flat outlined>
                <v-icon>mdi-plus</v-icon>
              </v-card>
            </div>
          </v-list>
        </v-menu>
        <!--  -->
        <v-card height="90" style="background: #fd0" flat tile>
          <div>
            <div v-if="customer" class="pa-3 pb-0 text-left" style="font-size: 12px">
              Hi {{ customer.name.split(' ')[0] }}, kamu sedang belanja di <span style="font-weight: 600">{{ merchant.name }}</span> 
            </div>
            <div v-else class="pa-3 pb-0" style="font-size: 12px; font-weight: 600">Toko Pilihanmu</div>
          </div>
          <v-card class="ma-3 mt-1" style="background: white; border-radius: 7px !important" flat>
            <v-text-field
              class="text-search-at-merchant"
              append-icon="mdi-magnify"
              placeholder="Cari barangmu"
              style="font-size: 13px;"
              dense
              hide-details
              :solo="search_value.length > 0"
              :outlined="search_value.length < 1"
              v-model="search_value"
            />
          </v-card>
        </v-card>
      </div>
    </div>
    <div v-else class="pl-1 pr-1">
      <div id="b-find-product" class="ma-1 mb-0 d-flex flex-row" style="margin-top: 13px !important">
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
        <div style="width: 40px;">
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
        <div class="ml-1">
          <div style="width: 40px; height: 40px; text-align: center; border: 1px solid darkgrey; border-radius: 4px;">
            <div style="padding-top: 6px; align-self: center; height: 38px" @click="show_mode = !show_mode">
              <v-icon v-if="show_mode">mdi-view-grid</v-icon>
              <v-icon v-else>mdi-view-list</v-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-2 pb-1" style="font-size: 8px; color: #999; padding-top: 2px; text-align: left">
        Cari Produk berdasarkan :
        <span style="color: rgb(90 149 241); font-weight: 600">
          {{ search_type }}
        </span>
      </div>
    </div>
    <div class="pl-1 pr-1" style="min-height: calc(100vh - 130px); max-height: calc(100vh - 130px); overflow-y: scroll">
      <div v-if="search_result.length">
        <div v-if="recomendation_items">
          <div
            class="pa-1"
            style="
              font-size: 12px;
              max-width: 110px;
              font-weight: 600;
              text-align: left;
              min-width: 100%;
            "
          >
            {{ customer.name }}, ini produk pilihan untukmu
          </div>
          <div class="d-flex flex-row" style="overflow-x: scroll; padding-bottom: 10px;">
            <v-card
              v-for="(item, idx) in recomendation_items"
              :key="idx"
              class="mr-1 mt-1 ml-1"
              style="text-align: left"
              :width="item_width"
              flat
              outlined
            >
              <!-- :to="`/site/${site.store}/${item.id}?u=${$route.query.u}&src=${$route.query.src}&c=${$route.query.c}`" -->
              <v-img class="image" :src="item.main_image" height="150" loading=lazy style="text-align: left" />
              <div class="pa-2" style="text-align: left">
                <div class="mr-1">
                  <div
                    v-if="item.is_promo" 
                    style="
                      background: #002BBC;
                      color: white;
                      font-size: 8px;
                      width: fit-content;
                      min-height: 12px;
                      align-self: center;
                      font-weight: 600;
                      line-height: 1;
                      padding: 2px;
                      border-radius: 1px;
                    "
                  >
                    Promo
                  </div>
                  <div
                    v-else
                    style="
                      font-size: 8px;
                      width: fit-content;
                      min-height: 12px;
                      align-self: center;
                      font-weight: 600;
                      line-height: 1;
                      padding: 2px;
                      border-radius: 1px;
                    "
                  >&nbsp;</div>
                </div>
                <div class="name">{{ item.name }}</div>
                <div class="discount-price">
                  <div>
                    <div v-if="item.is_promo || item.discount_price">
                      Rp {{
                        item.discount_price
                          .toLocaleString()
                          .replace(/,/g, '.')
                      }}
                    </div>
                    <div :class="item.is_promo ? 'lined' : null">
                      Rp {{
                        item.normal_price
                          .toLocaleString()
                          .replace(/,/g, '.')
                      }}
                    </div>
                    <div v-if="!item.is_promo" style="font-size: 8px">&nbsp;</div>
                  </div>
                </div>

                <div v-if="item.variant.length === 1" class="d-flex flex-row pt-3 b-product-action">
                  <v-btn
                    class="show-detail"
                    depressed
                    dense
                    text
                    small
                    @click="show_detail(item)"
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
                    <v-icon class="product-mdi-icon">mdi-basket-plus</v-icon> &nbsp;Tambah
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
                    @click="show_detail(item)"
                  >
                    <v-icon class="product-mdi-icon">mdi-checkbox-multiple-marked-outline</v-icon>
                    &nbsp;Pilih Variant
                  </v-btn>
                </div>
              </div>
            </v-card>
          </div>
          <div>
            <div
              v-if="!store.store_type"
              class="pa-1 pb-0 mt-2"
              style="
                font-size: 12px;
                max-width: 110px;
                font-weight: 600;
                text-align: left;
                min-width: 100%;
              "
            >
              Produk {{ store.name }}
            </div>
            <div v-else class="d-flex flex-row">
              <div class="pa-1 pt-2" style="font-size: 13px; font-weight: 600; text-align: left; margin-bottom: -10px">Produk yang tersedia</div>
              <v-spacer />
              <div class="pt-1 pr-1">
                <v-icon x-small @click="show_mode = !show_mode">mdi-{{ show_mode ? 'view-grid' : 'view-list' }}</v-icon>
              </div>
            </div>
          </div>
        </div>
        <List v-if="show_mode" :search_result="search_result" :showdetail="show_detail" :add_to_cart="add_to_cart" />
        <Grid v-else :search_result="search_result" :showdetail="show_detail" :add_to_cart="add_to_cart" />
      </div>

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
    </v-bottom-sheet>
  </div>
</template>

<script>
import API from '@/components/General'
import List from '@/components/Products/Platforms/mobile/show-type/list'
import Grid from '@/components/Products/Platforms/mobile/show-type/grid'
export default {
  components: { List, Grid },
  props: {
    productdetail: {
      type: Function,
      required: true
    },
    loadingproduct: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    select_search_type: ['Nama', 'Varian', 'Kategori'],
    search_type: 'Nama',
    search_value: '',
    sheet: false,
    target_subs_date: null,
    alert: true,
    show_mode: false
  }),
  computed: {
    item_width() {
      if (process.browser) {
        const style = window.screen.width / 2;
        return style - 12.5;
      };
      return '200px';
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
    list_merchant() {
      return this.$store.state.list_merchant
    },
    merchant() {
      return this.$store.state.merchant
    },
    customer() {
      return this.$store.state.customer
    },
    mt_address() {
      return this.$store.state.mt_address
    },
    cart() {
      return this.$store.state.cart
    },
    subscription_cart() {
      return this.$store.state.subscription_cart
    },
    package_cart() {
      return this.$store.state.package_cart
    },
    list_subscription_date() {
      const dates = this.subscription_cart.map(el => el.date)
      return dates
    },
    products() {
      return this.$store.state.products
    },
    recomendation_items() {
      if (this.products.length && this.$store.state.recomendation_items) {
        const items = [];
        this.$store.state.recomendation_items.forEach(item => {
          const filtered_product = this.products.filter(_ => _.name == item.name || _.SKU == item.sku)
          if (filtered_product.length) {
            items.push(filtered_product[0])
          };
        });
        if (items.length) return items;
      }
      return null
    },
    frequent_items() {
      if (this.products.length && this.$store.state.frequent_items) {
        const items = [];
        this.$store.state.frequent_items.forEach(item => {
          const filtered_product = this.products.filter(_ => _.name == item.name || _.SKU == item.sku)
          if (filtered_product.length) {
            items.push(filtered_product[0]);
          };
        });
        if (items.length) return items;
      }
      return null
    },
    search_result() {
      if (this.search_value.length) {
        if (this.search_type === 'Nama') {
          const results = this.products.filter(
            ({ name }) => name.toLowerCase()
              .includes(this.search_value.toLowerCase())
          )
          return results
        }
        if (this.search_type === 'Kategori') {
          const results = this.products.filter(
            ({ category }) => category.toLowerCase()
              .includes(this.search_value.toLowerCase())
          )
          return results
        }
        if (this.search_type === 'Varian') {
          const results = this.products.filter((el) => {
            const find = el.variant.filter(({ name }) => name.toLowerCase()
              .includes(this.search_value.toLowerCase())
            )
            return find.length ? el : null
          })
          return results
        }
      }
      return this.products
    },
  },
  methods: {
    show_detail(item) {
      this.$router.push(`/site/${this.site.store}/${item.id}?u=${this.$route.query.u}&src=${this.$route.query.src}&c=${this.$route.query.c}`)
    },
    async add_to_cart(id, detail_id, sku, qty) {
      if (this.order_type === 'single-order') {
        await this.add_single_order(id, detail_id, sku, qty)
      } else if (this.order_type === 'subscription-order') {
        this.target_subs_date = { id, detail_id, sku, qty }
        this.sheet = true
      }
    },
    async add_single_order(id, detail_id, sku, qty) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })
      await API.cart_manager(this, {
        method: 'add',
        info: {
          mode: 'single-order',
          item: { id, detail_id, sku, qty },
          store: {
            name   : this.site.store,
            source : this.site.source,
            uuid   : this.site.uuid,
            outlet : this.site.category,
          },
        },
      })
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })
    },
    async add_subscription_order(date) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })
      const newval = []
      this.subscription_cart.forEach(el => {
        if (el.date === date) {
          const list_ids = el.items.map(el => el.detail_id)
          if (list_ids.includes(this.target_subs_date.detail_id)) {
            el.items = el.items.filter(item => {
              if (el.date === date && item.detail_id === this.target_subs_date.detail_id) {
                item.qty += 1
              }
              return item
            })
          } else {
            el.items.push({...this.target_subs_date, qty: 1})
          }
        }
        newval.push(el)
      })
      console.log(JSON.stringify(newval, null, 2))
      await API.cart_manager(this, {
        method: 'set',
        info: {
          mode : 'subscription-order',
          item : newval,
          store: {
            name   : this.site.store,
            source : this.site.source,
            uuid   : this.site.uuid,
            outlet : this.site.category,
          },
        },
      })
      this.target_subs_date = null
      this.sheet = false
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })
    },
    count_total_order(items) {
      console.log('@count_total_order |', items)
      let total = 0
      let item  = 0
      items.forEach(el => {
        const find = this.products.filter(
          product => product.id === el.id && product.SKU === el.sku
        )
        if (find.length) {
          total += (find[0].discount_price || find[0].normal_price) * el.qty
          item  += el.qty
        }
      })
      return { total, item }
    },
    parse_date(date) {
      const list_month = [
        '',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      const day = date.split('-')[2]
      const month = list_month[+date.split('-')[1]]
      const years = date.split('-')[0]
      return `${day} ${month} ${years}`
    },
    select_merchant(merchant) {
      const { params: { store }, query: { market, c, src, u } } = this.$route
   
      console.log('@select_outlet |', merchant)
      // this.$router.replace(`/site/${store}?market=${market}&u=${u}&src=${src}&c=${merchant.id}`)
      if (process.browser) {
        window.location.replace(`/site/${store}?market=${market}&u=${u}&src=${src}&c=${merchant.id}`)
      }
    },
    select_address(address) {
      console.log('@select_address |', address)
      this.$store.dispatch('setState', {
        payload: {
          key: 'customer',
          data: { ...this.customer, ...address }
        }
      })
      this.alert = true
    },
    add_sub_address() {
      console.log('@add_sub_address')
    }
  }
}
</script>

<style lang="scss">
#b-find-product {
  .v-input--is-label-active > div:nth-child(1) > div:nth-child(1) {
    padding-left: 8px !important;
  }
  .v-select__slot {
    max-height: 40.4px !important;
  }
}
.b-merchant-item {
  padding: 0 !important;
  border-radius: 3px !important;
  .v-btn__content {
    justify-content: left !important;
  }
}
// .v-menu__content {
//   top: 55px !important;
//   left: 0 !important;
// }
// div.v-menu__content:nth-child(2) {
//   min-width: 100% !important;
//   top: 55px !important;
//   left: 0 !important;
//   transform-origin: center center 0px !important;
//   z-index: 8 !important;
// }
// div.v-menu__content:nth-child(3) {
//   min-width: calc(100% - 24px) !important;
//   top: 121px !important;
//   left: 12px !important;
//   transform-origin: center center 0px !important;
//   z-index: 8 !important;
// }
#b-snackbar {
  display: fixed !important;
  width: 100% !important;
  .v-snack__content {
    font-size: 11px !important;
    font-weight: 600 !important;
  }
}
#b-find-product > div:nth-child(2) > div > div > div > div.v-select__slot > div.v-input__append-inner {
  padding-left: 0;
}
</style>