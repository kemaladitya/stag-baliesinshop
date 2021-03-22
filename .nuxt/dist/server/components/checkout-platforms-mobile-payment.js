exports.ids = [47];
exports.modules = {

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/mobile/payment.vue?vue&type=template&id=f9b1c89e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-row mt-4 pa-1",staticStyle:{"height":"100px"}},[_vm._ssrNode("<div style=\"font-weight: 600; width: 50%\">","</div>",[_c('v-btn',{class:_vm.selectedpayment == '' ? 'pulse-button' : null,style:(_vm.selectedpayment ? 'box-shadow: none; text-transform: none' : 'text-transform: none'),attrs:{"block":"","color":"#fd0"},on:{"click":function($event){return _vm.changehandler('payment', true)}}},[_vm._v("\n      Pilih Pembayaran\n    ")])],1),_vm._ssrNode(" "),_c('v-spacer'),_vm._ssrNode(" <div class=\"pt-2\" style=\"font-weight: 600\">"+((!_vm.selectedpayment)?("<div style=\"font-size: 13px\">\n      Belum Dipilih\n    </div>"):("<div style=\"font-size: 13.9px; text-transform: uppercase\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.selectedpayment)+"\n    ")+"</div>"))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/Platforms/mobile/payment.vue?vue&type=template&id=f9b1c89e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/mobile/payment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var paymentvue_type_script_lang_js_ = ({
  props: {
    selectedpayment: {
      type: String,
      required: true
    },
    changehandler: {
      type: Function,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Checkout/Platforms/mobile/payment.vue?vue&type=script&lang=js&
 /* harmony default export */ var mobile_paymentvue_type_script_lang_js_ = (paymentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(104);

// CONCATENATED MODULE: ./components/Checkout/Platforms/mobile/payment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mobile_paymentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13d1ab9e"
  
)

/* harmony default export */ var payment = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=checkout-platforms-mobile-payment.js.map