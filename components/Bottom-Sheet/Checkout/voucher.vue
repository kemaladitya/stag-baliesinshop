<template>
  <v-sheet style="text-align: left">
    <div class="d-flex flex-row">
      <div
        class="pl-2"
        style="align-self: center; font-size: 13px; font-weight: 600"
      >
        Voucher Tersedia
      </div>
      <v-spacer />
      <v-btn
        icon
        text
        color="red"
        @click="changehandler('voucher', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <div
      class="pb-2"
      style="overflow-y: scroll !important; max-height: 450px !important;"
    >
      <v-card
        v-for="(vc, idx) in all_voucher"
        :key="vc.id"
        :class="!idx ? 'pb-0' : null"
        class="pa-2 pl-0"
        flat
      >
        <v-card
          class="ml-2 pa-2"
          outlined
          @click="usevoucher({ is_custom_voucher: false, value: vc })"
        >
          <div class="pb-1" style="font-weight: 600; font-size: 13px">
            {{ vc.name }}
          </div>
          <div v-html="vc.description" />
        </v-card>
      </v-card>
      <div v-if="rp_order">
        <v-card
          v-for="(vc, idx) in rp_voucher"
          :key="vc.id"
          :class="!idx ? 'pb-0' : null"
          class="pa-2 pl-0"
          flat
        >
          <v-card
            class="ml-2 pa-2"
            outlined
            :disabled="!rp_order"
            @click="usevoucher({ is_custom_voucher: false, value: vc })"
          >
            <div class="pb-1" style="font-weight: 600; font-size: 13px">
              {{ vc.name }}
            </div>
            <div v-html="vc.description" />
          </v-card>
        </v-card>
        <v-card v-if="customvoucher" class="pa-2 pl-0" flat>
          <v-card
            class="ml-2 pa-2"
            outlined
            @click="usevoucher({ is_custom_voucher: true, value: true })"
          >
            <div class="mb-1" style="font-size: 13px; font-weight: 600">
              Ketik Kode Voucher
            </div>

            <div style="font-size: 12px">
              Ketik Kode Voucher yang Anda miliki untuk dapatkan promo.
            </div>
          </v-card>
        </v-card>
        <v-card
          v-for="(vc, idx) in so_voucher"
          :key="vc.id"
          :class="!idx ? 'pb-0' : null"
          class="pa-2 pl-0"
          flat
        >
          <v-card
            class="ml-2 pa-2"
            outlined
            :disabled="rp_order"
            @click="usevoucher({ is_custom_voucher: false, value: vc })"
          >
            <div class="pb-1" style="font-weight: 600; font-size: 13px">
              {{ vc.name }}
            </div>
            <div v-html="vc.description" />
          </v-card>
        </v-card>
      </div>
      <div v-else>
         <v-card
          v-for="(vc, idx) in so_voucher"
          :key="vc.id"
          :class="!idx ? 'pb-0' : null"
          class="pa-2 pl-0"
          flat
        >
          <v-card
            class="ml-2 pa-2"
            outlined
            :disabled="rp_order"
            @click="usevoucher({ is_custom_voucher: false, value: vc })"
          >
            <div class="pb-1" style="font-weight: 600; font-size: 13px">
              {{ vc.name }}
            </div>
            <div v-html="vc.description" />
          </v-card>
        </v-card>
        <v-card v-if="customvoucher" class="pa-2 pl-0" flat>
          <v-card
            class="ml-2 pa-2"
            outlined
            @click="usevoucher({ is_custom_voucher: true, value: true })"
          >
            <div class="mb-1" style="font-size: 13px; font-weight: 600">
              Ketik Kode Voucher
            </div>

            <div style="font-size: 12px">
              Ketik Kode Voucher yang Anda miliki untuk dapatkan promo.
            </div>
          </v-card>
        </v-card>
        <v-card
          v-for="(vc, idx) in rp_voucher"
          :key="vc.id"
          :class="!idx ? 'pb-0' : null"
          class="pa-2 pl-0"
          flat
        >
          <v-card
            class="ml-2 pa-2"
            outlined
            :disabled="!rp_order"
            @click="usevoucher({ is_custom_voucher: false, value: vc })"
          >
            <div class="pb-1" style="font-weight: 600; font-size: 13px">
              {{ vc.name }}
            </div>
            <div v-html="vc.description" />
          </v-card>
        </v-card>
      </div>
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

    listvouchers: {
      type: Array,
      required: true
    },

    usevoucher: {
      type: Function,
      required: true
    },

    customvoucher: {
      type: Boolean,
      required: true
    }
  },

  mounted() {
    console.log(this.listvouchers, ' this.listvouchers')
  },

  computed: {
    site() {
      return this.$store.state.site
    },

    rp_order() {
      return this.$store.state.rp_order
    },

    rp_voucher() {
      return this.listvouchers.filter(el => {
        if (JSON.parse(el.sku_product).mode == "rp") {
          const category = el.categories_product.split(',').filter(cat => cat == this.site.category)

          if (category.length) {
            return el
          }
        }
      })
    },

    so_voucher() {
      return this.listvouchers.filter(el => {
        if (JSON.parse(el.sku_product).mode == "so") {
          const category = el.categories_product.split(',').filter(cat => cat == this.site.category)

          if (category.length) {
            return el
          }
        }
      })
    },

    all_voucher() {
      return this.listvouchers.filter(el => {
        if (JSON.parse(el.sku_product).mode == "all") {
          const category = el.categories_product.split(',').filter(cat => cat == this.site.category)

          if (category.length) {
            return el
          }
        }
      })
    }
  }
}
</script>
