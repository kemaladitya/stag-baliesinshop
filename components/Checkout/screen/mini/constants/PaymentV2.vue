<template>
  <div>
    <div class="boxsub border-bottom px d-flex justify-space-between align-center">
      <p class="">Pembayaran</p>

      <p class="text-blue" v-if="!payment.selected" @click="select_payment_dialog = true">Pilih Pembayaran ></p>
      <div class="" v-else @click="select_payment_dialog = true">
        <img v-if="payment.lists[payment.selected].img.length !== 0" :src="payment.lists[payment.selected].img" alt=""
          class="paymentlogo pointer">
        <span v-else> {{ payment.selected }}</span>
        <!-- {{ payment.selected }}
      <pre>
          {{JSON.stringify(payment.lists[payment.selected].img, null,2)}}
        </pre> -->
        <!-- {{payment}} -->
      </div>
    </div>

    <v-bottom-sheet inset max-width="420px" :value="select_payment_dialog"
      @click:outside="select_payment_dialog = false">
      <v-sheet class="pa-2" style="text-align: left">
        <div class="d-flex flex-row">
          <div class="pl-2" style="align-self: center; font-size: 13px; font-weight: 600">
            Pilih Pembayaran
          </div>
          <v-spacer />
          <v-btn color="red" icon text @click="select_payment_dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="pb-2" style="overflow-y: scroll !important; max-height: 450px !important;">
          <v-card v-for="(pm, idx) in store.payment_type" :key="payment.lists[pm.toLowerCase()].name"
            :class="!idx ? 'pb-0' : null" class="pa-2 pl-0 pb-2" flat>
            <div v-if="order_type === 'subscription-order'">
              <v-card v-if="pm != 'COD'" :disabled="payment.selected === payment.lists[pm.toLowerCase()].name"
                class="ml-2 pa-2" style="text-align: left; border-radius: 8px;" outlined
                @click="select_payment(payment.lists[pm.toLowerCase()].name)">
                <div :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl">
                  <div v-if="payment.lists[pm.toLowerCase()].img">
                    <v-img :src="payment.lists[pm.toLowerCase()].img" :height="payment.lists[pm.toLowerCase()].height"
                      :width="payment.lists[pm.toLowerCase()].width" />
                  </div>
                  <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
                </div>
                <div class="pt-2 pl-2" style="font-size: 12px">
                  {{ payment.lists[pm.toLowerCase()].desc }}
                </div>
              </v-card>
            </div>
            <v-card v-else :disabled="validate_payment_express(payment.lists[pm.toLowerCase()].name)" class="ml-2 pa-2"
              style="text-align: left; border-radius: 8px;" outlined
              @click="select_payment(payment.lists[pm.toLowerCase()].name)">
              <div style="padding: 1px 1px 0px 0px">
                <div :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl">
                  <div v-if="payment.lists[pm.toLowerCase()].img">
                    <v-img :style="
                      payment.selected === payment.lists[pm.toLowerCase()].name && courier
                        ? '-webkit-filter: grayscale(100%); filter: grayscale(100%);'
                        : null
                    " :src="payment.lists[pm.toLowerCase()].img" :height="payment.lists[pm.toLowerCase()].height"
                      :width="payment.lists[pm.toLowerCase()].width" />
                  </div>
                  <div v-else class="pl-1" style="font-weight: 600">{{ pm.toUpperCase() }}</div>
                </div>
              </div>
              <div class="pt-2 pl-2" style="font-size: 12px">
                {{ payment.lists[pm.toLowerCase()].desc }}
              </div>
            </v-card>
          </v-card>
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <!-- <div class="d-flex flex-row mt-4 pa-1"> -->

    <!-- <div style="font-weight: 600; width: 50%">
        <v-btn :class="!payment.selected ? 'pulse-button' : null" color="#fd0"
          style="text-transform: none; letter-spacing: normal; font-size: 14px; border-radius: 8px" block depressed
          @click="select_payment_dialog = true">
          Pilih Pembayaran
        </v-btn>
      </div>
      <v-spacer />
      <div class="pt-2" style="font-weight: 600">
        <div v-if="!payment.selected" style="font-weight: 500; font-size: 14px">
          Belum Dipilih
        </div>
        <div v-else style="font-size: 14px; text-transform: uppercase">
          {{ payment.selected }}
        </div>
      </div> -->

    <!-- <v-bottom-sheet inset max-width="420px" :value="select_payment_dialog"
        @click:outside="select_payment_dialog = false">
        <v-sheet class="pa-2" style="text-align: left">
          <div class="d-flex flex-row">
            <div class="pl-2" style="align-self: center; font-size: 13px; font-weight: 600">
              Pilih Pembayaran
            </div>
            <v-spacer />
            <v-btn color="red" icon text @click="select_payment_dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="pb-2" style="overflow-y: scroll !important; max-height: 450px !important;">
            <v-card v-for="(pm, idx) in store.payment_type" :key="payment.lists[pm.toLowerCase()].name"
              :class="!idx ? 'pb-0' : null" class="pa-2 pl-0 pb-2" flat>
              <div v-if="order_type === 'subscription-order'">
                <v-card v-if="pm != 'COD'" :disabled="payment.selected === payment.lists[pm.toLowerCase()].name"
                  class="ml-2 pa-2" style="text-align: left; border-radius: 8px;" outlined
                  @click="select_payment(payment.lists[pm.toLowerCase()].name)">
                  <div :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl">
                    <div v-if="payment.lists[pm.toLowerCase()].img">
                      <v-img :src="payment.lists[pm.toLowerCase()].img" :height="payment.lists[pm.toLowerCase()].height"
                        :width="payment.lists[pm.toLowerCase()].width" />
                    </div>
                    <div v-else class="pl-1">{{ pm.toUpperCase() }}</div>
                  </div>
                  <div class="pt-2 pl-2" style="font-size: 12px">
                    {{ payment.lists[pm.toLowerCase()].desc }}
                  </div>
                </v-card>
              </div>
              <v-card v-else :disabled="validate_payment_express(payment.lists[pm.toLowerCase()].name)"
                class="ml-2 pa-2" style="text-align: left; border-radius: 8px;" outlined
                @click="select_payment(payment.lists[pm.toLowerCase()].name)">
                <div style="padding: 1px 1px 0px 0px">
                  <div :class="'pt-1 pl-' + payment.lists[pm.toLowerCase()].pl">
                    <div v-if="payment.lists[pm.toLowerCase()].img">
                      <v-img :style="
                        payment.selected === payment.lists[pm.toLowerCase()].name && courier
                          ? '-webkit-filter: grayscale(100%); filter: grayscale(100%);'
                          : null
                      " :src="payment.lists[pm.toLowerCase()].img" :height="payment.lists[pm.toLowerCase()].height"
                        :width="payment.lists[pm.toLowerCase()].width" />
                    </div>
                    <div v-else class="pl-1" style="font-weight: 600">{{ pm.toUpperCase() }}</div>
                  </div>
                </div>
                <div class="pt-2 pl-2" style="font-size: 12px">
                  {{ payment.lists[pm.toLowerCase()].desc }}
                </div>
              </v-card>
            </v-card>
          </div>
        </v-sheet>
      </v-bottom-sheet> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      required: true,
    },

    custom_rules: {
      type: Object,
      required: true,
    },

    courier: {
      type: String,
      required: true,
    },

    select: {
      type: Function,
      required: true,
    },

    general_total_order: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    select_payment_dialog: false
  }),

  computed: {
    store() {
      return this.$store.state.store
    },

    customer() {
      return this.$store.state.customer
    },

    products() {
      return this.$store.state.products
    },

    order_type() {
      return this.$store.state.order_type
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

  watch: {
    courier(_, __) {
      if (_ == "Express Delivery" && this.payment.selected && this.payment.selected.name != "cod") {
        this.select_payment(null);
      }
    },
  },

  methods: {
    validate_payment_express(name) {
      if (this.courier == "Express Delivery") {
        return name == "cod" ? false : true;
      } else {
        return false;
      }
    },

    select_payment(type) {
      console.log("type ::", type);
      this.select_payment_dialog = false
      this.select(type)
    }
  }
}
</script>

<style scoped lang="scss">
.paymentlogo {
  height: 10px;
  object-fit: contain;
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