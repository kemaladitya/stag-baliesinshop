exports.ids = [55];
exports.modules = {

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/checkout.vue?vue&type=template&id=a3d3c33c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-1",staticStyle:{"background-color":"white !important","width":"100%"}},[_vm._ssrNode("<div class=\"d-flex flex-row pa-1\">","</div>",[_vm._ssrNode("<div style=\"font-weight: 600\">TOTAL HARGA</div> "),_c('v-spacer'),_vm._ssrNode(" "+((!_vm.customized_values)?("<div style=\"font-weight: 600\">"+_vm._ssrEscape("\n      Rp.\n      "+_vm._s(_vm.grandtotal.toLocaleString().replace(',', '.'))+"\n    ")+"</div>"):("<div style=\"font-weight: 600\">"+_vm._ssrEscape("\n      Rp.\n      "+_vm._s(_vm.customized_values_total.toLocaleString().replace(',', '.'))+"\n    ")+"</div>")))],2),_vm._ssrNode(" "),_c('v-btn',{staticStyle:{"text-transform":"capitalize","font-weight":"600"},attrs:{"depressed":"","color":"#FD0","min-width":"100%","height":"45","disabled":!!_vm.processbtn},on:{"click":_vm.executeorder}},[_vm._v("\n    Proses\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/checkout.vue?vue&type=template&id=a3d3c33c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/checkout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  props: {
    grandtotal: {
      type: Number,
      required: true
    },
    processbtn: {
      type: Boolean,
      required: true
    },
    executeorder: {
      type: Function,
      required: true
    }
  },
  computed: {
    customized_values() {
      return this.$store.state.customized_values;
    },

    customized_values_total() {
      let total = 0;

      if (this.customized_values) {
        this.customized_values.forEach(el => {
          total += el.total;
        });
      }

      return total;
    }

  }
});
// CONCATENATED MODULE: ./components/Footer/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(104);

// CONCATENATED MODULE: ./components/Footer/checkout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fcff660c"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=footer-checkout.js.map