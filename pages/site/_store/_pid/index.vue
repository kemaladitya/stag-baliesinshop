<template>
  <v-card id="b-products-detail" class="pt-12 pl-2 pr-2" flat tile>
    <v-card v-if="loading_product" width="100%" flat tile>
      <center style="width: 100%">
        <div style="width: 50%; margin-top: 30vh">
          <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading="lazy" />
          <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
            Mohon menunggu...
          </div>
        </div>
      </center>
    </v-card>
    <div v-else>
      <Detail />
    </div>
  </v-card>
</template>

<script>
import API from '@/components/General'
import Detail from '@/components/Product-Detail/index'

export default {
  components: {
    Detail,
  },

  data: () => ({
    selected_variant: {},
    selected_qty    : 1,
    loading_product: false
  }),

  computed: {
    screen() {
      return this.$store.state.screen
    },

    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    merchant() {
      return this.$store.state.merchant
    },

    order_type() {
      return this.$store.state.order_type
    },

    customer() {
      return this.$store.state.customer
    },

    products() {
      return this.$store.state.products
    },

    mini_cart() {
      return this.$store.state.mini_cart
    },
  },

  async mounted () {
    this.loading_product = true

    await this.init_page()
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

    // this.selected_variant = filtered.detail[0]
    this.loading_product = false
  },

  methods: {
    async init_page() {
      const { c, u } = this.$route.query

      if (!this.store) {
        await this.get_base_info('site-page')
      }

      if (!this.customer) {
        await this.get_customer_detail(this.store.bot_id)
      }

      if (!this.products.length) {
        const get_product = await API.get_list_products(this.$store, {
          category: c,
          uid: u,
          bot_id: this.$route.params.store,
          merchant: this.merchant ? this.merchant.id : 0,
        })

        if (!get_product.status) {
          if (get_product.message == 'Expired.') {
            this.$router.replace('/error/link/expired')
          }

          if (get_product.message == 'Invalid URL.') {
            this.$router.replace('/error/link/invalid')
          }
        }
      }
    },

    show_mini_cart(params) {
      this.$store.dispatch('setState', {
        payload: {
          key  : 'mini_cart',
          data : params
        }
      })
    },

    select_qty(qty) {
      this.selected_qty = +qty
    },

    add_to_cart(item) {
      console.log('*** add_to_cart method ***')
      // console.log(item, ' item')

      // let cart = []
      // const self = this
      // const selected_variant = item.detail[0]
      // const _temp_product = {
      //   SKU         : item.SKU,
      //   category    : item.category,
      //   description : item.description,
      //   detail      : [this.selected_variant],
      //   id          : item.id,
      //   name        : item.name,
      //   weight      : item.weight,
      //   qty         : this.selected_qty,
      //   select_date : true
      // }
      // const list_cart = this.$store.state.cart
      // const _cart = list_cart.filter(
      //   el =>
      //     el.id === item.id &&
      //     el.detail[0].variant === this.selected_variant.variant
      // )

      // this.$store.dispatch('setState', {
      //   payload: {
      //     key : 'rp_order',
      //     data: false
      //   }
      // })

      // if (!_cart.length) {
      //   _temp_product.qty = this.selected_qty
      //   list_cart.push(_temp_product)

      //   self.$store.dispatch('setState', {
      //     payload: {
      //       key : 'cart',
      //       data: list_cart
      //     }
      //   })
      // } else {
      //   const check_stock = this.selected_variant.variant.stock >= 1 + _cart[0].qty
      //   if (check_stock) {
      //     const updated_cart = list_cart.map(el => {
      //       if (el.id === item.id) {
      //         _cart[0].qty = this.selected_qty

      //         return _cart[0]
      //       } else {
      //         return el
      //       }
      //     })

      //     self.$store.dispatch('setState', {
      //       payload: {
      //         key: 'cart',
      //         data: updated_cart
      //       }
      //     })
      //   } else {
      //     // console.log('qty tidak mencukupi')
      //   }
      // }

      // if (this.rp_order) {
      //   const _dates = this.dates.map(el => {
      //     const filtered = el.items.filter(item => item.qty && item.select_date)

      //     return {
      //       date: el.date,
      //       items: filtered.map(f_item => ({
      //         id         : f_item.id,
      //         detail_id  : f_item.detail_id,
      //         product_id : f_item.product_id,
      //         qty        : f_item.qty,
      //         variant    : f_item.variant
      //       }))
      //     }
      //   })

      //   cart = {
      //     type : 'rp-order',
      //     items: _dates
      //   }
      // } else {
      //   cart = {
      //     type: 'single-order',
      //     items: this.cart.map(el => ({
      //       delivery_date: this.single_order_date,
      //       items: [{
      //         id      : el.id,
      //         qty     : el.qty,
      //         price   : el.detail[0].discount_price || el.detail[0].normal_price,
      //         SKU     : el.SKU,
      //         name    : el.name,
      //         variant : el.detail[0].variant,
      //       }]
      //     }))
      //   }

      //   console.log(cart, ' cart')
      // }

      // API.manage_cart(self.$store, {
      //   store_name : this.site.store,
      //   source     : this.site.source,
      //   method     : 'set',
      //   uuid       : this.site.uuid,
      //   detail     : cart
      // })
      // this.$store.dispatch('setState', {
      //   payload: {
      //     key : 'added_to_cart',
      //     data: true
      //   }
      // })

      // this.show_mini_cart(true)
    },

    select_variant(item) {
      console.log(this.$route.params.pid, ' this.$route.params.pid')
      const filtered = this.product_detail.detail.filter(
        el => el.variant === item
      )[0]

      this.selected_variant = filtered
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
        console.log(error)
      }
    },
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
