exports.ids = [33];
exports.modules = {

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mini/constants/order-type/package-order.vue?vue&type=template&id=24448d59&



var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.package_cart),function(order,idx){return _c(VCard["a" /* default */],{key:idx,attrs:{"flat":""}},[(order.type === 'parcel')?_c(VCard["a" /* default */],{staticClass:"mt-2",attrs:{"flat":"","outlined":""}},[_c('div',{staticClass:"d-flex flex-row pa-2 pb-0"},[_c('div',{staticClass:"d-flex flex-row"},[_c(VImg["a" /* default */],{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px","height":"18px","width":"18px","src":"https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","font-size":"13px","text-transform":"capitalize"}},[_vm._v("\n            "+_vm._s(order.type)+"\n          ")])],1)]),_vm._v(" "),_vm._l((_vm.item_parser(order.items).product),function(item,index){return _c('div',{key:index,staticClass:"pa-2"},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row",attrs:{"width":"100%","flat":"","outlined":""}},[_c(VCard["a" /* default */],{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c(VImg["a" /* default */],{attrs:{"src":item.main_image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.detail_id.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n                "+_vm._s(item.qty)+" x\n              ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"},style:(item.discount_price ? 'text-decoration: line-through; color: #999' : null)},[_vm._v("\n                Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])])])],1)],1)})],2):_vm._e(),_vm._v(" "),(order.type === 'box')?_c(VCard["a" /* default */],{staticClass:"mt-2",attrs:{"flat":"","outlined":""}},[_c('div',{staticClass:"d-flex flex-row pa-2 pb-0"},[_c('div',{staticClass:"d-flex flex-row"},[_c(VImg["a" /* default */],{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px","height":"18px","width":"18px","src":"https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","font-size":"13px","text-transform":"capitalize"}},[_vm._v("\n            "+_vm._s(order.type)+"\n          ")])],1)]),_vm._v(" "),_vm._l((_vm.item_parser(order.items).product),function(item,index){return _c('div',{key:index,staticClass:"pa-2"},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row",attrs:{"width":"100%","flat":"","outlined":""}},[_c(VCard["a" /* default */],{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c(VImg["a" /* default */],{attrs:{"src":item.main_image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.detail_id.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n                "+_vm._s(item.qty)+" x\n              ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"},style:(item.discount_price ? 'text-decoration: line-through; color: #999' : null)},[_vm._v("\n                Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])])])],1)],1)})],2):_vm._e()],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/order-type/package-order.vue?vue&type=template&id=24448d59&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/screen/mini/constants/order-type/package-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var package_ordervue_type_script_lang_js_ = ({
  computed: {
    package_cart() {
      return this.$store.state.package_cart;
    },

    list_product() {
      return this.$store.state.products;
    }

  },
  methods: {
    item_parser(items) {
      let total = 0;
      const product = [];
      items.forEach(el => {
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
        product,
        total
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/order-type/package-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_package_ordervue_type_script_lang_js_ = (package_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Checkout/screen/mini/constants/order-type/package-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_package_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "707f2f9d"
  
)

/* harmony default export */ var package_order = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout-screen-mini-constants-order-type-package-order.js.map