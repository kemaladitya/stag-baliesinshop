exports.ids = [40,41,42,43];
exports.modules = {

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue?vue&type=template&id=3007a92c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.voucher.loading)?_c('v-expand-transition',[(_vm.list_cart.length)?_c('v-card',{staticClass:"pt-2",attrs:{"height":"100%","flat":"","tile":""}},_vm._l((_vm.list_cart),function(item,index){return _c('div',{key:index,staticClass:"mb-2",staticStyle:{"border":"1px solid #e0e0e0","border-radius":"5px"}},[_c('div',[_c('div',{staticClass:"d-flex flex-row pa-2"},[_c('div',{staticClass:"pt-2 pl-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                "+_vm._s(_vm.date_parser(item.date))+"\n              ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('div',{staticClass:"pr-1",staticStyle:{"font-size":"13px","font-weight":"600","color":"#2196f3"}},[_c('div',{staticStyle:{"font-size":"13px","font-weight":"600","color":"#2196f3","text-align":"right"}},[_c('v-spacer'),_vm._v("\n                  Rp "+_vm._s(_vm.item_parser(item.items).total
                      ? _vm.item_parser(item.items).total.toLocaleString().replace(/,/g, '.')
                      : _vm.item_parser(item.items).total)+"\n                ")],1),_vm._v(" "),_c('div',{staticStyle:{"font-size":"9px","font-weight":"600","padding-top":"2px","font-style":"italic"},style:(_vm.item_parser(item.items).total < _vm.store.min_order || _vm.item_parser(item.items).total > _vm.store.max_order ?
                      'color: rgb(255 111 111);'
                      : 'color: rgb(222 222 222)')},[_vm._v("\n                  min. "+_vm._s(_vm.store.min_order / 1000)+"k - max. "+_vm._s(_vm.store.max_order / 1000)+"k\n                ")])]),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","depressed":"","dense":"","small":"","ripple":false},on:{"click":function($event){return _vm.expand_detail(index)}}},[(_vm.expansion.length)?_c('v-icon',[_vm._v("\n                  "+_vm._s(_vm.expansion[index].show
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down')+"\n                ")]):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"pa-3"},[_c('v-card',{staticClass:"d-flex flex-row mb-2",attrs:{"flat":""}},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"flat":""}},[_c('v-card',{staticStyle:{"font-size":"12px","font-weight":"600"},attrs:{"flat":""}},[_vm._v("\n                    Waktu Pengantaran :\n                  ")]),_vm._v(" "),_c('v-card',{staticClass:"ml-2",staticStyle:{"color":"grey","font-size":"10px","font-weight":"500","padding-top":"2px"},attrs:{"flat":""}},[_vm._v("\n                    jam 08:00 - 17:00\n                  ")])],1),_vm._v(" "),_c('v-spacer')],1)],1)]),_vm._v(" "),_c('v-expand-transition',[(_vm.expansion.length)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expansion[index].show),expression:"expansion[index].show"}],staticClass:"pa-2 pb-0",staticStyle:{"border-top":"1px solid #eaeaea"}},_vm._l((_vm.item_parser(item.items).product),function(cart_item,idx){return _c('div',{key:idx,staticClass:"mb-2"},[_c('v-card',{staticClass:"d-flex flex-row pr-1",attrs:{"outlined":""}},[_c('v-card',{staticClass:"ma-2 mt-3",attrs:{"width":"50","height":"50","outlined":""}},[_c('v-img',{attrs:{"src":cart_item.main_image,"loading":"lazy"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2 pt-3",staticStyle:{"width":"100%","text-align":"left"}},[_c('div',{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n                      "+_vm._s(cart_item.name)+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","color":"grey"}},[_vm._v("\n                      "+_vm._s(cart_item.detail_id.name)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row"},[_c('div',{staticStyle:{"font-size":"11px","font-weight":"600"}},[_vm._v("\n                        "+_vm._s(cart_item.qty)+" x Rp \n                      ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"11px","font-weight":"600"}},[(cart_item.is_promo)?_c('div',{staticClass:"mr-2"},[_vm._v("\n                          "+_vm._s(cart_item.discount_price
                              .toLocaleString()
                              .replace(/,/g, '.'))+", - \n                        ")]):_vm._e(),_vm._v(" "),_c('div',{style:(cart_item.is_promo
                              ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                              : null)},[_vm._v("\n                          "+_vm._s(cart_item.normal_price
                              .toLocaleString()
                              .replace(/,/g, '.'))+", - \n                        ")]),_vm._v(" "),(!cart_item.is_promo)?_c('div',[_vm._v(" ")]):_vm._e()])])])],1)],1)}),0):_vm._e()])],1)}),0):_vm._e()],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue?vue&type=template&id=3007a92c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var subscription_ordervue_type_script_lang_js_ = ({
  props: {
    voucher: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    expansion: [],
    list_cart: []
  }),
  computed: {
    site() {
      return this.$store.state.site;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    store() {
      return this.$store.state.store;
    },

    list_product() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },

    subscription_cart() {
      return this.$store.state.subscription_cart;
    },

    list_date_at_cart() {
      return this.list_cart.map(el => el.date);
    },

    parsed_lists() {
      const product = [];
      this.cart.forEach(el => {
        const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

        if (find.length) {
          product.push({
            main_image: find[0].main_image,
            name: find[0].name,
            normal_price: find[0].normal_price,
            discount_price: find[0].discount_price
          });
        }
      });
      return product;
    },

    list_update_products() {
      if (this.target_date) {
        const target_list = this.list_cart.filter(el => el.date === this.target_date);
        const lists = this.list_product.map(el => {
          const list_ids = [];
          target_list[0].items.forEach(item => {
            list_ids.push(item.detail_id);
          });

          if (list_ids.includes(el.variant[0].id)) {
            el.selected = true;
          } else {
            el.selected = false;
          }

          return el;
        });
        return lists;
      }
    }

  },

  mounted() {
    this.expansion = this.subscription_cart.map(_ => ({
      show: false
    }));
    this.list_cart = this.subscription_cart;
  },

  methods: {
    expand_detail(index) {
      this.expansion[index].show = !this.expansion[index].show;
    },

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
    },

    date_parser(date) {
      const _ = date.split('-');

      const day = _[2];
      const month = _[1];
      const years = _[0];
      const _month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${day} ${_month[+month]} ${years}`;
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_subscription_ordervue_type_script_lang_js_ = (subscription_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(109);

// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_subscription_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74248be3"
  
)

/* harmony default export */ var subscription_order = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VExpandTransition: transitions["a" /* VExpandTransition */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue?vue&type=template&id=df14c78a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-3"},[(_vm.cart.length)?_vm._ssrNode("<div>","</div>",_vm._l((_vm.parsed_lists.product),function(item,index){return _vm._ssrNode("<div>","</div>",[_c('v-card',{staticClass:"d-flex flex-row mb-2 pr-1",attrs:{"outlined":""}},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"flat":"","width":"100%"}},[_c('v-card',{staticClass:"ma-2",attrs:{"flat":"","outlined":""}},[_c('v-img',{attrs:{"src":item.main_image,"width":"65","height":"65","loading":"lazy"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',[_c('div',{staticStyle:{"font-size":"12px","display":"inline-block","min-width":"150px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n                "+_vm._s(item.name)+"\n              ")])]),_vm._v(" "),_c('div',[_c('div',{staticStyle:{"font-size":"12px","display":"inline-block","min-width":"150px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n                "+_vm._s(item.detail_id.name)+"\n              ")])]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"12px","font-weight":"600"}},[_c('div',[_vm._v(_vm._s(item.qty)+" x  ")]),_vm._v(" "),(item.is_promo)?_c('div',{staticClass:"mr-2"},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{style:(item.is_promo
                    ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                    : null)},[_vm._v("\n                  Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]),_vm._v(" "),(!item.is_promo)?_c('div',[_vm._v(" ")]):_vm._e()])])],1)],1)],1)}),0):_vm._ssrNode("<div>","</div>",[_c('center',{staticStyle:{"margin-top":"30vh","margin-bottom":"30px"}},[_c('div',{staticStyle:{"width":"264px"}},[_c('v-icon',{staticStyle:{"font-size":"120px"},attrs:{"color":"grey lighten-2"}},[_vm._v("mdi-cart-outline")]),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","border-radius":"5px","width":"fit-content","font-size":"13px"}},[_vm._v("\n          Keranjang belanja Anda kosong.\n        ")])],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue?vue&type=template&id=df14c78a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var single_ordervue_type_script_lang_js_ = ({
  computed: {
    site() {
      return this.$store.state.site;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    store() {
      return this.$store.state.store;
    },

    list_product() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },

    parsed_lists() {
      let total = 0;
      const product = [];
      this.cart.forEach(el => {
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
// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_single_ordervue_type_script_lang_js_ = (single_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(57);

// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_single_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6192030e"
  
)

/* harmony default export */ var single_order = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue?vue&type=template&id=091b0806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.package_cart),function(order,idx){return _c('v-card',{key:idx,attrs:{"flat":""}},[(order.type === 'parcel')?_c('v-card',{staticClass:"mt-2",attrs:{"flat":"","outlined":""}},[_c('div',{staticClass:"d-flex flex-row pa-2 pb-0"},[_c('div',{staticClass:"d-flex flex-row"},[_c('v-img',{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px","height":"18px","width":"18px","src":"https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","font-size":"13px","text-transform":"capitalize"}},[_vm._v("\n            "+_vm._s(order.type)+"\n          ")])],1)]),_vm._v(" "),_vm._l((_vm.item_parser(order.items).product),function(item,index){return _c('div',{key:index,staticClass:"pa-2"},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"width":"100%","flat":"","outlined":""}},[_c('v-card',{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c('v-img',{attrs:{"src":item.main_image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.detail_id.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n                "+_vm._s(item.qty)+" x\n              ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"},style:(item.discount_price ? 'text-decoration: line-through; color: #999' : null)},[_vm._v("\n                Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])])])],1)],1)})],2):_vm._e(),_vm._v(" "),(order.type === 'box')?_c('v-card',{staticClass:"mt-2",attrs:{"flat":"","outlined":""}},[_c('div',{staticClass:"d-flex flex-row pa-2 pb-0"},[_c('div',{staticClass:"d-flex flex-row"},[_c('v-img',{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px","height":"18px","width":"18px","src":"https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","font-size":"13px","text-transform":"capitalize"}},[_vm._v("\n            "+_vm._s(order.type)+"\n          ")])],1)]),_vm._v(" "),_vm._l((_vm.item_parser(order.items).product),function(item,index){return _c('div',{key:index,staticClass:"pa-2"},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"width":"100%","flat":"","outlined":""}},[_c('v-card',{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{"flat":""}},[_c('v-img',{attrs:{"src":item.main_image,"width":"70","height":"70"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","max-width":"150px","display":"inline-block","min-width":"100%","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis"}},[_vm._v("\n              "+_vm._s(item.detail_id.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600","color":"black"}},[_vm._v("\n                "+_vm._s(item.qty)+" x\n              ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"},style:(item.discount_price ? 'text-decoration: line-through; color: #999' : null)},[_vm._v("\n                Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])])])],1)],1)})],2):_vm._e()],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue?vue&type=template&id=091b0806&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_package_ordervue_type_script_lang_js_ = (package_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(57);

// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_package_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e3de575c"
  
)

/* harmony default export */ var package_order = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VImg: VImg["a" /* default */]})


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-info.vue?vue&type=template&id=ce8b813e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-1 pt-2 text-left"},[_vm._ssrNode("<div style=\"font-size: 12px\">\n    DETAIL PESANAN &amp; WAKTU PENGANTARAN\n  </div> "),(_vm.order_type === 'subscription-order')?_c('Subscription',{attrs:{"voucher":_vm.voucher}}):_vm._e(),_vm._ssrNode(" "),(_vm.order_type === 'single-order')?_c('Single'):_vm._e(),_vm._ssrNode(" "),(_vm.order_type === 'package-order')?_c('Package'):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pt-2\">","</div>",[_c('v-card',{staticClass:"mt-2 pt-2 pb-2",staticStyle:{"border-top":"1px solid rgba(0, 0, 0, 0.12)","border-bottom":"1px solid rgba(0, 0, 0, 0.12)","font-size":"13px"},attrs:{"flat":"","tile":""}},[_c('div',[_vm._v("Catatan untuk penjual:")]),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"600","color":"dimgray"}},[(_vm.user_notes.length)?_c('div',{staticClass:"pt-2"},[_vm._v(_vm._s(_vm.user_notes))]):_c('div',{staticClass:"pt-2"},[_vm._v("-")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex flex-row mt-3 mb-1 pa-1\">","</div>",[_vm._ssrNode("<div style=\"font-size: 12px\"></div> "),_c('v-spacer'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex flex-row pa-1\">","</div>",[_vm._ssrNode("<div style=\"font-weight: 600\">Subtotal:</div>\n       \n      "),_c('v-spacer'),_vm._ssrNode(" <div style=\"font-weight: 600; color: rgb(25, 118, 210)\">"+_vm._ssrEscape("\n        Rp\n        "+_vm._s(_vm.general_total_order.toLocaleString().replace(/,/g, '.'))+"\n      ")+"</div>")],2)],2),_vm._ssrNode(" <div"+(_vm._ssrStyle({"font-size":"9px","color":"red","text-align":"center"},null, { display: (_vm.store.min_order && _vm.store.max_order) ? '' : 'none' }))+">"+_vm._ssrEscape("\n    "+_vm._s(_vm.validate_total)+"\n  ")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-info.vue?vue&type=template&id=ce8b813e&

// EXTERNAL MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/subscription-order.vue + 4 modules
var subscription_order = __webpack_require__(255);

// EXTERNAL MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/single-order.vue + 4 modules
var single_order = __webpack_require__(256);

// EXTERNAL MODULE: ./components/Checkout/Platforms/desktop/constants/order-type/package-order.vue + 4 modules
var package_order = __webpack_require__(257);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Checkout/Platforms/desktop/constants/order-info.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var order_infovue_type_script_lang_js_ = ({
  props: {
    voucher: {
      type: Object,
      required: true
    }
  },
  components: {
    Subscription: subscription_order["default"],
    Single: single_order["default"],
    Package: package_order["default"]
  },
  computed: {
    store() {
      return this.$store.state.store;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    list_product() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },

    subscription_cart() {
      return this.$store.state.subscription_cart;
    },

    package_cart() {
      return this.$store.state.package_cart;
    },

    parsed_lists() {
      let total = 0;
      const product = [];
      this.cart.forEach(el => {
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
    },

    user_notes() {
      return this.$store.state.user_notes;
    },

    general_total_order() {
      let total = 0;

      if (this.order_type === 'single-order') {
        this.cart.forEach(el => {
          const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

          if (find.length) {
            total += (find[0].discount_price || find[0].normal_price) * el.qty;
          }
        });
      } else if (this.order_type === 'subscription-order') {
        this.subscription_cart.forEach(({
          items
        }) => {
          items.forEach(el => {
            const find = this.list_product.filter(product => product.id === el.id && product.SKU === el.sku);

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * el.qty;
            }
          });
        });
      } else if (this.order_type === 'package-order') {
        this.package_cart.forEach(el => {
          el.items.forEach(item => {
            const find = this.list_product.filter(product => product.id === item.id && product.SKU === item.sku);

            if (find.length) {
              total += (find[0].discount_price || find[0].normal_price) * item.qty;
            }
          });
        });
      }

      return total;
    },

    validate_total() {
      if (this.order_type === 'single-order') {
        if (this.general_total_order < this.store.min_order) {
          return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`;
        }

        if (this.general_total_order > this.store.max_order) {
          return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`;
        }
      } else if (this.order_type === 'subscription-order') {
        let is_valid = 1;
        this.subscription_cart.forEach(el => {
          if (is_valid === 1) {
            let total = 0;
            el.items.forEach(item => {
              const find = this.list_product.filter(product => product.id === item.id && product.SKU === item.sku);
              total += (find[0].discount_price || find[0].normal_price) * item.qty;
            });

            if (total > this.store.max_order) {
              is_valid = 2;
            }

            if (total < this.store.min_order) {
              is_valid = 0;
            }
          }
        });

        if (is_valid === 0) {
          return `Minimum pembelian Rp ${this.store.min_order.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`;
        } else if (is_valid === 2) {
          return `Maksimum pembelian Rp ${this.store.max_order.toLocaleString().replace(/,/g, '.')}.`;
        }

        return '';
      } else if (this.order_type === 'package-order') {
        if (this.store.customize_setup) {
          const order_type = this.package_cart[0].type;
          const find_rules = JSON.parse(this.store.customize_setup).packaging.rules.detail.filter(el => el.type === order_type);

          if (find_rules[0].min > this.general_total_order) {
            return `Minimum pembelian Rp ${find_rules[0].min.toLocaleString().replace(/,/g, '.')} belum tercapai. Silakan tambah lagi pesanan Anda.`;
          } else if (find_rules[0].max < this.general_total_order) {
            return `Maksimum pembelian Rp ${find_rules[0].max.toLocaleString().replace(/,/g, '.')}.`;
          }
        }
      }

      return '';
    }

  }
});
// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-info.vue?vue&type=script&lang=js&
 /* harmony default export */ var constants_order_infovue_type_script_lang_js_ = (order_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(109);

// CONCATENATED MODULE: ./components/Checkout/Platforms/desktop/constants/order-info.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  constants_order_infovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b68e5fe4"
  
)

/* harmony default export */ var order_info = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=checkout-platforms-desktop-constants-order-info.js.map