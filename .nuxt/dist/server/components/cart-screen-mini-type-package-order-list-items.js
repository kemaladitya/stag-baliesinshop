exports.ids = [12];
exports.modules = {

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mini/type/package-order/list-items.vue?vue&type=template&id=1d46fe08&





var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.lists),function(item,index){return _c(VCard["a" /* default */],{key:index,staticClass:"d-flex flex-row mb-1",attrs:{"outlined":""}},[_c('div',{staticClass:"pa-3 pl-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"max-width":"130px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-size":"13px"}},[_vm._v("\n        "+_vm._s(item.name)+"\n      ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"12px","max-width":"130px","display":"inline-block","min-width":"130px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n        "+_vm._s(item.detail_id.name)+"\n      ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n        Rp "+_vm._s(item.discount_price
            ? item.discount_price.toLocaleString().replace(/,/g, '.')
            : item.normal_price.toLocaleString().replace(/,/g, '.'))+", -\n      ")])]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row pl-1 pr-2",staticStyle:{"align-self":"center"}},[_c('div',[_c(VBtn["a" /* default */],{staticStyle:{"padding":"0","border-color":"#4caf50 !important"},attrs:{"color":"success","max-width":"26","width":"26","min-width":"26","max-height":"26","height":"26","min-height":"26","depressed":"","outlined":"","rounded":"","small":"","text":"","disabled":!item.qty},on:{"click":function($event){return _vm.changeqty(false, index)}}},[_c(VIcon["a" /* default */],{attrs:{"small":""}},[_vm._v("mdi-minus")])],1)],1),_vm._v(" "),_c(VCard["a" /* default */],{staticClass:"pt-1 text-center",staticStyle:{"font-size":"14px"},attrs:{"min-width":"30","flat":""}},[_vm._v("\n        "+_vm._s(item.qty)+"\n      ")]),_vm._v(" "),_c('div',[_c(VBtn["a" /* default */],{staticStyle:{"padding":"0","border-color":"#4caf50 !important"},attrs:{"color":"success","max-width":"26","width":"26","min-width":"26","max-height":"26","height":"26","min-height":"26","depressed":"","outlined":"","rounded":"","small":"","text":""},on:{"click":function($event){return _vm.changeqty(true, index)}}},[_c(VIcon["a" /* default */],{attrs:{"small":""}},[_vm._v("mdi-plus")])],1)],1)],1)],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cart/screen/mini/type/package-order/list-items.vue?vue&type=template&id=1d46fe08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mini/type/package-order/list-items.vue?vue&type=script&lang=js&
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
/* harmony default export */ var list_itemsvue_type_script_lang_js_ = ({
  props: {
    lists: {
      type: Array,
      required: true
    },
    changeqty: {
      type: Function,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cart/screen/mini/type/package-order/list-items.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_order_list_itemsvue_type_script_lang_js_ = (list_itemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Cart/screen/mini/type/package-order/list-items.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  package_order_list_itemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c3315ee8"
  
)

/* harmony default export */ var list_items = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-screen-mini-type-package-order-list-items.js.map