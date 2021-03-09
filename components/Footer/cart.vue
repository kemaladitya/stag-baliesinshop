<template>
  <div class="pa-1 d-flex flex-row" style="width: 100%;">
    <v-btn
      v-show="!rp_order"
      depressed
      style="
        text-transform: capitalize;
        color: black !important;
        border: 1px solid #ccc !important;
        letter-spacing: initial;
      "
      min-width="49.5%"
      :to="back"
      :disabled="rp_order"
      height="45"
    >
      Kembali Belanja
    </v-btn>
    <v-card v-show="!rp_order" flat min-width="1%" />
    <v-btn
      depressed
      style="text-transform: capitalize; letter-spacing: initial"
      color="#FD0"
      :min-width="!rp_order ? '49.5%' : '100%'"
      height="45"
      :disabled="checkout_btn"
      @click="checkout"
    >
      Lanjut Pembayaran
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    checkout: {
      type: Function,
      required: true
    },

    total: {
      type: Number,
      required: true
    }
  },

  computed: {
    fullpath () {
      return this.$store.state.fullpath
    },

    rp_order () {
      return this.$store.state.rp_order
    },

    dates () {
      return this.$store.state.dates
    },

    store () {
      return this.$store.state.store
    },
    
    back() {
      const site = this.$store.state.site

      return `/site/${site.store}?u=${site.uuid}&src=${site.source}&c=${site.category}`
    },

    cart () {
      return this.$store.state.cart
    },

    delivery_time_normal () {
      return this.$store.state.delivery_time_normal
    },

    checkout_btn () {
      const list_validate = []
      let status = true
      let total

      if (this.rp_order && this.dates.length) {
        this.dates.forEach(el => {
          total = 0

          el.items.forEach(item => {
            if (item.select_date) {
              if (item.discount_price > 0) {
                total += item.discount_price * item.qty
              } else {
                total += item.normal_price * item.qty
              }
            }
          })

          const validator = total >= this.store.min_order && total <= this.store.max_order

          list_validate.push(validator)
        })
      } else {
        list_validate.push(false)
      }

      if (this.rp_order) {
        const validate_delivery_time = this.dates.filter(el => !el.delivery_time)

        if (validate_delivery_time.length) {
          return true
        }
      }


      if (this.rp_order && list_validate.indexOf(false) != -1) {
        status = true

        console.log(total, '  validate price per date 3')

        return status
      } else {
        if (this.rp_order && this.dates.length) {
          status = false
        } else if (!this.rp_order && this.cart.length && this.delivery_time_normal) {
          if (+this.total > this.store.min_order && +this.total < this.store.max_order) {
            return false
          } else {
            return true
          }
        } else {
          status = true
        }

        return status
      }
    }
  }
}
</script>