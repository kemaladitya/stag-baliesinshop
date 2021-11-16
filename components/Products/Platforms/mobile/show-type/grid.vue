<template>
  <div>
    <v-row :style="'margin-bottom: ' + ($device.isAndroid ? '40vw !important' : '300px !important')" no-gutters>
      <v-col v-for="(item, index) in search_result" :key="index" cols="6">
        <v-card class="ma-1 mt-2 mb-0" outlined>
          <v-img class="image" :src="item.main_image" height="150" loading=lazy style="text-align: left" />
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
            <div class="name">{{ item.name }}</div>
            <div class="discount-price">
              <div>
                <div v-if="item.is_promo || item.discount_price">
                  Rp {{
                    item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}
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

            <div v-if="item.variant.length === 1" class="d-flex flex-row pt-3 b-product-action">
              <v-btn
                class="show-detail"
                depressed
                dense
                text
                small
                @click="showdetail(item)"
              >
                <v-icon class="product-mdi-icon">mdi-eye</v-icon> &nbsp;Lihat
              </v-btn>
              <v-spacer />
              <v-btn
                class="add-to-cart"
                color="#fffbbb"
                depressed
                dense
                small
                @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
                style="color: black; border: 1px solid #cccccc !important"
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
                @click="showdetail(item)"
              >
                <v-icon class="product-mdi-icon">mdi-checkbox-multiple-marked-outline</v-icon>
                &nbsp;Pilih Variant
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    search_result: {
      type: Array,
      required: true
    },

    add_to_cart: {
      type: Function,
      required: true
    },

    showdetail: {
      type: Function,
      required: true
    },
  },

  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },
  }
}
</script>