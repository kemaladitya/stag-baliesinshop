<template>
  <div>
    <v-card class="pt-1" color="#f8f8f8" flat tile>
      <v-card v-if="customer" class="pt-1 pb-1" color="white" flat tile>
        <div class="ma-1">
          <div style="font-size: 12px">Alamat pengiriman</div>
          <div class="mt-1" style="font-size: 14px; font-weight: 600">
            {{ customer.name }}
          </div>
          <div style="font-size: 14px">{{ customer.no_phone }}</div>
          <div style="font-size: 14px">{{ customer.email }}</div>
          <div style="font-size: 14px">{{ customer.address }}</div>
          <div style="font-size: 14px">
            {{ customer.city }}, {{ customer.zipcode }}
          </div>
        </div>
      </v-card>
    </v-card>

    <v-divider />
  </div>
</template>

<script>
export default {
  computed: {
    customer () {
      return this.$store.state.customer
    }
  }
}
</script>