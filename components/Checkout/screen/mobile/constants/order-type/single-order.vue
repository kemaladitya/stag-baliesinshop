<template>
  <div class="mt-2">
    <div v-if="cart.length">
      <div v-for="(item, index) in parsed_lists.product" :key="index" class="mb-3">
        <v-card class="d-flex flex-row mb-1 pr-1" style="border-radius: 8px" outlined>
          <v-card class="d-flex flex-row pa-1" flat width="100%">
            <v-card class="ma-2" style="border-radius: 8px" width="65" height="65" flat outlined>
              <v-img :src="item.main_image" width="65" height="65" loading=lazy style="border-radius: 8px" />
            </v-card>
            <div class="pa-2" style="text-align:left; width: 100%">
              <div
                style="
                  font-size: 12px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  font-weight: 500;
                  height: 18px;
                "
              >
                {{ item.name }}
              </div>
              <!-- <div
                style="
                  height: 20px;
                  margin-top: -4px;
                  font-size: 12px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  color: grey;
                "
              >
                {{ item.detail_id.name }}
              </div> -->
              <div class="d-flex flex-row" style="font-size: 12px; font-weight: 600; width: 100%">
                <div>{{ item.qty }} x &nbsp;</div>
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
                   &nbsp;Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div v-if="!item.is_promo">&nbsp;</div>
              </div>
              <div class="mt-1" style="min-height: 18px">
                <div v-show="item.express_delivery && is_available_express">
                  <div style="color: #388E3C; font-weight: 600; font-size: 12px; align-self: center">
                    <v-icon color="#388E3C" style="top: -1px" small>mdi-clock-fast</v-icon>
                    EXPRESS DELIVERY
                  </div>
                </div>
              </div>
            </div>
          </v-card>
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
export default {
  computed: {
    site() {
      return this.$store.state.site
    },

    is_available_express() {
      return this.$store.state.is_available_express
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
            qty            : el.qty,
            express_delivery : find[0].express_delivery,
            express_delivery_setup : find[0].express_delivery_setup,
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    }
  },
}
</script>