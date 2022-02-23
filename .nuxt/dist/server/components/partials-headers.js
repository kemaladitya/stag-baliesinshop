exports.ids = [77];
exports.modules = {

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/headers.vue?vue&type=template&id=280a2881&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app-bar',{staticStyle:{"border-bottom":"1px solid #ccc !important","z-index":"9","height":"55px"},attrs:{"absolute":"","color":"white","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[_c('v-app-bar-nav-icon',{staticClass:"ml-2 pa-2",attrs:{"depressed":"","ripple":false,"color":"white"}},[((_vm.$route.name == 'site-store-checkout') || (_vm.$route.name == 'site-store-userprofile' && _vm.store && !_vm.store.registered_mode))?_c('v-btn',{staticClass:"ml-4",staticStyle:{"color":"black !important"},attrs:{"x-small":"","fab":"","text":"","depressed":"","ripple":false,"to":(_vm.$route.name == 'site-store-checkout')
        ? ("/site/" + (_vm.$route.params.store) + "/cart?u=" + (_vm.$route.query.u) + "&mtd=view&src=" + (_vm.$route.query.src) + "&c=" + (_vm.$route.query.c))
        : ("/site/" + (_vm.$route.params.store) + "/checkout?u=" + (_vm.$route.query.u) + "&mtd=view&src=" + (_vm.$route.query.src) + "&c=" + (_vm.$route.query.c))}},[_c('v-icon',{attrs:{"small":""}},[_vm._v("mdi-arrow-left")])],1):_vm._e(),_vm._v(" "),(_vm.store)?_c('v-img',{staticStyle:{"border-radius":"3px"},attrs:{"src":_vm.store.image,"width":"40","height":"40","max-width":"53","max-height":"53","loading":"lazy","to":_vm.home_url}}):_c('v-icon',[_vm._v("mdi-store")])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),((_vm.$route.name == 'site-store') && _vm.store && _vm.store['store_type'] && _vm.merchant)?_c('v-btn',{staticClass:"ml-4",staticStyle:{"color":"black !important"},attrs:{"x-small":"","fab":"","text":"","depressed":"","ripple":false,"to":("/site/" + (_vm.$route.params.store) + "/merchant?market=" + (_vm.merchant.market_id) + "&u=" + (_vm.$route.query.u) + "&mtd=view&src=" + (_vm.$route.query.src) + "&c=" + (_vm.$route.query.c))}},[_c('v-icon',[_vm._v("mdi-home-search")])],1):_vm._e(),_vm._v(" "),(_vm.cart_on_headers)?_c('v-badge',{staticStyle:{"font-size":"10px"},attrs:{"id":"b-shop-cart-badge","top":"-5px","color":"red darken-1","min-width":"16px","height":"16px","bordered":"","overlap":"","icon":_vm.cart_qty_item}},[_c('v-btn',{staticStyle:{"color":"black !important","border":"1px solid #fcfcfc !important"},attrs:{"rounded":"","depressed":"","max-width":"38","min-width":"38","color":"#fcfcfc","ripple":false,"to":_vm.cart_url}},[_c('v-icon',[_vm._v("mdi-cart-outline")])],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/partials/headers.vue?vue&type=template&id=280a2881&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/headers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var headersvue_type_script_lang_js_ = ({
  computed: {
    site() {
      return this.$store.state.site;
    },

    store() {
      return this.$store.state.store;
    },

    order_type() {
      return this.$store.state.order_type;
    },

    merchant() {
      return this.$store.state.merchant;
    },

    cart_on_headers() {
      return this.$route.name === 'site-store-pid' || this.$route.name === 'site-store-checkout';
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

    cart_qty_item() {
      let total_item = 0;

      if (this.order_type === 'single-order') {
        this.cart.forEach(element => {
          total_item += element.qty;
        });
      } else if (this.order_type === 'subscription-order') {
        this.subscription_cart.forEach(el => {
          el.items.forEach(item => {
            total_item += item.qty;
          });
        });
      } else if (this.order_type === 'package-order') {
        this.package_cart.forEach(el => {
          el.items.forEach(item => {
            total_item += item.qty;
          });
        });
      }

      return String(total_item);
    },

    cart_url() {
      const {
        store,
        uuid,
        source,
        category
      } = this.$store.state.site;
      return `/site/${store}/cart?u=${uuid}&mtd=view&src=${source}&c=${category}`;
    },

    home_url() {
      const {
        store,
        uuid,
        source,
        category
      } = this.$store.state.site;
      return `/site/${store}?u=${uuid}&src=${source}&c=${category}`;
    }

  }
});
// CONCATENATED MODULE: ./components/partials/headers.vue?vue&type=script&lang=js&
 /* harmony default export */ var partials_headersvue_type_script_lang_js_ = (headersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 3 modules
var VAppBar = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js + 1 modules
var VBadge = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(111);

// CONCATENATED MODULE: ./components/partials/headers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_headersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b99cfad"
  
)

/* harmony default export */ var headers = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VBadge: VBadge["a" /* default */],VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=partials-headers.js.map