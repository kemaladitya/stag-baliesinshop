<template>
  <div>
    <div class="wrapper mt-2 pb-12 pt-7">
      <div class="information mt-4 mb-4">
        Mohon konfirmasikan pembayaran di sini agar orderan kamu bisa segera di proses
      </div>

      <text-field
        :value="$route.query.orderid"
        :readonly="true"
        :event_handler="event_handler"
        :disabled="loading"
        required="*"
        mtop="mt-4"
        details="Order ID ditemukan"
        b_title="ORDER ID"
        name="orderid"
      />

      <image-uploader
        :loading="loading"
        :uploading="uploading"
        :uploaded="uploaded"
        :image="image"
        :show_image="show_image"
        :event_handler="event_handler"
      />

      <text-field
        :value="phone"
        :readonly="false"
        :event_handler="event_handler"
        :disabled="loading"
        placeholder="Nomor Handphone"
        required="*"
        mtop="mt-12"
        details=""
        b_title="NOMOR HANDPHONE"
        name="phone"
      />

      <text-field
        :value="bank"
        :readonly="false"
        :event_handler="event_handler"
        :disabled="loading"
        placeholder="Nama Bank"
        required="*"
        mtop="mt-4"
        details=""
        b_title="DARI BANK"
        name="bank"
      />

      <text-field
        :value="rek"
        :readonly="false"
        :event_handler="event_handler"
        :disabled="loading"
        placeholder="No. Rekening"
        required="*"
        mtop="mt-4"
        details=""
        b_title="REKENING PENGIRIM"
        name="rek"
      />

      <div class="mt-4">
        <div class="form--label">
          CATATAN
          <span class="form--not-required">(OPTIONAL)</span>
        </div>
        <div class="mt-1">
          <v-textarea
            :value="notes"
            :disabled="loading"
            placeholder="Keterangan"
            rows="4"
            hide-details
            outlined
            dense
            no-resize
            @input="event_handler('notes', $event)"
          />
        </div>
      </div>

      <v-footer class="pa-2" fixed>
        <v-btn
          :disabled="!requirements || loading"
          class="submit-btn"
          color="#fd0"
          block
          depressed
          @click="submit"
        >
          <div v-if="loading" class="mr-1" style="max-width: 30px">
            <svg-loading pclass="" pstyle="margin: 0; margin-top: 25px; margin-left: -10px; display: block;" />
          </div>
          Konfirmasi
        </v-btn>
      </v-footer>
    </div>
  </div>
</template>

<script>
import svg_loading from "@/components/payment-receipt/svg";
import uploader from "@/components/payment-receipt/uploader";
import text from "@/components/payment-receipt/text-field";

export default {
  components: {
    "svg-loading": svg_loading,
    "text-field": text,
    "image-uploader": uploader,
  },

  props: {
    requirements: Boolean,
    loading: Boolean,
    notif: Boolean,
    uploading: Boolean,
    uploaded: Boolean,
    image: String,
    phone: String,
    bank: String,
    rek: String,
    notes: String,
    event_handler: Function,
    get_store: Function,
    submit: Function,
    show_image: Function,
  },
}
</script>