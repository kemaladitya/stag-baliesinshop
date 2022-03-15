<template>
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
            <v-img :src="require('@/assets/images/loading/balesin-loading.gif')" width="80" loading=lazy />
            <div class="mb-2" style="font-size: 13px; color: gray; padding-top: 13px; font-weight: 600">
              Mohon menunggu...
            </div>
          </div>
        </center>
      </v-card>
      <Merchant v-else :loadingmerchant="loading_merchant" />
    </v-card>
    <v-snackbar v-model="snackbar">information</v-snackbar>
  </v-card>
</template>

<script>
import Merchant from '@/components/merchant'

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