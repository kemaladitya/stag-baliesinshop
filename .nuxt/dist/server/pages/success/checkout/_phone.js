exports.ids = [98];
exports.modules = {

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success/checkout/_phone.vue?vue&type=template&id=36bf2f61&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"b-font",staticStyle:{"padding-top":"30vh"},attrs:{"height":"100vh"}},[_c('center',[_c('v-img',{attrs:{"width":"180","height":"180","src":"https://s3-ap-southeast-1.amazonaws.com/alatteknikkitaassets/logos/success.gif"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","font-size":"23px"}},[_vm._v("Pesanan Berhasil")]),_vm._v(" "),_c('center',{staticStyle:{"color":"#999999","font-size":"16px"}},[_c('div',[_vm._v("Proses pemesanan kamu telah selesai.")]),_vm._v(" "),_c('div',[_vm._v("Kamu akan kembali ke bot secara")]),_vm._v(" "),_c('div',[_vm._v("otomatis.")])])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/success/checkout/_phone.vue?vue&type=template&id=36bf2f61&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success/checkout/_phone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _phonevue_type_script_lang_js_ = ({
  layout: 'empty',
  data: () => ({
    bs: true
  }),
  computed: {
    site() {
      return this.$store.state.site;
    },

    store() {
      return this.$store.state.store;
    }

  },

  mounted() {
    const self = this;
    setTimeout(() => {
      if (self.site.source.includes('Whatsapp')) {
        window.location.replace(`https://wa.me/${self.$route.params.phone}`);
      } else {
        window.location.replace(`https://faq.balesin.id/bot/${self.site.store}`);
      }
    }, 3000);
  }

});
// CONCATENATED MODULE: ./pages/success/checkout/_phone.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkout_phonevue_type_script_lang_js_ = (_phonevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// CONCATENATED MODULE: ./pages/success/checkout/_phone.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  checkout_phonevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b8cd0cbc"
  
)

/* harmony default export */ var _phone = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VApp: VApp["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_phone.js.map