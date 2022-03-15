<template>
  <div class="pa-1" :style="'margin-bottom: ' + ($device.isAndroid ? '40vw !important' : '300px !important')">
    <v-card
      v-for="(item, index) in search_result"
      :key="index"
      class="mb-2"
      style="border-radius: 8px"
      outlined
    >
      <div class="d-flex flex-row pa-2">
        <v-img
          :src="item.main_image"
          class="image"
          min-width="90"
          max-width="90"
          min-height="90"
          max-height="90"
          loading=lazy
          style="text-align: left; border: 1px solid lightgrey; border-radius: 8px"
        />
        <div class="pl-2" style="width: 100%; text-align: left">
          <div style="font-size: 14px; font-weight: 500">{{ item.name }}</div>
          <div>
            <div v-if="item.is_promo || item.discount_price" class="d-flex flex-row discount-price">
              <div style="font-size: 12px; font-weight: 600">
                Rp {{
                  item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}
              </div>
              <div
                class="ml-1"
                style="
                  align-self: flex-end;
                  font-size: 8px;
                  color: darkgrey !important;
                  text-decoration-line: line-through !important;
                  padding-bottom: 2px;
                  font-weight: 600;
                "
              >
                Rp {{
                  item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}
              </div>
            </div>
            <div v-else class="discount-price" style="font-size: 12px; font-weight: 600">
              Rp {{
                item.normal_price
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}
            </div>
          </div>
          <div class="mr-1 mt-1">
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
                padding: 4px 6px 3px 6px;
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
                min-height: 12px !important;
                align-self: center;
                font-weight: 600;
                line-height: 1;
                padding: 2px;
                border-radius: 1px;
              "
            >&nbsp;</div>
          </div>

          <div style="min-height: 29px">
            <div v-if="item.express_delivery && item.express_delivery_setup && is_available_express">
              <div style="color: #388E3C; font-weight: 600; font-size: 10px; align-self: center">
                <v-icon color="#388E3C" style="top: -1px" small>mdi-clock-fast</v-icon>
                {{ item.express_delivery_setup.name }}
              </div>
              <div style="color: red; font-size: 8px;">{{ item.express_delivery_setup.caption }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row pa-2 pt-0" style="padding-top: 1px; justify-content: flex-end; width: 100%;">
        <div v-if="item.variant.length === 1" class="d-flex flex-row b-product-action" style="width: 100%;">
          <v-btn
            class="show-detail mr-1"
            depressed
            dense
            text
            x-small
            width="calc(50% - 5px)"
            style="font-size: 11px; height: 25px; border: 1px solid lightgrey; border-radius: 5px;"
            @click="showdetail"
          >
            <v-icon class="product-mdi-icon" style="top: -1px" small>mdi-eye</v-icon> &nbsp;Lihat
          </v-btn>
          <v-spacer />
          <v-btn
            class="add-to-cart"
            color="#fffbbb"
            depressed
            dense
            x-small
            width="calc(50% - 5px)"
            @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
            style="color: black; border: 1px solid #cccccc !important; font-size: 11px; border-radius: 5px; height: 25px"
          >
            <v-icon class="product-mdi-icon" style="top: -1px" small>mdi-basket-plus</v-icon> &nbsp;Tambah
          </v-btn>
        </div>
        <div v-else-if="item.variant.length > 1" class="d-flex flex-row pt-3" outlined>
          <v-btn
            class="select-variant"
            color="#FD0"
            depressed
            dense
            x-small
            style="color: black; border: 1px solid #cccccc !important; font-size: 9px; border-radius: 5px;"
            @click="showdetail"
          >
            <v-icon class="product-mdi-icon" x-small>mdi-checkbox-multiple-marked-outline</v-icon>
            &nbsp;Pilih Variant
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    search_result: Array,
    add_to_cart: Function,
    showdetail: Function,
  },

  computed: {
    site() {
      return this.$store.state.site
    },

    is_available_express() {
      return this.$store.state.is_available_express;
    },

    store() {
      return this.$store.state.store
    },
  }
}
</script>