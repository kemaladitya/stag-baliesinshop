exports.ids = [68];
exports.modules = {

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/cart.vue?vue&type=template&id=4ba42e39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"pa-1 d-flex flex-row",staticStyle:{"width":"100%"},attrs:{"flat":"","tile":"","height":_vm.screen == 'mini' ? 45 : 53}},[_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(!_vm.rp_order),expression:"!rp_order"}],staticStyle:{"text-transform":"capitalize","color":"black !important","border":"1px solid #ccc !important","letter-spacing":"initial"},style:(_vm.screen == 'mini' ? 'font-size: 11px' : null),attrs:{"depressed":"","min-width":"49.5%","max-width":"49.5%","to":_vm.back,"disabled":_vm.rp_order,"height":_vm.screen == 'mini' ? 35 : 45}},[_vm._v("\n    Kembali Belanja\n  ")]),_vm._v(" "),_c('v-card',{directives:[{name:"show",rawName:"v-show",value:(!_vm.rp_order),expression:"!rp_order"}],attrs:{"flat":"","min-width":"1%"}}),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"capitalize","letter-spacing":"initial"},style:(_vm.screen == 'mini' ? 'font-size: 11px' : null),attrs:{"depressed":"","color":"#FD0","min-width":!_vm.rp_order ? '49.5%' : '100%',"max-width":"!rp_order ? '49.5%' : '100%'","height":_vm.screen == 'mini' ? 35 : 45,"disabled":_vm.checkout_btn},on:{"click":_vm.checkout}},[_vm._v("\n    Lanjut Pembayaran\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/cart.vue?vue&type=template&id=4ba42e39&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  props: {
    checkout: {
      type: Function,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    fullpath() {
      return this.$store.state.fullpath;
    },

    rp_order() {
      return this.$store.state.rp_order;
    },

    dates() {
      return this.$store.state.dates;
    },

    store() {
      return this.$store.state.store;
    },

    screen() {
      return this.$store.state.screen;
    },

    back() {
      const site = this.$store.state.site;
      return `/site/${site.store}?u=${site.uuid}&src=${site.source}&c=${site.category}`;
    },

    cart() {
      return this.$store.state.cart;
    },

    delivery_time_normal() {
      return this.$store.state.delivery_time_normal;
    },

    // custom setup
    customized_values() {
      return this.$store.state.customized_values;
    },

    customized_values_total() {
      let total = 0;
      console.log(this.customized_values, ' customized_values_total 3');

      if (this.customized_values) {
        this.customized_values.forEach(el => {
          total += el.total;
        });
      }

      return total;
    },

    // custom setup
    checkout_btn() {
      // custom setup
      if (this.customized_values != null) {
        if (this.customized_values_total >= this.store.min_order) {
          return false;
        } else if (this.customized_values_total <= this.store.min_order) {
          return false;
        }

        return true;
      } // custom setup


      const list_validate = [];
      let status = true;
      let total;

      if (this.rp_order && this.dates.length) {
        this.dates.forEach(el => {
          total = 0;
          el.items.forEach(item => {
            if (item.select_date) {
              if (item.discount_price > 0) {
                total += item.discount_price * item.qty;
              } else {
                total += item.normal_price * item.qty;
              }
            }
          });
          const validator = total >= this.store.min_order && total <= this.store.max_order;
          list_validate.push(validator);
        });
      } else {
        list_validate.push(false);
      }

      if (this.rp_order) {
        const validate_delivery_time = this.dates.filter(el => !el.delivery_time);

        if (validate_delivery_time.length) {
          return true;
        }
      }

      if (this.rp_order && list_validate.indexOf(false) != -1) {
        status = true;
        console.log(total, '  validate price per date 3');
        return status;
      } else {
        if (this.rp_order && this.dates.length) {
          status = false;
        } else if (!this.rp_order && this.cart.length && this.delivery_time_normal) {
          if (+this.total >= this.store.min_order && +this.total <= this.store.max_order) {
            return false;
          } else {
            return true;
          }
        } else {
          status = true;
        }

        return status;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Footer/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(103);

// CONCATENATED MODULE: ./components/Footer/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62f7092a"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=footer-cart.js.map