(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{460:function(t,e,l){"use strict";l.r(e);var r=l(171),o=l(343),n=l(108),c=l(231),d=l(352),x={props:{search_result:Array,add_to_cart:Function,showdetail:Function},computed:{site:function(){return this.$store.state.site},is_available_express:function(){return this.$store.state.is_available_express},store:function(){return this.$store.state.store}}},_=l(36),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pa-1",style:"margin-bottom: "+(t.$device.isAndroid?"40vw !important":"300px !important")},t._l(t.search_result,(function(e,x){return l(o.a,{key:x,staticClass:"mb-2",staticStyle:{"border-radius":"8px"},attrs:{outlined:""}},[l("div",{staticClass:"d-flex flex-row pa-2"},[l(c.a,{staticClass:"image",staticStyle:{"text-align":"left",border:"1px solid lightgrey","border-radius":"8px"},attrs:{src:e.main_image,"min-width":"90","max-width":"90","min-height":"90","max-height":"90",loading:"lazy"}}),t._v(" "),l("div",{staticClass:"pl-2",staticStyle:{width:"100%","text-align":"left"}},[l("div",{staticStyle:{"font-size":"14px","font-weight":"500"}},[t._v(t._s(e.name))]),t._v(" "),l("div",[e.is_promo||e.discount_price?l("div",{staticClass:"d-flex flex-row discount-price"},[l("div",{staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n              Rp "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+"\n            ")]),t._v(" "),l("div",{staticClass:"ml-1",staticStyle:{"align-self":"flex-end","font-size":"8px",color:"darkgrey !important","text-decoration-line":"line-through !important","padding-bottom":"2px","font-weight":"600"}},[t._v("\n              Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+"\n            ")])]):l("div",{staticClass:"discount-price",staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n            Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+"\n          ")])]),t._v(" "),l("div",{staticClass:"mr-1 mt-1"},[e.is_promo?l("div",{staticStyle:{background:"#002BBC",color:"white","font-size":"8px",width:"fit-content","min-height":"12px","align-self":"center","font-weight":"600","line-height":"1",padding:"4px 6px 3px 6px","border-radius":"1px"}},[t._v("\n            Promo\n          ")]):l("div",{staticStyle:{"font-size":"8px",width:"fit-content","min-height":"12px !important","align-self":"center","font-weight":"600","line-height":"1",padding:"2px","border-radius":"1px"}},[t._v(" ")])]),t._v(" "),l("div",{staticStyle:{"min-height":"29px"}},[e.express_delivery&&e.express_delivery_setup&&t.is_available_express?l("div",[l("div",{staticStyle:{color:"#388E3C","font-weight":"600","font-size":"10px","align-self":"center"}},[l(n.a,{staticStyle:{top:"-1px"},attrs:{color:"#388E3C",small:""}},[t._v("mdi-clock-fast")]),t._v("\n              "+t._s(e.express_delivery_setup.name)+"\n            ")],1),t._v(" "),l("div",{staticStyle:{color:"red","font-size":"8px"}},[t._v(t._s(e.express_delivery_setup.caption))])]):t._e()])])],1),t._v(" "),l("div",{staticClass:"d-flex flex-row pa-2 pt-0",staticStyle:{"padding-top":"1px","justify-content":"flex-end",width:"100%"}},[1===e.variant.length?l("div",{staticClass:"d-flex flex-row b-product-action",staticStyle:{width:"100%"}},[l(r.a,{staticClass:"show-detail mr-1",staticStyle:{"font-size":"11px",height:"25px",border:"1px solid lightgrey","border-radius":"5px"},attrs:{depressed:"",dense:"",text:"","x-small":"",width:"calc(50% - 5px)"},on:{click:t.showdetail}},[l(n.a,{staticClass:"product-mdi-icon",staticStyle:{top:"-1px"},attrs:{small:""}},[t._v("mdi-eye")]),t._v("  Lihat\n        ")],1),t._v(" "),l(d.a),t._v(" "),l(r.a,{staticClass:"add-to-cart",staticStyle:{color:"black",border:"1px solid #cccccc !important","font-size":"11px","border-radius":"5px",height:"25px"},attrs:{color:"#fffbbb",depressed:"",dense:"","x-small":"",width:"calc(50% - 5px)"},on:{click:function(l){return t.add_to_cart(e.id,e.variant[0].id,e.SKU,1)}}},[l(n.a,{staticClass:"product-mdi-icon",staticStyle:{top:"-1px"},attrs:{small:""}},[t._v("mdi-basket-plus")]),t._v("  Tambah\n        ")],1)],1):e.variant.length>1?l("div",{staticClass:"d-flex flex-row pt-3",attrs:{outlined:""}},[l(r.a,{staticClass:"select-variant",staticStyle:{color:"black",border:"1px solid #cccccc !important","font-size":"9px","border-radius":"5px"},attrs:{color:"#FD0",depressed:"",dense:"","x-small":""},on:{click:t.showdetail}},[l(n.a,{staticClass:"product-mdi-icon",attrs:{"x-small":""}},[t._v("mdi-checkbox-multiple-marked-outline")]),t._v("\n           Pilih Variant\n        ")],1)],1):t._e()])])})),1)}),[],!1,null,null,null);e.default=component.exports}}]);