(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{440:function(t,e,r){"use strict";r.r(e);r(45),r(9),r(19),r(46),r(55);var n={props:{voucher:{type:Object,required:!0}},data:function(){return{expansion:[],list_cart:[]}},computed:{site:function(){return this.$store.state.site},order_type:function(){return this.$store.state.order_type},store:function(){return this.$store.state.store},list_product:function(){return this.$store.state.products},cart:function(){return this.$store.state.cart},subscription_cart:function(){return this.$store.state.subscription_cart},list_date_at_cart:function(){return this.list_cart.map((function(t){return t.date}))},parsed_lists:function(){var t=this,e=[];return this.cart.forEach((function(r){var n=t.list_product.filter((function(t){return t.id===r.id&&t.SKU===r.sku}));n.length&&e.push({main_image:n[0].main_image,name:n[0].name,normal_price:n[0].normal_price,discount_price:n[0].discount_price})})),e},list_update_products:function(){var t=this;if(this.target_date){var e=this.list_cart.filter((function(e){return e.date===t.target_date}));return this.list_product.map((function(t){var r=[];return e[0].items.forEach((function(t){r.push(t.detail_id)})),r.includes(t.variant[0].id)?t.selected=!0:t.selected=!1,t}))}}},mounted:function(){this.expansion=this.subscription_cart.map((function(t){return{show:!1}})),this.list_cart=this.subscription_cart},methods:{expand_detail:function(t){this.expansion[t].show=!this.expansion[t].show},item_parser:function(t){var e=this,r=0,n=[];return t.forEach((function(t){var o=e.list_product.filter((function(e){return e.id===t.id&&e.SKU===t.sku}));o.length&&(n.push({id:o[0].id,sku:o[0].SKU,detail_id:o[0].variant[0],main_image:o[0].main_image,name:o[0].name,normal_price:o[0].normal_price,discount_price:o[0].discount_price,is_promo:o[0].is_promo,qty:t.qty}),r+=(o[0].discount_price||o[0].normal_price)*t.qty)})),{product:n,total:r}},date_parser:function(t){var e=t.split("-"),r=e[2],n=e[1],o=e[0];return"".concat(r," ").concat(["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+n]," ").concat(o)}}},o=r(53),c=r(54),l=r.n(c),d=r(145),_=r(301),v=r(114),f=r(88),m=r(199),h=r(309),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.voucher.loading?t._e():r("v-expand-transition",[t.list_cart.length?r("v-card",{staticClass:"pt-2",attrs:{height:"100%",flat:"",tile:""}},t._l(t.list_cart,(function(e,n){return r("div",{key:n,staticClass:"mb-2",staticStyle:{border:"1px solid #e0e0e0","border-radius":"5px"}},[r("div",[r("div",{staticClass:"d-flex flex-row pa-2"},[r("div",{staticClass:"pt-2 pl-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n                "+t._s(t.date_parser(e.date))+"\n              ")]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"pr-1",staticStyle:{"font-size":"13px","font-weight":"600",color:"#2196f3"}},[r("div",{staticStyle:{"font-size":"13px","font-weight":"600",color:"#2196f3","text-align":"right"}},[r("v-spacer"),t._v("\n                  Rp "+t._s(t.item_parser(e.items).total?t.item_parser(e.items).total.toLocaleString().replace(/,/g,"."):t.item_parser(e.items).total)+"\n                ")],1),t._v(" "),r("div",{staticStyle:{"font-size":"9px","font-weight":"600","padding-top":"2px","font-style":"italic"},style:t.item_parser(e.items).total<t.store.min_order||t.item_parser(e.items).total>t.store.max_order?"color: rgb(255 111 111);":"color: rgb(222 222 222)"},[t._v("\n                  min. "+t._s(t.store.min_order/1e3)+"k - max. "+t._s(t.store.max_order/1e3)+"k\n                ")])]),t._v(" "),r("v-btn",{attrs:{icon:"",depressed:"",dense:"",small:"",ripple:!1},on:{click:function(e){return t.expand_detail(n)}}},[t.expansion.length?r("v-icon",[t._v("\n                  "+t._s(t.expansion[n].show?"mdi-chevron-up":"mdi-chevron-down")+"\n                ")]):t._e()],1)],1),t._v(" "),r("div",{staticClass:"pa-3"},[r("v-card",{staticClass:"d-flex flex-row mb-2",attrs:{flat:""}},[r("v-card",{staticClass:"d-flex flex-row",attrs:{flat:""}},[r("v-card",{staticStyle:{"font-size":"12px","font-weight":"600"},attrs:{flat:""}},[t._v("\n                    Waktu Pengantaran :\n                  ")]),t._v(" "),r("v-card",{staticClass:"ml-2",staticStyle:{color:"grey","font-size":"10px","font-weight":"500","padding-top":"2px"},attrs:{flat:""}},[t._v("\n                    jam 08:00 - 17:00\n                  ")])],1),t._v(" "),r("v-spacer")],1)],1)]),t._v(" "),r("v-expand-transition",[t.expansion.length?r("div",{directives:[{name:"show",rawName:"v-show",value:t.expansion[n].show,expression:"expansion[index].show"}],staticClass:"pa-2 pb-0",staticStyle:{"border-top":"1px solid #eaeaea"}},t._l(t.item_parser(e.items).product,(function(e,n){return r("div",{key:n,staticClass:"mb-2"},[r("v-card",{staticClass:"d-flex flex-row pr-1",attrs:{outlined:""}},[r("v-card",{staticClass:"ma-2 mt-3",attrs:{width:"50",height:"50",outlined:""}},[r("v-img",{attrs:{src:e.main_image,loading:"lazy"}})],1),t._v(" "),r("div",{staticClass:"pa-2 pt-3",staticStyle:{width:"100%","text-align":"left"}},[r("div",{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis","font-weight":"600"}},[t._v("\n                      "+t._s(e.name)+"\n                    ")]),t._v(" "),r("div",{staticStyle:{"font-size":"11px","max-width":"200px","min-width":"200px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis",color:"grey"}},[t._v("\n                      "+t._s(e.detail_id.name)+"\n                    ")]),t._v(" "),r("div",{staticClass:"d-flex flex-row"},[r("div",{staticStyle:{"font-size":"11px","font-weight":"600"}},[t._v("\n                        "+t._s(e.qty)+" x Rp \n                      ")]),t._v(" "),r("div",{staticClass:"d-flex flex-row",staticStyle:{"font-size":"11px","font-weight":"600"}},[e.is_promo?r("div",[t._v("\n                          "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+", - \n                        ")]):t._e(),t._v(" "),r("div",{style:e.is_promo?"color: darkgrey !important; text-decoration-line: line-through !important;":null},[t._v("\n                          "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", - \n                        ")]),t._v(" "),e.is_promo?t._e():r("div",[t._v(" ")])])])])],1)],1)})),0):t._e()])],1)})),0):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:_.a,VExpandTransition:v.a,VIcon:f.a,VImg:m.a,VSpacer:h.a})}}]);