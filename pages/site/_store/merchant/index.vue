<template>
  <div>
    <v-card id="b-list-products" class="pt-12 mb-12" flat tile>
      <v-progress-linear
        v-show="loading"
        style="z-index: 9999 !important"
        color="blue darken-2"
        height="3"
        indeterminate
      />
      <v-card class="pl-1 pr-1" style="width: 100%" flat tile>
        <v-card v-if="loading_merchant" width="100%" flat tile>
          <center style="width: 100%">
            <div style="width: 50%; margin-top: 30vh">
              <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading="lazy" />
              <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
                Mohon menunggu...
              </div>
            </div>
          </center>
        </v-card>
        <div v-else>
          <Merchant :loadingmerchant="loading_merchant" />
        </div>
      </v-card>
      <v-snackbar v-model="snackbar">information</v-snackbar>
    </v-card>

    <!-- <transition v-if="!loading_product" name="scroll-y-reverse-transition" mode="out-in" appear>
      <div
        v-show="(cart.length)"
        style="position: fixed; bottom: 0; padding: 10px 8px; width: 100%; z-index: 9;"
      >
        <v-card
          class="d-flex flex-row pa-3 pr-3 pl-3"
          color="#fd0"
          :to="cart_url"
        >
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            Lihat Keranjang
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600; color: grey"
            flat
          >
            {{ order_info.qty_item }} item
          </v-card>
          <v-spacer />
          <v-card
            color="transparent"
            style="font-size: 14px; font-weight: 600"
            flat
          >
            <div style="font-weight: 600">
              Rp {{
                order_info.total
                  .toLocaleString()
                  .replace(/,/g, '.')
              }}
            </div>
          </v-card>
        </v-card>
      </div>
    </transition> -->
    <!-- <v-card
      v-show="(!rp_order && cart.length) || rp_order && dates.length"
      class="basket-background-shadow"
      width="100%"
      height="40px"
      style="position: fixed; bottom: -5px; z-index: 8"
      tile
    >
      &nbsp;
    </v-card>
    <v-dialog
      max-width="290"
      persistent
      v-model="dialog_list_dates"
    >
      <v-card class="pa-2">
        <div class="d-flex flex-row">
          <div style="font-size: 14px; font-weight: 600;">Select date:</div>
          <v-spacer />
          <div class="d-flex flex-row">
            <v-icon small color="red" @click="dialog_list_dates = false">mdi-close</v-icon>
          </div>
        </div>
        <v-card
          v-for="(item, index) in dates"
          :key="index"
          class="mt-1 pa-2"
          style="
            background-color: aliceblue;
            border-color: #0D47A1 !important;
            font-size: 13px;
            font-weight: 600;
          "
          outlined
          @click="add_to_rp_cart(item.date)"
        >
          {{ item.date }}
        </v-card>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import Merchant from '@/components/Merchant'

export default {
  components: {
    Merchant,
  },

  data: () => ({
    list_merchant: [],
    loading_merchant: false,
    snackbar: false,
    loading: false,
  })
}
</script>