<template>
  <div
    class="pa-1 pt-0"
    :style="
      cart.length || subscription_cart.length || package_cart.length
        ? 'text-align: left; max-height: calc(100vh - 185px); height: calc(100vh - 185px)'
        : '100vh'
    "
  >
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
    <div class="ml-2 pb-1" style="font-size: 8px; color: #999; padding-top: 2px; text-align: left">
      Cari Produk berdasarkan :
      <span style="color: rgb(90 149 241); font-weight: 600">
        {{ search_type }}
      </span>
    </div>
    <div style="min-height: calc(100vh - 130px); max-height: calc(100vh - 130px); overflow-y: scroll">
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
            <img
              :src="item.main_image"
              loading=lazy
              style="
                text-align: left;
                height: 150px !important;
                width: 150px !important;
                min-height: 150px !important;
                min-width: 150px !important;
                max-height: 150px !important;
                max-width: 150px !important;
                object-fit: cover;
              "
            />
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
                    padding: 4px 6px 3px 6px;
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
              <div class="name" style="font-size: 13px">{{ item.name }}</div>
              <div class="discount-price" style="font-size: 13px">
                <div>
                  <div v-if="item.is_promo">
                    Rp. {{
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
                    }}
                  </div>
                  <div v-if="!item.is_promo" style="font-size: 8px">&nbsp;</div>
                </div>
              </div>

              <div style="min-height: 29px">
                <div v-if="item.express_delivery && item.express_delivery_setup">
                  <div style="color: #388E3C; font-weight: 600; font-size: 10px; align-self: center">
                    <v-icon color="#388E3C" style="top: -1px" small>mdi-clock-fast</v-icon>
                    {{ item.express_delivery_setup.name }}
                  </div>
                  <div style="color: red; font-size: 8px;">{{ item.express_delivery_setup.caption }}</div>
                </div>
              </div>

              <div v-if="item.variant.length === 1" class="pt-3">
                <v-btn
                  class="show-detail mb-1"
                  width="100%"
                  style="font-size: 11px; border: 1px solid grey"
                  depressed
                  dense
                  text
                  small
                  @click="show_detail(item)"
                >
                  <v-icon class="product-mdi-icon" style="font-size: 12px">mdi-eye</v-icon> &nbsp;Lihat
                </v-btn>
                <v-spacer />
                <v-btn
                  class="add-to-cart"
                  width="100%"
                  color="#fffbbb"
                  depressed
                  dense
                  small
                  @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
                  style="color: black; border: 1px solid #cccccc !important; font-size: 11px"
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
                  style="color: black; border: 1px solid #cccccc !important; font-size: 11px"
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
              width: 100%;
            "
          >
            Produk {{ store.name }}
          </div>
          <div v-else class="d-flex flex-row">
            <div class="pa-1 pt-2" style="font-size: 13px; font-weight: 600; text-align: left; margin-bottom: -10px">Produk yang tersedia</div>
          </div>
        </div>
      </div>
      <v-row v-if="search_result.length" style="margin-bottom: 200px !important" no-gutters>
        <v-col v-for="(item, index) in search_result" :key="index" cols="6">
          <v-card class="ma-1 mt-2 mb-0" outlined>
            <img
              :src="item.main_image"
              loading=lazy
              style="
                text-align: left;
                height: 165px !important;
                min-height: 165px !important;
                max-height: 165px !important;
                width: 100%;
                object-fit: cover;
              "
            />
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
              <div class="name" style="font-size: 13px">{{ item.name }}</div>
              <div class="discount-price" style="font-size: 13px">
                <div>
                  <div v-if="item.is_promo">
                    Rp. {{
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
                    }}
                  </div>
                  <div v-if="!item.is_promo" style="font-size: 8px">&nbsp;</div>
                </div>
              </div>

              <div style="min-height: 29px">
                <div v-if="item.express_delivery && item.express_delivery_setup && is_available_express">
                  <div style="color: #388E3C; font-weight: 600; font-size: 10px; align-self: center">
                    <v-icon color="#388E3C" style="top: -1px" small>mdi-clock-fast</v-icon>
                    {{ item.express_delivery_setup.name }}
                  </div>
                  <div style="color: red; font-size: 8px;">{{ item.express_delivery_setup.caption }}</div>
                </div>
              </div>

              <div v-if="item.variant.length === 1" class="pt-3">
                <v-btn
                  class="show-detail mb-1"
                  width="100%"
                  style="font-size: 10px; border: 1px solid grey"
                  depressed
                  dense
                  text
                  small
                  @click="show_detail(item)"
                >
                  <v-icon class="product-mdi-icon" style="font-size: 12px">mdi-eye</v-icon> &nbsp;Lihat
                </v-btn>
                <v-spacer />
                <v-btn
                  class="add-to-cart"
                  width="100%"
                  color="#fffbbb"
                  depressed
                  dense
                  small
                  @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
                  style="color: black; border: 1px solid #cccccc !important; font-size: 10px"
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
    </div>

  </div>
</template>

<script>
import API from "@/components/general";

export default {
  props: {
    productdetail: Function,
    loadingproduct: Boolean,
  },

  data: () => ({
    select_search_type: ['Nama', 'Varian', 'Kategori'],
    search_type: 'Nama',
    search_value: '',
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

    is_available_express() {
      return this.$store.state.is_available_express;
    },

    store() {
      return this.$store.state.store
    },

    customer() {
      return this.$store.state.customer
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
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })
      // console.log('@id        | ', id)
      // console.log('@detail_id | ', detail_id)
      // console.log('@sku       | ', sku)
      // console.log('@qty       | ', qty)
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
      /**
      if (this.rp_order && this.dates.length) {
        this.dialog_list_dates = true
        this.temp_product = item[0]
        this.$store.dispatch('setState', {
          key: 'general_loading',
          data: false
        })
        return
      } else {
        console.log('*** add_to_cart method ***')
        let cart = []
        const self = this
        const selected_variant = item[0].detail[0]
        const _temp_product = {
          SKU: item[0].SKU,
          category: item[0].category,
          description: item[0].description,
          detail: [selected_variant],
          id: item[0].id,
          name: item[0].name,
          weight: item[0].weight,
          qty: 1,
          select_date: true
        }
        const list_cart = this.$store.state.cart
        const _cart = list_cart.filter(
          el =>
            el.id === item[0].id &&
            el.detail[0].variant === selected_variant.variant
        )
        this.$store.dispatch('setState', {
          payload: {
            key: 'rp_order',
            data: false
          }
        })
        if (this.rp_order) {
          const _dates = this.dates.map(el => {
            const filtered = el.items.filter(item => item.qty && item.select_date)
            this.$store.dispatch('setState', {
              key: 'general_loading',
              data: false
            })
            return {
              date: el.date,
              items: filtered.map(f_item => ({
                detail_id: f_item.detail_id,
                id: f_item.id,
                product_id: f_item.product_id,
                qty: f_item.qty,
                variant: f_item.variant
              }))
            }
          })
          cart = {
            type: 'rp-order',
            items: _dates
          }
        } else {
          cart = {
            type: 'single-order',
            items: this.cart.map(el => ({
              delivery_date: this.single_order_date,
              items: [{
                id: el.id,
                qty: el.qty,
                price: el.detail[0].discount_price || el.detail[0].normal_price,
                SKU: el.SKU,
                name: el.name,
                variant: el.detail[0].variant,
              }]
            }))
          }
        }
        console.log('@before_set_to_redis')
        const add_to_redis = await API.manage_cart(self.$store, {
          store_name: this.site.store,
          source: this.site.source,
          method: 'set',
          uuid: this.site.uuid,
          detail: cart
        })
        console.log('@after_set_to_redis |', add_to_redis)
        if (add_to_redis.status === 200 && add_to_redis.data.status) {
          this.$store.dispatch('setState', {
            payload: {
              key: 'added_to_cart',
              data: true
            }
          })
          if (!_cart.length) {
            _temp_product.qty = 1
            list_cart.push(_temp_product)
            console.log('@set_to_state')
            self.$store.dispatch('setState', {
              payload: {
                key: 'cart',
                data: list_cart
              }
            })
          } else {
            const check_stock = selected_variant.stock >= 1 + _cart[0].qty
            if (check_stock) {
              const updated_cart = list_cart.map(el => {
                if (el.id === item[0].id) {
                  _cart[0].qty += 1
                  return _cart[0]
                } else {
                  return el
                }
              })
              console.log('@set_to_state')
              self.$store.dispatch('setState', {
                payload: {
                  key: 'cart',
                  data: updated_cart
                }
              })
              
              self.$store.dispatch('setState', {
                payload: {
                  key: 'customized_values',
                  data: null
                }
              })
            } else {
              // console.log('qty tidak mencukupi')
            }
          }
        } else {
          this.$store.dispatch('setState', {
            payload: {
              key: 'alert',
              data: {
                status: true,
                text: 'Failed add to cart, please check your connection!'
              }
            }
          })
        }
      }
      */
    },
  },
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
</style>