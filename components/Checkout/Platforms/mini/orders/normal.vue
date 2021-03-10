<template>
  <div>
    <div class="pt-2 pb-2" v-if="!rp_order">
      <br v-if="rp_order" />
      <v-card
        class="d-flex flex-row pa-2 pl-1 pb-1"
        style="
          font-size: 13px;
          font-weight: 600;
          color: #1976d2 !important;
        "
        flat
      >
        <div :style="min_rp ? 'min-width: 16px' : null">
          {{ date.split('-')[2] }}
        </div>
        <div>&nbsp;{{ month[+date.split('-')[1]] }}</div>
        <div>&nbsp;{{ date.split('-')[0] }}</div>
      </v-card>
      <div v-for="(item, index) in cart" :key="index">
        <v-card class="d-flex flex-row ma-1 mb-2 pr-1" outlined>
          <v-card class="d-flex flex-row" flat width="100%">
            <v-card class="ma-2" flat>
              <v-img
                :src="item.detail[0].main_image"
                width="65"
                height="65"
              />
            </v-card>
            <div class="pa-2">
              <div
                style="
                  font-size: 12px;
                  max-width: 350px;
                  display: inline-block;
                  min-width: 350px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  font-weight: 600;
                "
              >
                {{ item.name }}
              </div>
              <div
                style="
                  font-size: 12px;
                  max-width: 350px;
                  display: inline-block;
                  min-width: 350px;
                  white-space: nowrap;
                  overflow: hidden !important;
                  text-overflow: ellipsis;
                  color: grey;
                "
              >
                {{ item.name }}
              </div>
              <div v-if="item.detail[0].discount_price" class="d-flex flex-row">
                <div class="mr-2" style="font-size: 13px; font-weight: 600">
                  {{ item.qty }} x Rp.
                  {{
                    item.detail[0].discount_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
                <div style="font-size: 13px; font-weight: 600; text-decoration: line-through; color: #999">
                  {{ item.qty }} x Rp. {{
                    item.detail[0].normal_price
                      .toLocaleString()
                      .replace(/,/g, '.')
                  }}, -
                </div>
              </div>
              <div v-else style="font-size: 13px; font-weight: 600">
                {{ item.qty }} x Rp. {{
                  item.detail[0].normal_price
                    .toLocaleString()
                    .replace(/,/g, '.')
                }}, -
              </div>
            </div>
          </v-card>
        </v-card>
      </div>
    </div>

    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },

  computed: {
    rp_order () {
      return this.$store.state.rp_order
    },

    month () {
      return this.$store.state.month
    },

    cart () {
      return this.$store.state.cart
    },

    min_rp () {
      return this.$store.state.min_rp
    },
  }
}
</script>