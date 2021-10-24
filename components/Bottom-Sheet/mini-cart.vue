<template>
  <v-card flat tile style="max-height: 80vh !important; overflow-y: scroll">
    <v-card class="ma-1">
      <div
        class="pl-2 pt-1 pb-1"
        style="align-self: center; font-size: 13px; font-weight: 600; text-align: left"
      >
        Detail Keranjang
      </div>
      <div
        class="pb-1"
        style="overflow-y: scroll !important; max-height: 200px !important; overflow-x: hidden !important;"
      >
        <div v-for="(item, index) in parsed_lists.product" :key="index">
          <v-card class="d-flex flex-row ma-1 mb-2 pr-1" outlined>
            <v-card class="d-flex flex-row" flat width="100%">
              <v-card class="ma-2" flat>
                <v-img
                  :src="item.main_image"
                  width="65"
                  height="65"
                />
              </v-card>
              <div class="pa-2" style="text-align: left">
                <div
                  style="
                    font-size: 12px;
                    max-width: 350px;
                    display: inline-block;
                    min-width: 350px;
                    white-space: nowrap;
                    overflow: hidden !important;
                    text-overflow: ellipsis;
                    font-weight: 600;
                  "
                >
                  {{ item.name }}
                </div>
                <div
                  style="
                    font-size: 11px;
                    max-width: 350px;
                    display: inline-block;
                    min-width: 350px;
                    white-space: nowrap;
                    overflow: hidden !important;
                    text-overflow: ellipsis;
                    color: grey;
                  "
                >
                  {{ item.detail_id.name }}
                </div>
                <div v-if="item.discount_price" class="d-flex flex-row">
                  <div class="mr-2" style="font-size: 13px; font-weight: 600">
                    {{ item.qty }} x Rp
                    {{
                      item.discount_price
                        .toLocaleString()
                        .replace(/,/g, '.')
                    }}, -
                  </div>
                  <div style="font-size: 13px; font-weight: 600; text-decoration: line-through; color: #999">
                    Rp {{
                      item.normal_price
                        .toLocaleString()
                        .replace(/,/g, '.')
                    }}, -
                  </div>
                </div>
                <div v-else style="font-size: 13px; font-weight: 600">
                  {{ item.qty }} x Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
              </div>
            </v-card>
          </v-card>
        </div>
      </div>
      <div class="pa-2 pl-1 pr-1" style="background-color: white;">
        <v-card
          class="pt-1 pb-1"
          style="
            font-size: 13px;
            font-weight: 600;
            border: 1.8px solid darkslategrey;
            border-radius: 3px;
            color: darkslategrey;
            text-align: center;
          "
          outlined
          @click="gotocart"
        >
          Lihat Keranjang
        </v-card>
      </div>
    </v-card>
    <v-card height="5px" flat tile />
    <v-card class="pa-1 mb-0 pb-2" color="transparent">
      <div
        class="pl-2 pt-1 pb-2"
        style="align-self: center; font-size: 13px; font-weight: 600; text-align: left"
      >
        Produk lainnya
      </div>
      <div class="d-flex flex-row ma-1 pb-2 mb-0" style="overflow-x: scroll;">
        <v-card
          v-for="(item, idx) in list_product"
          :key="idx"
          class="mr-2 mt-1 ml-1"
          style="text-align: left"
          elevation="2"
          @click="product_detail(item)"
        >
          <center style="width: 120px">
            <v-img :src="item.main_image" width="100" height="100" />
          </center>
          <div class="pa-2">
            <div
              style="
                font-size: 12px;
                max-width: 110px;
                display: inline-block;
                min-width: 110px;
                white-space: nowrap;
                overflow: hidden !important;
                text-overflow: ellipsis;
                font-weight: 600;
              "
            >
              {{ item.name }}
            </div>
            <div v-if="item.discount_price">
              <div style="font-size: 12px; font-weight: 600; text-decoration: line-through; color: #999">
                Rp {{
                  item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
              <div class="mr-2" style="font-size: 12px; font-weight: 600">
                Rp {{
                  item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
            </div>
            <div v-else style="font-size: 12px; font-weight: 600">
              Rp {{
                item.normal_price
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}, -
            </div>
          </div>
        </v-card>
      </div>
    </v-card>
    <v-card height="10px" flat tile />
  </v-card>
</template>

<script>
export default {
  computed: {
    site() {
      return this.$store.state.site
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
    product_detail(item) {
      const { uuid, source, category, store } = this.site

      this.$store.dispatch('setState', {
        payload: {
          key : 'mini_cart',
          data: false
        }
      })

      this.$router.replace(`/site/${store}/${item.id}?u=${uuid}&src=${source}&c=${category}`)
    },

    gotocart() {
      const { store, uuid, source, category } = this.$store.state.site

      this.$router.replace(
        `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`
      )
    },
  }
}
</script>
