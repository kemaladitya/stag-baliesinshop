exports.ids = [76];
exports.modules = {

/***/ 268:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-catalog/screen/mobile/show-type/list.vue?vue&type=template&id=7aea13ba&






var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-1",style:('margin-bottom: ' + (_vm.$device.isAndroid ? '40vw !important' : '300px !important'))},_vm._l((_vm.search_result),function(item,index){return _c(VCard["a" /* default */],{key:index,staticClass:"mb-2",staticStyle:{"border-radius":"8px"},attrs:{"outlined":""}},[_c('div',{staticClass:"d-flex flex-row pa-2"},[_c(VImg["a" /* default */],{staticClass:"image",staticStyle:{"text-align":"left","border":"1px solid lightgrey","border-radius":"8px"},attrs:{"src":item.main_image,"min-width":"90","max-width":"90","min-height":"90","max-height":"90","loading":"lazy"}}),_vm._v(" "),_c('div',{staticClass:"pl-2",staticStyle:{"width":"100%","text-align":"left"}},[_c('div',{staticStyle:{"font-size":"14px","font-weight":"500"}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('div',[(item.is_promo || item.discount_price)?_c('div',{staticClass:"d-flex flex-row discount-price"},[_c('div',{staticStyle:{"font-size":"12px","font-weight":"600"}},[_vm._v("\n              Rp "+_vm._s(item.discount_price
                  .toLocaleString()
                  .replace(/,/g, '.'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"ml-1",staticStyle:{"align-self":"flex-end","font-size":"8px","color":"darkgrey !important","text-decoration-line":"line-through !important","padding-bottom":"2px","font-weight":"600"}},[_vm._v("\n              Rp "+_vm._s(item.normal_price
                  .toLocaleString()
                  .replace(/,/g, '.'))+"\n            ")])]):_c('div',{staticClass:"discount-price",staticStyle:{"font-size":"12px","font-weight":"600"}},[_vm._v("\n            Rp "+_vm._s(item.normal_price
                .toLocaleString()
                .replace(/,/g, '.'))+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"mr-1 mt-1"},[(item.is_promo)?_c('div',{staticStyle:{"background":"#002BBC","color":"white","font-size":"8px","width":"fit-content","min-height":"12px","align-self":"center","font-weight":"600","line-height":"1","padding":"4px 6px 3px 6px","border-radius":"1px"}},[_vm._v("\n            Promo\n          ")]):_c('div',{staticStyle:{"font-size":"8px","width":"fit-content","min-height":"12px !important","align-self":"center","font-weight":"600","line-height":"1","padding":"2px","border-radius":"1px"}},[_vm._v(" ")])]),_vm._v(" "),_c('div',{staticStyle:{"min-height":"29px"}},[(item.express_delivery && item.express_delivery_setup && _vm.is_available_express)?_c('div',[_c('div',{staticStyle:{"color":"#388E3C","font-weight":"600","font-size":"10px","align-self":"center"}},[_c(VIcon["a" /* default */],{staticStyle:{"top":"-1px"},attrs:{"color":"#388E3C","small":""}},[_vm._v("mdi-clock-fast")]),_vm._v("\n              "+_vm._s(item.express_delivery_setup.name)+"\n            ")],1),_vm._v(" "),_c('div',{staticStyle:{"color":"red","font-size":"8px"}},[_vm._v(_vm._s(item.express_delivery_setup.caption))])]):_vm._e()])])],1),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row pa-2 pt-0",staticStyle:{"padding-top":"1px","justify-content":"flex-end","width":"100%"}},[(item.variant.length === 1)?_c('div',{staticClass:"d-flex flex-row b-product-action",staticStyle:{"width":"100%"}},[_c(VBtn["a" /* default */],{staticClass:"show-detail mr-1",staticStyle:{"font-size":"11px","height":"25px","border":"1px solid lightgrey","border-radius":"5px"},attrs:{"depressed":"","dense":"","text":"","x-small":"","width":"calc(50% - 5px)"},on:{"click":_vm.showdetail}},[_c(VIcon["a" /* default */],{staticClass:"product-mdi-icon",staticStyle:{"top":"-1px"},attrs:{"small":""}},[_vm._v("mdi-eye")]),_vm._v("  Lihat\n        ")],1),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"add-to-cart",staticStyle:{"color":"black","border":"1px solid #cccccc !important","font-size":"11px","border-radius":"5px","height":"25px"},attrs:{"color":"#fffbbb","depressed":"","dense":"","x-small":"","width":"calc(50% - 5px)"},on:{"click":function($event){return _vm.add_to_cart(item.id, item.variant[0].id, item.SKU, 1)}}},[_c(VIcon["a" /* default */],{staticClass:"product-mdi-icon",staticStyle:{"top":"-1px"},attrs:{"small":""}},[_vm._v("mdi-basket-plus")]),_vm._v("  Tambah\n        ")],1)],1):(item.variant.length > 1)?_c('div',{staticClass:"d-flex flex-row pt-3",attrs:{"outlined":""}},[_c(VBtn["a" /* default */],{staticClass:"select-variant",staticStyle:{"color":"black","border":"1px solid #cccccc !important","font-size":"9px","border-radius":"5px"},attrs:{"color":"#FD0","depressed":"","dense":"","x-small":""},on:{"click":_vm.showdetail}},[_c(VIcon["a" /* default */],{staticClass:"product-mdi-icon",attrs:{"x-small":""}},[_vm._v("mdi-checkbox-multiple-marked-outline")]),_vm._v("\n           Pilih Variant\n        ")],1)],1):_vm._e()])])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product-catalog/screen/mobile/show-type/list.vue?vue&type=template&id=7aea13ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-catalog/screen/mobile/show-type/list.vue?vue&type=script&lang=js&
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
/* harmony default export */ var listvue_type_script_lang_js_ = ({
  props: {
    search_result: Array,
    add_to_cart: Function,
    showdetail: Function
  },
  computed: {
    site() {
      return this.$store.state.site;
    },

    is_available_express() {
      return this.$store.state.is_available_express;
    },

    store() {
      return this.$store.state.store;
    }

  }
});
// CONCATENATED MODULE: ./components/product-catalog/screen/mobile/show-type/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var show_type_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/product-catalog/screen/mobile/show-type/list.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  show_type_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39b5d97a"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-catalog-screen-mobile-show-type-list.js.map