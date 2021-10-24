exports.ids = [11];
exports.modules = {

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/Platforms/desktop/type/package-order/footer-detail.vue?vue&type=template&id=3d6ce875&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div style=\"font-size: 10px; text-align: left; padding-left: 10px; font-style: italic; color: grey\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.setup.footer_message)+"\n  ")+"</div> "),_vm._ssrNode("<div class=\"d-flex flex-row\">","</div>",[_vm._ssrNode((_vm._ssrList((_vm.setup.rules.detail),function(detail){return ("<div class=\"pb-2 pt-1\""+(_vm._ssrStyle({"font-size":"10px","text-align":"left","padding-left":"10px","font-style":"italic"},null, { display: (_vm.type == detail.type) ? '' : 'none' }))+"><div class=\"d-flex flex-row\"><div"+(_vm._ssrStyle(null,_vm.total < detail.min ? 'color: red;' : 'color: grey;', null))+">"+_vm._ssrEscape("\n          Min. order "+_vm._s(detail.min / 1000)+"k\n        ")+"</div> <div class=\"ml-2 mr-2\">|</div> <div"+(_vm._ssrStyle(null,_vm.total > detail.max ? 'color: red;' : 'color: grey;', null))+">"+_vm._ssrEscape("\n          Max. order "+_vm._s(detail.max / 1000)+"k\n        ")+"</div></div></div>")}))+" "),_c('v-spacer'),_vm._ssrNode(" <div class=\"pa-2 pt-4\""+(_vm._ssrStyle({"text-align":"right","font-size":"10px"},_vm.total ? 'color: rgb(33, 150, 243); font-weight: bold' : 'color: grey', null))+">"+_vm._ssrEscape("\n      Total : Rp "+_vm._s(_vm.total.toLocaleString().replace(/,/g, '.'))+", -\n    ")+"</div>")],2),_vm._ssrNode(" "),_c('v-card',{staticClass:"d-flex flex-row mt-0 pa-2 pt-0",attrs:{"flat":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"mr-2",attrs:{"color":"black","depressed":"","small":"","text":""},on:{"click":_vm.cancel}},[_vm._v("\n      Kembali\n    ")]),_vm._v(" "),_c('v-btn',{staticStyle:{"color":"black !important"},attrs:{"color":"#fd0","depressed":"","small":"","disabled":_vm.validated},on:{"click":_vm.submit}},[_vm._v("\n      Tambah\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cart/Platforms/desktop/type/package-order/footer-detail.vue?vue&type=template&id=3d6ce875&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/Platforms/desktop/type/package-order/footer-detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var footer_detailvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      required: true
    },
    setup: {
      type: Object,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    cancel: {
      type: Function,
      required: true
    },
    submit: {
      type: Function,
      required: true
    },
    validated: {
      type: Boolean,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cart/Platforms/desktop/type/package-order/footer-detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_order_footer_detailvue_type_script_lang_js_ = (footer_detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(110);

// CONCATENATED MODULE: ./components/Cart/Platforms/desktop/type/package-order/footer-detail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  package_order_footer_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7613c7cd"
  
)

/* harmony default export */ var footer_detail = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=cart-platforms-desktop-type-package-order-footer-detail.js.map