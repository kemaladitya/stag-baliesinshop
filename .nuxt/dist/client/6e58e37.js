(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{435:function(t,e,n){"use strict";n.r(e);var l={props:{lists:{type:Array,required:!0},changeqty:{type:Function,required:!0}}},r=n(53),c=n(54),d=n.n(c),o=n(146),h=n(302),v=n(89),m=n(200),w=n(310),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.lists,(function(e,l){return n("v-card",{key:l,staticClass:"d-flex flex-row mb-1",attrs:{outlined:""}},[n("div",{staticClass:"ma-2 mt-4"},[n("v-img",{attrs:{src:e.main_image,width:"65",height:"65"}})],1),t._v(" "),n("div",{staticClass:"pa-3 pl-1",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"max-width":"150px",display:"inline-block","min-width":"100%","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis","font-size":"13px"}},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticStyle:{"font-size":"12px","max-width":"150px",display:"inline-block","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n        "+t._s(e.detail_id.name)+"\n      ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n        Rp "+t._s(e.discount_price?e.discount_price.toLocaleString().replace(/,/g,"."):e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"d-flex flex-row pl-1 pr-2",staticStyle:{"align-self":"center"}},[n("div",[n("v-btn",{staticStyle:{padding:"0","border-color":"#4caf50 !important"},attrs:{color:"success","max-width":"26",width:"26","min-width":"26","max-height":"26",height:"26","min-height":"26",depressed:"",outlined:"",rounded:"",small:"",text:"",disabled:!e.qty},on:{click:function(e){return t.changeqty(!1,l)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-minus")])],1)],1),t._v(" "),n("v-card",{staticClass:"pt-1 text-center",staticStyle:{"font-size":"14px"},attrs:{"min-width":"30",flat:""}},[t._v("\n        "+t._s(e.qty)+"\n      ")]),t._v(" "),n("div",[n("v-btn",{staticStyle:{padding:"0","border-color":"#4caf50 !important"},attrs:{color:"success","max-width":"26",width:"26","min-width":"26","max-height":"26",height:"26","min-height":"26",depressed:"",outlined:"",rounded:"",small:"",text:""},on:{click:function(e){return t.changeqty(!0,l)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:o.a,VCard:h.a,VIcon:v.a,VImg:m.a,VSpacer:w.a})}}]);