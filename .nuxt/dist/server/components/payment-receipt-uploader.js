exports.ids = [70,68];
exports.modules = {

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/payment-receipt/svg.vue?vue&type=template&id=d2a6c5e0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"30px\" height=\"50px\" viewBox=\"0 0 60 200\" preserveAspectRatio=\"xMidYMid\""+(_vm._ssrClass(null,_vm.pclass))+(_vm._ssrStyle(null,_vm.style, null))+"><rect x=\"17.5\" y=\"30\" width=\"15\" height=\"40\" fill=\"#eab145\"><animate attributeName=\"y\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"18;30;30\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.2s\"></animate> <animate attributeName=\"height\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"64;40;40\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.2s\"></animate></rect> <rect x=\"42.5\" y=\"30\" width=\"15\" height=\"40\" fill=\"#fad96d\"><animate attributeName=\"y\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"20.999999999999996;30;30\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.1s\"></animate> <animate attributeName=\"height\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"58.00000000000001;40;40\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\" begin=\"-0.1s\"></animate></rect> <rect x=\"67.5\" y=\"30\" width=\"15\" height=\"40\" fill=\"#959795\"><animate attributeName=\"y\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"20.999999999999996;30;30\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\"></animate> <animate attributeName=\"height\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keyTimes=\"0;0.5;1\" values=\"58.00000000000001;40;40\" keySplines=\"0 0.5 0.5 1;0 0.5 0.5 1\"></animate></rect></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/payment-receipt/svg.vue?vue&type=template&id=d2a6c5e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/payment-receipt/svg.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var svgvue_type_script_lang_js_ = ({
  props: {
    pclass: String,
    style: String
  }
});
// CONCATENATED MODULE: ./components/payment-receipt/svg.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_receipt_svgvue_type_script_lang_js_ = (svgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./components/payment-receipt/svg.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  payment_receipt_svgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d8d6e5c"
  
)

/* harmony default export */ var svg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/payment-receipt/uploader.vue?vue&type=template&id=53839544&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-4"},[_vm._ssrNode("<div class=\"form--label\">\n    UPLOAD BUKTI PEMBAYARAN\n    <span class=\"form--required\">*</span></div> "),_vm._ssrNode("<div class=\"d-flex flex-row mt-1\">","</div>",[_c('v-card',{staticClass:"d-flex flex-row",attrs:{"disabled":_vm.loading || _vm.uploading,"max-height":"40","height":"40","width":"100%","outlined":""},on:{"click":_vm.open_image}},[_c('input',{ref:"file",staticClass:"image-loader",attrs:{"name":"file","type":"file","accept":"image/png, image/jpeg"},on:{"change":_vm.readfile}}),_vm._v(" "),(_vm.uploading)?_c('div',{staticClass:"image--value pa-2 pt-0 pl-3 pr-3 d-flex flex-row"},[_c('div',{staticClass:"svg-wrapper mr-1"},[_c('svg-loading',{attrs:{"pclass":"svg-field","pstyle":""}})],1),_vm._v(" "),_c('div',{staticClass:"text-uploading"},[_vm._v("UPLOADING YOUR IMAGE")])]):_c('div',{staticClass:"image--value pa-2 pl-3 pr-3"},[_vm._v("\n        "+_vm._s(_vm.uploaded ? _vm.image : "Gunakan Format file .jpg, .jpeg atau .png")+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"image--choose-file"},[_c('center',{staticClass:"choose-label"},[_vm._v("PILIH FILE")])],1)]),_vm._ssrNode(" "),(_vm.uploaded)?_c('v-card',{staticClass:"ml-2",attrs:{"color":"#d6f2fd","flat":""},on:{"click":_vm.show_image}},[_c('div',{staticClass:"image--preview"},[_c('center',{staticClass:"preview-label"},[_vm._v("LIHAT")])],1)]):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form--details d-flex flex-row mt-1\">","</div>",[_c('v-icon',{staticClass:"mr-1",attrs:{"color":_vm.uploaded ? 'success' : 'white',"size":"16"}},[_vm._v("mdi-check-circle")]),_vm._ssrNode(" <div class=\"image-uploaded\""+(_vm._ssrStyle(null,_vm.uploaded ? null : 'color: white', null))+">IMAGE UPLOADED</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/payment-receipt/uploader.vue?vue&type=template&id=53839544&

// EXTERNAL MODULE: ./components/payment-receipt/svg.vue + 4 modules
var svg = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/payment-receipt/uploader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var uploadervue_type_script_lang_js_ = ({
  components: {
    "svg-loading": svg["default"]
  },
  props: {
    loading: Boolean,
    uploaded: Boolean,
    uploading: Boolean,
    image: String,
    show_image: Function,
    event_handler: Function
  },
  watch: {
    image(_, __) {
      if (_.includes("base64")) this.upload_image();
    }

  },
  methods: {
    async upload_image() {
      this.event_handler("uploading", true);
      const request = await this.$axios({
        url: "https://faq.balesin.id/api/custom/upload",
        method: "POST",
        headers: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImVtYWlsIjoib3ZpY2tic0BnbWFpbC5jb20iLCJpYXQiOjE2MTU2NzMyNzgyNTQsImV4cCI6MTYxNTY3MzI3ODI1NH0.8PurR7sFzqS3lr5STmdhhMqqrFxCn7X5Vgl0_Qh2wpI"
        },
        data: {
          file_name: "payment-receipt-" + this.$route.query.orderid,
          file: this.image
        }
      });

      if ("status" in request.data && request.data.status) {
        this.event_handler("image", request.data.response);
        this.event_handler("uploading", false);
        this.event_handler("uploaded", true);
      }
    },

    open_image() {
      this.$refs.file.click();
    },

    readfile(e) {
      console.log("readfile");
      const reader = new FileReader();

      reader.onloadend = e => {
        this.event_handler("image", e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }

  }
});
// CONCATENATED MODULE: ./components/payment-receipt/uploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_receipt_uploadervue_type_script_lang_js_ = (uploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(23);

// CONCATENATED MODULE: ./components/payment-receipt/uploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  payment_receipt_uploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "501e75f0"
  
)

/* harmony default export */ var uploader = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=payment-receipt-uploader.js.map