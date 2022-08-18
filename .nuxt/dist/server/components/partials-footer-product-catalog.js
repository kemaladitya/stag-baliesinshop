exports.ids = [65];
exports.modules = {

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("975511a8", content, true, context)
};

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_catalog_vue_vue_type_style_index_0_id_c82870c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_catalog_vue_vue_type_style_index_0_id_c82870c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_catalog_vue_vue_type_style_index_0_id_c82870c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_catalog_vue_vue_type_style_index_0_id_c82870c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_catalog_vue_vue_type_style_index_0_id_c82870c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html[data-v-c82870c0]{scrollbar-width:thin!important}html[data-v-c82870c0],html .b-main-page[data-v-c82870c0]{scrollbar-width:0;overflow:hidden}html[data-v-c82870c0] ::-webkit-scrollbar{display:none}html .basket-background-shadow[data-v-c82870c0]{box-shadow:0 -1px 17px 19px #fff!important}html #b-snackbar>div[data-v-c82870c0]{width:inherit}html .b-font[data-v-c82870c0]{font-family:Poppins,sans-serif}html .lined[data-v-c82870c0]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}html .lz-load[data-v-c82870c0]{width:100%;height:100%}html .lz-load[data-v-c82870c0],html .lz-stripe[data-v-c82870c0]{border:none;background-color:#babbbc}html .lz-stripe[data-v-c82870c0]{height:20%}html .small-stripe[data-v-c82870c0]{width:40%}html .medium-stripe[data-v-c82870c0]{width:70%}html .long-stripe[data-v-c82870c0]{width:100%}html .lz-load[data-v-c82870c0],html .lz-stripe[data-v-c82870c0]{animation:hintloading-data-v-c82870c0 1.5s ease-in-out 0s infinite reverse;-webkit-animation:hintloading-data-v-c82870c0 1.5s ease-in-out 0s infinite reverse}@keyframes hintloading-data-v-c82870c0{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@-webkit-keyframes hintloading-data-v-c82870c0{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}html .v-toolbar__content[data-v-c82870c0],html .v-toolbar__extension[data-v-c82870c0]{padding:4px 10px 4px 0}html .v-date-picker-title__date[data-v-c82870c0]{overflow:hidden;position:relative;text-align:center;font-size:17px;font-weight:500;padding-bottom:8px;margin-bottom:-8px}html .v-date-picker-title__date div[data-v-c82870c0],html .v-date-picker-title__date div.picker-reverse-transition-enter-leave-active[data-v-c82870c0],html .v-date-picker-title__date div.picker-reverse-transition-leave-active[data-v-c82870c0],html .v-date-picker-title__date div.picker-transition-enter-leave-active[data-v-c82870c0],html .v-date-picker-title__date div.picker-transition-leave-active[data-v-c82870c0]{width:100%;text-align:center!important}html .v-date-picker-title__date div.date-picker-header-value-transition[data-v-c82870c0]{text-align:center!important}html .v-date-picker-title__year[data-v-c82870c0],html div.v-date-picker-header.theme--light>button[data-v-c82870c0]:first-child,html div.v-date-picker-header.theme--light>button[data-v-c82870c0]:nth-child(3){display:none}html #b-rp-date-items div>hr[data-v-c82870c0]{background-color:transparent!important;display:none!important;color:transparent!important}html #b-checkbox-subs-product>div[data-v-c82870c0]{margin-top:0;padding-top:0}html .pulse-button[data-v-c82870c0]{position:relative;border:none;box-shadow:0 0 0 0 rgba(255,221,0,.7);background-size:cover;background-repeat:no-repeat;cursor:pointer;-webkit-animation:pulse-data-v-c82870c0 1.25s cubic-bezier(.66,0,0,1) infinite;animation:pulse-data-v-c82870c0 1.25s cubic-bezier(.66,0,0,1) infinite}html .pulse-button[data-v-c82870c0]:hover{-webkit-animation:none;animation:none}@-webkit-keyframes pulse-data-v-c82870c0{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}@keyframes pulse-data-v-c82870c0{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}html #scrolling-techniques-7>div>footer[data-v-c82870c0]{background-color:transparent!important}#b-list-products #desktop .image[data-v-c82870c0]{border-radius:3px 2px 0 0;min-width:180px;min-height:180px}#b-list-products #desktop .image .promo-badge[data-v-c82870c0]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #desktop .name[data-v-c82870c0]{font-size:14px;font-weight:500;max-width:165px;display:inline-block;min-width:80px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}#b-list-products #desktop .discount-price[data-v-c82870c0]{font-size:12px;font-weight:600}#b-list-products #desktop .discount-price .lined[data-v-c82870c0]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #desktop .normal-price[data-v-c82870c0]{font-size:12px;font-weight:600}#b-list-products #desktop .show-detail[data-v-c82870c0]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #desktop .add-to-cart[data-v-c82870c0],#b-list-products #desktop .show-detail[data-v-c82870c0]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #desktop .product-mdi-icon[data-v-c82870c0]{font-size:12px!important}#b-list-products #desktop .select-variant[data-v-c82870c0]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #desktop .empty-image[data-v-c82870c0]{border-radius:5px;width:200px;height:200px}#b-list-products #desktop .empty-info[data-v-c82870c0]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-list-products #mini .image[data-v-c82870c0]{border-radius:3px 2px 0 0}#b-list-products #mini .image .promo-badge[data-v-c82870c0]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #mini .name[data-v-c82870c0]{display:inline-block;min-width:130px;max-width:130px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;font-weight:500}#b-list-products #mini .discount-price[data-v-c82870c0]{font-size:12px;font-weight:600}#b-list-products #mini .discount-price .lined[data-v-c82870c0]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #mini .normal-price[data-v-c82870c0]{font-size:12px;font-weight:600}#b-list-products #mini .show-detail[data-v-c82870c0]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #mini .add-to-cart[data-v-c82870c0],#b-list-products #mini .show-detail[data-v-c82870c0]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #mini .product-mdi-icon[data-v-c82870c0]{font-size:12px!important}#b-list-products #mini .select-variant[data-v-c82870c0]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #mini .empty-image[data-v-c82870c0]{border-radius:5px;width:200px;height:200px}#b-list-products #mini .empty-info[data-v-c82870c0]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-products-detail #desktop .name[data-v-c82870c0],#b-products-detail #desktop .price[data-v-c82870c0]{font-weight:600}#b-products-detail #desktop .variant[data-v-c82870c0]{min-width:50%;max-width:50%}#b-products-detail #desktop .variant .label[data-v-c82870c0]{font-size:11px}#b-products-detail #desktop .qty[data-v-c82870c0]{min-width:50%;max-width:50%}#b-products-detail #desktop .qty .label[data-v-c82870c0]{font-size:11px}#b-products-detail #desktop .size[data-v-c82870c0]{font-size:16px;font-weight:600}#b-products-detail #desktop .description .label[data-v-c82870c0]{font-size:13px;font-weight:600}#b-products-detail #desktop .description .detail[data-v-c82870c0]{font-size:12px}#b-products-detail #desktop .action .content .continue-shop[data-v-c82870c0]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #desktop .action .content .add-to-cart[data-v-c82870c0],#b-products-detail #desktop .action .content .continue-shop[data-v-c82870c0]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}#b-products-detail #mobile .name[data-v-c82870c0],#b-products-detail #mobile .price[data-v-c82870c0]{font-weight:600}#b-products-detail #mobile .variant[data-v-c82870c0]{min-width:50%;max-width:50%}#b-products-detail #mobile .variant .label[data-v-c82870c0]{font-size:11px}#b-products-detail #mobile .qty[data-v-c82870c0]{min-width:50%;max-width:50%}#b-products-detail #mobile .qty .label[data-v-c82870c0]{font-size:11px}#b-products-detail #mobile .size[data-v-c82870c0]{font-size:16px;font-weight:600}#b-products-detail #mobile .description .label[data-v-c82870c0]{font-size:13px;font-weight:600}#b-products-detail #mobile .description .detail[data-v-c82870c0]{font-size:12px}#b-products-detail #mobile .action .content .continue-shop[data-v-c82870c0]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #mobile .action .content .add-to-cart[data-v-c82870c0],#b-products-detail #mobile .action .content .continue-shop[data-v-c82870c0]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}.footer-wrapper[data-v-c82870c0]{position:fixed;bottom:0;width:100%;z-index:9}.footer-wrapper .content[data-v-c82870c0]{border-radius:8px}.footer-wrapper .content--show-cart[data-v-c82870c0]{font-size:13px;font-weight:500}.footer-wrapper .content--item-info[data-v-c82870c0]{font-size:13px;font-weight:600;color:grey}.footer-wrapper .content--total-info[data-v-c82870c0]{font-size:13px;font-weight:600}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Partials/footer/product-catalog.vue?vue&type=template&id=c82870c0&scoped=true&



var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loading_product)?_c('transition',{attrs:{"name":"scroll-y-reverse-transition","mode":"out-in","appear":""}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:((_vm.cart.length)),expression:"(cart.length)"}],staticClass:"pa-2 pt-1 footer-wrapper"},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row pa-3 pr-3 pl-3 content",attrs:{"to":_vm.cart_url,"color":"#fd0"}},[_c(VCard["a" /* default */],{staticClass:"content--show-cart",attrs:{"color":"transparent","flat":""}},[_vm._v("\n        Lihat Keranjang\n      ")]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VCard["a" /* default */],{staticClass:"content--item-info",attrs:{"color":"transparent","flat":""}},[_vm._v("\n        "+_vm._s(_vm.order_info.qty_item)+"\n        "+_vm._s(_vm.order_info.qty_item > 1 ? 'items' : 'item')+"\n      ")]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VCard["a" /* default */],{staticClass:"content--total-info",attrs:{"color":"transparent","flat":""}},[_vm._v("\n        Rp "+_vm._s(_vm.order_info.total
            .toLocaleString()
            .replace(/,/g, '.'))+"\n      ")])],1)],1)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Partials/footer/product-catalog.vue?vue&type=template&id=c82870c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Partials/footer/product-catalog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var product_catalogvue_type_script_lang_js_ = ({
  props: {
    loading_product: Boolean
  },
  computed: {
    order_info() {
      let qty_item = 0;
      let total = 0;

      if (this.order_type === 'single-order' && this.cart) {
        this.cart.forEach(el => {
          const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

          if (find.length) {
            qty_item += el.qty;
            total += (find[0].discount_price || find[0].normal_price) * el.qty;
          }
        });
      } else if (this.order_type === 'subscription-order' && this.cart) {
        this.cart.forEach(date => {
          date.items.forEach(item => {
            const find = this.list_product.filter(product => product.id === item.id && product.SKU === item.sku);

            if (find.length) {
              qty_item += item.qty;
              total += (find[0].discount_price || find[0].normal_price) * item.qty;
            }
          });
        });
      }

      return {
        qty_item,
        total
      };
    },

    list_product() {
      return this.$store.state.products;
    },

    cart_url() {
      return `/site/${this.$route.params.store}/cart?u=${this.$route.query.u}&mtd=view&src=${this.$route.query.src}&c=${this.$route.query.c}`;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    cart() {
      if (this.order_type === 'single-order') {
        return this.$store.state.cart;
      } else if (this.order_type === 'subscription-order') {
        return this.$store.state.subscription_cart;
      } else if (this.order_type === 'package-order') {
        return this.$store.state.package_cart;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Partials/footer/product-catalog.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_product_catalogvue_type_script_lang_js_ = (product_catalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Partials/footer/product-catalog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(403)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_product_catalogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c82870c0",
  "123fb21c"
  
)

/* harmony default export */ var product_catalog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=partials-footer-product-catalog.js.map