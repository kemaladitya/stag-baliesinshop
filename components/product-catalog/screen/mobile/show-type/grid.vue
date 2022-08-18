<template>
  <v-row
    :class="$device.isAndroid ? 'android-device' : 'other-device'"
    class="grid-products grid-products__mobile"
    no-gutters
  >
    <v-col v-for="(item, index) in search_result" :key="index" :cols="screen == 'desktop' ? 2 : 6">
      <v-card class="ma-1 mt-2 mb-0" outlined>
        <img
          :src="item.main_image"
          loading=lazy
          class="image"
          style="
            height: 175px !important;
            width: 100% !important;
            min-height: 175px !important;
            max-height: 175px !important;
          "
        />

        <div class="pa-2 item-information-wrapper">
          <div class="mr-1">
            <div v-if="item.is_promo" class="promo-badge promo-badge--active">Promo</div>
            <div v-else class="promo-badge promo-badge--nonactive" />
          </div>

          <div class="name">{{ item.name }}</div>

          <div class="price">
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
            <div v-if="!item.is_promo" class="promo-spacer" />
          </div>

          <div class="express-delivery">
            <div v-if="item.express_delivery && item.express_delivery_setup && is_available_express">
              <div class="label">
                <v-icon class="icon" small>mdi-clock-fast</v-icon>
                {{ item.express_delivery_setup.name }}
              </div>
              <div class="caption">{{ item.express_delivery_setup.caption }}</div>
            </div>
          </div>

          <div
            v-if="item.variant.length === 1"
            class="d-flex flex-row pt-3"
          >
            <v-btn
              class="action--show-detail"
              dense
              text
              small
              depressed
              @click="showdetail(item)"
            >
              <v-icon class="icon mr-1" x-small>mdi-eye</v-icon>
              <span>Lihat</span>
            </v-btn>
            <v-spacer />
            <v-btn
              class="action--add-to-cart"
              dense
              small
              depressed
              @click="add_to_cart(item.id, item.variant[0].id, item.SKU, 1)"
            >
              <v-icon class="icon mr-1" x-small>mdi-basket-plus</v-icon>
              <span>Tambah</span>
            </v-btn>
          </div>
          <div v-else-if="item.variant.length > 1" class="d-flex flex-row pt-3" outlined>
            <v-btn
              class="action--select-variant"
              dense
              small
              depressed
              @click="showdetail(item)"
            >
              <v-icon class="icon mr-1" x-small>
                mdi-checkbox-multiple-marked-outline
              </v-icon>
              <span>Pilih Variant</span>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
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
      return this.$store.state.site;
    },

    is_available_express() {
      return this.$store.state.is_available_express;
    },

    screen() {
      return this.$store.state.screen;
    },

    store() {
      return this.$store.state.store;
    },
  },
}
</script>
