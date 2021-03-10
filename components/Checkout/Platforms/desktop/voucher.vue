<template>
  <div style="text-align:left">
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
        GUNAKAN VOUCHER
      </v-btn>
    </v-card>
    <center class="ma-1">
      <v-progress-linear
        v-if="applyingvoucher"
        color="#FD0"
        indeterminate
        height="3"
      />
    </center>
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
        * kamu hemat Rp. {{ appliedvoucher.value.toLocaleString().replace(/,/g, '.') }}, -
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

    applyingvoucher: {
      type: Boolean,
      required: true
    },

    appliedvoucher: {
      type: Object,
      required: true
    }
  }
}
</script>