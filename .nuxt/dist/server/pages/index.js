exports.ids = [90];
exports.modules = {

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=359a60ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pa-3 pt-12",staticStyle:{"overflow-y":"scroll !important","max-height":"100vh"}},[_c('center',{staticClass:"mb-8",staticStyle:{"margin-top":"20vh"}},[_c('v-img',{attrs:{"src":"https://faq.balesin.id/icon.ico","width":"210"}}),_vm._v(" "),_c('div',{staticClass:"mt-6",staticStyle:{"font-weight":"600"}},[_vm._v("\n      balesin - Shop\n    ")]),_vm._v(" "),_c('div',{staticClass:"mt-6",staticStyle:{"font-weight":"600"}},[_vm._v("\n      Silakan chat ke nomor WhatsApp store untuk membuka katalog produk.\n    ")])],1),_vm._ssrNode(" "),_c('v-card',{attrs:{"height":"5vh","flat":""}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=359a60ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'empty',
  data: () => ({
    uuid: '',
    bot_name: 'sarirotiwa'
  }),
  watch: {
    uuid(newval, oldval) {
      if (newval[0] == '0') {
        this.uuid = `62${newval.slice(1)}`;
      }
    }

  },
  computed: {
    active_btn() {
      return this.uuid.length == 0;
    }

  },
  methods: {
    async find_user() {
      const {
        uuid,
        bot_name
      } = this;
      const find_user = await this.$store.dispatch('request', {
        url: '/api/balesin/user',
        method: 'post',
        data: {
          uuid,
          bot_name
        }
      });

      if (find_user.data.status) {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=${find_user.data.source}&c=${find_user.data.category}`);
      } else {
        this.$router.replace(`/site/${bot_name}?u=${uuid}&src=web-url&c=all`);
      }
    },

    async reg_user() {
      const {
        uuid,
        bot_name
      } = this;
      const find_user = await this.$store.dispatch('request', {
        url: '/api/balesin/user',
        method: 'post',
        data: {
          uuid,
          bot_name
        }
      });
      this.$router.replace(`/site/${bot_name}/userprofile?u=${uuid}&src=${find_user.data.source}&mtd=reg`);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(58);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "353993a8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map