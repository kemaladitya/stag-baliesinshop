<template>
  <div>
    <v-expand-transition v-if="!voucher.loading">
      <!-- <v-card v-show="rp_order" flat tile> -->
        <v-card v-if="list_cart.length" height="100%" class="pt-2" flat tile>
          <div
            v-for="(item, index) in list_cart"
            :key="index"
            class="mb-2"
            style="border: 1px solid #e0e0e0; border-radius: 5px"
          >
            <div>
              <div class="d-flex flex-row pa-2">
                <div class="pt-2 pl-1" style="font-size: 13px; font-weight: 600">
                  <!-- {{ parsedate(item.date) }} -->
                  {{ date_parser(item.date) }}
                </div>
                <v-spacer />
                <div
                  class="pr-1"
                  style="font-size: 13px; font-weight: 600; color: #2196f3"
                >
                  <div style="font-size: 13px; font-weight: 600; color: #2196f3; text-align: right">
                    <v-spacer />
                    Rp {{
                      item_parser(item.items).total
                        ? item_parser(item.items).total.toLocaleString().replace(/,/g, '.')
                        : item_parser(item.items).total
                    }}
                  </div>
                  <div
                    style="font-size: 9px; font-weight: 600; padding-top: 2px; font-style: italic;"
                    :style="
                      item_parser(item.items).total < store.min_order || item_parser(item.items).total > store.max_order ?
                        'color: rgb(255 111 111);'
                        : 'color: rgb(222 222 222)'
                    "
                  >
                    min. {{ store.min_order / 1000 }}k - max. {{ store.max_order / 1000 }}k
                  </div>
                </div>
                <v-btn
                  icon
                  depressed
                  dense
                  small
                  :ripple="false"
                  @click="expand_detail(index)"
                >
                  <v-icon v-if="expansion.length">
                    {{
                      expansion[index].show
                        ? 'mdi-chevron-up'
                        : 'mdi-chevron-down'
                    }}
                  </v-icon>
                </v-btn>
              </div>

              <div class="pa-3">
                <v-card class="d-flex flex-row mb-2" flat>
                  <v-card
                    class="d-flex flex-row"
                    flat
                  >
                    <v-card flat style="font-size: 12px; font-weight: 600">
                      Waktu Pengantaran :
                    </v-card>
                    <v-card
                      class="ml-2"
                      flat
                      style="
                        color: grey;
                        font-size: 10px;
                        font-weight: 500;
                        padding-top: 2px;
                      "
                    >
                      jam 08:00 - 17:00
                    </v-card>
                  </v-card>
                  <v-spacer />
                </v-card>
              </div>
            </div>

            <v-expand-transition>
              <div
                class="pa-2 pb-0"
                v-if="expansion.length"
                v-show="expansion[index].show"
                style="border-top: 1px solid #eaeaea"
              >
                <div
                  v-for="(cart_item, idx) in item_parser(item.items).product"
                  :key="idx"
                  class="mb-2"
                >
                  <v-card class="d-flex flex-row pr-1" outlined>
                    <v-card class="ma-2 mt-3" width="50" height="50" outlined>
                      <v-img
                        :src="cart_item.main_image" loading=lazy
                      />
                    </v-card>
                    <div class="pa-2 pt-3" style="width: 100%; text-align:left">
                      <div
                        style="
                          font-size: 11px;
                          max-width: 200px;
                          min-width: 200px;
                          white-space: nowrap;
                          overflow: hidden !important;
                          text-overflow: ellipsis;
                          font-weight: 600;
                        "
                      >
                        {{ cart_item.name }}
                      </div>
                      <div
                        style="
                          font-size: 11px;
                          max-width: 200px;
                          min-width: 200px;
                          white-space: nowrap;
                          overflow: hidden !important;
                          text-overflow: ellipsis;
                          color: grey;
                        "
                      >
                        {{ cart_item.detail_id.name }}
                      </div>
                      <div class="d-flex flex-row">
                        <div style="font-size: 11px; font-weight: 600">
                          {{ cart_item.qty }} x&nbsp;Rp&nbsp;
                        </div>
                        <div class="d-flex flex-row" style="font-size: 11px; font-weight: 600;">
                          <div v-if="cart_item.is_promo" class="mr-2">
                            {{
                              cart_item.discount_price
                                .toLocaleString()
                                .replace(/,/g, '.')
                            }}, -&nbsp;
                          </div>
                          <div
                            :style="
                              cart_item.is_promo
                                ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                                : null
                            "
                          >
                            {{
                              cart_item.normal_price
                                .toLocaleString()
                                .replace(/,/g, '.')
                            }}, -&nbsp;
                          </div>
                          <div v-if="!cart_item.is_promo">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </div>
              </div>
            </v-expand-transition>
          </div>
        </v-card>
      <!-- </v-card> -->
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props: {
    voucher: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    expansion: [],
    list_cart: [],
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    order_type() {
      return this.$store.state.order_type
    },

    store() {
      return this.$store.state.store
    },

    list_product() {
      return this.$store.state.products
    },

    cart() {
      return this.$store.state.cart
    },

    subscription_cart() {
      return this.$store.state.subscription_cart
    },

    list_date_at_cart() {
      return this.list_cart.map(el => el.date)
    },

    parsed_lists() {
      const product = []

      this.cart.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
          })
        }
      })

      return product
    },

    list_update_products() {
      if (this.target_date) {
        const target_list = this.list_cart.filter(el => el.date === this.target_date)
        const lists = this.list_product.map(el => {
          const list_ids = []
          
          target_list[0].items.forEach(item => {
            list_ids.push(item.detail_id)
          })

          if (list_ids.includes(el.variant[0].id)) {
            el.selected = true
          } else {
            el.selected = false
          }

          return el
        })

        return lists
      }
    }
  },

  mounted() {
    this.expansion = this.subscription_cart.map(_ => ({ show: false }))
    this.list_cart = this.subscription_cart
  },

  methods: {
    expand_detail(index) {
      this.expansion[index].show = !this.expansion[index].show
    },

    item_parser(items) {
      let total = 0
      const product = []

      items.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            id             : find[0].id,
            sku            : find[0].SKU,
            detail_id      : find[0].variant[0],
            main_image     : find[0].main_image,
            name           : find[0].name,
            normal_price   : find[0].normal_price,
            discount_price : find[0].discount_price,
            is_promo       : find[0].is_promo,
            qty            : el.qty
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },

    date_parser(date) {
      const _      = date.split('-')
      const day    = _[2]
      const month  = _[1]
      const years  = _[0]
      const _month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      return `${day} ${_month[+month]} ${years}`
    }
  }
}
</script>
