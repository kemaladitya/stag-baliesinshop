exports.ids = [48];
exports.modules = {

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/cart/max-order.vue?vue&type=template&id=ab3cdcf8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"text-align":"left"}},[(_vm.store)?_c('center',[_c('div',{staticClass:"pt-3"},[_c('v-icon',{staticStyle:{"font-size":"80px","color":"#facea8"}},[_vm._v("\n        mdi-information-outline\n      ")])],1),_vm._v(" "),_c('div',{staticClass:"pa-2 pb-6",staticStyle:{"font-size":"15px"}},[_vm._v("\n      Maximum pembelian Rp\n      "+_vm._s(_vm.store.max_order.toLocaleString().replace(/,/g, '.'))+"\n      per transaksi. Silakan edit keranjang pesanan Anda.\n    ")])]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dialogs/cart/max-order.vue?vue&type=template&id=ab3cdcf8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dialogs/cart/max-order.vue?vue&type=script&lang=js&
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
/* harmony default export */ var max_ordervue_type_script_lang_js_ = ({
  computed: {
    store() {
      return this.$store.state.store;
    }

  }
});
// CONCATENATED MODULE: ./components/dialogs/cart/max-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_max_ordervue_type_script_lang_js_ = (max_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(23);

// CONCATENATED MODULE: ./components/dialogs/cart/max-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_max_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b31b8704"
  
)

/* harmony default export */ var max_order = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=dialogs-cart-max-order.js.map