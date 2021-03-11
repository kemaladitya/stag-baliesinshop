<template>
  <div class="ml-12 mr-12 mt-4 mb-12 pb-12" style="text-align: left">
    <div v-if="productdetail">
      <v-card class="d-flex flex-row" height="100%" flat tile>
        <center
          class="pt-12"
          style="width: 100%;"
        >
          <v-card width="380" height="380" flat>
            <v-img
              class="ma-8 mt-3"
              width="350"
              height="350"
              :src="selectedvariant.main_image"
            />
          </v-card>
        </center>
        <div class="ml-4" style="width: 100%">
          <v-card class="pt-12" flat tile>
            <div class="mb-3" style="font-size: 26px; font-weight: 600">
              {{ productdetail.name }}
            </div>
            <div>
              <div style="font-size: 13px; color: grey">Variant:</div>
              <div class="mb-5" style="font-weight: 600">
                {{ productdetail.detail[0].variant }}
              </div>
            </div>
            <div>
              <div style="font-size: 13px; color: grey">
                Description:
              </div>
              <div class="mb-5" style="color: grey">
                {{ productdetail.description }}
              </div>
            </div>
            <div class="d-flex flex-row mb-5" style="font-weight: 600">
              <div class="mr-2">Size:</div>
              <div class="d-flex flex-row">
                <div
                  v-for="(size, indx) in productdetail.detail[0].size.split(',')"
                  :key="indx"
                  class="elevation-1 ml-1"
                  style="
                    background-color: #fd0;
                    padding: 3px 8px;
                    border-radius: 4px;
                    color: black;
                    font-size: 13px;
                  "
                >
                  {{ size.replace(/,/g, '') }}
                </div>
              </div>
              <div>
              </div>
            </div>
            <div class="pt-6 pb-3">
              <div
                class="mt-4"
                :style="
                  productdetail.detail[0].discount_price
                    ? 'text-decoration-line: line-through; color: grey; font-size: 20px'
                    : 'font-weight: 600; font-size: 20px'"
              >
                Rp. {{ productdetail.detail[0].normal_price.toLocaleString().replace(/,/g, '.') }}, -
              </div>
              <div v-if="productdetail.detail[0].discount_price" style="font-weight: 600; font-size: 20px">
                Rp. {{ productdetail.detail[0].discount_price.toLocaleString().replace(/,/g, '.') }}, -
              </div>
            </div>
            <div class="mt-12" style="width: 320px">
              <div style="font-size: 13px; color: grey">
                Pilih Variant:
              </div>
              <v-select
                :items="productdetail.detail.map(el => el.variant)"
                :placeholder="selectedvariant.variant"
                @change="selectvariant"
                hide-details
                outlined
                dense
              />
            </div>
            <div class="d-flex flex-row mt-6">
              <div class="mr-3">
                <div style="font-size: 13px; color: grey">
                  Quantity:
                </div>
                <div class="mt-1" style="width: 110px">
                  <v-select
                    :items="
                      Array.from(Array(selectedvariant.stock).keys()).slice(1, 11)
                    "
                    :placeholder="
                      String(
                        Array.from(Array(selectedvariant.stock).keys()).slice(1)[0]
                      )
                    "
                    outlined
                    dense
                    @change="selectqty"
                  />
                </div>
                <!-- <div class="d-flex flex-row" style="margin-top: 6px">
                  <v-card class="pa-1" width="35" height="35" @click="">
                    <center>
                      <v-icon>mdi-menu-left</v-icon>
                    </center>
                  </v-card>
                  <center style="padding: 6px 20px">
                    1
                  </center>
                  <v-card class="pa-1" width="35" height="35" @click="">
                    <center>
                      <v-icon>mdi-menu-right</v-icon>
                    </center>
                  </v-card>
                </div> -->
              </div>
              <div class="ml-1 mt-6">
                <v-btn
                  height="39"
                  color="#fd0"
                  depressed
                  style="letter-spacing: normal"
                >
                  Tambah ke Keranjang
                </v-btn>
              </div>
            </div>
          </v-card> 
        </div>
        <!-- <div style="background-color: red; width: 100%">
          flex
        </div> -->
        <!-- <v-card width="50%" class="pa-4 pt-0" style="align-self: center;" flat>
          <v-img
            class="ma-8 mt-0"
            width="300"
            height="300"
            :src="selectedvariant.main_image"
          />
        </v-card>
        <v-card width="50%" class="pt-12 mt-12" flat tile>
          <div class="mb-3" style="font-size: 26px; font-weight: 600">
            {{ productdetail.name }}
          </div>
          <div>
            <div style="font-size: 13px; color: grey">Variant:</div>
            <div class="mb-5" style="font-weight: 600">
              {{ productdetail.detail[0].variant }}
            </div>
          </div>
          <div>
            <div style="font-size: 13px; color: grey">Description:</div>
            <div class="mb-5" style="color: grey">
              {{ productdetail.description }}
            </div>
          </div>
          <div class="d-flex flex-row mb-5" style="font-weight: 600">
            <div class="mr-2">Size:</div>
            <div class="d-flex flex-row">
              <div
                v-for="(size, indx) in productdetail.detail[0].size.split(',')"
                :key="indx"
                class="elevation-1 ml-1"
                style="
                  background-color: #8C2A35;
                  padding: 3px 8px;
                  border-radius: 4px;
                  color: white;
                  font-size: 13px;
                "
              >
                {{ size.replace(/,/g, '') }}
              </div>
            </div>
            <div>
            </div>
          </div>
          <div class="mt-12 pt-12">
            <div
              class="mt-12"
              :style="
                productdetail.detail[0].discount_price
                  ? 'text-decoration-line: line-through; color: grey; font-size: 26px'
                  : 'font-weight: 600'"
            >
              Rp. {{ productdetail.detail[0].normal_price.toLocaleString().replace(/,/g, '.') }}, -
            </div>
            <div v-if="productdetail.detail[0].discount_price" style="font-weight: 600; font-size: 26px">
              Rp. {{ productdetail.detail[0].discount_price.toLocaleString().replace(/,/g, '.') }}, -
            </div>
          </div>
        </v-card> -->
      </v-card>
      <!-- 
      <v-card class="d-flex flex-row pa-1" flat tile>
        <div class="name">{{ productdetail.name }}</div>
        <v-spacer />

        <div v-if="selectedvariant.normal_price" class="price">
          Rp. {{
            selectedvariant.normal_price.toLocaleString().replace(/,/g, '.')
          }}, -
        </div>
      </v-card>

      <v-divider />

      <v-card class="d-flex flex-row pa-1 pt-4" flat tile>
        <div class="variant pr-2" style="text-align: left">
          <div class="label mb-1">Variant</div>
          <v-select
            :items="productdetail.detail.map(el => el.variant)"
            :label="selectedvariant.variant"
            min-width="50%"
            max-width="50%"
            solo
            dense
            @change="selectvariant"
          />
        </div>
        <div class="qty pl-2" style="text-align: left">
          <div class="label mb-1">Qty.</div>
          <v-select
            :items="
              Array.from(Array(selectedvariant.stock).keys()).slice(1, 11)
            "
            :label="
              String(
                Array.from(Array(selectedvariant.stock).keys()).slice(1)[0]
              )
            "
            min-width="50%"
            max-width="50%"
            solo
            dense
            @change="selectqty"
          />
        </div>
      </v-card>

      <v-divider />

      <center class="pb-3 pt-3">
        <div class="size">Ukuran</div>
        <div class="size">
          {{ selectedvariant.size }}
        </div>
      </center>

      <v-divider />

      <div class="description pa-1 pt-3">
        <div class="label">Deskripsi</div>
        <div class="detail pt-2">
          {{ productdetail.description }}
        </div>
        <v-card height="50" flat tile />
      </div>

      <v-footer
        fixed
        padless
        color="transparent"
        style="width: 100%"
      >
        <div
          class="content d-flex flex-row pa-1"
          style="width: 100%"
        >
          <v-btn
            depressed
            :to="back"
            style="width: 49.5%"
          >
            Lanjut Belanja
          </v-btn>
          <v-card flat min-width="1%" />
          <v-btn
            depressed
            color="#FD0"
            @click="addtocart(productdetail)"
            style="width: 49.5%"
          >
            Tambah ke keranjang
          </v-btn>
        </div>
      </v-footer> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedvariant: {
      type: Object,
      required: true
    },
    selectedqty: {
      type: Number,
      required: true
    },
    productdetail: {
      type: Object,
      required: true
    },
    selectqty: {
      type: Function,
      required: true
    },
    selectvariant: {
      type: Function,
      required: true
    },
    addtocart: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),

  computed: {
    back() {
      const site = this.$store.state.site

      return `/site/${site.store}?u=${site.uuid}&src=${site.source}&c=${site.category}`
    }
  }
}
</script>

<style lang="scss">
#app > div.v-menu__content.theme--light {
  text-align: left !important;
}

@media (min-width: 481px) {
  
  /* CSS */
  #footer-product-detail {
    min-width: 635px !important;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  /* CSS */
  #footer-product-detail {
    min-width: 100% !important;
  }
}
</style>