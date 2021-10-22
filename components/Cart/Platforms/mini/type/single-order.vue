<template>
  <div>
    <div v-if="cart.length">
      <div v-for="(item, index) in parsed_lists.product" :key="index">
        <v-card class="d-flex flex-row ma-1 mb-2 pr-1" outlined>
          <v-card
            class="ma-1 pt-6"
            width="25"
            flat
            depressed
            @click="manage_cart(item.id, item.detail_id, item.sku, 0, 'remove')"
          >
            <center>
              <v-icon color="red" small>mdi-close</v-icon>
            </center>
          </v-card>
          <v-card class="d-flex flex-row" flat width="100%">
            <!-- <v-card class="ma-2 ml-0" flat outlined>
              <v-img :src="item.main_image" width="65" height="65" loading=lazy />
            </v-card> -->
            <div class="pa-2" style="text-align:left">
              <div
                style="
                  font-size: 13px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                "
              >
                {{ item.name }}
              </div>
              <div class="d-flex flex-row">
                <div style="font-size: 13px; font-weight: 600;">
                  <div v-if="item.is_promo">
                    Rp {{
                      item.discount_price
                        .toLocaleString()
                        .replace(/,/g, '.')
                    }}, -
                  </div>
                  <div
                    :style="
                      item.is_promo
                        ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                        : null
                    "
                  >
                    Rp {{
                      item.normal_price
                        .toLocaleString()
                        .replace(/,/g, '.')
                    }}, -
                  </div>
                  <div v-if="!item.is_promo">&nbsp;</div>
                </div>
              </div>
            </div>
          </v-card>
          <div class="d-flex flex-row pl-1 pr-1" style="align-self: center">
            <div>
              <v-btn
                color="success"
                style="padding: 0; border-color: #4caf50 !important"
                max-width="26"
                width="26"
                min-width="26"
                max-height="26"
                height="26"
                min-height="26"
                depressed
                outlined
                rounded
                small
                text
                @click="manage_cart(item.id, item.detail_id.id, item.sku, 1, 'reduce')"
              >
                <v-icon small>mdi-minus</v-icon>
              </v-btn>
            </div>
            <v-card
              class="pt-1 text-center"
              min-width="30"
              style="font-size: 14px"
              flat
            >
              {{ item.qty }}
            </v-card>
            <div>
              <v-btn
                color="success"
                style="padding: 0; border-color: #4caf50 !important"
                max-width="26"
                width="26"
                min-width="26"
                max-height="26"
                height="26"
                min-height="26"
                depressed
                outlined
                rounded
                small
                text
                @click="manage_cart(item.id, item.detail_id.id, item.sku, 1, 'add')"
              >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </div>

    <div v-else>
      <center style="margin-top: 30vh; margin-bottom: 30px">
        <div style="width: 264px">
          <v-icon color="grey lighten-2" style="font-size: 120px;">mdi-cart-outline</v-icon>
          <div
            style="
              font-weight: 600;
              border-radius: 5px;
              width: fit-content;
              font-size: 13px;
            "
          >
            Keranjang belanja Anda kosong.
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import API from '@/components/General'

export default {
  components: {},

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

    parsed_lists() {
      let total = 0
      const product = []

      this.cart.forEach(el => {
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
    }
  },

  methods: {
    async manage_cart(id, detail_id, sku, qty, method) {
      console.log(id, detail_id, sku, qty, method)
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })

      await API.cart_manager(this, {
        method,
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
  }
}
</script>
