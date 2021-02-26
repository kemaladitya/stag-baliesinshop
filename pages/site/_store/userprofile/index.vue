<template>
  <div class="mt-12 pt-6" style="text-align: left">
    <div v-if="customer && customer.hasOwnProperty('status')" class="mb-6">
      <center style="font-weight: 600">Yuk isi data terlebih dahulu</center>
    </div>
    <center v-else style="font-weight: 600">Edit Data</center>
    <div class="pa-5 pt-2 pb-2">
      <div>
        <v-text-field
          label="Nama"
          placeholder="Nama Lengkap"
          hide-details
          name="name"
          :rules="[rules.required]"
          v-model="name"
        />
      </div>
      <div class="mt-6">
        <v-text-field
          label="No. Telephone"
          placeholder="No. Telephone / No. Handphone"
          hide-details
          name="phone"
          :rules="[rules.required]"
          v-model="phone"
        />
      </div>
      <div class="mt-6">
        <v-text-field
          label="Email"
          placeholder="Alamat Email"
          hide-details
          name="email"
          :rules="[rules.required, rules.email]"
          v-model="email"
        />
      </div>
      <div class="mt-6">
        <v-select
          label="Provinsi"
          style="text-align: left"
          :items="province.map(el => el.name)"
          :rules="[rules.required]"
          :value="selected_province ? selected_province.name : 'Provinsi'"
          @change="get_city"
        />
      </div>
      <div class="mt-2">
        <v-select
          label="Kota"
          style="text-align: left"
          :items="city.map(el => el.name)"
          :rules="[rules.required]"
          :value="selected_city ? selected_city.name : 'Kota'"
          @change="get_sub_district"
        />
      </div>
      <div class="mt-2">
        <v-select
          label="Kecamatan"
          style="text-align: left"
          :items="sub_district.map(el => el.name)"
          :rules="[rules.required]"
          :value="selected_sub_district ? selected_sub_district.name : 'Kecamatan'"
          @change="get_urban"
        />
      </div>
      <div class="mt-2">
        <v-select
          label="Kelurahan"
          style="text-align: left"
          :items="urban.map(el => el.name)"
          :value="selected_urban ? selected_urban.name : 'Kelurahan'"
          :rules="[rules.required]"
          @change="select_postalcode"
        />
      </div>
      <div>
        <v-text-field
          :value="postal_code"
          disabled
          label="Kode Pos"
          placeholder="Kode Pos"
          hide-details
        />
      </div>
      <div class="mt-6">
        <v-text-field
          label="Alamat"
          placeholder="Alamat Lengkap"
          hide-details
          name="address"
          :rules="[rules.required]"
          v-model="address"
        />
      </div>
      <center class="mt-8">
        <v-btn
          :disabled="submit_button"
          width="80%"
          color="#fd0"
          depressed
          rounded
          large
          style="text-transform: capitalize"
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
              style="text-transform: capitalize"
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
              style="text-transform: capitalize"
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
  </div>
</template>

<script>
export default {
  data: () => ({
    confirm: false,
    loading: false,
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
    postal_code: null
  }),

  computed: {
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
    }
  },

  async mounted () {
    this.$store.dispatch('setState', {
      payload: {
        key: 'uuid',
        data: this.$route.query.u
      }
    })

    await this.get_province()

    if (this.customer && String(typeof this.customer) == 'object' && this.customer.hasOwnProperty('name')) {
      const selected_province = this.province.filter(el => el.name === this.customer.province)
      this.selected_province = selected_province[0]

      this.name = this.customer.name
      this.phone = this.customer.phone
      this.email = this.customer.email
      this.address = this.customer.address

      await this.get_city(selected_province[0].name)

      this.selected_city = { name: this.customer.city, provcode: selected_province[0].code }
      
      await this.get_sub_district(this.customer.city)
      
      this.selected_sub_district = { name: this.customer.sub_district, provcode: selected_province[0].code }

      await this.get_urban(this.customer.sub_district)

      this.selected_urban = { name: this.customer.urban, postalcode: this.customer.postal_code }
      this.postal_code = this.customer.zip_code
    }
  },

  methods: {
    async get_province() {
      const province = await this.$store.dispatch('request', {
        url: '/api/administration/province',
        method: 'get'
      })

      this.province = province.data
    },
    
    async get_city(province) {
      const selected_province = this.province.filter(el => el.name === province)
      const city = await this.$store.dispatch('request', {
        url: '/api/administration/city',
        method: 'post',
        data: {
          provname: selected_province[0].name,
          provcode: selected_province[0].code
        }
      })

      this.selected_province = selected_province[0]
      this.city = city.data

      this.sub_district = []
      this.urban = []
      this.selected_city = null
      this.selected_sub_district = null
      this.selected_urban = null
      this.postal_code = null
    },

    async get_sub_district(city) {
      const selected_city = this.city.filter(el => el.name === city)
      const sub_district = await this.$store.dispatch('request', {
        url: '/api/administration/subdistrict',
        method: 'post',
        data: {
          cityname: selected_city[0].name,
          provcode: selected_city[0].provcode
        }
      })

      this.selected_city = selected_city[0]
      this.sub_district = sub_district.data
    },

    async get_urban(sub_district) {
      const selected_sub_district = this.sub_district.filter(el => el.name === sub_district)
      console.log(selected_sub_district, ' selected_sub_district')
      const urban = await this.$store.dispatch('request', {
        url: '/api/administration/urban',
        method: 'post',
        data: {
          city: this.selected_city.name,
          subdistrict: selected_sub_district[0].name,
          provcode: this.selected_province.code,
        }
      })

      this.selected_sub_district = selected_sub_district[0]
      this.urban = urban.data
    },

    select_postalcode(urban) {
      const selected_urban = this.urban.filter(el => el.name === urban)

      this.selected_urban = selected_urban[0]
      this.postal_code = selected_urban[0].postalcode
    },

    async submit() {
      const self = this
      const submit_user = await this.$store.dispatch('request', {
        url: '/api/user/register',
        method: 'post',
        data: {
          uuid: this.$route.query.u,
          bot_name: this.$route.params.store,
          name: this.name,
          phone: this.phone,
          email: this.email,
          province: this.selected_province,
          city: this.selected_city,
          sub_district: this.selected_sub_district,
          urban: this.selected_urban,
          address: this.address,
          source: this.$route.query.src
        }
      })

      console.log(submit_user)

      // if (submit_user.status === 200) {
      //   this.$router.push('/success/register')

      //   return true
      // }

      // this.$store.dispatch('setState', {
      //   payload: {
      //     key: 'alert',
      //     data: {
      //       status: true,
      //       text: 'Failed update your data.'
      //     }
      //   }
      // })

      // setTimeout(() => {
      //   self.$store.dispatch('setState', {
      //     payload: {
      //       key: 'alert',
      //       data: {
      //         status: false,
      //         text: ''
      //       }
      //     }
      //   })
      // }, 3000);
    }
  }
}
</script>

<style lang="scss">
#app > div.v-menu__content.theme--light {
  text-align: left;
}
</style>