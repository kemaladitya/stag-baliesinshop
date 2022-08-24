exports.ids = [31];
exports.modules = {

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mini/constants/customer.vue?vue&type=template&id=cb248b66&



var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-1 pt-2 text-left"},[_vm._ssrNode("<div style=\"font-size: 12px\">Alamat pengiriman</div> <div style=\"font-size: 14px; font-weight: 600\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.customer.name)+"\n  ")+"</div> <div style=\"font-size: 11px; margin-top: 2px; color: #212221\"><div>"+_vm._ssrEscape(_vm._s(_vm.customer.phone))+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.customer.email))+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.customer.address))+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.customer.urban)+", "+_vm._s(_vm.customer.sub_district)+", "+_vm._s(_vm.customer.city)+" ("+_vm._s(_vm.customer.zip_code)+")")+"</div></div> "),(_vm.store && _vm.store.hasOwnProperty('registered_mode') && !_vm.store.registered_mode)?_vm._ssrNode("<div class=\"mt-1\">","</div>",[_c(VBtn["a" /* default */],{staticStyle:{"text-transform":"capitalize","letter-spacing":"normal","font-size":"10px","font-weight":"600"},attrs:{"color":"primary","block":"","outlined":"","to":("/site/" + (_vm.site.store) + "/userprofile?u=" + (_vm.site.uuid) + "&src=Whatsapp&mtd=reg&c=" + (_vm.site.category))}},[_c(VIcon["a" /* default */],{staticClass:"mr-1",attrs:{"x-small":""}},[_vm._v("mdi-pencil")]),_vm._v("\n      Ubah Alamat\n    ")],1)],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/customer.vue?vue&type=template&id=cb248b66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mini/constants/customer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var customervue_type_script_lang_js_ = ({
  computed: {
    site() {
      return this.$store.state.site;
    },

    store() {
      return this.$store.state.store;
    },

    customer() {
      return this.$store.state.customer;
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/customer.vue?vue&type=script&lang=js&
 /* harmony default export */ var constants_customervue_type_script_lang_js_ = (customervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/customer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  constants_customervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15a4c72a"
  
)

/* harmony default export */ var customer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout-screen-mini-constants-customer.js.map