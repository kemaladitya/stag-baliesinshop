exports.ids = [52];
exports.modules = {

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/checkout/Platforms/mini/constants/order-type/subscription-order.vue?vue&type=template&id=2bb4e932&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.voucher.loading)?_c('v-expand-transition',[(_vm.list_cart.length)?_c('v-card',{staticClass:"pt-2",attrs:{"height":"100%","flat":"","tile":""}},_vm._l((_vm.list_cart),function(item,index){return _c('div',{key:index,staticClass:"mb-2",staticStyle:{"border":"1px solid #e0e0e0","border-radius":"5px"}},[_c('div',[_c('div',{staticClass:"d-flex flex-row pa-2"},[_c('div',{staticClass:"pt-2 pl-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                "+_vm._s(_vm.date_parser(item.date))+"\n              ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('div',{staticClass:"pr-1",staticStyle:{"font-size":"13px","font-weight":"600","color":"#2196f3"}},[_c('div',{staticStyle:{"font-size":"13px","font-weight":"600","color":"#2196f3","text-align":"right"}},[_c('v-spacer'),_vm._v("\n                  Rp "+_vm._s(_vm.item_parser(item.items).total
                      ? _vm.item_parser(item.items).total.toLocaleString().replace(/,/g, '.')
                      : _vm.item_parser(item.items).total)+"\n                ")],1),_vm._v(" "),_c('div',{staticStyle:{"font-size":"9px","font-weight":"600","padding-top":"2px","font-style":"italic"},style:(_vm.item_parser(item.items).total < _vm.store.min_order || _vm.item_parser(item.items).total > _vm.store.max_order ?
                      'color: rgb(255 111 111);'
                      : 'color: rgb(222 222 222)')},[_vm._v("\n                  min. "+_vm._s(_vm.store.min_order / 1000)+"k - max. "+_vm._s(_vm.store.max_order / 1000)+"k\n                ")])]),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","depressed":"","dense":"","small":"","ripple":false},on:{"click":function($event){return _vm.expand_detail(index)}}},[(_vm.expansion.length)?_c('v-icon',[_vm._v("\n                  "+_vm._s(_vm.expansion[index].show
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down')+"\n                ")]):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"pa-3"},[_c('v-card',{staticClass:"d-flex flex-row mb-2",attrs:{"flat":""}},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"flat":""}},[_c('v-card',{staticStyle:{"font-size":"12px","font-weight":"600"},attrs:{"flat":""}},[_vm._v("\n                    Waktu Pengantaran :\n                  ")]),_vm._v(" "),_c('v-card',{staticClass:"ml-2",staticStyle:{"color":"grey","font-size":"10px","font-weight":"500","padding-top":"2px"},attrs:{"flat":""}},[_vm._v("\n                    jam 08:00 - 17:00\n                  ")])],1),_vm._v(" "),_c('v-spacer')],1)],1)]),_vm._v(" "),_c('v-expand-transition',[(_vm.expansion.length)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expansion[index].show),expression:"expansion[index].show"}],staticClass:"pa-2 pb-0",staticStyle:{"border-top":"1px solid #eaeaea"}},_vm._l((_vm.item_parser(item.items).product),function(cart_item,idx){return _c('div',{key:idx,staticClass:"mb-2"},[_c('v-card',{staticClass:"d-flex flex-row pr-1",attrs:{"outlined":""}},[_c('v-card',{staticClass:"ma-2 mt-3",attrs:{"width":"50","height":"50","outlined":""}},[_c('v-img',{attrs:{"src":cart_item.main_image,"loading":"lazy"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2 pt-3",staticStyle:{"width":"100%","text-align":"left"}},[_c('div',{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n                      "+_vm._s(cart_item.name)+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","color":"grey"}},[_vm._v("\n                      "+_vm._s(cart_item.detail_id.name)+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row"},[_c('div',{staticStyle:{"font-size":"11px","font-weight":"600"}},[_vm._v("\n                        "+_vm._s(cart_item.qty)+" x Rp \n                      ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"font-size":"11px","font-weight":"600"}},[(cart_item.is_promo)?_c('div',[_vm._v("\n                          "+_vm._s(cart_item.discount_price
                              .toLocaleString()
                              .replace(/,/g, '.'))+", - \n                        ")]):_vm._e(),_vm._v(" "),_c('div',{style:(cart_item.is_promo
                              ? 'color: darkgrey !important; text-decoration-line: line-through !important;'
                              : null)},[_vm._v("\n                          "+_vm._s(cart_item.normal_price
                              .toLocaleString()
                              .replace(/,/g, '.'))+", - \n                        ")]),_vm._v(" "),(!cart_item.is_promo)?_c('div',[_vm._v(" ")]):_vm._e()])])])],1)],1)}),0):_vm._e()])],1)}),0):_vm._e()],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/checkout/Platforms/mini/constants/order-type/subscription-order.vue?vue&type=template&id=2bb4e932&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/checkout/Platforms/mini/constants/order-type/subscription-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./components/checkout/Platforms/mini/constants/order-type/subscription-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_type_subscription_ordervue_type_script_lang_js_ = (subscription_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(111);

// CONCATENATED MODULE: ./components/checkout/Platforms/mini/constants/order-type/subscription-order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_type_subscription_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e6f9600"
  
)

/* harmony default export */ var subscription_order = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VExpandTransition: transitions["a" /* VExpandTransition */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=checkout-platforms-mini-constants-order-type-subscription-order.js.map