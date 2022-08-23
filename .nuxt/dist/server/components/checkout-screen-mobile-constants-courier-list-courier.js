exports.ids = [40];
exports.modules = {

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mobile/constants/courier/list-courier.vue?vue&type=template&id=0f754ffc&





var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex flex-row\">","</div>",[_vm._ssrNode("<div class=\"pl-2\" style=\"align-self: center; font-size: 14px; font-weight: 600\">\n      Pilih Pengiriman\n    </div> "),_c(VSpacer["a" /* default */]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{attrs:{"color":"red","icon":"","text":""},on:{"click":function($event){return _vm.change_handler('select_courier_dialog', false)}}},[_c(VIcon["a" /* default */],[_vm._v("mdi-close")])],1)],2),_vm._ssrNode(" "),(!_vm.courier.loading)?_vm._ssrNode("<div style=\"overflow-y: scroll !important; max-height: 450px !important;\">","</div>",_vm._l((_vm.courier.lists),function(cr,idx){return _c(VCard["a" /* default */],{key:idx,staticClass:"pa-2 pl-0",class:!idx ? 'pb-0' : null,staticStyle:{"text-align":"left"},attrs:{"flat":""}},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row ml-2 pa-3 pt-1 pb-1 mb-2",staticStyle:{"border-radius":"8px"},attrs:{"flat":"","outlined":""},on:{"click":function($event){return _vm.select_courier(cr)}}},[_c('div',{staticStyle:{"display":"grid","padding":"0 15px"}},[_c('img',{staticStyle:{"height":"22px","width":"60px","align-self":"center"},attrs:{"src":cr.logo,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"pa-3",staticStyle:{"font-size":"12px","padding":"5px 0 0 10px"}},[_c('div',{staticStyle:{"font-weight":"500"}},[_vm._v("\n            "+_vm._s(cr.name)+" - "+_vm._s(cr.service)+"\n          ")]),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"500"}},[_vm._v("Rp "+_vm._s(cr.final_price.toLocaleString().replace(/,/g, ".")))]),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"400","padding-top":"7px"}},[_vm._v(_vm._s(cr.description))])])])],1)}),1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/courier/list-courier.vue?vue&type=template&id=0f754ffc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mobile/constants/courier/list-courier.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var list_couriervue_type_script_lang_js_ = ({
  props: {
    courier: Object,
    icons: Array,
    take_icons: Object,
    select_courier: Function,
    change_handler: Function
  },
  data: () => ({
    is_all_express: true,
    parsed_product: {
      product: [],
      total: 0
    },
    is_available_today: false
  }),
  computed: {
    is_available_express() {
      return this.$store.state.is_available_express;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    store() {
      return this.$store.state.store;
    },

    products() {
      return this.$store.state.products;
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart;
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart;
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart;
      }
    },

    validate_express_delivery() {
      try {
        const filter_not_in = this.parsed_product.product.filter(_ => {
          if (!_.express_delivery) {
            return _;
          }
        });
        return filter_not_in;
      } catch (error) {
        return [];
      }
    }

  },

  created() {
    this.product_parser();
  },

  mounted() {
    this.check_day_availability();
  },

  methods: {
    express_delivery_description() {
      if (!this.is_available_express) {
        return "Saat ini layanan “Express Delivery“ hanya tersedia di area tertentu";
      }

      if (this.order_type === 'subscription-order') {
        return "Express Delivery tidak tersedia untuk pembelian Mode Langganan";
      } else if (this.order_type === 'package-order') {
        return "Express Delivery tidak tersedia untuk pembelian Parcel/Box";
      }

      if (this.validate_express_delivery.length) {
        return "Hanya tersedia untuk produk Sari Roti dengan label khusus “Express Delivery”";
      }

      return "";
    },

    check_day_availability() {
      try {
        const today = new Date().getDay();
        const list_days = [];
        this.parsed_product.product.forEach(({
          express_delivery_setup: {
            days
          }
        }) => {
          days.forEach(day => !list_days.includes(day) ? list_days.push(day) : null);
        });
        console.log("start check");

        if (list_days.length == 1 && list_days[0] == "*") {
          this.is_available_today = true;
        } else if (list_days.includes(today)) {
          this.is_available_today = true;
        } else {
          this.is_available_today = false;
          return;
        }
      } catch (error) {
        this.is_available_today = false;
        return;
      }
    },

    express_delivery_validator(courier) {
      let available = true;
      const name = courier.split('|')[2];
      const not_express_delivery_items = this.parsed_product.product.filter(({
        express_delivery
      }) => !express_delivery);
      const express_delivery_items = this.parsed_product.product.filter(({
        express_delivery
      }) => express_delivery);

      if (express_delivery_items.length) {
        const now = new Date();
        const time_now = (now.getHours() < 10 ? "0" + now.getHours() : now.getHours()) + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
        express_delivery_items.forEach(item => {
          const checker = +time_now.replace(":", "") > +item.express_delivery_setup.time.start.replace(":", "") && +time_now.replace(":", "") <= +item.express_delivery_setup.time.end.replace(":", "");

          if (available) {
            available = checker;
          }
        });
      }

      if (name == "Express Delivery") {
        const is_single_item = this.order_type === "single-order";
        const is_all_express = !not_express_delivery_items.length;
        const is_all_time_available = available;
        return !(is_single_item && is_all_express && is_all_time_available && this.is_available_today && this.is_available_express);
      }

      return false;
    },

    product_parser() {
      let total = 0;
      const product = [];
      this.cart.forEach(el => {
        const find = this.products.filter(product => product.id === el.id && product.SKU === el.sku);

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
            express_delivery_setup: find[0].express_delivery_setup
          });
          if (!find[0].express_delivery) this.is_all_express = false;
          total += (find[0].discount_price || find[0].normal_price) * el.qty;
        }
      });
      this.parsed_product = {
        product,
        total
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/courier/list-courier.vue?vue&type=script&lang=js&
 /* harmony default export */ var courier_list_couriervue_type_script_lang_js_ = (list_couriervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/courier/list-courier.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courier_list_couriervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e0719c1"
  
)

/* harmony default export */ var list_courier = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout-screen-mobile-constants-courier-list-courier.js.map