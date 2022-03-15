<template>
  <div id="payment-receipt" class="pa-4">
    <v-dialog
      v-model="notif"
      class="success-dialog"
      persistent
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card class="pa-4 pt-6 pb-6">
        <center>
          <v-icon color="success" size="60">mdi-check-decagram</v-icon>
          <div class="mt-2 success-dialog--text">
            Konfirmasi Pembayaran Berhasil
          </div>
          <div class="mt-2 success-dialog--info">
            Anda akan kembali ke bot secara otomatis
          </div>
        </center>
      </v-card>
    </v-dialog>

    <v-app-bar
      class="headers"
      color="white"
      scroll-target="#scrolling-techniques-7"
      height="56"
      max-height="56"
      elevate-on-scroll
      absolute
    >
      <div class="d-flex flex-row pa-2 pl-3 pr-3">
        <v-icon class="icon mr-2" size="18" color="black">mdi-image-plus</v-icon>
        <div class="page-title">Konfirmasi Pembayaran</div>
      </div>
    </v-app-bar>

    <form-receipt
      :loading="loading"
      :notif="notif"
      :uploading="uploading"
      :uploaded="uploaded"
      :image="image"
      :phone="phone"
      :bank="bank"
      :rek="rek"
      :notes="notes"
      :requirements="requirements"
      :event_handler="event_handler"
      :get_store="get_store"
      :submit="submit"
      :show_image="show_image"
    />
  </div>
</template>

<script>
import form from "@/components/payment-receipt";

export default {
  layout: 'empty',

  components: { "form-receipt": form },

  data: () => ({
    loading: false,
    notif: false,
    uploading: false,
    uploaded: false,
    image: "",
    phone: "",
    bank: "",
    rek: "",
    notes: "",
  }),

  computed: {
    requirements() {
      return this.uploaded
        && this.image.length > 0
        && this.phone.length > 0
        && this.bank.length > 0
        && this.rek.length > 0;
    },

    store() {
      return this.$store.state.store;
    },
  },

  watch: {
    phone(_, __) {
      setTimeout(() => {
        this.phone = _.replace(/[^0-9]/g, '');
        if (_[0] == "0") {
          this.phone = _.replace("0", "62")
        }
      }, 1);
    },

    rek(_, __) {
      setTimeout(() => {
        this.rek = _.replace(/[^0-9]/g, '');
      }, 1);
    }
  },

  mounted() {
    this.get_store();
  },

  methods: {
    event_handler(key, value) {
      this[key] = value;
    },

    async get_store() {
      const store = await this.$store.dispatch('request', {
        url: '/api/store',
        method: 'post',
        data: {
          store_name: this.$route.params.store,
          page: "site-store-checkout",
        },
      });

      this.$store.dispatch('setState', {
        payload: {
          key: 'store',
          data: {
            ...this.store,
            ...store.data,
          },
        },
      });
    },

    back_to_bot() {
      if (process.browser) {
        if (this.$route.query.src.includes('Whatsapp')) {
          window.location.replace(`https://wa.me/${this.store.phone}`)
        } else {
          window.location.replace(`https://faq.balesin.id/bot/${this.$route.params.store}`)
        }
      }
    },

    async submit() {
      this.loading = true;

      const request = await this.$axios({
        url: "/api/receipt",
        method: "POST",
        data: {
          bot_name : this.$route.params.store,
          imgurl   : this.image,
          bank     : this.bank,
          phone    : this.phone,
          buyeracc : this.rek,
          notes    : this.notes,
          orderid  : this.$route.query.orderid,
          uuid     : this.$route.query.u,
          source   : this.$route.query.src,
        },
      });

      if ("status" in request.data && request.data.status == "valid") {
        this.notif = true;

        setTimeout(() => {
          this.back_to_bot();
        }, 3000);
      }

      this.loading = false;
    },

    show_image() {
      const self = this;

      if (process.browser) {
        window.open(self.image, "_blank");
      }
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/payment-receipt.scss";
</style>