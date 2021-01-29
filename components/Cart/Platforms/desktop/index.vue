<template>
  <v-card flat tile>
    <div class="pb-4" style="height: 80vh; overflow-y: scroll">
      <!-- normal cart order -->
      <NormalOrder :changeqty="changeqty" />

      <!-- list items rp order -->
      <RPOrder
        :parsedate="parsedate"
        :parseprice="parseprice"
        :expanddetail="expanddetail"
        :expansion="expansion"
        :changeqtysubsitem="changeqtysubsitem"
        :deleterp="deleterp"
        :selectsubsdate="selectsubsdate"
        :changehandler="changehandler"
      />
      <!-- customer notes -->
      <div class="mt-4 pa-2">
        <div style="font-size: 12px">Catatan untuk penjual (optional):</div>
        <v-textarea hide-details no-resize outlined @change="changenotes" />
      </div>

      <!-- subtotal -->
      <div class="d-flex flex-row pa-2">
        <div>Subtotal</div>
        <v-spacer />
        <div v-if="rp_order" style="font-weight: 600">
          Rp. {{
            subsorder
              .toLocaleString()
              .replace(/,/g, '.')
          }}
        </div>
        <div v-else style="font-weight: 600">
          Rp. {{
            normalorder
              .toLocaleString()
              .replace(/,/g, '.')
          }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import NormalOrder from '@/components/Cart/Platforms/mobile/normal'
import RPOrder from '@/components/Cart/Platforms/mobile/rp-order'

export default {
  components: {
    NormalOrder,
    RPOrder
  },

  props: {
    expanddetail: {
      type: Function,
      required: true
    },
    expansion: {
      type: Array,
      required: true
    },
    subsorder: {
      type: Number,
      required: true
    },
    normalorder: {
      type: Number,
      required: true
    },
    changeqty: {
      type: Function,
      required: true
    },
    parsedate: {
      type: Function,
      required: true
    },
    parseprice: {
      type: Function,
      required: true
    },
    changeqtysubsitem: {
      type: Function,
      required: true
    },
    deleterp: {
      type: Function,
      required: true
    },
    selectsubsdate: {
      type: Function,
      required: true
    },
    changehandler: {
      type: Function,
      required: true
    },
    changenotes: {
      type: Function,
      required: true
    },
  },

  computed: {
    rp_order () {
      return this.$store.state.rp_order
    },

    cart () {
      return this.$store.state.cart
    },

    dates () {
      return this.$store.state.dates
    }
  }
}
</script>
