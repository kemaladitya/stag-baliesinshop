(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{596:function(t,e,n){"use strict";n.r(e);n(45),n(9),n(19);var r={props:{changehandler:{type:Function,required:!0},selectatsubs:{type:Function,required:!0},selectedsubsdate:{type:String,required:!0},selecteddate:{type:Array,required:!0},products:{type:Boolean,required:!0}},data:function(){return{catalog:[]}},watch:{products:function(t,e){this.merge_items()}},mounted:function(){this.merge_items()},methods:{merge_items:function(){var t=this,e=this.$store.state.products.map((function(e){var n=t.selecteddate.filter((function(t){return t.qty>0&&e.id==t.id}));return n.length?n[0]:{SKU:e.SKU,detail_id:e.detail[0].detail_id,discount_price:e.detail[0].discount_price,id:e.id,main_image:e.detail[0].main_image,name:e.name,normal_price:e.detail[0].normal_price,product_id:e.id,qty:e.qty,select_date:!1,variant:e.detail[0].variant}}));this.catalog=e}}},c=n(53),l=n(54),d=n.n(l),o=n(146),v=n(302),f=n(419),h=n(319),_=n(89),m=n(200),w=n(75),x=n(310),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticStyle:{"text-align":"left"}},[n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"pa-2",staticStyle:{"align-self":"center","font-size":"13px","font-weight":"600"}},[t._v("\n      Pilih Produk\n      "),n("div",{staticStyle:{"font-size":"11px",color:"grey"}},[t._v("\n        "+t._s(t.selectedsubsdate)+"\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mt-2",attrs:{icon:"",text:"",color:"red"},on:{click:function(e){return t.changehandler("products",!1)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{"overflow-y":"scroll","max-height":"70vh"}},t._l(t.catalog,(function(e,r){return n("div",{key:r},[n("v-card",{staticClass:"d-flex flex-row mb-2 pr-1",attrs:{outlined:""}},[n("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",width:"100%"}},[n("v-card",{staticClass:"ma-2 mt-3",attrs:{flat:""}},[n("v-img",{attrs:{src:e.main_image,width:"45",height:"45"}})],1),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{width:"100%"}},[n("div",{staticStyle:{"font-size":"12px","max-width":"350px","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),n("div",{staticStyle:{"font-size":"12px","max-width":"350px","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis",color:"grey"}},[t._v("\n              "+t._s(e.variant)+"\n            ")]),t._v(" "),n("div",{staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n              Rp\n              "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n            ")])]),t._v(" "),n("div",{staticClass:"d-flex flex-row pl-1 pr-1",staticStyle:{"align-self":"center"},attrs:{id:"b-checkbox-subs-product"}},[n("v-checkbox",{attrs:{color:"primary","hide-details":"",dense:""},on:{change:function(e){return t.selectatsubs(r,e)}},model:{value:e.select_date,callback:function(n){t.$set(e,"select_date",n)},expression:"product.select_date"}})],1)],1)],1)],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:o.a,VCard:v.a,VCheckbox:f.a,VDivider:h.a,VIcon:_.a,VImg:m.a,VSheet:w.a,VSpacer:x.a})}}]);