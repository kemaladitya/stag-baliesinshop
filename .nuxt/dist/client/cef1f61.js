(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{457:function(t,e,n){"use strict";n.r(e);var c={props:{search_result:{type:Array,required:!0},add_to_cart:{type:Function,required:!0},showdetail:{type:Function,required:!0}},computed:{site:function(){return this.$store.state.site},store:function(){return this.$store.state.store}}},o=n(53),r=n(54),l=n.n(r),d=n(146),v=n(302),m=n(89),x=n(200),f=n(310),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"pa-1",style:"margin-bottom: "+(t.$device.isAndroid?"40vw !important":"300px !important")},t._l(t.search_result,(function(e,c){return n("v-card",{key:c,staticClass:"mb-2"},[n("div",{staticClass:"d-flex flex-row pa-2"},[n("div",[n("v-img",{staticClass:"image",staticStyle:{"text-align":"left","border-radius":"5px"},attrs:{src:e.main_image,"min-width":"90","max-width":"90","min-height":"90","max-height":"90",loading:"lazy"}})],1),t._v(" "),n("div",{staticClass:"pl-2",staticStyle:{width:"100%","text-align":"left"}},[n("div",{staticStyle:{"font-size":"14px","font-weight":"600"}},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticStyle:{"font-size":"9px","font-weight":"600",color:"#ccc"}},[t._v(t._s(e.variant[0].name))]),t._v(" "),n("div",[e.is_promo||e.discount_price?n("div",{staticClass:"d-flex flex-row discount-price"},[n("div",{staticStyle:{"font-size":"12px"}},[t._v("\n                Rp "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+"\n              ")]),t._v(" "),n("div",{staticClass:"ml-1",staticStyle:{"align-self":"flex-end","font-size":"8px",color:"darkgrey !important","text-decoration-line":"line-through !important","padding-bottom":"2px"}},[t._v("\n                Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+"\n              ")])]):n("div",{staticClass:"discount-price",staticStyle:{"font-size":"12px"}},[t._v("\n              Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+"\n            ")])]),t._v(" "),n("div",{staticClass:"mr-1 mt-1"},[e.is_promo?n("div",{staticStyle:{background:"#002BBC",color:"white","font-size":"8px",width:"fit-content","min-height":"12px","align-self":"center","font-weight":"600","line-height":"1",padding:"2px","border-radius":"1px"}},[t._v("\n              Promo\n            ")]):n("div",{staticStyle:{"font-size":"8px",width:"fit-content","min-height":"12px !important","align-self":"center","font-weight":"600","line-height":"1",padding:"2px","border-radius":"1px"}},[t._v(" ")])]),t._v(" "),n("div",{staticClass:"d-flex flex-row",staticStyle:{"padding-top":"1px","justify-content":"flex-end"}},[1===e.variant.length?n("div",{staticClass:"d-flex flex-row b-product-action"},[n("v-btn",{staticClass:"show-detail mr-1",staticStyle:{"font-size":"9px"},attrs:{depressed:"",dense:"",text:"","x-small":"",width:"80"},on:{click:t.showdetail}},[n("v-icon",{staticClass:"product-mdi-icon",attrs:{"x-small":""}},[t._v("mdi-eye")]),t._v("  Lihat\n              ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"add-to-cart",staticStyle:{color:"black",border:"1px solid #cccccc !important","font-size":"9px"},attrs:{color:"#fffbbb",depressed:"",dense:"","x-small":"",width:"80"},on:{click:function(n){return t.add_to_cart(e.id,e.variant[0].id,e.SKU,1)}}},[n("v-icon",{staticClass:"product-mdi-icon",attrs:{"x-small":""}},[t._v("mdi-basket-plus")]),t._v("  Tambah\n              ")],1)],1):e.variant.length>1?n("div",{staticClass:"d-flex flex-row pt-3",attrs:{outlined:""}},[n("v-btn",{staticClass:"select-variant",staticStyle:{color:"black",border:"1px solid #cccccc !important","font-size":"9px"},attrs:{color:"#FD0",depressed:"",dense:"","x-small":""},on:{click:t.showdetail}},[n("v-icon",{staticClass:"product-mdi-icon",attrs:{"x-small":""}},[t._v("mdi-checkbox-multiple-marked-outline")]),t._v("\n                 Pilih Variant\n              ")],1)],1):t._e()])])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VIcon:m.a,VImg:x.a,VSpacer:f.a})}}]);