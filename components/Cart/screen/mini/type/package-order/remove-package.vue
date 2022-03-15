<template>
  <div>
    <v-card
      class="pa-2 pl-4 pr-4"
      flat
      tile
      style="text-align: left;"
    >
      <div style="font-size: 20px; font-weight: 600; padding-bottom: 10px">
        Hapus Paket?
      </div>
      <div style="font-size: 13px; color: grey; padding-bottom: 10px">
        Paket ini akan dihapus dari mode paket Anda.
      </div>
    </v-card>
    <v-card
      class="d-flex flex-row pa-2"
      style="justify-content: flex-end;"
      flat
      tile
    >
      <v-btn
        class="mr-2"
        small
        dense
        depressed
        text
        style="text-transform: capitalize"
        @click="removepackage(false)"
      >
        Batal
      </v-btn>
      <v-btn
        color="error"
        small
        dense
        depressed
        style="text-transform: capitalize"
        @click="removepackage(true)"
      >
        Hapus
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    removepackage: {
      type: Function,
      required: true
    }
  }
}
</script>