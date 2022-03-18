exports.ids = [91];
exports.modules = {

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53fdbe21", content, true, context)
};

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_style_index_0_id_58d49bfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_style_index_0_id_58d49bfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_style_index_0_id_58d49bfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_style_index_0_id_58d49bfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_phone_vue_vue_type_style_index_0_id_58d49bfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html[data-v-58d49bfc]{scrollbar-width:thin!important}html[data-v-58d49bfc],html .b-main-page[data-v-58d49bfc]{scrollbar-width:0;overflow:hidden}html[data-v-58d49bfc] ::-webkit-scrollbar{display:none}html .basket-background-shadow[data-v-58d49bfc]{box-shadow:0 -1px 17px 19px #fff!important}html #b-snackbar>div[data-v-58d49bfc]{width:inherit}html .b-font[data-v-58d49bfc]{font-family:Poppins,sans-serif}html .lined[data-v-58d49bfc]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}html .lz-load[data-v-58d49bfc]{width:100%;height:100%}html .lz-load[data-v-58d49bfc],html .lz-stripe[data-v-58d49bfc]{border:none;background-color:#babbbc}html .lz-stripe[data-v-58d49bfc]{height:20%}html .small-stripe[data-v-58d49bfc]{width:40%}html .medium-stripe[data-v-58d49bfc]{width:70%}html .long-stripe[data-v-58d49bfc]{width:100%}html .lz-load[data-v-58d49bfc],html .lz-stripe[data-v-58d49bfc]{animation:hintloading-data-v-58d49bfc 1.5s ease-in-out 0s infinite reverse;-webkit-animation:hintloading-data-v-58d49bfc 1.5s ease-in-out 0s infinite reverse}@keyframes hintloading-data-v-58d49bfc{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@-webkit-keyframes hintloading-data-v-58d49bfc{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}html .v-toolbar__content[data-v-58d49bfc],html .v-toolbar__extension[data-v-58d49bfc]{padding:4px 10px 4px 0}html .v-date-picker-title__date[data-v-58d49bfc]{overflow:hidden;position:relative;text-align:center;font-size:17px;font-weight:500;padding-bottom:8px;margin-bottom:-8px}html .v-date-picker-title__date div[data-v-58d49bfc],html .v-date-picker-title__date div.picker-reverse-transition-enter-leave-active[data-v-58d49bfc],html .v-date-picker-title__date div.picker-reverse-transition-leave-active[data-v-58d49bfc],html .v-date-picker-title__date div.picker-transition-enter-leave-active[data-v-58d49bfc],html .v-date-picker-title__date div.picker-transition-leave-active[data-v-58d49bfc]{width:100%;text-align:center!important}html .v-date-picker-title__date div.date-picker-header-value-transition[data-v-58d49bfc]{text-align:center!important}html .v-date-picker-title__year[data-v-58d49bfc],html div.v-date-picker-header.theme--light>button[data-v-58d49bfc]:first-child,html div.v-date-picker-header.theme--light>button[data-v-58d49bfc]:nth-child(3){display:none}html #b-rp-date-items div>hr[data-v-58d49bfc]{background-color:transparent!important;display:none!important;color:transparent!important}html #b-checkbox-subs-product>div[data-v-58d49bfc]{margin-top:0;padding-top:0}html .pulse-button[data-v-58d49bfc]{position:relative;border:none;box-shadow:0 0 0 0 rgba(255,221,0,.7);background-size:cover;background-repeat:no-repeat;cursor:pointer;-webkit-animation:pulse-data-v-58d49bfc 1.25s cubic-bezier(.66,0,0,1) infinite;animation:pulse-data-v-58d49bfc 1.25s cubic-bezier(.66,0,0,1) infinite}html .pulse-button[data-v-58d49bfc]:hover{-webkit-animation:none;animation:none}@-webkit-keyframes pulse-data-v-58d49bfc{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}@keyframes pulse-data-v-58d49bfc{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}html #scrolling-techniques-7>div>footer[data-v-58d49bfc]{background-color:transparent!important}#b-list-products #desktop .image[data-v-58d49bfc]{border-radius:3px 2px 0 0;min-width:180px;min-height:180px}#b-list-products #desktop .image .promo-badge[data-v-58d49bfc]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #desktop .name[data-v-58d49bfc]{font-size:14px;font-weight:500;max-width:165px;display:inline-block;min-width:80px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}#b-list-products #desktop .discount-price[data-v-58d49bfc]{font-size:12px;font-weight:600}#b-list-products #desktop .discount-price .lined[data-v-58d49bfc]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #desktop .normal-price[data-v-58d49bfc]{font-size:12px;font-weight:600}#b-list-products #desktop .show-detail[data-v-58d49bfc]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #desktop .add-to-cart[data-v-58d49bfc],#b-list-products #desktop .show-detail[data-v-58d49bfc]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #desktop .product-mdi-icon[data-v-58d49bfc]{font-size:12px!important}#b-list-products #desktop .select-variant[data-v-58d49bfc]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #desktop .empty-image[data-v-58d49bfc]{border-radius:5px;width:200px;height:200px}#b-list-products #desktop .empty-info[data-v-58d49bfc]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-list-products #mini .image[data-v-58d49bfc]{border-radius:3px 2px 0 0;min-width:180px;min-height:180px}#b-list-products #mini .image .promo-badge[data-v-58d49bfc]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #mini .name[data-v-58d49bfc]{display:inline-block;min-width:130px;max-width:130px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;font-weight:500}#b-list-products #mini .discount-price[data-v-58d49bfc]{font-size:12px;font-weight:600}#b-list-products #mini .discount-price .lined[data-v-58d49bfc]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #mini .normal-price[data-v-58d49bfc]{font-size:12px;font-weight:600}#b-list-products #mini .show-detail[data-v-58d49bfc]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #mini .add-to-cart[data-v-58d49bfc],#b-list-products #mini .show-detail[data-v-58d49bfc]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #mini .product-mdi-icon[data-v-58d49bfc]{font-size:12px!important}#b-list-products #mini .select-variant[data-v-58d49bfc]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #mini .empty-image[data-v-58d49bfc]{border-radius:5px;width:200px;height:200px}#b-list-products #mini .empty-info[data-v-58d49bfc]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-products-detail #desktop .name[data-v-58d49bfc],#b-products-detail #desktop .price[data-v-58d49bfc]{font-weight:600}#b-products-detail #desktop .variant[data-v-58d49bfc]{min-width:50%;max-width:50%}#b-products-detail #desktop .variant .label[data-v-58d49bfc]{font-size:11px}#b-products-detail #desktop .qty[data-v-58d49bfc]{min-width:50%;max-width:50%}#b-products-detail #desktop .qty .label[data-v-58d49bfc]{font-size:11px}#b-products-detail #desktop .size[data-v-58d49bfc]{font-size:16px;font-weight:600}#b-products-detail #desktop .description .label[data-v-58d49bfc]{font-size:13px;font-weight:600}#b-products-detail #desktop .description .detail[data-v-58d49bfc]{font-size:12px}#b-products-detail #desktop .action .content .continue-shop[data-v-58d49bfc]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #desktop .action .content .add-to-cart[data-v-58d49bfc],#b-products-detail #desktop .action .content .continue-shop[data-v-58d49bfc]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}#b-products-detail #mobile .name[data-v-58d49bfc],#b-products-detail #mobile .price[data-v-58d49bfc]{font-weight:600}#b-products-detail #mobile .variant[data-v-58d49bfc]{min-width:50%;max-width:50%}#b-products-detail #mobile .variant .label[data-v-58d49bfc]{font-size:11px}#b-products-detail #mobile .qty[data-v-58d49bfc]{min-width:50%;max-width:50%}#b-products-detail #mobile .qty .label[data-v-58d49bfc]{font-size:11px}#b-products-detail #mobile .size[data-v-58d49bfc]{font-size:16px;font-weight:600}#b-products-detail #mobile .description .label[data-v-58d49bfc]{font-size:13px;font-weight:600}#b-products-detail #mobile .description .detail[data-v-58d49bfc]{font-size:12px}#b-products-detail #mobile .action .content .continue-shop[data-v-58d49bfc]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #mobile .action .content .add-to-cart[data-v-58d49bfc],#b-products-detail #mobile .action .content .continue-shop[data-v-58d49bfc]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}#register[data-v-58d49bfc]{padding-top:30vh}#register .thanks[data-v-58d49bfc]{font-weight:600;font-size:23px}#register .information[data-v-58d49bfc]{color:#999;font-size:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success/register/_phone.vue?vue&type=template&id=58d49bfc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"b-font",attrs:{"id":"register","height":"100vh"}},[_c('center',[_c('v-img',{attrs:{"width":"180","height":"180","src":"/success.gif"}}),_vm._v(" "),_c('div',{staticClass:"thanks"},[_vm._v("Terima Kasih")]),_vm._v(" "),_c('center',{staticClass:"information"},[_c('div',[_vm._v("Proses pencatatan diri kamu telah")]),_vm._v(" "),_c('div',[_vm._v("selesai. Kamu akan kembali ke bot secara")]),_vm._v(" "),_c('div',[_vm._v("otomatis.")])])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/success/register/_phone.vue?vue&type=template&id=58d49bfc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success/register/_phone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
  layout: "empty",
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
      if (self.site.source.includes("Whatsapp")) {
        window.location.replace(`https://wa.me/${self.$route.params.phone}`);
      } else {
        window.location.replace(`https://faq.balesin.id/bot/${self.site.store}`);
      }
    }, 3000);
  }

});
// CONCATENATED MODULE: ./pages/success/register/_phone.vue?vue&type=script&lang=js&
 /* harmony default export */ var register_phonevue_type_script_lang_js_ = (_phonevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(60);

// CONCATENATED MODULE: ./pages/success/register/_phone.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(369)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  register_phonevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58d49bfc",
  "6cac8ee2"
  
)

/* harmony default export */ var _phone = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VApp: VApp["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_phone.js.map