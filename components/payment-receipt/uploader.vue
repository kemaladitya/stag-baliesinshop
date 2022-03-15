<template>
  <div class="mt-4">
    <div class="form--label">
      UPLOAD BUKTI PEMBAYARAN
      <span class="form--required">*</span>
    </div>
    <div class="d-flex flex-row mt-1">
      <v-card
        :disabled="loading || uploading"
        class="d-flex flex-row"
        max-height="40"
        height="40"
        width="100%"
        outlined
        @click="open_image"
      >
        <input
          ref="file"
          name="file"
          type="file"
          accept="image/png, image/jpeg"
          class="image-loader"
          @change="readfile"
        />
        <div v-if="uploading" class="image--value pa-2 pt-0 pl-3 pr-3 d-flex flex-row">
          <div class="svg-wrapper mr-1">
            <svg-loading pclass="svg-field" pstyle="" />
          </div>
          <div class="text-uploading">UPLOADING YOUR IMAGE</div>
        </div>
        <div v-else class="image--value pa-2 pl-3 pr-3">
          {{ uploaded ? image : "Gunakan Format file .jpg, .jpeg atau .png" }}
        </div>
        <div class="image--choose-file">
          <center class="choose-label">PILIH FILE</center>
        </div>
      </v-card>
      <v-card v-if="uploaded" class="ml-2" color="#d6f2fd" flat @click="show_image">
        <div class="image--preview">
          <center class="preview-label">LIHAT</center>
        </div>
      </v-card>
    </div>
    <div class="form--details d-flex flex-row mt-1">
      <v-icon :color="uploaded ? 'success' : 'white'" class="mr-1" size="16">mdi-check-circle</v-icon>
      <div :style="uploaded ? null : 'color: white'" class="image-uploaded">IMAGE UPLOADED</div>
    </div>
  </div>
</template>

<script>
import svg_loading from "@/components/payment-receipt/svg";

export default {
  components: { "svg-loading": svg_loading },

  props: {
    loading: Boolean,
    uploaded: Boolean,
    uploading: Boolean,
    image: String,
    show_image: Function,
    event_handler: Function,
  },

  watch: {
    image(_, __) {
      if (_.includes("base64")) this.upload_image();
    },
  },

  methods: {
    async upload_image() {
      this.event_handler("uploading", true);

      const request = await this.$axios({
        url: "https://faq.balesin.id/api/custom/upload",
        method: "POST",
        headers: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImVtYWlsIjoib3ZpY2tic0BnbWFpbC5jb20iLCJpYXQiOjE2MTU2NzMyNzgyNTQsImV4cCI6MTYxNTY3MzI3ODI1NH0.8PurR7sFzqS3lr5STmdhhMqqrFxCn7X5Vgl0_Qh2wpI"
        },
        data: {
          file_name: "payment-receipt-" + this.$route.query.orderid,
          file: this.image,
        },
      });

      if ("status" in request.data && request.data.status) {
        this.event_handler("image", request.data.response);
        this.event_handler("uploading", false);
        this.event_handler("uploaded", true);
      }
    },

    open_image() {
      this.$refs.file.click();
    },

    readfile(e) {
      console.log("readfile");
      const reader = new FileReader();

      reader.onloadend = (e) => {
        this.event_handler("image", e.target.result);
      }

      reader.readAsDataURL(e.target.files[0]);
    },
  }
}
</script>