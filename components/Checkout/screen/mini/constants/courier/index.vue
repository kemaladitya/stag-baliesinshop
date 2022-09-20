<template>
  <div>
    <div class="boxsub border-bottom px d-flex justify-space-between align-center">
      <p class="">Kurir</p>
      <p class="text-blue" v-if="!courier.selected" @click="select_courier_dialog = true">Pilih Kurir ></p>
      <p class="prodtitle d-flex align-center pointer" v-else @click="select_courier_dialog = true">
        <img :src="courier.selected.logo" alt="" class="courierlogo pointer">
        {{handleRupiahFormat(courier.selected.price) }}
      </p>
    </div>

    <!-- <div class="d-flex flex-row mt-4 mb-4 pa-1">
      <div style="font-weight: 600; width: 50%">
        <v-btn :class="!courier.selected ? 'pulse-button' : null" color="#fd0"
          style="text-transform: none; letter-spacing: normal; font-size: 14px; border-radius: 8px" block depressed
          @click="select_courier_dialog = true">
          Kurir
        </v-btn>
      </div>
      <v-spacer />
      <div v-if="courier.loading" class="pt-1">
        <v-progress-circular size="25" color="primary" indeterminate />
      </div>
      <div v-else>
        <div v-if="!courier.selected" class="pt-2" style="font-weight: 600; align-self: center">
          <div style="font-weight: 500; font-size: 14px">Belum Dipilih</div>
        </div>
        <div v-else style="font-weight: 600; align-self: center">
          <div v-if="courier.selected.status">
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 12px">
                {{ courier.selected.name }}
                {{
                courier.selected.name === "Express Delivery"
                ? null
                : "| " + courier.selected.service
                }}
              </div>
              <v-icon v-if="courier.selected.name === 'Express Delivery'" class="ml-1" color="black" small>
                mdi-clock-fast
              </v-icon>
              <v-icon v-else class="ml-1" color="black" small>mdi-truck</v-icon>
            </div>
            <div class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 13px">Rp {{ courier.selected.price.toLocaleString().replace(/,/g, '.') }}</div>
              <v-icon class="ml-1" color="black" small>mdi-cash</v-icon>
            </div>
            <div v-if="!courier.selected.custom" class="d-flex flex-row">
              <v-spacer />
              <div style="font-size: 11px">{{ courier.selected.range }}</div>
              <v-icon class="ml-1" small>mdi-clock-time-four</v-icon>
            </div>
          </div>
          <div v-else style="font-size: 9px; max-width: 120px; color: red">
            {{ courier.selected.message }}
          </div>
        </div>
      </div>
    </div> -->

    <!-- <v-divider /> -->

    <v-bottom-sheet inset max-width="420px" :value="select_courier_dialog"
      @click:outside="select_courier_dialog = false">
      <v-sheet class="pa-2" style="text-align: left">
        <list-courier :change_handler="change_handler" :courier="courier" :icons="icons" :take_icons="take_icons"
          :select_courier="select_courier" />
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import ListCourier from "@/components/checkout/screen/mobile/constants/courier/list-courier"

import { rupiahFormat } from '~/middleware/helper'

export default {
  components: { "list-courier": ListCourier },

  props: {
    courier: {
      type: Object,
      required: true,
    },

    select: {
      type: Function,
      required: true,
    },

    custom_rules: {
      type: Object,
      required: true,
    },

    general_total_order: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    select_courier_dialog: false,
    icons: [
      "Sari Roti",
      "Express Delivery",
      "POS",
      "JNE",
      "REX",
      "TIKI",
      "JNT",
      "WAHANA",
      "COD",
      "sameday",
      "instant",
    ],
    take_icons: {
      "Sari Roti": {
        name: "mdi-moped",
        color: "#1976d2",
        description: "Hawker akan mengantarkan pesanan Anda pada besok hari"
      },
      "Express Delivery": {
        name: "mdi-clock-fast",
        color: "green",
        description: "Express Delivery berlaku pada pemesanan sebelum jam 11:00 hari ini. Pengantaran order maks. jam 20:00."
      },
      "POS": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "JNE": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "REX": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "TIKI": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "JNT": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "WAHANA": {
        name: "mdi-truck-check",
        color: "primary",
        description: ""
      },
      "COD": {
        name: "mdi-account-cash",
        color: "green",
        description: ""
      },
      "sameday": {
        name: "mdi-clock-fast",
        color: "green",
        description: ""
      },
      "instant": {
        name: "mdi-clock-fast",
        color: "green",
        description: ""
      },
    }
  }),

  computed: {
    store() {
      return this.$store.state.store
    },

    products() {
      return this.$store.state.products
    },

    parsed_product() {
      let total = 0
      const product = []

      this.cart.forEach(el => {
        const find = this.products.filter(
          product => product.id === el.id && product.SKU === el.sku
        )

        if (find.length) {
          product.push({
            id: find[0].id,
            sku: find[0].SKU,
            detail_id: find[0].variant[0],
            main_image: find[0].main_image,
            name: find[0].name,
            normal_price: find[0].normal_price,
            discount_price: find[0].discount_price,
            is_promo: find[0].is_promo,
            qty: el.qty,
            express_delivery: find[0].express_delivery,
            express_delivery_setup: find[0].express_delivery_setup,
          })

          total += (find[0].discount_price || find[0].normal_price) * el.qty
        }
      })

      return { product, total }
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart
      }
    },

    validate_express_delivery() {
      try {
        const filter_not_in = this.parsed_product.filter(_ => {
          if (!_.express_delivery) {
            return _
          }
        });

        return filter_not_in;
      } catch (error) {
        return [];
      }
    },

    products() {
      return this.$store.state.products
    },

    order_type() {
      return this.$store.state.order_type
    },

    checked_button() {
      if (this.order_type === 'single-order') {
        if (this.general_total_order <= this.store.max_order) {
          if (this.general_total_order >= this.store.min_order) {
            return false;
          }
        }

        return true;
      } else if (this.order_type === 'subscription-order') {
        let is_valid = false

        this.cart.forEach(el => {
          if (!is_valid) {
            let total = 0

            el.items.forEach(item => {
              const find = this.products.filter(
                product => product.id === item.id && product.SKU === item.sku
              )

              total += ((find[0].discount_price || find[0].normal_price) * item.qty)
            })

            if (total < this.store.min_order || total > this.store.max_order) {
              is_valid = true
            }
          }
        })

        return is_valid;
      } else if (this.order_type === 'package-order') {
        if (this.store.customize_setup) {
          const order_type = this.package_cart[0].type
          const find_rules = JSON.parse(this.store.customize_setup).packaging.rules.detail.filter(el => el.type === order_type)

          if (find_rules.length) {
            this.custom_rules = {
              min: find_rules[0].min,
              max: find_rules[0].max,
            }
          }

          if (this.custom_rules.min > this.general_total_order || this.custom_rules.max < this.general_total_order) {
            return true;
          }

          return false;
        }
      }
    },
  },

  methods: {
    handleRupiahFormat(val) {
      return rupiahFormat(val)
    },
    change_handler(key, value) {
      this[key] = value;
    },

    select_courier(cour) {
      this.select(cour)
      this.select_courier_dialog = false
    }
  }
}
</script>

<style scoped lang="scss">
.courierlogo {
  height: 16px;
  margin-right: 8px;
  object-fit: contain;
}

p {
  margin-bottom: 0;
}

.text-blue {
  cursor: pointer;
  color: $blue-balesin;
  font-size: 12px;
  font-weight: 700;
}

.boxsub {
  height: 57px !important;
}
</style>