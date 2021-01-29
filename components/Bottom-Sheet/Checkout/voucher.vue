<template>
  <v-sheet>
    <div class="d-flex flex-row">
      <div
        class="pl-2"
        style="align-self: center; font-size: 13px; font-weight: 600"
      >
        Voucher Tersedia
      </div>
      <v-spacer />
      <v-btn
        icon
        text
        color="red"
        @click="changehandler('voucher', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <div class="pb-2">
      <v-card
        v-for="(vc, idx) in listvouchers"
        :key="idx"
        :class="!idx ? 'pb-0' : null"
        class="pa-2 pl-0"
        flat
      >
        <v-card
          class="ml-2 pa-2"
          outlined
          @click="usevoucher({ is_custom_voucher: false, value: vc })"
        >
          <div class="pb-1" style="font-weight: 600; font-size: 13px">
            {{ vc.name }}
          </div>
          <div v-html="vc.description" />
        </v-card>
      </v-card>
      <v-card v-if="customvoucher" class="pa-2 pl-0" flat>
        <v-card
          class="ml-2 pa-2"
          outlined
          @click="usevoucher({ is_custom_voucher: true, value: true })"
        >
          <div class="mb-1" style="font-size: 13px; font-weight: 600">
            Ketik Kode Voucher
          </div>

          <div style="font-size: 12px">
            Ketik Kode Voucher yang Anda miliki untuk dapatkan promo.
          </div>
        </v-card>
      </v-card>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    changehandler: {
      type: Function,
      required: true
    },

    listvouchers: {
      type: Array,
      required: true
    },

    usevoucher: {
      type: Function,
      required: true
    },

    customvoucher: {
      type: Boolean,
      required: true
    }
  }
}
</script>