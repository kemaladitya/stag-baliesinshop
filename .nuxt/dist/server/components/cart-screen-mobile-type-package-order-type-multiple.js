exports.ids = [23];
exports.modules = {

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mobile/type/package-order/type/multiple.vue?vue&type=template&id=4715bac8&







var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.customized_values && _vm.expansion.length == _vm.customized_values.length)?_c('transition',{attrs:{"name":"fade","mode":"out-in","appear":""}},[_c(VCard["a" /* default */],{staticClass:"pa-1",attrs:{"flat":"","tile":""}},_vm._l((_vm.customized_values),function(item,idx){return _c(VCard["a" /* default */],{key:idx,staticClass:"mb-2 pa-2",staticStyle:{"text-align":"left"},attrs:{"outlined":""}},[_c('div',{staticClass:"d-flex flex-row"},[_c('div',{staticStyle:{"text-transform":"capitalize","font-size":"12px","color":"grey"},style:(item.type == 'box' ? 'margin-right: 20px' : null)},[_c('div',{staticClass:"d-flex flex-row mt-2"},[(item.type == 'box')?_c('center',{staticStyle:{"width":"25px"}},[_c(VImg["a" /* default */],{staticClass:"mr-2",attrs:{"max-width":"15px","min-width":"15px","max-height":"18px","min-height":"18px","height":"18px","width":"15px","src":"https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"}})],1):_vm._e(),_vm._v(" "),(item.type == 'parcel')?_c('center',{staticStyle:{"width":"25px"}},[_c(VImg["a" /* default */],{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px","height":"18px","width":"18px","src":"https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600"}},[_vm._v(_vm._s(item.type))])],1)]),_vm._v(" "),_c('div',{staticClass:"ml-12",staticStyle:{"text-transform":"capitalize","font-size":"14px","color":"grey","padding-top":"8px","text-align":"left","width":"60%"}},[_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"12px","color":"grey","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.total.toLocaleString().replace(/,/g, '.'))+", -\n              ")])]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c('div',{staticStyle:{"padding":"4px 0 4px 4px"}},[_c(VBtn["a" /* default */],{attrs:{"icon":"","depressed":"","dense":"","small":"","ripple":false},on:{"click":function($event){_vm.expansion[idx].show = !_vm.expansion[idx].show}}},[(_vm.expansion.length)?_c(VIcon["a" /* default */],[_vm._v("\n                "+_vm._s(_vm.expansion[idx].show ? 'mdi-chevron-up' : 'mdi-chevron-down')+"\n              ")]):_vm._e()],1)],1)],1),_vm._v(" "),_c(transitions["a" /* VExpandTransition */],[(_vm.expansion.length)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expansion[idx].show),expression:"expansion[idx].show"}]},[_vm._l((item.items),function(detail_item,index){return _c(VCard["a" /* default */],{key:index,staticClass:"mt-2 ml-0 mr-0",attrs:{"outlined":""}},[_c(VCard["a" /* default */],{staticClass:"d-flex flex-row",attrs:{"flat":"","width":"100%"}},[_c(VCard["a" /* default */],{staticClass:"ma-2 ml-0",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c(VImg["a" /* default */],{attrs:{"src":detail_item.image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"150px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n                    "+_vm._s(detail_item.name)+"\n                  ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"150px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n                    "+_vm._s(detail_item.variant)+"\n                  ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n                      "+_vm._s(detail_item.qty)+" x\n                    ")]),_vm._v(" "),(detail_item.discount_price)?_c('div',[_c('div',{staticStyle:{"font-size":"13px","font-weight":"600","text-decoration":"line-through","color":"#999"}},[_vm._v("\n                        Rp "+_vm._s(detail_item.normal_price
                            .toLocaleString()
                            .replace(/,/g, '.'))+", -\n                      ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                        Rp\n                        "+_vm._s(detail_item.discount_price
                            .toLocaleString()
                            .replace(/,/g, '.'))+", -\n                      ")])]):_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                      Rp "+_vm._s(detail_item.normal_price
                          .toLocaleString()
                          .replace(/,/g, '.'))+", -\n                    ")])])])],1)],1)}),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row mt-1 pt-1"},[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{staticStyle:{"text-transform":"capitalize"},attrs:{"color":"red","small":"","text":"","depressed":"","dense":""},on:{"click":function($event){return _vm.remove(idx)}}},[_c(VIcon["a" /* default */],{staticClass:"mr-1",attrs:{"color":"red","small":""}},[_vm._v("mdi-close-circle-outline")]),_vm._v("\n                Hapus paket\n              ")],1)],1)],2):_vm._e()])],1)}),1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/multiple.vue?vue&type=template&id=4715bac8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cart/screen/mobile/type/package-order/type/multiple.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var multiplevue_type_script_lang_js_ = ({
  props: {
    remove: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    rm_dialog: false,
    target_rm: null,
    list_items: [],
    expansion: []
  }),
  computed: {
    customized_values() {
      return this.$store.state.customized_values;
    },

    cart() {
      return this.$store.state.cart;
    }

  },
  watch: {
    customized_values(newval, oldval) {
      const self = this;

      if (newval) {
        // const paylaod = {
        //   store_name: this.site.store,
        //   source    : this.site.source,
        //   method    : "set",
        //   uuid      : this.site.uuid,
        //   detail    : {
        //     type : "pkg-order",
        //     items: [
        //       {
        //         delivery_date: this.min_rp,
        //         delivery_time: this.delivery_time_normal,
        //         items: newval
        //       }
        //     ]
        //   }
        // }
        // API.manage_cart(self.$store, paylaod)
        this.expansion = newval.map(el => ({
          show: false
        }));
      }
    }

  },

  mounted() {
    if (!this.cart.length) {
      this.$router.go(-1);
    } else {
      this.cart.forEach(el => {
        this.list_items.push({
          id: el.id,
          name: el.name,
          SKU: el.SKU,
          qty: 0,
          image: el.detail[0].main_image,
          variant: el.detail[0].variant,
          normal_price: el.detail[0].normal_price,
          discount_price: el.detail[0].discount_price
        });
        this.expansion.push({
          show: false
        });
      });
    }
  }

});
// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/multiple.vue?vue&type=script&lang=js&
 /* harmony default export */ var type_multiplevue_type_script_lang_js_ = (multiplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Cart/screen/mobile/type/package-order/type/multiple.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  type_multiplevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bada42da"
  
)

/* harmony default export */ var multiple = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-screen-mobile-type-package-order-type-multiple.js.map