<template>
  <div class="mt-1" style="text-align: left; min-height: calc(100vh - 100px); max-height: calc(100vh - 100px); overflow-y: scroll">
    <div v-if="product">
      <v-card class="pa-12 pt-3 pb-0" flat tile>
        <v-img
          class="ma-8"
          loading=lazy
          style="border-radius: 3px"
          :src="selected_variant.image"
        />
      </v-card>
      <v-card class="d-flex flex-row pa-1" flat tile>
        <div class="name" style="font-size: 14px; font-weight: 600">
          {{ product.name }}
        </div>
        <v-spacer />

        <div class="price" style="font-size: 14px; font-weight: 600">
          Rp {{
            selected_variant.discount_price
              ? selected_variant.discount_price.toLocaleString().replace(/,/g, '.')
              : selected_variant.normal_price.toLocaleString().replace(/,/g, '.')
          }}, -
        </div>
      </v-card>

      <v-divider />

      <v-card class="d-flex flex-row pa-1 pt-4" flat tile>
        <div class="variant pr-2" style="text-align: left; font-size: 12px">
          <div class="label mb-1">Variant</div>
          <v-select
            :items="variant.map(({ name }) => name)"
            :label="selected_variant.name"
            min-width="50%"
            max-width="50%"
            solo
            dense
            @change="select_variant"
          />
        </div>
        <div class="qty pl-2" style="text-align: left; font-size: 12px">
          <div class="label mb-1">Qty.</div>
          <v-select
            :items="
              Array.from(Array(selected_variant.stock).keys()).slice(1, 11)
            "
            :label="
              String(
                Array.from(Array(selected_variant.stock).keys()).slice(1)[0]
              )
            "
            min-width="50%"
            max-width="50%"
            solo
            dense
            @change="select_qty"
          />
        </div>
      </v-card>

      <v-divider />

      <center class="pb-3 pt-3" style="font-size: 13px">
        <div class="size">Ukuran</div>
        <div class="size">
          {{ selected_variant.size }}
        </div>
      </center>

      <v-divider />

      <div class="description pa-1 pt-3" style="font-size: 13px">
        <div class="label" style="font-weight: 600">Deskripsi</div>
        <div class="detail pt-2">
          {{ product.description }}
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
          <v-btn
            depressed
            style="width: 49.5%; letter-spacing: normal; text-transform: none"
            :to="home_url"
          >
            Lanjut Belanja
          </v-btn>
          <v-card flat min-width="1%" />
          <v-btn
            depressed
            color="#FD0"
            style="width: 49.5%; letter-spacing: normal; text-transform: none"
            @click="manage_cart"
          >
            Tambah ke keranjang
          </v-btn>
        </div>
      </v-footer>
    </div>
    <v-bottom-sheet
      :value="mini_cart"
      @click:outside="show_mini_cart(false)"
    >
      <div class="d-flex flex-row" style="background-color: white">
        <v-spacer />
        <v-btn
          icon
          text
          color="red"
          @click="mini_cart = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-divider />
      <MiniCart />
    </v-bottom-sheet>
  </div>
</template>

<script>
import API from '@/components/General'
import MiniCart from '@/components/Bottom-Sheet/mini-cart'

export default {
  components: {
    MiniCart,
  },

  data: () => ({
    product: null,
    variant: [],
    selected_variant: null,
    qty: 1,
    mini_cart: false,
  }),

  computed: {
    home_url() {
      const site = this.$store.state.site

      return `/site/${this.$route.params.store}?u=${this.$route.query.u}&src=${this.$route.query.src}&c=${this.$route.query.c}`
    },

    store() {
      return this.$store.state.store
    },
  },

  async mounted() {
    const { params: { pid }, query: { c } } = this.$route
    const request = await this.$store.dispatch('request', {
      url: '/api/product/detail',
      method: 'post',
      data: {
        id: pid,
        outlet: c,
        store_id: this.store.id,
      }
    })

    if (request.data.response) {
      this.product = request.data.response
      this.variant = request.data.response.variant
      this.selected_variant = this.variant.length
        ? this.variant[0] : null
    }
  },

  methods: {
    show_mini_cart(status) {
      this.mini_cart = status
    },

    select_variant(e) {
      const filtered = this.variant.filter(el => el.name === e)

      this.selected_variant = filtered[0]
    },

    select_qty(e) {
      this.qty = e
    },

    async manage_cart() {
      const { params: { store }, query: { c, u, src } } = this.$route

      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      })

      await API.cart_manager(this, {
        method: 'add',
        info: {
          mode: 'single-order',
          item: {
            id: this.product.id,
            detail_id: this.selected_variant.id,
            sku: this.product.sku,
            qty: this.qty
          },
          store: {
            name   : store,
            source : src,
            uuid   : u,
            outlet : c,
          },
        },
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })

      this.show_mini_cart(true)
    },
  },
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