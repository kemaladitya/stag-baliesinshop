<template>
  <v-card>
    <v-card-title class="headline">
      Hapus Tanggal?
    </v-card-title>
    <v-card-text>
      Tanggal ini akan dihapus dari daftar mode langganan kamu.
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green darken-1"
        text
        @click="confirmdeleterp(false)"
        style="text-transform: capitalize; letter-spacing: normal"
      >
        batal
      </v-btn>
      <v-btn
        color="green darken-1"
        text
        @click="confirmdeleterp(true)"
        style="text-transform: capitalize; letter-spacing: normal"
      >
        Hapus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    confirmdeleterp: {
      type: Function,
      required: true
    }
  }
}
</script>