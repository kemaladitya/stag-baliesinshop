exports.ids = [24];
exports.modules = {

/***/ 493:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mobile/type/package-order/type/single.vue?vue&type=template&id=7acc476f&






var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(VCard["a" /* default */],{staticClass:"pa-3 mb-3",attrs:{"outlined":""}},[_vm._l((_vm.parsed_lists.product),function(item,index){return _c(VCard["a" /* default */],{key:index,staticClass:"ml-0 mr-0 mb-2",attrs:{"outlined":""}},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row",attrs:{"flat":"","width":"100%"}},[_c(VCard["a" /* default */],{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c(VImg["a" /* default */],{attrs:{"src":item.main_image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n          "+_vm._s(item.name)+"\n        ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n          "+_vm._s(item.detail_id.name)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n            "+_vm._s(item.qty)+" x\n          ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n            Rp "+_vm._s(item.discount_price
                .toLocaleString()
                .replace(/,/g, '.'))+", -\n          ")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"},style:(item.discount_price ? 'text-decoration: line-through; color: #999; font-size: 8px' : null)},[_vm._v("\n            Rp "+_vm._s(item.normal_price
                .toLocaleString()
                .replace(/,/g, '.'))+", -\n          ")])])])],1)],1)}),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row mt-1 pt-1"},[_c('div',{staticClass:"d-flex flex-row"},[_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600","padding-top":"5px"}},[_vm._v("\n        Tipe Paket:\n      ")]),_vm._v(" "),_c('div',{staticClass:"ml-1",staticStyle:{"font-size":"13px","font-weight":"600","text-transform":"capitalize","padding-top":"5px"}},[_vm._v("\n        "+_vm._s(_vm.parsed_lists.type)+"\n      ")])]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{staticStyle:{"text-transform":"capitalize"},attrs:{"color":"red","small":"","outlined":"","depressed":"","dense":""},on:{"click":function($event){return _vm.remove(_vm.idx)}}},[_c(VIcon["a" /* default */],{staticClass:"mr-1",attrs:{"color":"red","small":""}},[_vm._v("mdi-close-circle-outline")]),_vm._v("\n      Hapus paket\n    ")],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/single.vue?vue&type=template&id=7acc476f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mobile/type/package-order/type/single.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var singlevue_type_script_lang_js_ = ({
  props: {
    remove: {
      type: Function,
      required: true
    },
    idx: {
      type: Number,
      required: true
    }
  },
  computed: {
    list_product() {
      return this.$store.state.products;
    },

    package_cart() {
      return this.$store.state.package_cart;
    },

    parsed_lists() {
      let type = this.package_cart[0].type;
      let total = 0;
      const product = [];
      this.package_cart[0].items.forEach(el => {
        const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

        if (find.length) {
          product.push({
            id: find[0].id,
            sku: find[0].SKU,
            detail_id: find[0].variant[0],
            main_image: find[0].main_image,
            name: find[0].name,
            normal_price: find[0].normal_price,
            discount_price: find[0].discount_price,
            is_promo: find[0].is_promo,
            qty: el.qty
          });
          total += (find[0].discount_price || find[0].normal_price) * el.qty;
        }
      });
      return {
        type,
        product,
        total
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/single.vue?vue&type=script&lang=js&
 /* harmony default export */ var type_singlevue_type_script_lang_js_ = (singlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/single.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  type_singlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9ae3b032"
  
)

/* harmony default export */ var single = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-screen-mobile-type-package-order-type-single.js.map