<template>
  <v-container id="b-products-detail" class="pt-12 pl-2 pr-2">
    <div v-if="products">
      <Detail
        :selectedvariant="selected_variant"
        :selectedqty="selected_qty"
        :productdetail="product_detail"
        :selectqty="select_qty"
        :selectvariant="select_variant"
        :addtocart="add_to_cart"
      />
    </div>
  </v-container>
</template>

<script>
import API from '@/components/General'
import Detail from '@/components/Product-Detail/index'

export default {
  components: {
    Detail
  },

  data: () => ({
    selected_variant: {},
    selected_qty: 1
  }),

  computed: {
    product_detail() {
      if (this.products && this.products.length) {
        const filtered = this.products.filter(
          el => el.id === +this.$route.params.pid
        )

        return filtered[0]
      } else {
        return []
      }
    },

    products() {
      return this.$store.state.products
    },

    single_order_date() {
      const date = new Date()
      const day = date.getDate()

      date.setDate(day + 1)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
    },

    cart() {
      return this.$store.state.cart
    },

    store() {
      return this.$store.state.store
    },

    site() {
      return this.$store.state.site
    }
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

    const filtered = this.$store.state.products.filter(
      el => el.id === +this.$route.params.pid
    )[0]

    this.selected_variant = filtered.detail[0]
  },

  methods: {
    select_qty(qty) {
      this.selected_qty = +qty
    },

    add_to_cart(item) {
      console.log('*** add_to_cart method ***')
      console.log(item, ' item')

      let cart = []
      const self = this
      const selected_variant = item.detail[0]
      const _temp_product = {
        SKU: item.SKU,
        category: item.category,
        description: item.description,
        detail: [this.selected_variant],
        id: item.id,
        name: item.name,
        weight: item.weight,
        qty: this.selected_qty,
        select_date: true
      }
      const list_cart = this.$store.state.cart
      const _cart = list_cart.filter(
        el =>
          el.id === item.id &&
          el.detail[0].variant === this.selected_variant.variant
      )

      this.$store.dispatch('setState', {
        payload: {
          key: 'rp_order',
          data: false
        }
      })

      if (!_cart.length) {
        _temp_product.qty = this.selected_qty
        list_cart.push(_temp_product)

        self.$store.dispatch('setState', {
          payload: {
            key: 'cart',
            data: list_cart
          }
        })
      } else {
        const check_stock = this.selected_variant.variant.stock >= 1 + _cart[0].qty
        if (check_stock) {
          const updated_cart = list_cart.map(el => {
            if (el.id === item.id) {
              _cart[0].qty = this.selected_qty

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

        console.log(cart, ' cart')
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
    },

    select_variant(item) {
      console.log(this.$route.params.pid, ' this.$route.params.pid')
      const filtered = this.product_detail.detail.filter(
        el => el.variant === item
      )[0]

      this.selected_variant = filtered
    },

    // add_to_cart(item) {
    //   console.log(item)
    //   console.log(this.cart)
    //   // const _temp_product = {
    //   //   SKU: item.SKU,
    //   //   category: item.category,
    //   //   description: item.description,
    //   //   detail: [this.selected_variant],
    //   //   id: item.id,
    //   //   name: item.name,
    //   //   weight: item.weight,
    //   //   qty: 1
    //   // }
    //   // const list_cart = this.$store.state.cart
    //   // const _cart = list_cart.filter(
    //   //   el =>
    //   //     el.id === item.id &&
    //   //     el.detail[0].variant === this.selected_variant.variant
    //   // )

    //   // if (!_cart.length) {
    //   //   _temp_product.qty = this.selected_qty
    //   //   list_cart.push(_temp_product)

    //   //   this.$store.dispatch('setState', {
    //   //     payload: {
    //   //       key: 'cart',
    //   //       data: list_cart
    //   //     }
    //   //   })
    //   // } else {
    //   //   const check_stock =
    //   //     this.selected_variant.stock >= this.selected_qty + _cart[0].qty

    //   //   if (check_stock) {
    //   //     const updated_cart = list_cart.map(el => {
    //   //       if (el.id === item.id) {
    //   //         _cart[0].qty += this.selected_qty

    //   //         return _cart[0]
    //   //       }

    //   //       return el
    //   //     })

    //   //     this.$store.dispatch('setState', {
    //   //       payload: {
    //   //         key: 'cart',
    //   //         data: updated_cart
    //   //       }
    //   //     })
    //   //   } else {
    //   //     // console.log('qty tidak mencukupi')
    //   //   }
    //   // }
    // }
  }
}
</script>

<style lang="scss">
  #b-shop-cart-badge > span > span {
    padding-top: 3px;
  }

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
