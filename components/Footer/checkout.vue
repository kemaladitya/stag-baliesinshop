<template>
  <div
    class="pa-1"
    style="background-color: white !important; width: 100%;"
  >
    <div class="d-flex flex-row pa-1">
      <div style="font-weight: 600">TOTAL HARGA</div>
      <v-spacer />
      <div v-if="!customized_values" style="font-weight: 600">
        Rp
        {{ grandtotal.toLocaleString().replace(',', '.') }}
      </div>
      <div v-else style="font-weight: 600">
        Rp
        {{ customized_values_total.toLocaleString().replace(',', '.') }}
      </div>
    </div>
    <v-btn
      depressed
      style="text-transform: capitalize; font-weight: 600"
      color="#FD0"
      min-width="100%"
      height="45"
      :disabled="!!this.checked_button"
      @click="executeorder"
    >
      Proses
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    grandtotal: {
      type: Number,
      required: true
    },

    processbtn: {
      type: Boolean,
      required: true
    },

    executeorder: {
      type: Function,
      required: true
    }
  },

  computed: {
    store() {
      return this.$store.state.store
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    dates() {
      return this.$store.state.dates
    },

    customized_values() {
      return this.$store.state.customized_values
    },

    customized_values_total() {
      let total = 0

      if (this.customized_values) {
        this.customized_values.forEach(el => {
          total += el.total
        })
      }

      return total
    },
    
    checked_button() {
      if (!this.processbtn) {
        if (this.customized_values && !this.rp_order) {
          console.log('masuk this.customized_values')
          const customize_setup = JSON.parse(this.store.customize_setup).packaging.rules.detail
          const mapped_customized_values = this.customized_values.map(el => {
            const selected_mode = customize_setup.filter(setup => setup.type == el.type)

            return { ...el, min_order: selected_mode[0].min, max_order: selected_mode[0].max}
          })
          const validate_total = mapped_customized_values.filter(el => el.total > el.max_order || el.total < el.min_order)

          console.log('@validate_total', validate_total)

          if (validate_total.length) {
            return true
          }

          return this.processbtn
        }

        if (this.rp_order) {
          console.log('@rp_order | ', this.rp_order, this.grandtotal)
          const get_items = this.dates.slice(0).map(el => {
            let rp_total = 0
            const items = el.items.filter(item => item.select_date)

            items.forEach(item => {
              if (item.discount_price) {
                rp_total += item.discount_price * item.qty
              } else {
                rp_total += item.normal_price * item.qty
              }
            })

            return { ...el, total: rp_total }
          })
          const validate_total = get_items.filter(el => el.total < this.store.min_order || el.total > this.store.max_order)

          if (validate_total.length) {
            return true
          }
        }

        if (!this.rp_order) {
          if (this.grandtotal < this.store.min_order || this.grandtotal > this.store.max_order) {
            return true
          }
        }

        return this.processbtn
      }

      return this.processbtn
    }
  },

  mounted() {
    console.log('@checkout.processbtn |', this.processbtn)
    console.log('@checkout.grand_total | ', this.grandtotal)
    console.log('@checkout.checked_button | ', this.checked_button)
  }
}
</script>