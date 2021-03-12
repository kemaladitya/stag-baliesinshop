<template>
  <div>
    <v-container id="b-list-products" class="pt-12 pl-1 pr-1 mb-12">
      <v-card flat tile>
        <Loading v-show="loading_product" />
        <div class="ma-1 mb-0 d-flex flex-row" style="margin-top: 17px !important">
          <div class="mr-1" style="width: 100%">
            <v-text-field
              append-icon="mdi-magnify"
              placeholder="Mau cari apa hari ini?"
              hide-details
              dense
              outlined
              style="font-size: 13px"
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
              hide-details
              dense
              outlined
              v-model="search_type"
            />
          </div>
        </div>
        <div class="ml-2" style="font-size: 8px; color: #999; padding-top: 2px; text-align: left">
          Cari Produk berdasarkan : <span style="color: #0D47A1">"{{ search_type }}"</span>
        </div>
        <div v-show="!loading_product">
          <Products
            :listproduct="search_value.length ? find_product : list_product"
            :productdetail="product_detail"
            :addtocart="add_to_cart"
            :loadingproduct="loading_product"
          />
        </div>
      </v-card>
      <v-snackbar v-model="snackbar">information</v-snackbar>
    </v-container>
    <!-- <div> -->
      <v-card
        v-show="(!rp_order && cart.length) || rp_order && dates.length"
        class="basket-background-shadow"
        width="100%"
        height="40px"
        style="position: fixed; bottom: -5px; z-index: 8"
        tile
      >
        &nbsp;
      </v-card>
      <!-- <v-img src="data:image/jpeg;base64,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" /> -->
      <!-- <v-img width="100%" height="100px" src="https://png2.cleanpng.com/dy/8f0e4c5a6345ceadd4a04d00c513e245/L0KzQYq3VcA4N6l9epH0aYP2gLBuTgBweqVmet5uLX7ohMj2kvsub6NmiNpyY4Owc73wkL1ieqUyjORqboPzccPsjvN6NZVqRadsZEK0dIGBg8QyP5U3RqQANkm6RoaAUcU2P2M8S6oBNEizQ4O1kP5o/kisspng-portable-network-graphics-clip-art-transparency-de-5cd21d08c417d2.2569765715572738648032.png" /> -->
    <!-- </div> -->
    <transition name="scroll-y-reverse-transition" mode="out-in" appear>
      <div
        v-show="(!rp_order && cart.length) || rp_order && dates.length"
        style="position: fixed; bottom: 0; padding: 10px 8px; width: 100%; z-index: 9;"
      >
        <v-card
          class="d-flex flex-row pa-3 pr-3 pl-3"
          color="#fd0"
          :to="gotocart"
        >
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            Lihat Keranjang
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600; color: grey"
            flat
          >
            {{ total_qty_item }} item
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            <div v-if="rp_order" style="font-weight: 600">
              Rp. {{
                subs_order
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}
            </div>
            <div v-else style="font-weight: 600">
              Rp. {{
                normal_order
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}
            </div>
          </v-card>
        </v-card>
      </div>
    </transition>
    <v-dialog
      v-model="dialog_list_dates"
      persistent
      max-width="290"
    >
      <v-card class="pa-2">
        <div class="d-flex flex-row">
          <div style="font-size: 14px; font-weight: 600;">Select date:</div>
          <v-spacer />
          <div class="d-flex flex-row">
            <v-icon small color="red" @click="dialog_list_dates = false">mdi-close</v-icon>
          </div>
        </div>
        <v-card
          v-for="(item, index) in dates"
          :key="index"
          class="mt-1 pa-2"
          outlined
          style="
            background-color: aliceblue;
            border-color: #0D47A1 !important;
            font-size: 13px;
            font-weight: 600;
          "
          @click="add_to_rp_cart(item.date)"
        >
          {{ item.date }}
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from '@/components/General'
import Products from '@/components/Products/index'
import Loading from '@/components/Loading/list_product'

export default {
  components: {
    Loading,
    Products
  },

  data: () => ({
    page: 1,
    snackbar: false,
    loading_product: false,
    dialog_list_dates: false,
    select_search_type: ['Nama', 'Varian'],
    search_type: 'Nama',
    search_value: '',
    temp_product: {}
  }),

  computed: {
    find_product() {
      let results = this.list_product.map(el => el)

      if (this.search_type === 'Varian') {
        results = results.filter(el => {
          const list_variant = el.detail.map(detail_item => detail_item.variant)

          if (list_variant.join(',').toLowerCase().includes(this.search_value.toLowerCase())) {
            return el
          }
        })
      } else {
        results = results.filter(el => el.name.toLowerCase().includes(this.search_value.toLowerCase()))
      }

      return results
    },

    gotocart() {
      const { store, uuid, source, category } = this.site

      return `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`
    },

    list_product() {
      return this.$store.state.products
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    normal_order () {
      let total = 0

      this.cart.forEach(el => {
        const pricing = el.detail[0].discount_price
          ? el.detail[0].discount_price
          : el.detail[0].normal_price

        total += el.qty * pricing
      })

      return total
    },

    subs_order () {
      let total = 0

      this.dates.forEach(el => {
        el.items.forEach(item => {
          const pricing = item.discount_price
            ? item.discount_price
            : item.normal_price

          total += item.qty * pricing
        })
      })

      return total
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

    dates() {
      return this.$store.state.dates
    },

    total_qty_item() {
      if (this.rp_order) {
        const rp_qty = this.get_rp_qty_item()

        return rp_qty
      }

      const so_qty = this.get_so_qty_item()

      return so_qty
    },

    single_order_date() {
      const date = new Date()
      const day = date.getDate()

      date.setDate(day + 1)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
    },
  },

  async mounted () {
    const { c, u } = this.$route.query

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

    API.cart_detail(this.$store, {
      bot_id: this.store.bot_id,
      store_name: this.site.store,
      source: this.site.source,
      method: 'get',
      uuid: this.site.uuid,
      category: this.site.category
    })

    if (!this.$store.state.fullpath.length) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'fullpath',
          data: this.$route.fullPath
        }
      })
    }
  },

  methods: {
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

    product_detail(item) {
      console.log('*** product_detail method ***')

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

      this.$store.dispatch('setState', {
        payload: {
          key: 'dates',
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
        method: 'set',
        uuid: this.site.uuid,
        detail: {
          type: 'rp-order',
          notes: this.notes,
          items: mapped
        }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'added_to_cart',
          data: true
        }
      })
    },

    add_to_cart(item) {
      if (this.rp_order && this.dates.length) {
        this.dialog_list_dates = true
        this.temp_product = item[0]

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

        if (!_cart.length) {
          _temp_product.qty = 1
          list_cart.push(_temp_product)

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

            self.$store.dispatch('setState', {
              payload: {
                key: 'cart',
                data: updated_cart
              }
            })
          } else {
            // console.log('qty tidak mencukupi')
          }
        }

        if (this.rp_order) {
          const _dates = this.dates.map(el => {
            const filtered = el.items.filter(item => item.qty && item.select_date)

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

        API.manage_cart(self.$store, {
          store_name: this.site.store,
          source: this.site.source,
          method: 'set',
          uuid: this.site.uuid,
          detail: cart
        })

        this.$store.dispatch('setState', {
          payload: {
            key: 'added_to_cart',
            data: true
          }
        })
      }
    },

    async get_product() {
      console.log('*** get_product method ***')

      this.loading_product = true

      const { c, u } = this.$route.query
      const request = await this.$store.dispatch('request', {
        url: '/api/products',
        method: 'post',
        data: {
          category: c,
          uid: u,
          bot_id: this.$route.params.store
        }
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'products',
          data: request.data
        }
      })

      this.loading_product = false

      return true
    },

    async get_cart() {
      // const cart_detail = await API.cart_detail(this.$store, {
      //   bot_id: this.store.bot_id,
      //   store_name: this.site.store,
      //   source: this.site.source,
      //   method: 'get',
      //   uuid: this.site.uuid,
      //   category: this.site.category
      // })

      // console.log(cart_detail, ' cart_detail')

      // if (cart_detail && cart_detail.status && cart_detail.results) {
      //   if (cart_detail.results.type === 'single-order') {
      //     if (cart_detail.results.items.length) {
      //       console.log(cart_detail.results.items)
      //       const list_cart = cart_detail.results.items.map(el => {
      //         console.log(el.items, ' el items')
      //         const search_product = this.list_product.filter(
      //           prod => prod.id === el.items[0].id
      //         )

      //         console.log(search_product, ' search_product')

      //         if (search_product.length) {
      //           search_product[0].select_date = true
      //           search_product[0].qty = el.items[0].qty

      //           return search_product[0]
      //         }
      //       })
      //       const cleaned_cart = list_cart.filter(el => typeof el == 'object')

      //       this.$store.dispatch('setState', {
      //         payload: {
      //           key: 'cart',
      //           data: cleaned_cart
      //         }
      //       })
      //     }
      //   }

      //   if (cart_detail.results.type === 'rp-order') {
      //     console.log(cart_detail.results, ' cart_detail.results')
      //     if (cart_detail.results.items.length) {
      //       const list_dates = cart_detail.results.items.map(el => {
      //         const list_items = el.items.map(item => {
      //           console.log(item.id, 'item')
      //           const search_product = get_product.filter(
      //             prod => prod.id === item.id
      //             // ! filter detail variantnya juga disini
      //           )
      //           console.log(search_product, ' search_product')
      //           const _item = {
      //             SKU: search_product[0].SKU,
      //             detail_id: search_product[0].detail[0].detail_id,
      //             discount_price: search_product[0].detail[0].discount_price,
      //             id: search_product[0].id,
      //             main_image: search_product[0].detail[0].main_image,
      //             name: search_product[0].name,
      //             normal_price: search_product[0].detail[0].normal_price,
      //             product_id: search_product[0].id,
      //             qty: item.qty,
      //             select_date: true,
      //             variant: search_product[0].detail[0].variant
      //           }

      //           return _item
      //         })

      //         return {
      //           date: el.delivery_date,
      //           items: list_items
      //         }
      //       })

      //       this.$store.dispatch('setState', {
      //         payload: {
      //           key: 'dates',
      //           data: list_dates
      //         }
      //       })

      //       this.$store.dispatch('setState', {
      //         payload: {
      //           key: 'rp_order',
      //           data: true
      //         }
      //       })
      //     }
      //   }
      // }
    }
  }
}
</script>

<style lang="scss">
  #b-search-product-by {
    width: 0 !important;
    min-width: 0 !important;
    max-width: 0 !important;
  }
  #b-list-products > div.v-card.v-card--flat.v-sheet.theme--light.rounded-0 > div.ma-1.mt-4.mb-0.d-flex.flex-row > div:nth-child(2) > div > div > div {
    div.v-select__slot {
      height: 40px !important;

      div.v-input__append-inner {
        padding-left: 0 !important;
      }
    }
  }

  #b-list-products > div.v-card.v-card--flat.v-sheet.theme--light.rounded-0 > div.ma-1.mb-0.d-flex.flex-row > div:nth-child(2) > div > div {
    height: 40px !important;

    div {
      padding-left: 2px !important;
    }
  }

  #scrolling-techniques-7 > div > div.basket-background-shadow.v-card.v-sheet.theme--light.rounded-0 {
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
</style>