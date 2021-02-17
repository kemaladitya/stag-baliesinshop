<template>
  <!-- shadow view basket samain kaya gojek -->
  <v-expand-transition>
    <v-card
      v-show="!rp_order && cart.length"
      class="pa-1 pt-2"
      flat
      tile
    >
      <div v-for="(item, index) in cart" :key="index">
        <v-card class="d-flex flex-row ma-1 mb-2 pr-1" outlined>
          <v-card class="ma-1 pt-6" width="25" flat depressed @click="confirm_remove_from_cart(item.id)">
            <center>
              <v-icon color="red" x-small>mdi-close</v-icon>
            </center>
          </v-card>
          <!-- <v-btn :ripple="false" class="mt-6" depressed color="transparent" style="max-width: 25px !important; width: 25px !important; min-width: 25px !important">
            <v-icon color="red" x-small>mdi-close</v-icon>
          </v-btn> -->
          <v-card class="d-flex flex-row" flat width="100%">
            <v-card class="ma-2 ml-0" outlined>
              <v-img :src="item.detail[0].main_image" width="65" height="65" />
            </v-card>
            <div class="pa-2">
              <div
                style="
                  font-size: 13px;
                  max-width: 150px;
                  display: inline-block;
                  min-width: 150px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                "
              >
                {{ item.name }}
              </div>
              <div v-if="item.detail[0].discount_price">
                <div style="font-size: 13px; font-weight: 600; text-decoration: line-through; color: #999">
                  Rp. {{
                    item.detail[0].normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div style="font-size: 13px; font-weight: 600">
                  Rp.
                  {{
                    item.detail[0].discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
              </div>
              <div v-else style="font-size: 13px; font-weight: 600">
                Rp. {{
                  item.detail[0].normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
            </div>
          </v-card>
          <div class="d-flex flex-row pl-1 pr-1" style="align-self: center">
            <div>
              <v-btn
                color="success"
                style="padding: 0; border-color: #4caf50 !important"
                max-width="26"
                width="26"
                min-width="26"
                max-height="26"
                height="26"
                min-height="26"
                depressed
                outlined
                rounded
                small
                text
                @click="changeqty(index, false, item)"
              >
                <v-icon small>mdi-minus</v-icon>
              </v-btn>
            </div>
            <v-card
              class="pt-1 text-center"
              min-width="30"
              style="font-size: 14px"
              flat
            >
              {{ item.qty }}
            </v-card>
            <div>
              <v-btn
                color="success"
                style="padding: 0; border-color: #4caf50 !important"
                max-width="26"
                width="26"
                min-width="26"
                max-height="26"
                height="26"
                min-height="26"
                depressed
                outlined
                rounded
                small
                text
                @click="changeqty(index, true, item)"
              >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </div>
      <br />
    </v-card>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    changeqty: {
      type: Function,
      required: true
    },
    updatecache: {
      type: Function,
      required: true
    },
  },

  data: () => ({
    rm_pid: null,
  }),

  computed: {
    rp_order () {
      return this.$store.state.rp_order
    },

    cart () {
      return this.$store.state.cart
    }
  },

  methods: {
    confirm_remove_from_cart(pid) {
      const old_cart = this.cart.map(el => el)
      const filter_old_cart = old_cart.filter(el => el.id !== pid)

      this.$store.dispatch('setState', {
        payload: {
          key: 'cart',
          data: filter_old_cart
        }
      })

      this.updatecache('single-order')
    }
  }
}
</script>

