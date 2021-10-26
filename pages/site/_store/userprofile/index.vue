<template>
  <div
    class="mt-12 pt-6"
    style="
      height: 100vh;
      text-align: left;
      overflow-y: scroll;
      padding-bottom: 150px;
    "
  >
    <center v-if="!customer" class="mb-6" style="font-weight: 600">
      Yuk isi data terlebih dahulu
    </center>
    <center v-else style="font-weight: 600">Edit Data</center>
    <div class="pa-5 pt-2 pb-2">
      <div>
        <v-text-field
          label="Nama"
          placeholder="Nama Lengkap"
          hide-details
          name="name"
          style="font-size: 13px; font-weight: 600; letter-spacing: normal"
          :rules="[rules.required]"
          v-model="name"
        />
        <div style="font-size: 11px; color: red">{{ form_requirements.name }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-text-field
          label="No. Telephone"
          placeholder="No. Telephone / No. Handphone"
          hide-details
          name="phone"
          style="font-size: 13px; font-weight: 600; letter-spacing: normal"
          :rules="[rules.required]"
          v-model="phone"
          @change="check_phone_number"
        />
        <div style="font-size: 11px; color: red">{{ form_requirements.phone }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-text-field
          label="Email"
          placeholder="Alamat Email"
          hide-details
          name="email"
          style="font-size: 13px; font-weight: 600; letter-spacing: normal"
          :rules="[rules.required, rules.email]"
          v-model="email"
        />
        <div style="font-size: 11px; color: red">{{ form_requirements.email }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-select
          v-model="selected_province"
          label="Provinsi"
          placeholder="Provinsi"
          style="text-align: left; font-size: 13px; font-weight: 600; letter-spacing: normal"
          hide-details
          :disabled="
            !province.length ||
            loading.province ||
            loading.city ||
            loading.sub_district ||
            loading.urban
          "
          :items="province.length ? province.map(el => el.name) : []"
          @change="change_selected_route('province', $event)"
        />
        <div v-if="loading.province" class="mb-3">
          <v-progress-linear
            indeterminate
            color="blue darken-2"
          />
        </div>
        <div style="font-size: 11px; color: red">{{ form_requirements.province }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-select
          v-model="selected_city"
          label="Kota"
          style="text-align: left; font-size: 13px; font-weight: 600; letter-spacing: normal"
          placeholder="Kota"
          hide-details
          :disabled="
            !city.length ||
            !selected_province ||
            loading.province ||
            loading.city ||
            loading.sub_district ||
            loading.urban
          "
          :items="city.length ? city.map(el => el.name) : []"
          :rules="[rules.required]"
          @change="change_selected_route('city', $event)"
        />
        <div v-if="loading.city" class="mb-3">
          <v-progress-linear
            indeterminate
            color="blue darken-2"
          />
        </div>
        <div style="font-size: 11px; color: red">{{ form_requirements.city }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-select
          label="Kecamatan"
          v-model="selected_sub_district"
          style="text-align: left; font-size: 13px; font-weight: 600; letter-spacing: normal"
          placeholder="Kecamatan"
          hide-details
          :disabled="
            !sub_district.length ||
            !selected_province ||
            !selected_city ||
            loading.province ||
            loading.city ||
            loading.sub_district ||
            loading.urban
          "
          :items="sub_district.length ? sub_district.map(el => el.name) : []"
          :rules="[rules.required]"
          @change="change_selected_route('sub_district', $event)"
        />
        <div v-if="loading.sub_district" class="mb-3">
          <v-progress-linear
            indeterminate
            color="blue darken-2"
          />
        </div>
        <div style="font-size: 11px; color: red">{{ form_requirements.sub_district }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-select
          v-model="selected_urban"
          label="Kelurahan"
          placeholder="Kelurahan"
          style="text-align: left; font-size: 13px; font-weight: 600; letter-spacing: normal"
          hide-details
          :disabled="
            !urban.length ||
            !selected_province ||
            !selected_city ||
            !selected_sub_district ||
            loading.province ||
            loading.city ||
            loading.sub_district ||
            loading.urban
          "
          :items="urban.length ? urban.map(el => el.name) : []"
          :rules="[rules.required]"
        />
        <div v-if="loading.urban" class="mb-3">
          <v-progress-linear
            indeterminate
            color="blue darken-2"
          />
        </div>
        <div style="font-size: 11px; color: red">{{ form_requirements.urban }} &nbsp;</div>
      </div>
      <div class="mt-3">
        <v-text-field
          v-model="postal_code"
          :disabled="!urban.length && !selected_urban"
          readonly
          label="Kode Pos"
          placeholder="Kode Pos"
          style="font-size: 13px; font-weight: 600; letter-spacing: normal"
          hide-details
        />
        <div v-if="loading.urban" class="mb-3">
          <v-progress-linear
            indeterminate
            color="blue darken-2"
          />
        </div>
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
          depressed
          rounded
          large
          style="
            text-transform: capitalize;
            color: black !important;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: normal;
          "
          @click="confirm = true"
        >
          Submit
        </v-btn>
      </center>
    </div>

    <v-dialog
      v-model="confirm"
      persistent
      max-width="290"
    >
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
                font-size: 13px;
                font-weight: 600;
                letter-spacing: normal;
              "
              rounded
              depressed
              @click="submit"
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
                font-size: 13px;
                font-weight: 600;
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
            <v-img
              width="40"
              :src="require('@/assets/images/loading/spin-loading.gif')"
            />
          </div>
          <div style="padding-bottom: 20px; font-size: 13px; font-weight: 600">
            <div>Data kamu sedang diproses,</div>
            <div>harap menunggu untuk beberapa saat.</div>
          </div>
        </center>
        <center v-show="register_failed" class="pa-3">
          <v-img
            class="mb-4"
            width="50"
            :src="require('@/assets/images/error.png')"
          />
          <div style="padding-bottom: 20px; font-size: 13px; font-weight: 600">
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
export default {
  data: () => ({
    mode: 'register',
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
      name: '',
      phone: '',
      email: '',
      province: '',
      city: '',
      sub_district: '',
      urban: '',
      address: '',
    },
    name: '',
    phone: '',
    email: '',
    rules: {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
    address: '',
    province: [],
    city: [],
    sub_district: [],
    urban: [],
    selected_province: null,
    selected_city: null,
    selected_sub_district: null,
    selected_urban: null,
    postal_code: null,
    dialog: true
  }),

  computed: {
    site() {
      return this.$store.state.site
    },

    store() {
      return this.$store.state.store
    },

    customer() {
      return this.$store.state.customer
    },

    submit_button() {
      const validate = this.selected_province &&
        this.selected_city &&
        this.selected_sub_district &&
        this.selected_urban &&
        this.name.length &&
        this.phone.length &&
        this.email.length &&
        this.address.length

      if (validate) {
        return false
      }

      return true
    }
  },

  watch: {
    phone(newval, oldval) {
      const self = this

      setTimeout(() => {
        if (String(+newval) === 'NaN') {
          self.phone = newval.replace(/\D+/g, '')
        }
      }, 5)
    },

    async selected_province(_, __) {
      if (_) {
        this.selected_sub_district = null
        this.selected_urban = null
        this.postal_code = null
        this.get_city(_)
      }
    },

    async selected_city(_, __) {
      if (_) {
        this.selected_urban = null
        this.postal_code = null

        if (!this.loading.sub_district) {
          this.get_sub_district(_)
        }
      }
    },

    async selected_sub_district(_, __) {
      if (_) {
        this.selected_urban = null
        this.postal_code = null

        if (!this.loading.urban) {
          this.get_urban(_)
        }
      }
    },

    async selected_urban(_, __) {
      if (_) {
        const urban = this.urban.filter(el => el.name === _)

        if (urban.length) {
          this.postal_code = urban[0].postalcode
        }
      }
    },
  },

  async mounted () {
    this.$store.dispatch('setState', {
      payload: {
        key: 'uuid',
        data: this.$route.query.u
      }
    })

    await this.get_base_info("site-store-checkout")
    await this.get_province()
    await this.get_customer_detail()

    // if (this.customer && String(typeof this.customer) == 'object' && this.customer.hasOwnProperty('name')) {
    //   const selected_province = this.province.filter(el => el.name === this.customer.province)
    //   this.selected_province = selected_province[0]

    //   this.name = this.customer.name
    //   this.phone = this.customer.phone
    //   this.email = this.customer.email
    //   this.address = this.customer.address

    //   await this.get_city(selected_province[0].name)

    //   this.selected_city = { name: this.customer.city, provcode: selected_province[0].code }
      
    //   await this.get_sub_district(this.customer.city)
      
    //   this.selected_sub_district = { name: this.customer.sub_district, provcode: selected_province[0].code }

    //   await this.get_urban(this.customer.sub_district)

    //   this.selected_urban = { name: this.customer.urban, postalcode: this.customer.postal_code }
    //   this.postal_code = this.customer.zip_code
    // }
  },

  methods: {
    change_selected_route(key, value) {
      this.is_updated = true
      this[`selected${key}`] = value
    },

    async get_province() {
      this.loading.province = true

      const province = await this.$store.dispatch('request', {
        url: '/api/administration/province',
        method: 'get'
      })

      this.province = province.data
      this.loading.province = false
    },
    
    async get_city(province) {
      this.loading.city = true

      const selected_province = this.province.filter(el => el.name === province)
      const city = await this.$store.dispatch('request', {
        url: '/api/administration/city',
        method: 'post',
        data: {
          provname: selected_province[0].name,
          provcode: selected_province[0].code
        }
      })

      this.city = city.data

      if (this.customer && !this.is_updated) {
        this.selected_city = this.customer.city
      } else {
        this.sub_district = []
        this.urban = []
        this.selected_city = null
        this.selected_sub_district = null
        this.selected_urban = null
        this.postal_code = null
      }

      this.loading.city = false
    },

    async get_sub_district(city) {
      this.loading.sub_district = true

      const selected_city = this.city.filter(el => el.name === city)
      const sub_district = await this.$store.dispatch('request', {
        url: '/api/administration/subdistrict',
        method: 'post',
        data: {
          cityname: selected_city[0].name,
          provcode: selected_city[0].provcode
        }
      })

      this.sub_district = sub_district.data

      if (this.customer && !this.is_updated) {
        this.selected_sub_district = this.customer.sub_district
      } else {
        this.urban = []
        this.selected_urban = null
        this.postal_code = null
      }

      this.loading.sub_district = false
    },

    async get_urban(sub_district) {
      this.loading.urban = true
      const province = this.province.filter(el => el.name === this.selected_province)
      const urban = await this.$store.dispatch('request', {
        url: '/api/administration/urban',
        method: 'post',
        data: {
          city: this.selected_city,
          subdistrict: sub_district,
          provcode: province[0].code,
        }
      })

      this.urban = urban.data

      if (this.customer && !this.is_updated) {
        this.selected_urban = this.customer.urban
        this.postal_code = this.customer.zip_code
      }
      this.loading.urban = false
    },

    async submit() {
      // const self = this
      this.process = true

      this.check_phone_number()
    
      const submit_user = await this.$store.dispatch('request', {
        url: '/api/user/register',
        method: 'post',
        data: {
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
          sub_district: this.selected_sub_district,
        }
      })

      if (submit_user.data.status) {
        this.process = false
        if (this.store.registered_mode) {
          this.$router.push(`/success/register/${this.store.phone}`)
        } else {
          this.$router.replace(`/site/${this.site.store}/checkout?src=${this.site.source}&u=${this.site.uuid}&c=${this.site.category}`)
        }
      } else {
        this.process = false
        this.register_failed = true
      }
    },

    async get_customer_detail() {
      try {
        const request = await this.$store.dispatch('request', {
          url: '/api/customer',
          method: 'post',
          data: {
            chatkey: this.$route.query.u,
            bot_id : this.store.bot_id
          }
        })

        if (request.data.status) {
          this.$store.dispatch('setState', {
            payload: {
              key : 'customer',
              data: request.data.response
            }
          })

          this.mode    = 'update'
          this.name    = request.data.response.name
          this.phone   = request.data.response.phone
          this.email   = request.data.response.email
          this.address = request.data.response.address
          this.selected_province = request.data.response.province
        }
      } catch (error) {
        console.error(error)
      }
    },
  
    async get_base_info(page) {
      const store = await this.$store.dispatch('request', {
        url: '/api/store',
        method: 'post',
        data: {
          store_name: this.$route.params.store,
          page: page,
        },
      })

      this.$store.dispatch('setState', {
        payload: {
          key: 'store',
          data: {
            ...this.store,
            ...store.data
          }
        }
      })
    },

    check_phone_number() {
      if (this.phone.startsWith('+62')) {
        this.phone = this.phone.replace('+62', '0')
      } else if (this.phone.startsWith('62')) {
        this.phone = this.phone.replace(/62/g, '0')
      } else if (!this.phone.startsWith('0')) {
        this.phone = `0${this.phone}`
      }
    }
  },
}
</script>

<style lang="scss">
#app > div.v-menu__content.theme--light {
  text-align: left;
}
.v-list-item__title {
  font-size: 13px;
  font-weight: 600;
}
</style>