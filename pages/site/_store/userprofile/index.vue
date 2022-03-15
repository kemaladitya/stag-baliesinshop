<template>
  <div id="user-profile" class="mt-12 pt-6">
    <center class="title" :class="!customer ? 'mb-6' : null">
      {{
        !customer
          ? "Yuk isi data terlebih dahulu"
          : "Edit Data"
      }}
    </center>

    <div class="pa-5 pt-2 pb-2">
      <text-field
        :event_handler="event_handler"
        :rules="[rules.required]"
        :value="name"
        :requirement="form_requirements.name"
        title="Nama"
        name="name"
        placeholder="Nama Lengkap"
      />
      <text-field
        :event_handler="event_handler"
        :rules="[rules.required]"
        :value="phone"
        :requirement="form_requirements.phone"
        title="No. Telephone"
        name="phone"
        placeholder="No. Telephone / No. Handphone"
      />
      <text-field
        :event_handler="event_handler"
        :rules="[rules.required, rules.email]"
        :value="email"
        :requirement="form_requirements.email"
        title="Email"
        name="email"
        placeholder="Alamat Email"
      />
      <v-dialog
        v-model="birth_modal"
        :return-value.sync="birth_date"
        ref="dialog"
        width="290"
        persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-on="on"
            v-bind="attrs"
            v-show="referral.event_id && ondev"
            v-model="birth_date"
            :placeholder="birth_date"
            label="Tanggal Lahir"
            style="font-size: 14px; font-weight: 500; letter-spacing: normal"
            readonly
            hide-details
          />
        </template>
        <v-date-picker v-model="birth_date" scrollable>
          <v-spacer />
          <v-btn color="primary" text @click="birth_modal = false">Cancel</v-btn>
          <v-btn color="primary" text @click="$refs.dialog.save(birth_date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      <div v-show="referral.event_id && ondev" id="select-gender" class="mt-5">
        <div class="title">Jenis Kelamin</div>
        <v-radio-group v-model="gender" class="radio">
          <div class="d-flex flex-row">
            <v-radio
              v-for="n in list_gender"
              :key="n"
              :label="n"
              :value="n"
              class="radio-item"
            />
          </div>
        </v-radio-group>
      </div>
      <select-field
        :value="selected_province"
        :requirement="form_requirements.province"
        :loading="loading.province"
        :items="province.length ? province.map(el => el.name) : []"
        :event_handler="change_selected_route"
        :rules="[]"
        :disabler="
          !province.length ||
          loading.province ||
          loading.city ||
          loading.sub_district ||
          loading.urban
        "
        title="Provinsi"
        name="selected_province"
      />
      <select-field
        :value="selected_city"
        :requirement="form_requirements.city"
        :loading="loading.city"
        :items="city.length ? city.map(el => el.name) : []"
        :event_handler="change_selected_route"
        :rules="[rules.required]"
        :disabler="
          !city.length
          || !selected_province
          || loading.province
          || loading.city
          || loading.sub_district
          || loading.urban
        "
        title="City"
        name="selected_city"
      />
      <select-field
        :value="selected_sub_district"
        :requirement="form_requirements.sub_district"
        :loading="loading.sub_district"
        :items="sub_district.length ? sub_district.map(el => el.name) : []"
        :event_handler="change_selected_route"
        :rules="[rules.required]"
        :disabler="
          !sub_district.length
          || !selected_province
          || !selected_city
          || loading.province
          || loading.city
          || loading.sub_district
          || loading.urban
        "
        title="Kecamatan"
        name="selected_sub_district"
      />
      <select-field
        :value="selected_urban"
        :requirement="form_requirements.urban"
        :loading="loading.urban"
        :items="urban.length ? urban.map(el => el.name) : []"
        :event_handler="change_selected_route"
        :rules="[rules.required]"
        :disabler="
          !urban.length
          || !selected_province
          || !selected_city
          || !selected_sub_district
          || loading.province
          || loading.city
          || loading.sub_district
          || loading.urban
        "
        title="Kelurahan"
        name="selected_urban"
      />
      <text-field
        :event_handler="() => ''"
        :rules="[]"
        :value="postal_code"
        :requirement="''"
        :disabler="true"
        title="Kode Pos"
        name="postal_code"
        placeholder="Kode Pos"
      />

      <div v-show="referral.event_id && ondev" class="referral-code">
        <v-text-field
          v-model="referral.code"
          name="referral_code"
          label="★ Referral Code (OPTIONAL)"
          class="referral-code--text-field"
          hide-details
        />
        <div class="referral-code--alert">{{ form_requirements.email }} &nbsp;</div>
      </div>
      <div class="mt-6">
        <v-text-field
          label="Alamat"
          placeholder="Alamat Lengkap"
          hide-details
          name="address"
          style="font-size: 13px; font-weight: 600; letter-spacing: normal"
          :disabled="!selected_province || !selected_city || !selected_sub_district || !selected_urban"
          :rules="[rules.required]"
          v-model="address"
        />
        <div style="font-size: 11px; color: red">{{ form_requirements.address }} &nbsp;</div>
      </div>
      <center class="mt-8 mb-6">
        <v-btn
          :disabled="submit_button"
          width="80%"
          color="#fd0"
          class="submit-button"
          depressed
          rounded
          large
          @click="confirm = true"
        >
          Submit
        </v-btn>
      </center>
    </div>

    <v-dialog v-model="confirm" max-width="290" persistent>
      <v-card class="pa-4 pl-6 pr-6">
        <center>
          <div style="font-size: 16px">Apakah data Anda</div>
          <div style="font-size: 16px">sudah benar?</div>
          <v-card class="d-flex flex-row mt-5" width="100%" flat>
            <v-btn
              width="49%"
              color="#fd0"
              style="
                text-transform: capitalize;
                color: black !important;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: normal;
              "
              rounded
              depressed
              @click="execute_redeem"
            >
              Lanjut
            </v-btn>
            <v-spacer />
            <v-btn
              width="49%"
              color="#999"
              style="
                text-transform: capitalize;
                color: black !important;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: normal;
              "
              outlined
              rounded
              depressed
              @click="confirm = false"
            >
              Edit Data
            </v-btn>
          </v-card>
        </center>
      </v-card>
    </v-dialog>

    <v-bottom-sheet :value="process || register_failed" :persistent="process">
      <v-sheet>
        <center v-show="process" class="pa-3">
          <div style="padding: 20px">
            <v-img width="40" :src="require('@/assets/images/loading/spin-loading.gif')" />
          </div>
          <div style="padding-bottom: 20px; font-size: 14px; font-weight: 500">
            <div>Data kamu sedang diproses,</div>
            <div>harap menunggu untuk beberapa saat.</div>
          </div>
        </center>
        <center v-show="register_failed" class="pa-3">
          <v-img class="mb-4" width="50" :src="require('@/assets/images/error.png')" />
          <div style="padding-bottom: 20px; font-size: 14px; font-weight: 500">
            <div>Proses pendaftaran gagal,</div>
            <div>mohon untuk memuat ulang halaman</div>
            <div>jika tetap gagal, silahkan menghubungi customer service.</div>
          </div>
        </center>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import TextField from "@/components/general/text-field"
import Select from "@/components/general/select"

export default {
  components: {
    "text-field": TextField,
    "select-field": Select,
  },

  data: () => ({
    mode: "register",
    gender: null,
    list_gender: ["Laki-laki", "Perempuan"],
    referral_register_dialog: true,
    referral_redeem_dialog: true,
    referral: {
      event_id: null,
      code: "",
      register: {
        status: false,
        message: ""
      },
      redeem: {
        status: false,
        message: ""
      }
    },
    birth_modal: false,
    birth_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    process: false,
    register_failed: false,
    is_updated: false,
    confirm: false,
    loading: {
      base_info: false,
      province: false,
      city: false,
      sub_district: false,
      urban: false,
    },
    form_requirements: {
      name: "",
      phone: "",
      email: "",
      province: "",
      city: "",
      sub_district: "",
      urban: "",
      address: "",
    },
    name: "",
    phone: "",
    email: "",
    rules: {
      required: value => !!value || "Required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || "Invalid e-mail."
      },
    },
    address: "",
    province: [],
    city: [],
    sub_district: [],
    urban: [],
    selected_province: null,
    selected_city: null,
    selected_sub_district: null,
    selected_urban: null,
    postal_code: null,
    dialog: true,
    ondev: false,
  }),

  computed: {
    site() {
      return this.$store.state.site;
    },

    store() {
      return this.$store.state.store;
    },

    customer() {
      return this.$store.state.customer;
    },

    submit_button() {
      const validate = this.selected_province &&
        this.selected_city &&
        this.selected_sub_district &&
        this.selected_urban &&
        this.name.length &&
        this.phone.length &&
        this.email.length &&
        this.address.length;

      return !validate;
    }
  },

  watch: {
    referral_register_dialog(_, __) {
      this.submit();
    },

    referral_redeem_dialog(_, __) {
      this.submit();
    },

    phone(_, __) {
      const self = this;

      setTimeout(() => {
        if (String(+_) === 'NaN') {
          self.phone = _.replace(/\D+/g, '');
        }
      }, 5);
    },

    selected_province(_, __) {
      console.log("watch selected_province", _, __);
      if (_) {
        this.selected_sub_district = null;
        this.selected_urban = null;
        this.postal_code = null;
        this.get_city(_);
      }
    },

    async selected_city(_, __) {
      if (_) {
        this.selected_urban = null;
        this.postal_code = null;

        if (!this.loading.sub_district) this.get_sub_district(_);
      }
    },

    async selected_sub_district(_, __) {
      if (_) {
        this.selected_urban = null;
        this.postal_code = null;

        if (!this.loading.urban) this.get_urban(_);
      }
    },

    async selected_urban(_, __) {
      if (_) {
        const urban = this.urban.filter(el => el.name === _);

        if (urban.length) this.postal_code = urban[0].postalcode;
      }
    },
  },

  async mounted () {
    this.$store.dispatch("setState", {
      payload: { key: "uuid", data: this.$route.query.u },
    });

    await this.get_base_info("site-store-checkout");
    await this.get_province();
    await this.get_customer_detail();
    this.get_event();

    this.ondev = true;
  },

  methods: {
    event_handler(key, value) {
      this[key] = value;
    },

    async send_notif(message) {
      await this.$store.dispatch("request", {
        url   : "/api/send-notif",
        method: "post",
        data  : {
          compose_msg_order : message,
          bot_name          : this.store.bot_name,
          uuid              : this.$route.query.u,
          source            : this.$route.query.src,
        },
      });
    },

    change_selected_route(key, value) {
      this.is_updated = true;
      this[key] = value;

      console.log(this[key]);
    },

    async get_event() {
      const get = await this.$store.dispatch("request", {
        url    : "/referral/event/get_id",
        method : "post",
        data   : {
          event_type: "referral",
          bot_id: this.store.bot_id,
        },
      });

      if (get.data.reply.length) this.referral.event_id = get.data.reply[0].id;
    },

    async execute_redeem() {
      if (this.referral.event_id && this.ondev) {
        const regist_event = await this.register_participant_event();

        if (regist_event.status == "success") this.send_notif(regist_event.reply);

        this.referral_register_dialog = false;

        if (this.referral.code.length) {
          const redeem_referral = await this.redeem_referral();

          this.send_notif(redeem_referral.reply);
        }

        this.referral_redeem_dialog  = false;
      } else {
        this.referral_register_dialog = false;
        this.referral_redeem_dialog = false;

        this.submit();
      }
    },

    async redeem_referral() {
      const request = await this.$store.dispatch("request", {
        url    : "/referral/event/redeem/referral",
        method : "post",
        data   : {
          botid   : this.store.bot_id,
          source  : this.$route.query.src,
          userloc : this.selected_city,
          data    : { e_data  : this.referral.code },
          uuid    : this.$route.query.u,
        },
      });

      return request.data;
    },

    async register_participant_event() {
      const parsed_date = (() => {
        const splitted = this.birth_date.split('-');

        return `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
      })();
      const request = await this.$store.dispatch("request", {
        url: "/referral/event/reg",
        method: "post",
        data: {
          chatkey    : this.$route.query.u,
          event_id   : this.referral.event_id,
          detail_info: {
            mode     : this.mode,
            uuid     : this.$route.query.u,
            bot_id   : this.store.bot_id,
            bot_name : this.$route.params.store,
            store_id : this.store.id,
            name     : this.name,
            phone    : this.phone,
            email    : this.email,
            province : this.selected_province,
            city     : this.selected_city,
            urban    : this.selected_urban,
            zip_code : this.postal_code,
            address  : this.address,
            source   : this.$route.query.src,
            gender   : this.gender === "Laki-laki" ? "M" : "F",
            sub_district  : this.selected_sub_district,
            date_of_birth : parsed_date,
          },
          source: this.$route.query.src,
          userloc: this.selected_city,
        },
      });

      return request.data;
    },

    async get_province() {
      this.loading.province = true;

      const province = await this.$store.dispatch("request", {
        url   : "/api/administration/province",
        method: "get"
      });

      this.province = province.data;
      this.loading.province = false;
    },
    
    async get_city(province) {
      this.loading.city = true;

      const selected_province = this.province.filter(el => el.name === province);
      const city = await this.$store.dispatch("request", {
        url    : "/api/administration/city",
        method : "post",
        data   : {
          provname: selected_province[0].name,
          provcode: selected_province[0].code,
        },
      });

      this.city = city.data;

      if (this.customer && !this.is_updated) {
        this.selected_city = this.customer.city;
      } else {
        this.sub_district = [];
        this.urban = [];
        this.selected_city = null;
        this.selected_sub_district = null;
        this.selected_urban = null;
        this.postal_code = null;
      }

      this.loading.city = false;
    },

    async get_sub_district(city) {
      this.loading.sub_district = true;

      const selected_city = this.city.filter(el => el.name === city);
      const sub_district = await this.$store.dispatch("request", {
        url    : "/api/administration/subdistrict",
        method : "post",
        data   : {
          cityname: selected_city[0].name,
          provcode: selected_city[0].provcode,
        },
      });

      this.sub_district = sub_district.data;

      if (this.customer && !this.is_updated) {
        this.selected_sub_district = this.customer.sub_district;
      } else {
        this.urban = [];
        this.selected_urban = null;
        this.postal_code = null;
      }

      this.loading.sub_district = false;
    },

    async get_urban(sub_district) {
      this.loading.urban = true;

      const province = this.province.filter(el => el.name === this.selected_province);
      const urban = await this.$store.dispatch("request", {
        url    : "/api/administration/urban",
        method : "post",
        data   : {
          city        : this.selected_city,
          subdistrict : sub_district,
          provcode    : province[0].code,
        },
      });

      this.urban = urban.data;

      if (this.customer && !this.is_updated) {
        this.selected_urban = this.customer.urban;
        this.postal_code = this.customer.zip_code;
      }

      this.loading.urban = false;
    },

    async submit() {
      if (!this.referral_register_dialog && !this.referral_redeem_dialog && !this.process) {
        this.confirm = false;
        this.process = true;

        const parsed_date = (() => {
          if (this.referral.event_id && this.ondev) {
            const splitted = this.birth_date.split("-");

            return `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
          }

          return null;
        })();

        this.check_phone_number();
      
        const submit_user = await this.$store.dispatch("request", {
          url    : "/api/user/register",
          method : "post",
          data   : {
            mode     : this.mode,
            uuid     : this.$route.query.u,
            bot_id   : this.store.bot_id,
            bot_name : this.$route.params.store,
            store_id : this.store.id,
            name     : this.name,
            phone    : this.phone,
            email    : this.email,
            province : this.selected_province,
            city     : this.selected_city,
            urban    : this.selected_urban,
            zip_code : this.postal_code,
            address  : this.address,
            source   : this.$route.query.src,
            gender   : this.referral.event_id ? (this.gender === "Laki-laki" ? "M" : "F") : null,
            date_of_birth : this.referral.event_id ? parsed_date : null,
            sub_district  : this.selected_sub_district,
          },
        });

        if (submit_user.data.status) {
          this.process = false;

          if (this.store.registered_mode) {
            this.$router.push(`/success/register/${this.store.phone}`);
          } else {
            this.$router.replace(`/site/${this.site.store}/checkout?src=${this.site.source}&u=${this.site.uuid}&c=${this.site.category}`);
          }
        } else {
          this.process = false;
          this.register_failed = true;
        }
      }
    },

    async get_customer_detail() {
      try {
        const request = await this.$store.dispatch("request", {
          url    : "/api/customer",
          method : "post",
          data   : {
            chatkey: this.$route.query.u,
            bot_id : this.store.bot_id,
          },
        });

        if (request.data.status) {
          this.$store.dispatch("setState", {
            payload: { key : "customer", data: request.data.response },
          });

          this.mode    = "update";
          this.name    = request.data.response.name;
          this.phone   = request.data.response.phone;
          this.email   = request.data.response.email;
          this.address = request.data.response.address;
          this.selected_province = request.data.response.province;

          const parsed_date = (() => {
            const splitted = request.data.response.date_of_birth.split('-');

            return `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
          })();

          this.birth_date = (new Date(parsed_date)).toISOString().substr(0, 10);
          this.gender = request.data.response.gender === "M" ? "Laki-laki" : "Perempuan";
        }
      } catch (error) {
        console.error(error);
      }
    },
  
    async get_base_info(page) {
      const store = await this.$store.dispatch("request", {
        url    : "/api/store",
        method : "post",
        data   : {
          store_name: this.$route.params.store,
          page: page,
        },
      });

      this.$store.dispatch("setState", {
        payload: {
          key: "store",
          data: { ...this.store, ...store.data },
        },
      });
    },

    check_phone_number() {
      if (this.phone.startsWith("+62")) {
        this.phone = this.phone.replace("+62", "0");
      } else if (this.phone.startsWith("62")) {
        this.phone = this.phone.replace(/62/g, "0");
      } else if (!this.phone.startsWith("0")) {
        this.phone = `0${this.phone}`;
      }
    }
  },
}
</script>

<style lang="scss">
#user-profile {
  height: 100vh;
  text-align: left;
  overflow-y: scroll;
  padding-bottom: 150px;

  .title {
    font-weight: 500;
  }
}

#app > div.v-menu__content.theme--light {
  text-align: left;
}
.v-list-item__title {
  font-size: 14px;
  font-weight: 500;
}

#select-gender > .v-input--radio-group > div > .v-input__slot > div > div > div > label {
  font-size: 13px;
}

#select-gender {
  .v-input--radio-group {
    height: 40px !important;
  }

  .title {
    font-size: 12px !important;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }

  .radio {
    height: 40px !important;
    margin-top: 0 !important;
    margin-bottom: 15px !important;

    .radio-item {
      height: 24px !important;
      width: 50% !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      color: black !important;
      margin-right: 5px !important;
    }
  }
}

.referral-code {
  &--alert {
    font-size: 11px;
    color: red;
  }

  &--text-field {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: normal;
  }
}

.submit-button {
  text-transform: capitalize;
  color: black !important;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: normal;
}
</style>