<template>
  <div
    :style="
      cart.length || subscription_cart.length || package_cart.length
        ? 'text-align: left; max-height: calc(100vh - 175px); height: calc(100vh - 175px)'
        : '100vh'
    "
  >
    <div id="b-find-product" class="ma-1 mb-0 d-flex flex-row" style="margin-top: 13px !important">
      <div class="mr-1" style="width: 100%">
        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Mau cari apa hari ini?"
          style="font-size: 13px"
          dense
          outlined
          hide-details
          v-model="search_value"
        />
      </div>
      <div style="width: 47px;">
        <v-select
          id="b-search-product-by"
          :items="select_search_type"
          placeholder="Search by"
          width="80"
          max-width="80"
          min-width="80"
          append-icon="mdi-cog"
          dense
          outlined
          hide-details
          v-model="search_type"
        />
      </div>
    </div>
    <div class="ml-2" style="font-size: 8px; color: #999; padding-top: 2px; text-align: left">
      Cari Produk berdasarkan :
      <span style="color: rgb(90 149 241); font-weight: 600">
        {{ search_type }}
      </span>
    </div>
    <v-row v-if="search_result.length" style="max-height: calc(100vh - 181px); overflow-y: scroll" no-gutters>
      <v-col v-for="(item, index) in search_result" :key="index" cols="2">
        <v-card class="ma-1 mt-2 mb-0" outlined>
          <v-img class="image" :src="item.main_image" loading=lazy />
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
                <div v-if="item.is_promo">
                  Rp {{
                    item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div :class="item.is_promo ? 'lined' : null">
                  Rp {{
                    item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div v-if="!item.is_promo">&nbsp;</div>
              </div>
            </div>

            <div v-if="item.variant.length === 1" class="d-flex flex-row pt-3">
              <v-btn
                class="show-detail"
                depressed
                dense
                text
                small
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
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
                :to="`/site/${site.store}/${item.id}?u=${site.uuid}&src=${site.source}&c=${site.category}`"
              >
                <v-icon class="product-mdi-icon">mdi-checkbox-multiple-marked-outline</v-icon>
                &nbsp;Pilih Variant
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div v-else>
      <center v-if="!search_value.length" style="margin-top: 30%">
        <v-img class="empty-image" :src="require('@/assets/images/product-empty.png')" loading=lazy />
        <div class="empty-info pa-3 pr-4 pl-4 mt-4" style="font-size: 12px">
          Toko ini belum memiliki produk.
        </div>
      </center>
      <center v-else style="margin-top: 30%">
        <v-img class="empty-image" :src="require('@/assets/images/product-not-found.png')" loading=lazy />
        <div class="empty-info pa-3 pr-4 pl-4 mt-4" style="font-size: 12px">
          Produk tidak ditemukan.
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import API from '@/components/General'

export default {
  props: {
    productdetail: {
      type: Function,
      required: true
    },

    loadingproduct: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    select_search_type: ['Nama', 'Varian', 'Kategori'],
    search_type: 'Nama',
    search_value: '',
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    cart() {
      return this.$store.state.cart
    },

    subscription_cart() {
      return this.$store.state.subscription_cart
    },

    package_cart() {
      return this.$store.state.package_cart
    },


    products() {
      return this.$store.state.products
    },

    search_result() {
      if (this.search_value.length) {
        if (this.search_type === 'Nama') {
          const results = this.products.filter(
            ({ name }) => name.toLowerCase()
              .includes(this.search_value.toLowerCase())
          )

          return results
        }

        if (this.search_type === 'Kategori') {
          const results = this.products.filter(
            ({ category }) => category.toLowerCase()
              .includes(this.search_value.toLowerCase())
          )

          return results
        }

        if (this.search_type === 'Varian') {
          const results = this.products.filter((el) => {
            const find = el.variant.filter(({ name }) => name.toLowerCase()
              .includes(this.search_value.toLowerCase())
            )

            return find.length ? el : null
          })

          return results
        }
      }

      return this.products
    },
  },

  methods: {
    async add_to_cart(id, detail_id, sku, qty) {
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
          item: { id, detail_id, sku, qty },
          store: {
            name   : this.site.store,
            source : this.site.source,
            uuid   : this.site.uuid,
            outlet : this.site.category,
          },
        },
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      })
    },
  }
}
</script>

<style lang="scss">
#b-find-product {
  .v-input--is-label-active > div:nth-child(1) > div:nth-child(1) {
    padding-left: 8px !important;
  }

  .v-select__slot {
    max-height: 40.4px !important;
  }
}
</style>