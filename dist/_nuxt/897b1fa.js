(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{424:function(t,e,n){"use strict";n.r(e);n(45),n(19);var o={props:{remove:{type:Function,required:!0}},data:function(){return{rm_dialog:!1,target_rm:null,list_items:[],expansion:[]}},computed:{customized_values:function(){return this.$store.state.customized_values},cart:function(){return this.$store.state.cart}},watch:{customized_values:function(t,e){t&&(this.expansion=t.map((function(t){return{show:!1}})))}},mounted:function(){var t=this;this.cart.length?this.cart.forEach((function(e){t.list_items.push({id:e.id,name:e.name,SKU:e.SKU,qty:0,image:e.detail[0].main_image,variant:e.detail[0].variant,normal_price:e.detail[0].normal_price,discount_price:e.detail[0].discount_price}),t.expansion.push({show:!1})})):this.$router.go(-1)}},r=n(53),l=n(54),c=n.n(l),d=n(146),v=n(302),x=n(114),m=n(89),h=n(200),_=n(310),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.customized_values&&t.expansion.length==t.customized_values.length?n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("v-card",{staticClass:"pa-1",attrs:{flat:"",tile:""}},t._l(t.customized_values,(function(e,o){return n("v-card",{key:o,staticClass:"mb-2 pa-2",staticStyle:{"text-align":"left"},attrs:{outlined:""}},[n("div",{staticClass:"d-flex flex-row"},[n("div",{staticStyle:{"text-transform":"capitalize","font-size":"12px",color:"grey"},style:"box"==e.type?"margin-right: 20px":null},[n("div",{staticClass:"d-flex flex-row mt-2"},["box"==e.type?n("center",{staticStyle:{width:"25px"}},[n("v-img",{staticClass:"mr-2",attrs:{"max-width":"15px","min-width":"15px","max-height":"18px","min-height":"18px",height:"18px",width:"15px",src:"https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"}})],1):t._e(),t._v(" "),"parcel"==e.type?n("center",{staticStyle:{width:"25px"}},[n("v-img",{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px",height:"18px",width:"18px",src:"https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"}})],1):t._e(),t._v(" "),n("div",{staticStyle:{"font-weight":"600"}},[t._v(t._s(e.type))])],1)]),t._v(" "),n("div",{staticClass:"ml-12",staticStyle:{"text-transform":"capitalize","font-size":"14px",color:"grey","padding-top":"8px","text-align":"left",width:"60%"}},[n("div",{staticClass:"mr-1",staticStyle:{"font-size":"12px",color:"grey","font-weight":"600"}},[t._v("\n                Rp "+t._s(e.total.toLocaleString().replace(/,/g,"."))+", -\n              ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticStyle:{padding:"4px 0 4px 4px"}},[n("v-btn",{attrs:{icon:"",depressed:"",dense:"",small:"",ripple:!1},on:{click:function(e){t.expansion[o].show=!t.expansion[o].show}}},[t.expansion.length?n("v-icon",[t._v("\n                "+t._s(t.expansion[o].show?"mdi-chevron-up":"mdi-chevron-down")+"\n              ")]):t._e()],1)],1)],1),t._v(" "),n("v-expand-transition",[t.expansion.length?n("div",{directives:[{name:"show",rawName:"v-show",value:t.expansion[o].show,expression:"expansion[idx].show"}]},[t._l(e.items,(function(e,o){return n("v-card",{key:o,staticClass:"mt-2 ml-0 mr-0",attrs:{outlined:""}},[n("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",width:"100%"}},[n("v-card",{staticClass:"ma-2 ml-0",staticStyle:{"padding-top":"2px"},attrs:{flat:""}},[n("v-img",{attrs:{src:e.image,width:"70",height:"70"}})],1),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n                    "+t._s(e.variant)+"\n                  ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[n("div",{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600",color:"black"}},[t._v("\n                      "+t._s(e.qty)+" x\n                    ")]),t._v(" "),e.discount_price?n("div",[n("div",{staticStyle:{"font-size":"13px","font-weight":"600","text-decoration":"line-through",color:"#999"}},[t._v("\n                        Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n                      ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n                        Rp\n                        "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+", -\n                      ")])]):n("div",{staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n                      Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n                    ")])])])],1)],1)})),t._v(" "),n("div",{staticClass:"d-flex flex-row mt-1 pt-1"},[n("v-spacer"),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"red",small:"",text:"",depressed:"",dense:""},on:{click:function(e){return t.remove(o)}}},[n("v-icon",{staticClass:"mr-1",attrs:{color:"red",small:""}},[t._v("mdi-close-circle-outline")]),t._v("\n                Hapus paket\n              ")],1)],1)],2):t._e()])],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VExpandTransition:x.a,VIcon:m.a,VImg:h.a,VSpacer:_.a})}}]);