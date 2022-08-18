exports.ids = [44];
exports.modules = {

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mobile/constants/order-type/single-order.vue?vue&type=template&id=b05eb9e6&




var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-2"},[(_vm.cart.length)?_vm._ssrNode("<div>","</div>",_vm._l((_vm.parsed_lists.product),function(item,index){return _vm._ssrNode("<div class=\"mb-3\">","</div>",[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row mb-1 pr-1",staticStyle:{"border-radius":"8px"},attrs:{"outlined":""}},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row pa-1",attrs:{"flat":"","width":"100%"}},[_c(VCard["a" /* default */],{staticClass:"ma-2",staticStyle:{"border-radius":"8px"},attrs:{"width":"65","height":"65","flat":"","outlined":""}},[_c(VImg["a" /* default */],{staticStyle:{"border-radius":"8px"},attrs:{"src":item.main_image,"width":"65","height":"65","loading":"lazy"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left","width":"100%"}},[_c('div',{staticStyle:{"font-size":"12px","max-width":"150px","display":"inline-block","min-width":"150px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"500","height":"18px"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"12px","font-weight":"600","width":"100%"}},[_c('div',[_vm._v(_vm._s(item.qty)+" x  ")]),_vm._v(" "),(item.is_promo)?_c('div',[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{style:(item.is_promo
                    ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                    : null)},[_vm._v("\n                  Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]),_vm._v(" "),(!item.is_promo)?_c('div',[_vm._v(" ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"mt-1",staticStyle:{"min-height":"18px"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.express_delivery && _vm.is_available_express),expression:"item.express_delivery && is_available_express"}]},[_c('div',{staticStyle:{"color":"#388E3C","font-weight":"600","font-size":"12px","align-self":"center"}},[_c(VIcon["a" /* default */],{staticStyle:{"top":"-1px"},attrs:{"color":"#388E3C","small":""}},[_vm._v("mdi-clock-fast")]),_vm._v("\n                  EXPRESS DELIVERY\n                ")],1)])])])],1)],1)],1)}),0):_vm._ssrNode("<div>","</div>",[_c('center',{staticStyle:{"margin-top":"30vh","margin-bottom":"30px"}},[_c('div',{staticStyle:{"width":"264px"}},[_c(VIcon["a" /* default */],{staticStyle:{"font-size":"120px"},attrs:{"color":"grey lighten-2"}},[_vm._v("mdi-cart-outline")]),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","border-radius":"5px","width":"fit-content","font-size":"13px"}},[_vm._v("\n          Keranjang belanja Anda kosong.\n        ")])],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/order-type/single-order.vue?vue&type=template&id=b05eb9e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mobile/constants/order-type/single-order.vue?vue&type=script&lang=js&
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
/* harmony default export */ var single_ordervue_type_script_lang_js_ = ({
  computed: {
    site() {
      return this.$store.state.site;
    },

    is_available_express() {
      return this.$store.state.is_available_express;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    store() {
      return this.$store.state.store;
    },

    list_product() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },

    parsed_lists() {
      let total = 0;
      const product = [];
      this.cart.forEach(el => {
        const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

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
          total += (find[0].discount_price || find[0].normal_price) * el.qty;
        }
      });
      return {
        product,
        total
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/order-type/single-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_single_ordervue_type_script_lang_js_ = (single_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Checkout/screen/mobile/constants/order-type/single-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_single_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9f6e2524"
  
)

/* harmony default export */ var single_order = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout-screen-mobile-constants-order-type-single-order.js.map