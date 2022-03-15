<template>
  <div class="pa-1 pt-2 pb-2">
    <v-dialog
      :value="voucher.form"
      persistent max-width="100%"
    >
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
                @click="submit(false, null)"
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
                @click="submit(true, voucher_code)"
              >
                Lanjut
              </v-btn>
            </v-card>
          </v-card>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="voucher.selected" class="mb-2 text-left" style="font-size: 12px; font-weight: 600">
      Voucher
    </div>
    <v-btn
      style="background: #fd0; font-weight: 600"
      depressed
      block
      @click="select_voucher = true"
    >
      GUNAKAN VOUCHER
    </v-btn>
    <v-progress-linear
      v-if="voucher.loading"
      class="mt-1"
      color="primary"
      indeterminate
    />
    <div v-else>
      <br v-if="!voucher.selected" />
      <div v-if="voucher.selected" style="text-align: left">
        <div
          class="ma-1 ml-0 pl-1 mr-0"
          style="
            background-color: #3276f7;
            border-radius: 2px;
            font-size: 12px;
            width: fit-content;
            min-width: 200px;
            color: white;
          "
        >
          * {{ voucher.selected.name }} Voucher applied
        </div>
        <div
          class="ma-1 ml-0 pl-1 mr-0"
          style="
            background-color: #3276f7;
            border-radius: 2px;
            font-size: 12px;
            width: fit-content;
            min-width: 200px;
            color: white;
          "
        >
          * kamu hemat Rp {{ voucher.selected.value.toLocaleString().replace(/,/g, '.') }}, -
        </div>
      </div>
    </div>
    <v-bottom-sheet
      :value="select_voucher"
      @click:outside="select_voucher = false"
    >
      <v-sheet style="text-align: left">
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
            @click="select_voucher = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider />
        <div
          class="pb-2"
          style="overflow-y: scroll !important; max-height: 450px !important;"
        >
          <v-card
            v-for="(vc, idx) in voucher.lists"
            :key="vc.id"
            :class="!idx ? 'pb-0' : null"
            :disabled="
              !vc.categories_product.includes(site.category)
              && !vc.qty
            "
            flat
          >
            <div :class="vc.show_select ? 'pa-2 pl-0' : null">
              <v-card
                v-if="vc.show_select"
                class="ml-2 pa-2"
                outlined
                @click="use_voucher(true, vc.name)"
              >
                <div class="pb-1" style="font-weight: 600; font-size: 13px">
                  {{ vc.name }}
                </div>
                <div v-html="vc.description" />
              </v-card>
            </div>
          </v-card>
          <v-card v-if="voucher.is_custom_voucher" class="pa-2 pl-0" flat>
            <v-card
              class="ml-2 pa-2"
              outlined
              @click="use_voucher(null, null)"
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
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  props: {
    voucher: {
      type: Object,
      required: true,
    },

    use_custom_voucher: {
      type: Function,
      required: true,
    },

    submit: {
      type: Function,
      required: true,
    },
  },

  data: () => ({
    select_voucher: false,
    voucher_code: '',
  }),

  computed: {
    site() {
      return this.$store.state.site
    },
  },

  methods: {
    use_voucher(status, params) {
      this.select_voucher = false

      if (!status && !params) {
        this.use_custom_voucher()
      } else {
        this.submit(status, params)
      }
    }
  }
}
</script>
