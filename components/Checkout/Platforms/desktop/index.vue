<template>
  <v-card flat tile>
    <Customer-information />

    <v-card class="mt-2 pt-1 pb-1" color="white" flat tile>
      <Voucher
        :changehandler="changehandler"
        :applyingvoucher="applyingvoucher"
        :appliedvoucher="appliedvoucher"
      />

      <Order-detail
        :date="date"
        :parsedate="parsedate"
        :parseprice="parseprice"
        :expansion="expansion"
      />

      <Notes />

      <Subtotal :grandtotal="grandtotal" />

      <Kurir :changehandler="changehandler" :selectedcourier="selectedcourier" :shippingcostloading="shippingcostloading" />

      <Payment
        :selectedpayment="selectedpayment"
        :changehandler="changehandler"
      />

      <v-card height="50" flat />
    </v-card>
  </v-card>
</template>

<script>
import CustomerInformation from '@/components/Checkout/Platforms/desktop/customer'
import Voucher from '@/components/Checkout/Platforms/desktop/voucher'
import OrderDetail from '@/components/Checkout/Platforms/desktop/order-detail'
import Notes from '@/components/Checkout/Platforms/desktop/notes'
import Subtotal from '@/components/Checkout/Platforms/desktop/subtotal'
import Kurir from '@/components/Checkout/Platforms/desktop/kurir'
import Payment from '@/components/Checkout/Platforms/desktop/payment'

export default {
  components: {
    'Customer-information': CustomerInformation,
    'Order-detail': OrderDetail,
    Voucher,
    Notes,
    Subtotal,
    Kurir,
    Payment
  },

  props: {
    changehandler: {
      type: Function,
      required: true
    },

    applyingvoucher: {
      type: Boolean,
      required: true
    },

    shippingcostloading: {
      type: Boolean,
      required: true
    },

    appliedvoucher: {
      type: Object,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    selectedcourier: {
      type: Object,
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

    expansion: {
      type: Array,
      required: true
    },

    grandtotal: {
      type: Number,
      required: true
    },

    selectedpayment: {
      type: String,
      required: true
    }
  },
}
</script>