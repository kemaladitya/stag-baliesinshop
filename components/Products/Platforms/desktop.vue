<template>
  <div style="text-align: left">
    <v-row v-if="listproduct && listproduct.length" no-gutters>
      <v-col v-for="(item, index) in listproduct" :key="index" cols="3">
        <v-card v-if="item.detail.length" class="ma-1 mt-2 mb-0" outlined>
          <div v-if="item.detail.length">
            <v-img class="image" :src="item.detail[0].main_image">
              <div v-if="item.detail[0].discount_price" class="promo-badge">
                PROMO
              </div>
            </v-img>
          </div>
          <div class="pa-2" style="text-align: left">
            <div class="name pt-2" style="font-size: 17px; font-weight: 600; max-width: 210px;">{{ item.name }}</div>
            <div
              v-if="item.detail[0].discount_price"
              class="discount-price" style="font-size: 15px"
            >
              <div>
                Rp. {{
                  item.detail[0].discount_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
              <div class="lined">
                Rp. {{
                  item.detail[0].normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
            </div>
            <div v-else class="normal-price" style="font-size: 15px">
              Rp. {{
                item.detail[0].normal_price
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}, -
            </div>

            <div v-if="item.detail.length === 1" class="d-flex flex-row pt-3">
              <v-btn
                class="show-detail"
                depressed
                dense
                text
                small
                @click="productdetail(item)"
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
                @click="addtocart([item])"
                style="color: black; border: 1px solid #cccccc !important"
              >
                <v-icon class="product-mdi-icon">mdi-cart-plus</v-icon> &nbsp;Tambah
              </v-btn>
            </div>
            <div
              v-else-if="item.detail.length > 1"
              class="d-flex flex-row pt-3"
            >
              <v-btn
                class="select-variant"
                color="#FD0"
                depressed
                dense
                small
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
              >
                <v-icon style="product-mdi-icon">mdi-checkbox-multiple-marked-outline</v-icon>
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
    }
  }
}
</script>

<style lang="scss">
  @media (min-width: 1264px) {
    #b-list-products {
      max-width: fit-content !important;
    }

    #b-page > div {
      min-width: 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }

    .container {
      min-width: 100% !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }
</style>