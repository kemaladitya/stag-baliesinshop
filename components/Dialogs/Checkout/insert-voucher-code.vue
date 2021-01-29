<template>
  <v-card class="b-font">
    <center class="pa-4 pb-3" style="font-size: 15px; font-weight: 600">
      Ketik Kode Voucher
    </center>
    <v-card class="pa-4 pt-2" flat>
      <v-text-field
        v-model="voucher_code"
        placeholder="ex. bls1232"
        outlined
        hide-details
        autofocus
      />
    </v-card>
    <v-card-actions>
      <v-card class="d-flex flex-row" width="100%" flat>
        <v-card class="pa-1 pl-0" width="50%" flat>
          <v-btn
            color="grey lighten-4"
            style="text-transform: capitalize"
            width="100%"
            depressed
            @click="changehandler('voucher_form', false)"
          >
            Batal
          </v-btn>
        </v-card>
        <v-card class="pa-1 pr-0" width="50%" flat>
          <v-btn
            color="#FD0"
            style="text-transform: capitalize"
            width="100%"
            depressed
            @click="submmit_code"
          >
            Lanjut
          </v-btn>
        </v-card>
      </v-card>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    voucher_code: ''
  }),

  methods: {
    submmit_code () {
      this.changehandler('voucher_code', this.voucher_code)
      this.changehandler('voucher_form', false)
    }
  }
}
</script>