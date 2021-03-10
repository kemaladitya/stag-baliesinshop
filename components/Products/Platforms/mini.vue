<template>
  <div style="text-align: left">
    <v-row v-if="listproduct && listproduct.length" no-gutters>
      <v-col v-for="(item, index) in listproduct" :key="index" cols="6">
        <v-card v-if="item.detail.length" class="ma-1 mt-2 mb-0" outlined>
          <div v-if="item.detail.length">
            <v-img
              :class="screen == 'mini' && item.detail[0].discount_price? 'mini-image' : null"
              :src="item.detail[0].main_image"
              :style="screen == 'mini' && item.detail[0].discount_price ? 'height: 165px;' : 'height: 180px;'"
            >
              <div v-if="item.detail[0].discount_price" class="promo-badge">
                PROMO
              </div>
            </v-img>
          </div>
          <div class="pa-2" style="text-align: left">
            <div style="height: 50px">
              <div class="pt-2" style="font-size: 12px;">{{ item.name }}</div>
            </div>
            <div
              v-if="item.detail[0].discount_price"
              class="discount-price"
            >
              <div style="font-size: 12px">
                Rp. {{
                  item.detail[0].discount_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
              <div
                class="lined"
                style="font-size: 12px; text-decoration: line-through;"
              >
                Rp. {{
                  item.detail[0].normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
            </div>
            <div v-else class="normal-price" style="font-size: 12px">
              Rp. {{
                item.detail[0].normal_price
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}, -
            </div>

            <div
              v-if="item.detail.length === 1"
              class="pt-3"
            >
              <v-btn
                depressed
                class="pt-2 pb-2"
                dense
                text
                x-small
                width="100%"
                @click="productdetail(item)"
                style="color: black; border: 1px solid #cccccc !important;"
              >
                <v-icon class="product-mdi-icon" x-small>mdi-eye</v-icon> &nbsp;Lihat
              </v-btn>
              <v-btn
                color="#fffbbb"
                class="pt-2 pb-2"
                depressed
                dense
                x-small
                width="100%"
                @click="addtocart([item])"
                style="color: black; border: 1px solid #cccccc !important;"
              >
                <v-icon class="product-mdi-icon" x-small>mdi-cart-plus</v-icon> &nbsp;Tambah
              </v-btn>
            </div>
            <div
              v-else-if="item.detail.length > 1"
              class="t-3"
            >
              <v-btn
                class="select-variant"
                color="#FD0"
                depressed
                dense
                small
                width="100%"
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
              >
                <v-icon class="product-mdi-icon" x-small>mdi-checkbox-multiple-marked-outline</v-icon> &nbsp;Tambah
                &nbsp;Pilih Variant
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div v-else-if="!loadingproduct && listproduct.length">
      <center class="pt-12">
        <v-img
          class="empty-image"
          :src="require('@/assets/images/empty.png')"
        />
        <div class="empty-info pa-3 pr-4 pl-4 mt-4">
          This store have no product yet.
        </div>
      </center>
    </div>

    <v-card height="15vh" flat />
  </div>
</template>

<script>
export default {
  props: {
    listproduct: {
      type: Array,
      required: true
    },
    productdetail: {
      type: Function,
      required: true
    },
    addtocart: {
      type: Function,
      required: true
    },
    loadingproduct: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    site() {
      return this.$store.state.site
    },

    screen() {
      return this.$store.state.screen
    }
  }
}
</script>

<style lang="scss">
  .promo-badge {
    padding: 2px 5px;
    background-color: #1565c0;
    color: white;
    font-size: 10px;
    font-weight: 600;
    max-width: 40%;
    text-align: center;
    border-radius: 0 0 3px;
    -webkit-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }
  #mini > div.row.no-gutters > div > div > div > div > div.v-image__image.v-image__image--cover {
    margin: 20px 0;
    width: 139px;
    height: 145px;
  }
</style>