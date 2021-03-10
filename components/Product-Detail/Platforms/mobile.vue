<template>
  <div style="text-align: left">
    <div v-if="productdetail">
      <v-card class="pa-12 pt-3 pb-0" flat tile>
        <v-img class="ma-8" :src="selectedvariant.main_image" />
      </v-card>
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
        <v-card height="25vh" flat tile />
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
          <!-- width: 600px !important;
          min-width: 600px !important; -->
          <v-btn
            depressed
            :to="back"
            style="width: 49.5%; letter-spacing: normal;"
          >
            Lanjut Belanja
          </v-btn>
          <v-card flat min-width="1%" />
          <v-btn
            depressed
            color="#FD0"
            @click="addtocart(productdetail)"
            style="width: 49.5%; letter-spacing: normal;"
          >
            Tambah ke keranjang
          </v-btn>
        </div>
      </v-footer>
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