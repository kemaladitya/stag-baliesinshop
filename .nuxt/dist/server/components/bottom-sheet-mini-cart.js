exports.ids = [6];
exports.modules = {

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bottom-Sheet/mini-cart.vue?vue&type=template&id=510e3508&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticStyle:{"max-height":"80vh !important","overflow-y":"scroll"},attrs:{"flat":"","tile":""}},[_c('v-card',{staticClass:"ma-1",attrs:{"flat":""}},[_c('div',{staticClass:"pl-2 pt-1 pb-1",staticStyle:{"align-self":"center","font-size":"13px","font-weight":"600","text-align":"left"}},[_vm._v("\n      Detail Keranjang\n    ")]),_vm._v(" "),_c('div',{staticClass:"pb-1",staticStyle:{"overflow-y":"scroll !important","max-height":"200px !important","overflow-x":"hidden !important"}},_vm._l((_vm.parsed_lists.product),function(item,index){return _c('div',{key:index},[_c('v-card',{staticClass:"d-flex flex-row ma-1 mb-2 pr-1",attrs:{"outlined":""}},[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"flat":"","width":"100%"}},[_c('v-card',{staticClass:"ma-2",attrs:{"flat":""}},[_c('v-img',{attrs:{"src":item.main_image,"width":"65","height":"65"}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"font-size":"12px","max-width":"350px","display":"inline-block","min-width":"350px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n                "+_vm._s(item.name)+"\n              ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"11px","max-width":"350px","display":"inline-block","min-width":"350px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","color":"grey"}},[_vm._v("\n                "+_vm._s(item.detail_id.name)+"\n              ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticClass:"d-flex flex-row"},[_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                  "+_vm._s(item.qty)+" x Rp\n                  "+_vm._s(item.discount_price
                      .toLocaleString()
                      .replace(/,/g, '.'))+", -\n                ")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","font-weight":"600","text-decoration":"line-through","color":"#999"}},[_vm._v("\n                  Rp "+_vm._s(item.normal_price
                      .toLocaleString()
                      .replace(/,/g, '.'))+", -\n                ")])]):_c('div',{staticStyle:{"font-size":"13px","font-weight":"600"}},[_vm._v("\n                "+_vm._s(item.qty)+" x Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])])],1)],1)],1)}),0),_vm._v(" "),_c('div',{staticClass:"pa-2 pl-1 pr-1",staticStyle:{"background-color":"white"}},[_c('v-card',{staticClass:"pt-1 pb-1",staticStyle:{"font-size":"13px","font-weight":"600","border":"1.8px solid darkslategrey","border-radius":"3px","color":"darkslategrey","text-align":"center"},attrs:{"outlined":""},on:{"click":_vm.gotocart}},[_vm._v("\n        Lihat Keranjang\n      ")])],1)]),_vm._v(" "),_c('v-card',{attrs:{"height":"5px","flat":"","tile":""}}),_vm._v(" "),_c('v-card',{staticClass:"pa-1 mb-0",attrs:{"color":"transparent"}},[(_vm.recomendation_items)?_c('div',[_c('div',{staticClass:"pa-1",staticStyle:{"font-size":"12px","max-width":"110px","font-weight":"600","text-align":"left","min-width":"100%"}},[_vm._v("\n        Produk yang sering kamu beli\n      ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row",staticStyle:{"overflow-x":"scroll","padding-bottom":"10px"}},_vm._l((_vm.frequent_items),function(item,idx){return _c('v-card',{key:idx,staticClass:"mr-2 mt-1 ml-1",staticStyle:{"text-align":"left"},attrs:{"flat":"","outlined":"","to":("/site/" + (_vm.site.store) + "/" + (item.id) + "?u=" + (_vm.$route.query.u) + "&src=" + (_vm.$route.query.src) + "&c=" + (_vm.$route.query.c))}},[_c('center',{staticStyle:{"width":"126px"}},[_c('v-img',{attrs:{"src":item.main_image}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2"},[_c('div',{staticStyle:{"font-size":"12px","max-width":"110px","display":"inline-block","min-width":"110px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),(item.discount_price)?_c('div',{staticStyle:{"font-size":"12px","font-weight":"600","margin-top":"-5px"}},[_vm._v("\n              Rp "+_vm._s(item.discount_price
                  .toLocaleString()
                  .replace(/,/g, '.'))+", -\n            ")]):_c('div',{staticStyle:{"font-size":"12px","font-weight":"600","margin-top":"-5px"}},[_vm._v("\n              Rp "+_vm._s(item.normal_price
                  .toLocaleString()
                  .replace(/,/g, '.'))+", -\n            ")])])],1)}),1)]):_c('div',[_c('div',{staticClass:"pl-2 pt-1 pb-2",staticStyle:{"align-self":"center","font-size":"13px","font-weight":"600","text-align":"left"}},[_vm._v("\n        Produk lainnya\n      ")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-row ma-1 pb-2 mb-0",staticStyle:{"overflow-x":"scroll","padding-bottom":"10px"}},_vm._l((_vm.list_product),function(item,idx){return _c('v-card',{key:idx,staticClass:"mr-2 mt-1 ml-1",staticStyle:{"text-align":"left"},attrs:{"flat":"","outlined":""},on:{"click":function($event){return _vm.product_detail(item)}}},[_c('center',{staticStyle:{"width":"126px"}},[_c('v-img',{attrs:{"src":item.main_image}})],1),_vm._v(" "),_c('div',{staticClass:"pa-2"},[_c('div',{staticStyle:{"font-size":"12px","max-width":"110px","display":"inline-block","min-width":"110px","white-space":"nowrap","overflow":"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),(item.discount_price)?_c('div',[_c('div',{staticStyle:{"font-size":"12px","font-weight":"600","text-decoration":"line-through","color":"#999"}},[_vm._v("\n                Rp "+_vm._s(item.normal_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")]),_vm._v(" "),_c('div',{staticClass:"mr-2",staticStyle:{"font-size":"12px","font-weight":"600"}},[_vm._v("\n                Rp "+_vm._s(item.discount_price
                    .toLocaleString()
                    .replace(/,/g, '.'))+", -\n              ")])]):_c('div',{staticStyle:{"font-size":"12px","font-weight":"600"}},[_vm._v("\n              Rp "+_vm._s(item.normal_price
                  .toLocaleString()
                  .replace(/,/g, '.'))+", -\n            ")])])],1)}),1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Bottom-Sheet/mini-cart.vue?vue&type=template&id=510e3508&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bottom-Sheet/mini-cart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mini_cartvue_type_script_lang_js_ = ({
  computed: {
    site() {
      return this.$store.state.site;
    },

    list_product() {
      return this.$store.state.products;
    },

    cart() {
      return this.$store.state.cart;
    },

    customer() {
      return this.$store.state.customer;
    },

    store() {
      return this.$store.state.store;
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

    products() {
      return this.$store.state.products;
    },

    recomendation_items() {
      if (this.products.length && this.$store.state.recomendation_items) {
        const items = [];
        this.$store.state.recomendation_items.forEach(item => {
          const filtered_product = this.products.filter(_ => _.name == item.name || _.SKU == item.sku);

          if (filtered_product.length) {
            items.push(filtered_product[0]);
          }

          ;
        });
        if (items.length) return items;
      }

      return null;
    },

    frequent_items() {
      if (this.products.length && this.$store.state.frequent_items) {
        const items = [];
        this.$store.state.frequent_items.forEach(item => {
          const filtered_product = this.products.filter(_ => _.name == item.name || _.SKU == item.sku);

          if (filtered_product.length) {
            items.push(filtered_product[0]);
          }

          ;
        });
        if (items.length) return items;
      }

      return null;
    }

  },
  methods: {
    product_detail(item) {
      console.log('*** product_detail method ***');
      const {
        uuid,
        source,
        category,
        store
      } = this.site;
      this.$store.dispatch('setState', {
        payload: {
          key: 'mini_cart',
          data: false
        }
      });
      this.$router.replace(`/site/${store}/${item.id}?u=${uuid}&src=${source}&c=${category}`);
    },

    gotocart() {
      const {
        store,
        uuid,
        source,
        category
      } = this.$store.state.site;
      this.$router.replace(`/site/${this.$route.params.store}/cart?u=${this.$route.query.u}&mtd=view&src=${this.$route.query.src}&c=${this.$route.query.c}`);
    }

  }
});
// CONCATENATED MODULE: ./components/Bottom-Sheet/mini-cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Bottom_Sheet_mini_cartvue_type_script_lang_js_ = (mini_cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// CONCATENATED MODULE: ./components/Bottom-Sheet/mini-cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Bottom_Sheet_mini_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "df652284"
  
)

/* harmony default export */ var mini_cart = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=bottom-sheet-mini-cart.js.map