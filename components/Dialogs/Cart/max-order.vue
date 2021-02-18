<template>
  <v-card style="text-align: left">
    <center v-if="store">
      <div class="pt-3">
        <v-icon style="font-size: 80px; color: #facea8">
          mdi-information-outline
        </v-icon>
      </div>
      <div class="pa-2 pb-6" style="font-size: 15px">
        Maximum pembelian Rp
        {{ store.max_order.toLocaleString().replace(/,/g, '.') }}
        per transaksi. Silakan edit keranjang pesanan Anda.
      </div>
    </center>
  </v-card>
</template>

<script>
export default {
  computed: {
    store () {
      return this.$store.state.store
    }
  }
}
</script>