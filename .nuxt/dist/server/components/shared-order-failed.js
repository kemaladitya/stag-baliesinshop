exports.ids = [96];
exports.modules = {

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1d763402", content, true, context)
};

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderFailed_vue_vue_type_style_index_0_id_a17a4b30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderFailed_vue_vue_type_style_index_0_id_a17a4b30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderFailed_vue_vue_type_style_index_0_id_a17a4b30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderFailed_vue_vue_type_style_index_0_id_a17a4b30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderFailed_vue_vue_type_style_index_0_id_a17a4b30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html[data-v-a17a4b30]{scrollbar-width:thin!important}html[data-v-a17a4b30],html .b-main-page[data-v-a17a4b30]{scrollbar-width:0;overflow:hidden}html[data-v-a17a4b30] ::-webkit-scrollbar{display:none}html .basket-background-shadow[data-v-a17a4b30]{box-shadow:0 -1px 17px 19px #fff!important}html #b-snackbar>div[data-v-a17a4b30]{width:inherit}html .b-font[data-v-a17a4b30]{font-family:Poppins,sans-serif}html .lined[data-v-a17a4b30]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}html .lz-load[data-v-a17a4b30]{width:100%;height:100%}html .lz-load[data-v-a17a4b30],html .lz-stripe[data-v-a17a4b30]{border:none;background-color:#babbbc}html .lz-stripe[data-v-a17a4b30]{height:20%}html .small-stripe[data-v-a17a4b30]{width:40%}html .medium-stripe[data-v-a17a4b30]{width:70%}html .long-stripe[data-v-a17a4b30]{width:100%}html .lz-load[data-v-a17a4b30],html .lz-stripe[data-v-a17a4b30]{animation:hintloading-data-v-a17a4b30 1.5s ease-in-out 0s infinite reverse;-webkit-animation:hintloading-data-v-a17a4b30 1.5s ease-in-out 0s infinite reverse}@keyframes hintloading-data-v-a17a4b30{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@-webkit-keyframes hintloading-data-v-a17a4b30{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}html .v-toolbar__content[data-v-a17a4b30],html .v-toolbar__extension[data-v-a17a4b30]{padding:4px 10px 4px 0}html .v-date-picker-title__date[data-v-a17a4b30]{overflow:hidden;position:relative;text-align:center;font-size:17px;font-weight:500;padding-bottom:8px;margin-bottom:-8px}html .v-date-picker-title__date div[data-v-a17a4b30],html .v-date-picker-title__date div.picker-reverse-transition-enter-leave-active[data-v-a17a4b30],html .v-date-picker-title__date div.picker-reverse-transition-leave-active[data-v-a17a4b30],html .v-date-picker-title__date div.picker-transition-enter-leave-active[data-v-a17a4b30],html .v-date-picker-title__date div.picker-transition-leave-active[data-v-a17a4b30]{width:100%;text-align:center!important}html .v-date-picker-title__date div.date-picker-header-value-transition[data-v-a17a4b30]{text-align:center!important}html .v-date-picker-title__year[data-v-a17a4b30],html div.v-date-picker-header.theme--light>button[data-v-a17a4b30]:first-child,html div.v-date-picker-header.theme--light>button[data-v-a17a4b30]:nth-child(3){display:none}html #b-rp-date-items div>hr[data-v-a17a4b30]{background-color:transparent!important;display:none!important;color:transparent!important}html #b-checkbox-subs-product>div[data-v-a17a4b30]{margin-top:0;padding-top:0}html .pulse-button[data-v-a17a4b30]{position:relative;border:none;box-shadow:0 0 0 0 rgba(255,221,0,.7);background-size:cover;background-repeat:no-repeat;cursor:pointer;-webkit-animation:pulse-data-v-a17a4b30 1.25s cubic-bezier(.66,0,0,1) infinite;animation:pulse-data-v-a17a4b30 1.25s cubic-bezier(.66,0,0,1) infinite}html .pulse-button[data-v-a17a4b30]:hover{-webkit-animation:none;animation:none}@-webkit-keyframes pulse-data-v-a17a4b30{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}@keyframes pulse-data-v-a17a4b30{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}html #scrolling-techniques-7>div>footer[data-v-a17a4b30]{background-color:transparent!important}#b-list-products #desktop .image[data-v-a17a4b30]{border-radius:3px 2px 0 0}#b-list-products #desktop .image .promo-badge[data-v-a17a4b30]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #desktop .name[data-v-a17a4b30]{font-size:14px;font-weight:500;max-width:165px;display:inline-block;min-width:80px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}#b-list-products #desktop .discount-price[data-v-a17a4b30]{font-size:12px;font-weight:600}#b-list-products #desktop .discount-price .lined[data-v-a17a4b30]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #desktop .normal-price[data-v-a17a4b30]{font-size:12px;font-weight:600}#b-list-products #desktop .show-detail[data-v-a17a4b30]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #desktop .add-to-cart[data-v-a17a4b30],#b-list-products #desktop .show-detail[data-v-a17a4b30]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #desktop .product-mdi-icon[data-v-a17a4b30]{font-size:12px!important}#b-list-products #desktop .select-variant[data-v-a17a4b30]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #desktop .empty-image[data-v-a17a4b30]{border-radius:5px;width:200px;height:200px}#b-list-products #desktop .empty-info[data-v-a17a4b30]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-list-products #mini .image[data-v-a17a4b30]{border-radius:3px 2px 0 0}#b-list-products #mini .image .promo-badge[data-v-a17a4b30]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #mini .name[data-v-a17a4b30]{display:inline-block;min-width:130px;max-width:130px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;font-weight:500}#b-list-products #mini .discount-price[data-v-a17a4b30]{font-size:12px;font-weight:600}#b-list-products #mini .discount-price .lined[data-v-a17a4b30]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #mini .normal-price[data-v-a17a4b30]{font-size:12px;font-weight:600}#b-list-products #mini .show-detail[data-v-a17a4b30]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #mini .add-to-cart[data-v-a17a4b30],#b-list-products #mini .show-detail[data-v-a17a4b30]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #mini .product-mdi-icon[data-v-a17a4b30]{font-size:12px!important}#b-list-products #mini .select-variant[data-v-a17a4b30]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #mini .empty-image[data-v-a17a4b30]{border-radius:5px;width:200px;height:200px}#b-list-products #mini .empty-info[data-v-a17a4b30]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-products-detail #desktop .name[data-v-a17a4b30],#b-products-detail #desktop .price[data-v-a17a4b30]{font-weight:600}#b-products-detail #desktop .variant[data-v-a17a4b30]{min-width:50%;max-width:50%}#b-products-detail #desktop .variant .label[data-v-a17a4b30]{font-size:11px}#b-products-detail #desktop .qty[data-v-a17a4b30]{min-width:50%;max-width:50%}#b-products-detail #desktop .qty .label[data-v-a17a4b30]{font-size:11px}#b-products-detail #desktop .size[data-v-a17a4b30]{font-size:16px;font-weight:600}#b-products-detail #desktop .description .label[data-v-a17a4b30]{font-size:13px;font-weight:600}#b-products-detail #desktop .description .detail[data-v-a17a4b30]{font-size:12px}#b-products-detail #desktop .action .content .continue-shop[data-v-a17a4b30]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #desktop .action .content .add-to-cart[data-v-a17a4b30],#b-products-detail #desktop .action .content .continue-shop[data-v-a17a4b30]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}#b-products-detail #mobile .name[data-v-a17a4b30],#b-products-detail #mobile .price[data-v-a17a4b30]{font-weight:600}#b-products-detail #mobile .variant[data-v-a17a4b30]{min-width:50%;max-width:50%}#b-products-detail #mobile .variant .label[data-v-a17a4b30]{font-size:11px}#b-products-detail #mobile .qty[data-v-a17a4b30]{min-width:50%;max-width:50%}#b-products-detail #mobile .qty .label[data-v-a17a4b30]{font-size:11px}#b-products-detail #mobile .size[data-v-a17a4b30]{font-size:16px;font-weight:600}#b-products-detail #mobile .description .label[data-v-a17a4b30]{font-size:13px;font-weight:600}#b-products-detail #mobile .description .detail[data-v-a17a4b30]{font-size:12px}#b-products-detail #mobile .action .content .continue-shop[data-v-a17a4b30]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #mobile .action .content .add-to-cart[data-v-a17a4b30],#b-products-detail #mobile .action .content .continue-shop[data-v-a17a4b30]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}body[data-v-a17a4b30],button[data-v-a17a4b30],button>span[data-v-a17a4b30],p[data-v-a17a4b30]{font-family:Poppins,sans-serif!important}p[data-v-a17a4b30]{margin-top:0;margin-bottom:0}.text-red[data-v-a17a4b30]{color:#c00}.font-light[data-v-a17a4b30]{font-weight:300}.pl[data-v-a17a4b30]{padding-left:16px}.pr[data-v-a17a4b30],.px[data-v-a17a4b30]{padding-right:16px}.px[data-v-a17a4b30]{padding-left:16px}.py[data-v-a17a4b30]{padding-top:16px;padding-bottom:16px}p[data-v-a17a4b30]{font-size:12px}b[data-v-a17a4b30]{font-weight:600}.title[data-v-a17a4b30],p.title[data-v-a17a4b30]{font-size:14px!important;font-weight:600!important;line-height:unset!important}.title[data-v-a17a4b30],.v-menu__content[data-v-a17a4b30],p.title[data-v-a17a4b30]{font-family:Poppins,sans-serif!important}p.title-blue[data-v-a17a4b30]{font-size:14px;font-weight:600;color:#206aec;margin-bottom:16px;margin-top:5px}p.prodtitle[data-v-a17a4b30]{font-size:12px;font-weight:600;line-height:16px}.bt-primary[data-v-a17a4b30]{background-color:#fd0;text-transform:capitalize!important;border-radius:100px;font-size:12px;letter-spacing:0}.border-bottom[data-v-a17a4b30]{border-bottom:1px solid #e8e8e8}p.desc[data-v-a17a4b30]{font-weight:300;font-size:12px}.btn-lg[data-v-a17a4b30]{height:40px!important;font-size:14px!important;font-weight:700!important;border-radius:100px;text-transform:capitalize}a[data-v-a17a4b30]{text-decoration:none}.pointer[data-v-a17a4b30]{cursor:pointer}.loadingv2[data-v-a17a4b30]{background:#fff;display:flex;height:80vh;align-items:center;justify-content:center;flex-direction:column}.loadingv2 img[data-v-a17a4b30]{height:100px;-o-object-fit:contain;object-fit:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/OrderFailed.vue?vue&type=template&id=a17a4b30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loadingv2"},[_vm._ssrNode("<img src=\"https://www.clipartmax.com/png/full/120-1203855_error-handling-in-swift-error-logo-png.png\" class=\"mb-4\" data-v-a17a4b30> <p data-v-a17a4b30>Proses order gagal,</p> <p data-v-a17a4b30>mohon untuk memuat ulang halaman</p> <p data-v-a17a4b30>jika tetap gagal, silahkan menghubungi customer service.</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shared/OrderFailed.vue?vue&type=template&id=a17a4b30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/OrderFailed.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OrderFailedvue_type_script_lang_js_ = ({// props: {
  //     loading: {
  //         type: Boolean,
  //     },
  // },
});
// CONCATENATED MODULE: ./components/shared/OrderFailed.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_OrderFailedvue_type_script_lang_js_ = (OrderFailedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/shared/OrderFailed.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(369)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_OrderFailedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a17a4b30",
  "2f05677f"
  
)

/* harmony default export */ var OrderFailed = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shared-order-failed.js.map