exports.ids = [91];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* *
 * * get_list_products
 * * cart_detail
 * * manage_cart
 * * cart_manager
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  list_month: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  get_list_products: async (self, data) => {
    try {
      const request = await self.dispatch('request', {
        url: '/api/products',
        method: 'post',
        data
      });
      request.data.results = request.data.results.map(_ => {
        if (_.express_delivery && _.express_delivery_setup) {
          _.express_delivery_setup = JSON.parse(_.express_delivery_setup);
        }

        return _;
      });

      if (request.data.status) {
        self.dispatch('setState', {
          payload: {
            key: 'products',
            data: request.data.results.sort((a, b) => b.priority - a.priority)
          }
        });
        return true;
      }

      return request.data;
    } catch (error) {
      console.error("@get_list_products |", error);
      return error;
    }
  },
  cart_detail: async (self, data) => {
    try {
      const request = await self.dispatch('request', {
        url: '/cache/cart',
        method: 'post',
        data
      });
      const cart = request.data;

      if (cart && cart.status && cart.results) {
        if (cart.results.type === 'single-order') {
          if (cart.results.items.length) {
            const list_cart = cart.results.items.map(el => {
              const search_product = self.state.products.filter(prod => prod.id === el.items[0].id);

              if (search_product.length) {
                search_product[0].select_date = true;
                search_product[0].qty = el.items[0].qty;
                return search_product[0];
              }
            });
            const cleaned_cart = list_cart.filter(el => typeof el == 'object');
            self.dispatch('setState', {
              payload: {
                key: 'cart',
                data: cleaned_cart
              }
            });
          }

          self.dispatch('setState', {
            payload: {
              key: 'notes',
              data: cart.results.notes
            }
          });
        }

        if (cart.results.type === 'rp-order') {
          if (cart.results.items.length) {
            const list_dates = cart.results.items.map(el => {
              const list_items = el.items.map(item => {
                const search_product = self.state.products.filter(prod => {
                  if (prod.id === item.id) {
                    return prod;
                  }
                });
                const _item = {
                  SKU: search_product[0].SKU,
                  detail_id: search_product[0].detail[0].detail_id,
                  discount_price: search_product[0].detail[0].discount_price,
                  id: search_product[0].id,
                  main_image: search_product[0].detail[0].main_image,
                  name: search_product[0].name,
                  normal_price: search_product[0].detail[0].normal_price,
                  product_id: search_product[0].id,
                  qty: item.qty,
                  select_date: true,
                  variant: search_product[0].detail[0].variant
                };
                return _item;
              });
              const merge_items = self.state.products.map(el => {
                const find_selected = list_items.filter(s_el => s_el.id == el.id);
                if (find_selected.length) return find_selected[0];
                const _item = {
                  SKU: el.SKU,
                  detail_id: el.detail[0].detail_id,
                  discount_price: el.detail[0].discount_price,
                  id: el.id,
                  main_image: el.detail[0].main_image,
                  name: el.name,
                  normal_price: el.detail[0].normal_price,
                  product_id: el.id,
                  qty: 0,
                  select_date: false,
                  variant: el.detail[0].variant
                };
                return _item;
              });
              return {
                date: el.delivery_date,
                delivery_time: el.delivery_time,
                items: merge_items
              };
            });
            self.dispatch('setState', {
              payload: {
                key: 'dates',
                data: list_dates
              }
            });
            self.dispatch('setState', {
              payload: {
                key: 'rp_order',
                data: true
              }
            });
          }

          self.dispatch('setState', {
            payload: {
              key: 'notes',
              data: cart.results.notes
            }
          });
        }
      }

      return request.data;
    } catch (error) {
      console.error("@cart_detail |", error);
    }
  },
  manage_cart: async (self, data) => {
    try {
      const request = await self.dispatch('request', {
        url: '/cache/manage/cart',
        method: 'post',
        data
      });

      if ('status' in request) {
        return request;
      } else {
        return {
          status: 404,
          data: {
            status: false
          }
        };
      }
    } catch (error) {
      console.error("@manage_cart |", error);
    }
  },
  cart_manager: async (self, data) => {
    try {
      const request = await self.$store.dispatch("request", {
        url: "/cart",
        method: "post",
        data
      });

      if (request.status === 200 && request.data) {
        self.$store.dispatch("setState", {
          payload: {
            key: "order_type",
            data: request.data.type || "single-order"
          }
        });
        const order_type = self.$store.state.order_type;

        if (order_type === "single-order") {
          self.$store.dispatch("setState", {
            payload: {
              key: "cart",
              data: request.data.items
            }
          });
        } else if (order_type === "subscription-order") {
          self.$store.dispatch("setState", {
            payload: {
              key: "subscription_cart",
              data: request.data.items
            }
          });
        } else if (order_type === "package-order") {
          self.$store.dispatch("setState", {
            payload: {
              key: "package_cart",
              data: request.data.items
            }
          });
        }

        return request.data;
      }
    } catch (error) {
      console.error("@cart_manager |", error);
      return null;
    }
  }
});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("64ee5ea6", content, true, context)
};

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductCategory_vue_vue_type_style_index_0_id_641bc70b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductCategory_vue_vue_type_style_index_0_id_641bc70b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductCategory_vue_vue_type_style_index_0_id_641bc70b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductCategory_vue_vue_type_style_index_0_id_641bc70b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProductCategory_vue_vue_type_style_index_0_id_641bc70b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html[data-v-641bc70b]{scrollbar-width:thin!important}html[data-v-641bc70b],html .b-main-page[data-v-641bc70b]{scrollbar-width:0;overflow:hidden}html[data-v-641bc70b] ::-webkit-scrollbar{display:none}html .basket-background-shadow[data-v-641bc70b]{box-shadow:0 -1px 17px 19px #fff!important}html #b-snackbar>div[data-v-641bc70b]{width:inherit}html .b-font[data-v-641bc70b]{font-family:Poppins,sans-serif}html .lined[data-v-641bc70b]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}html .lz-load[data-v-641bc70b]{width:100%;height:100%}html .lz-load[data-v-641bc70b],html .lz-stripe[data-v-641bc70b]{border:none;background-color:#babbbc}html .lz-stripe[data-v-641bc70b]{height:20%}html .small-stripe[data-v-641bc70b]{width:40%}html .medium-stripe[data-v-641bc70b]{width:70%}html .long-stripe[data-v-641bc70b]{width:100%}html .lz-load[data-v-641bc70b],html .lz-stripe[data-v-641bc70b]{animation:hintloading-data-v-641bc70b 1.5s ease-in-out 0s infinite reverse;-webkit-animation:hintloading-data-v-641bc70b 1.5s ease-in-out 0s infinite reverse}@keyframes hintloading-data-v-641bc70b{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@-webkit-keyframes hintloading-data-v-641bc70b{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}html .v-toolbar__content[data-v-641bc70b],html .v-toolbar__extension[data-v-641bc70b]{padding:4px 10px 4px 0}html .v-date-picker-title__date[data-v-641bc70b]{overflow:hidden;position:relative;text-align:center;font-size:17px;font-weight:500;padding-bottom:8px;margin-bottom:-8px}html .v-date-picker-title__date div[data-v-641bc70b],html .v-date-picker-title__date div.picker-reverse-transition-enter-leave-active[data-v-641bc70b],html .v-date-picker-title__date div.picker-reverse-transition-leave-active[data-v-641bc70b],html .v-date-picker-title__date div.picker-transition-enter-leave-active[data-v-641bc70b],html .v-date-picker-title__date div.picker-transition-leave-active[data-v-641bc70b]{width:100%;text-align:center!important}html .v-date-picker-title__date div.date-picker-header-value-transition[data-v-641bc70b]{text-align:center!important}html .v-date-picker-title__year[data-v-641bc70b],html div.v-date-picker-header.theme--light>button[data-v-641bc70b]:first-child,html div.v-date-picker-header.theme--light>button[data-v-641bc70b]:nth-child(3){display:none}html #b-rp-date-items div>hr[data-v-641bc70b]{background-color:transparent!important;display:none!important;color:transparent!important}html #b-checkbox-subs-product>div[data-v-641bc70b]{margin-top:0;padding-top:0}html .pulse-button[data-v-641bc70b]{position:relative;border:none;box-shadow:0 0 0 0 rgba(255,221,0,.7);background-size:cover;background-repeat:no-repeat;cursor:pointer;-webkit-animation:pulse-data-v-641bc70b 1.25s cubic-bezier(.66,0,0,1) infinite;animation:pulse-data-v-641bc70b 1.25s cubic-bezier(.66,0,0,1) infinite}html .pulse-button[data-v-641bc70b]:hover{-webkit-animation:none;animation:none}@-webkit-keyframes pulse-data-v-641bc70b{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}@keyframes pulse-data-v-641bc70b{to{box-shadow:0 0 0 20px rgba(232,76,61,0)}}html #scrolling-techniques-7>div>footer[data-v-641bc70b]{background-color:transparent!important}#b-list-products #desktop .image[data-v-641bc70b]{border-radius:3px 2px 0 0}#b-list-products #desktop .image .promo-badge[data-v-641bc70b]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #desktop .name[data-v-641bc70b]{font-size:14px;font-weight:500;max-width:165px;display:inline-block;min-width:80px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}#b-list-products #desktop .discount-price[data-v-641bc70b]{font-size:12px;font-weight:600}#b-list-products #desktop .discount-price .lined[data-v-641bc70b]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #desktop .normal-price[data-v-641bc70b]{font-size:12px;font-weight:600}#b-list-products #desktop .show-detail[data-v-641bc70b]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #desktop .add-to-cart[data-v-641bc70b],#b-list-products #desktop .show-detail[data-v-641bc70b]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #desktop .product-mdi-icon[data-v-641bc70b]{font-size:12px!important}#b-list-products #desktop .select-variant[data-v-641bc70b]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #desktop .empty-image[data-v-641bc70b]{border-radius:5px;width:200px;height:200px}#b-list-products #desktop .empty-info[data-v-641bc70b]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-list-products #mini .image[data-v-641bc70b]{border-radius:3px 2px 0 0}#b-list-products #mini .image .promo-badge[data-v-641bc70b]{padding:2px 5px;background-color:#1565c0;color:#fff;font-size:10px;font-weight:600;max-width:40%;text-align:center;border-radius:0 0 3px;box-shadow:2px 2px 2px 0 rgba(0,0,0,.25)}#b-list-products #mini .name[data-v-641bc70b]{display:inline-block;min-width:130px;max-width:130px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;font-weight:500}#b-list-products #mini .discount-price[data-v-641bc70b]{font-size:12px;font-weight:600}#b-list-products #mini .discount-price .lined[data-v-641bc70b]{font-size:8px;color:#a9a9a9!important;-webkit-text-decoration-line:line-through!important;text-decoration-line:line-through!important}#b-list-products #mini .normal-price[data-v-641bc70b]{font-size:12px;font-weight:600}#b-list-products #mini .show-detail[data-v-641bc70b]{border:1px solid #ccc;color:#3f3f3f}#b-list-products #mini .add-to-cart[data-v-641bc70b],#b-list-products #mini .show-detail[data-v-641bc70b]{text-transform:none;font-size:11px;letter-spacing:normal;width:48%}#b-list-products #mini .product-mdi-icon[data-v-641bc70b]{font-size:12px!important}#b-list-products #mini .select-variant[data-v-641bc70b]{text-transform:none;font-size:11px;letter-spacing:normal;width:100%}#b-list-products #mini .empty-image[data-v-641bc70b]{border-radius:5px;width:200px;height:200px}#b-list-products #mini .empty-info[data-v-641bc70b]{font-weight:600;background-color:#fd0;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#b-products-detail #desktop .name[data-v-641bc70b],#b-products-detail #desktop .price[data-v-641bc70b]{font-weight:600}#b-products-detail #desktop .variant[data-v-641bc70b]{min-width:50%;max-width:50%}#b-products-detail #desktop .variant .label[data-v-641bc70b]{font-size:11px}#b-products-detail #desktop .qty[data-v-641bc70b]{min-width:50%;max-width:50%}#b-products-detail #desktop .qty .label[data-v-641bc70b]{font-size:11px}#b-products-detail #desktop .size[data-v-641bc70b]{font-size:16px;font-weight:600}#b-products-detail #desktop .description .label[data-v-641bc70b]{font-size:13px;font-weight:600}#b-products-detail #desktop .description .detail[data-v-641bc70b]{font-size:12px}#b-products-detail #desktop .action .content .continue-shop[data-v-641bc70b]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #desktop .action .content .add-to-cart[data-v-641bc70b],#b-products-detail #desktop .action .content .continue-shop[data-v-641bc70b]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}#b-products-detail #mobile .name[data-v-641bc70b],#b-products-detail #mobile .price[data-v-641bc70b]{font-weight:600}#b-products-detail #mobile .variant[data-v-641bc70b]{min-width:50%;max-width:50%}#b-products-detail #mobile .variant .label[data-v-641bc70b]{font-size:11px}#b-products-detail #mobile .qty[data-v-641bc70b]{min-width:50%;max-width:50%}#b-products-detail #mobile .qty .label[data-v-641bc70b]{font-size:11px}#b-products-detail #mobile .size[data-v-641bc70b]{font-size:16px;font-weight:600}#b-products-detail #mobile .description .label[data-v-641bc70b]{font-size:13px;font-weight:600}#b-products-detail #mobile .description .detail[data-v-641bc70b]{font-size:12px}#b-products-detail #mobile .action .content .continue-shop[data-v-641bc70b]{color:#000!important;border:1px solid #ccc!important}#b-products-detail #mobile .action .content .add-to-cart[data-v-641bc70b],#b-products-detail #mobile .action .content .continue-shop[data-v-641bc70b]{text-transform:capitalize;letter-spacing:normal;min-width:49.5%;width:49.5%;height:45}body[data-v-641bc70b],button[data-v-641bc70b],button>span[data-v-641bc70b],p[data-v-641bc70b]{font-family:Poppins,sans-serif!important}p[data-v-641bc70b]{margin-top:0;margin-bottom:0}.text-red[data-v-641bc70b]{color:#c00}.font-light[data-v-641bc70b]{font-weight:300}.pl[data-v-641bc70b]{padding-left:16px}.pr[data-v-641bc70b],.px[data-v-641bc70b]{padding-right:16px}.px[data-v-641bc70b]{padding-left:16px}.py[data-v-641bc70b]{padding-top:16px;padding-bottom:16px}p[data-v-641bc70b]{font-size:12px}b[data-v-641bc70b]{font-weight:600}.title[data-v-641bc70b],p.title[data-v-641bc70b]{font-size:14px!important;font-weight:600!important;line-height:unset!important}.title[data-v-641bc70b],.v-menu__content[data-v-641bc70b],p.title[data-v-641bc70b]{font-family:Poppins,sans-serif!important}p.title-blue[data-v-641bc70b]{font-size:14px;font-weight:600;color:#206aec;margin-bottom:16px;margin-top:5px}p.prodtitle[data-v-641bc70b]{font-size:12px;font-weight:600;line-height:16px}.bt-primary[data-v-641bc70b]{background-color:#fd0;text-transform:capitalize!important;border-radius:100px;font-size:12px;letter-spacing:0}.border-bottom[data-v-641bc70b]{border-bottom:1px solid #e8e8e8}p.desc[data-v-641bc70b]{font-weight:300;font-size:12px}.btn-lg[data-v-641bc70b]{height:40px!important;font-size:14px!important;font-weight:700!important;border-radius:100px;text-transform:capitalize}a[data-v-641bc70b]{text-decoration:none}.pointer[data-v-641bc70b]{cursor:pointer}.list-product-category[data-v-641bc70b]{padding:10px 0;margin-bottom:60px}.list-product-category .wrap-prod[data-v-641bc70b]{padding-top:10px;padding-bottom:10px;display:flex;justify-content:space-between}.list-product-category .wrap-prod .leftcon .name[data-v-641bc70b]{height:40px;text-overflow:ellipsis}.list-product-category .wrap-prod .leftcon .wrapdesc[data-v-641bc70b]{overflow:hidden;height:65px}.list-product-category .wrap-prod .leftcon .wrapdesc .desc[data-v-641bc70b]{text-overflow:ellipsis!important}.list-product-category .wrap-prod .rightcon[data-v-641bc70b]{width:100px;margin-left:10px}.list-product-category .wrap-prod .rightcon img[data-v-641bc70b]{width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;aspect-ratio:1/1;border-radius:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ListProductCategory.vue?vue&type=template&id=641bc70b&scoped=true&


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-product-category"},[_vm._ssrNode("<small data-v-641bc70b></small> "),_vm._l((_vm.dataWithCategory),function(item,i){return (_vm.dataWithCategory.length > 0)?_vm._ssrNode("<div data-v-641bc70b>","</div>",[_vm._ssrNode("<p class=\"title-blue px\" data-v-641bc70b>"+_vm._ssrEscape(_vm._s(item.category))+"</p> "),_vm._l((item.data),function(val,j){return _vm._ssrNode("<div class=\"border-bottom\" data-v-641bc70b>","</div>",[_vm._ssrNode("<div class=\"wrap-prod px\" data-v-641bc70b>","</div>",[_vm._ssrNode("<div class=\"leftcon\" data-v-641bc70b><p class=\"prodtitle name pointer\" data-v-641bc70b>"+_vm._ssrEscape(_vm._s(val.name))+"</p> <div class=\"wrapdesc\" data-v-641bc70b><p class=\"desc\" data-v-641bc70b>\n                            Bakmi Ayam Oven dengan Sambal Matah + Jeruk Limau dan lain lain oke mantap\n                        </p></div> <p class=\"prodtitle price\" data-v-641bc70b>"+_vm._ssrEscape(_vm._s(_vm.handleRupiahFormat(val.normal_price)))+"</p></div> "),_vm._ssrNode("<div class=\"rightcon\" data-v-641bc70b>","</div>",[_vm._ssrNode("<div class=\"wrapimg\" data-v-641bc70b>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",val.main_image))+" alt class=\"pointer mb-1\" data-v-641bc70b> "),_c(VBtn["a" /* default */],{staticClass:"bt-primary",attrs:{"depressed":"","block":"","color":"#fd0"},on:{"click":function($event){return _vm.add_to_cart(val.id, val.variant[0].id, val.SKU, 1)}}},[_vm._v("\n                            Tambah\n                        ")])],2)])],2)])})],2):_vm._e()})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ListProductCategory.vue?vue&type=template&id=641bc70b&scoped=true&

// EXTERNAL MODULE: ./middleware/helper.js
var helper = __webpack_require__(66);

// EXTERNAL MODULE: ./components/general.js
var general = __webpack_require__(141);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ListProductCategory.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var ListProductCategoryvue_type_script_lang_js_ = ({
  // props: ["handleAdd", "list_product"],
  data() {
    return {
      dataWithCategory: []
    };
  },

  computed: {
    list_product() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    site() {
      return this.$store.state.site;
    },

    products() {
      return this.$store.state.products;
    } // recomendation_items() {
    //     if (this.products.length && this.$store.state.recomendation_items) {
    //         const items = [];
    //         this.$store.state.recomendation_items.forEach(item => {
    //             const filtered_product = this.products
    //                 .filter(_ => _.name == item.name || _.SKU == item.sku);
    //             if (filtered_product.length) items.push(filtered_product[0]);
    //         });
    //         if (items.length) return items;
    //     }
    //     return null;
    // },


  },

  mounted() {
    if (this.$store.state.products.length !== 0) {
      const originArr = this.$store.state.products;
      const categoryArray = originArr.map(res => res.category);
      let uniqueCategoryArray = [...new Set(categoryArray)];
      const merged = uniqueCategoryArray.map(res => ({
        category: res,
        data: originArr.filter(item => item.category === res)
      })); // console.log(merged);

      return this.dataWithCategory = merged;
    }
  },

  methods: {
    handleDetailLink(item) {
      this.$router.push(`/site/${this.site.store}/${item.id}?u=${this.$route.query.u}&src=${this.$route.query.src}&c=${this.$route.query.c}`);
    },

    handleRupiahFormat(val) {
      return Object(helper["rupiahFormat"])(val);
    },

    async add_to_cart(id, detail_id, sku, qty) {
      if (this.order_type === 'single-order') {
        await this.add_single_order(id, detail_id, sku, qty);
      } else if (this.order_type === 'subscription-order') {
        this.target_subs_date = {
          id,
          detail_id,
          sku,
          qty
        };
        this.sheet = true;
      }
    },

    async add_single_order(id, detail_id, sku, qty) {
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: true
        }
      });
      await general["a" /* default */].cart_manager(this, {
        method: 'add',
        info: {
          mode: 'single-order',
          item: {
            id,
            detail_id,
            sku,
            qty
          },
          store: {
            name: this.site.store,
            source: this.site.source,
            uuid: this.site.uuid,
            outlet: this.site.category
          }
        }
      });
      this.$store.dispatch('setState', {
        payload: {
          key: 'loading',
          data: false
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/product/ListProductCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ListProductCategoryvue_type_script_lang_js_ = (ListProductCategoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/product/ListProductCategory.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(350)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ListProductCategoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "641bc70b",
  "5e9eec21"
  
)

/* harmony default export */ var ListProductCategory = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-list-product-category.js.map