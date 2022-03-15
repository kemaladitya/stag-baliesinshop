<template>
  <div>
    <v-card v-for="(order, idx) in package_cart" :key="idx" flat>
      <v-card v-if="order.type === 'parcel'" class="mt-2" flat outlined>
        <div class="d-flex flex-row pa-2 pb-0">
          <div class="d-flex flex-row">
            <v-img
              class="mr-2"
              max-width="18px"
              min-width="18px"
              max-height="18px"
              min-height="18px"
              height="18px"
              width="18px"
              src="https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"
            />
            <div style="font-weight: 600; font-size: 13px; text-transform: capitalize">
              {{ order.type }}
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) in item_parser(order.items).product"
          :key="index"
          class="pa-2"
        >
          <v-card class="d-flex flex-row" width="100%" flat outlined>
            <v-card class="ma-2" style="padding-top: 2px" flat>
              <v-img :src="item.main_image" width="70" height="70" />
            </v-card>
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
                  min-width: 100%;
                "
              >
                {{ item.name }}
              </div>
              <div
                style="
                  font-size: 13px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  min-width: 100%;
                "
              >
                {{ item.detail_id.name }}
              </div>
              <div class="d-flex flex-row" style="font-size: 13px">
                <div class="mr-2" style="font-size: 13px; font-weight: 600; color: black">
                  {{ item.qty }} x
                </div>
                <div
                  v-if="item.discount_price"
                  class="mr-1"
                  style="font-size: 13px; font-weight: 600"
                >
                  Rp {{
                    item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div
                  style="font-size: 13px; font-weight: 600;"
                  :style="item.discount_price ? 'text-decoration: line-through; color: #999' : null"
                >
                  Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-card>
      <v-card v-if="order.type === 'box'" class="mt-2" flat outlined>
        <div class="d-flex flex-row pa-2 pb-0">
          <div class="d-flex flex-row">
            <v-img
              class="mr-2"
              max-width="18px"
              min-width="18px"
              max-height="18px"
              min-height="18px"
              height="18px"
              width="18px"
              src="https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"
            />
            <div style="font-weight: 600; font-size: 13px; text-transform: capitalize">
              {{ order.type }}
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) in item_parser(order.items).product"
          :key="index"
          class="pa-2"
        >
          <v-card class="d-flex flex-row" width="100%" flat outlined>
            <v-card class="ma-2" style="padding-top: 2px" flat>
              <v-img :src="item.main_image" width="70" height="70" />
            </v-card>
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
                  min-width: 100%;
                "
              >
                {{ item.name }}
              </div>
              <div
                style="
                  font-size: 13px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  min-width: 100%;
                "
              >
                {{ item.detail_id.name }}
              </div>
              <div class="d-flex flex-row" style="font-size: 13px">
                <div class="mr-2" style="font-size: 13px; font-weight: 600; color: black">
                  {{ item.qty }} x
                </div>
                <div
                  v-if="item.discount_price"
                  class="mr-1"
                  style="font-size: 13px; font-weight: 600"
                >
                  Rp {{
                    item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div
                  style="font-size: 13px; font-weight: 600;"
                  :style="item.discount_price ? 'text-decoration: line-through; color: #999' : null"
                >
                  Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    package_cart() {
      return this.$store.state.package_cart
    },

    list_product() {
      return this.$store.state.products
    },
  },

  methods: {
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
  }
}
</script>