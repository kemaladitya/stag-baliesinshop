<template>
  <div class="pa-1 pt-2 text-left">
    <div style="font-size: 12px">Alamat pengiriman</div>
    <div style="font-size: 14px; font-weight: 600">
      {{ customer.name }}
    </div>
    <div style="font-size: 11px; margin-top: 2px; color: #212221">
      <div>{{ customer.phone }}</div>
      <div>{{ customer.email }}</div>
      <div>{{ customer.address }}</div>
      <div>{{ customer.urban }}, {{ customer.sub_district }}, {{ customer.city }} ({{ customer.zip_code }})</div>
    </div>
    <div v-if="store && store.hasOwnProperty('registered_mode') && !store.registered_mode" class="mt-1">
      <v-btn
        color="primary"
        style="text-transform: capitalize; letter-spacing: normal; font-size: 10px; font-weight: 600"
        block
        outlined
        :to="`/site/${site.store}/userprofile?u=${site.uuid}&src=Whatsapp&mtd=reg&c=${site.category}`"
      >
        <v-icon class="mr-1" x-small>mdi-pencil</v-icon>
        Ubah Alamat
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    customer() {
      return this.$store.state.customer
    },
  }
}
</script>