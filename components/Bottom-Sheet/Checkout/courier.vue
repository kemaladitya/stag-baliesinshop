<template>
  <v-sheet>
    <div class="d-flex flex-row">
      <div
        class="pl-2"
        style="align-self: center; font-size: 13px; font-weight: 600"
      >
        Pilih Kurir
      </div>
      <v-spacer />
      <v-btn
        icon
        text
        color="red"
        @click="changehandler('courier', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <div class="pb-2">
      <v-card
        v-for="(cr, idx) in getcour()"
        :key="idx"
        :class="!idx ? 'pb-0' : null"
        class="pa-2 pl-0"
        flat
      >
        <v-card
          class="ml-2 pa-2"
          style="font-size: 13px; font-weight: 600"
          outlined
          @click="select_courier(cr)"
        >
          {{ cr.split('|').join(' - ') }}
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

    getcour: {
      type: Function,
      required: true
    }
  },

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
  },

  mounted() {
    console.log(this.store.courier, ' this.store.courier')
    if (this.store.courier.length == 1) {
      console.log(this.store.courier[0])
      // await this.select_courier()
    }
  },

  methods: {
    async select_courier(cr) {
      console.log(cr)
      this.changehandler('courier', false)
      this.changehandler('shipping_cost_loading', true)
      const pricing = await this.$store.dispatch('request', {
        url: '/deliverycost/check',
        method: 'post',
        data: {
          name: cr,
          store_id: this.store.id,
          store_name: this.site.store,
          uuid: this.site.uuid,
          customer_city: this.customer.city,
          customer_urban: this.customer.urban,
          customer_sub_district: this.customer.sub_district
        }
      })

      if (pricing.status == 200) {
        this.changehandler('selected_courier', pricing.data)
      }

      this.changehandler('shipping_cost_loading', false)
    }
  }
}
</script>