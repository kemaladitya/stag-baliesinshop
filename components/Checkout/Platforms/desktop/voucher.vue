<template>
  <div>
    <v-card class="pa-1" flat>
      <div class="mb-2" style="font-size: 12px; font-weight: 600">
        VOUCHER
      </div>
      <v-btn
        depressed
        block
        color="#fd0"
        style="font-weight: 600"
        @click="changehandler('voucher', true)"
      >
        LIHAT VOUCHER DISINI
      </v-btn>
    </v-card>
    <br v-if="!appliedvoucher.name" />
    <div v-if="appliedvoucher.name" class="pa-1">
      <div
        class="ma-1 ml-0 pl-1"
        style="
          background-color: #3276f7;
          border-radius: 2px;
          font-size: 12px;
          width: fit-content;
          min-width: 200px;
          color: white;
        "
      >
        * {{ appliedvoucher.name }} Voucher applied
      </div>
      <div
        class="ma-1 ml-0 pl-1"
        style="
          background-color: #3276f7;
          border-radius: 2px;
          font-size: 12px;
          width: fit-content;
          min-width: 200px;
          color: white;
        "
      >
        * kamu hemat Rp. 12.000, -
      </div>
    </div>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    },

    appliedvoucher: {
      type: Object,
      required: true
    }
  }
}
</script>