<template>
  <!-- bundle -->
  <v-card class="pa-3 mb-3" outlined>
    <v-card
      v-for="(item, index) in parsed_lists.product"
      :key="index"
      class="ml-0 mr-0 mb-2"
      outlined
    >
      <v-card class="d-flex flex-row" flat width="100%">
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
    </v-card>
    <div class="d-flex flex-row mt-1 pt-1">
      <div class="d-flex flex-row">
        <div
          class="mr-1"
          style="font-size: 13px; font-weight: 600; padding-top: 5px"
        >
          Tipe Paket:
        </div>
        <div class="ml-1" style="font-size: 13px; font-weight: 600; text-transform: capitalize; padding-top: 5px">
          {{ parsed_lists.type }}
        </div>
      </div>
      <v-spacer />
      <v-btn
        color="red"
        small
        outlined
        depressed
        dense
        style="text-transform: capitalize"
        @click="remove(idx)"
      >
        <v-icon class="mr-1" color="red" small>mdi-close-circle-outline</v-icon>
        Hapus paket
      </v-btn>
    </div>
  </v-card>
  <!-- bundle -->
</template>

<script>
export default {
  props: {
    remove: {
      type: Function,
      required: true
    },

    idx: {
      type: Number,
      required: true
    }
  },

  computed: {
    list_product() {
      return this.$store.state.products
    },

    package_cart() {
      return this.$store.state.package_cart
    },

    parsed_lists() {
      let type = this.package_cart[0].type
      let total = 0
      const product = []

      this.package_cart[0].items.forEach(el => {
        const find = this.list_product.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        console.log('@parsed_lists |', find)

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

      return { type, product, total }
    },
  },
}
</script>