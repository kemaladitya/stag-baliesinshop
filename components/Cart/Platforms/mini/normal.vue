<template>
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
              <v-icon color="red" small>mdi-close</v-icon>
            </center>
          </v-card>
          <v-card class="d-flex flex-row" flat width="100%">
            <v-card class="ma-2 ml-0" outlined>
              <v-img :src="item.detail[0].main_image" width="65" height="65" />
            </v-card>
            <div class="pa-2" style="text-align:left; max-width: 122px; overflow-x: scroll;">
              <div
                style="
                  font-size: 13px;
                  max-width: 115px;
                  display: inline-block;
                  min-width: 115px;
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
                max-width="22"
                width="22"
                min-width="22"
                max-height="22"
                height="22"
                min-height="22"
                depressed
                outlined
                rounded
                x-small
                text
                @click="changeqty(index, false, item)"
              >
                <v-icon x-small>mdi-minus</v-icon>
              </v-btn>
            </div>
            <v-card
              class="pt-1 text-center"
              min-width="25"
              style="font-size: 12px"
              flat
            >
              {{ item.qty }}
            </v-card>
            <div>
              <v-btn
                color="success"
                style="padding: 0; border-color: #4caf50 !important"
                max-width="22"
                width="22"
                min-width="22"
                max-height="22"
                height="22"
                min-height="22"
                depressed
                outlined
                rounded
                x-small
                text
                @click="changeqty(index, true, item)"
              >
                <v-icon x-small>mdi-plus</v-icon>
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

