(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{703:function(t,e,n){"use strict";n.r(e);var r=n(144),l=n(303),o=n(89),c=n(199),d=n(312),_=(n(25),n(10),n(20),{props:{remove:{type:Function,required:!0},idx:{type:Number,required:!0}},computed:{list_product:function(){return this.$store.state.products},package_cart:function(){return this.$store.state.package_cart},parsed_lists:function(){var t=this,e=this.package_cart[0].type,n=0,r=[];return this.package_cart[0].items.forEach((function(e){var l=t.list_product.filter((function(t){return t.id===e.id&&t.SKU===e.sku}));l.length&&(r.push({id:l[0].id,sku:l[0].SKU,detail_id:l[0].variant[0],main_image:l[0].main_image,name:l[0].name,normal_price:l[0].normal_price,discount_price:l[0].discount_price,is_promo:l[0].is_promo,qty:e.qty}),n+=(l[0].discount_price||l[0].normal_price)*e.qty)})),{type:e,product:r,total:n}}}}),f=n(52),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(l.a,{staticClass:"pa-3 mb-3",attrs:{outlined:""}},[t._l(t.parsed_lists.product,(function(e,r){return n(l.a,{key:r,staticClass:"ml-0 mr-0 mb-2",attrs:{outlined:""}},[n(l.a,{staticClass:"d-flex flex-row",attrs:{flat:"",width:"100%"}},[n(l.a,{staticClass:"ma-2",staticStyle:{"padding-top":"2px"},attrs:{flat:""}},[n(c.a,{attrs:{src:e.main_image,width:"70",height:"70"}})],1),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"100%","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"100%","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n          "+t._s(e.detail_id.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[n("div",{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600",color:"black"}},[t._v("\n            "+t._s(e.qty)+" x\n          ")]),t._v(" "),e.discount_price?n("div",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n            Rp "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+", -\n          ")]):t._e(),t._v(" "),n("div",{staticStyle:{"font-size":"13px","font-weight":"600"},style:e.discount_price?"text-decoration: line-through; color: #999; font-size: 8px":null},[t._v("\n            Rp "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n          ")])])])],1)],1)})),t._v(" "),n("div",{staticClass:"d-flex flex-row mt-1 pt-1"},[n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-weight":"600","padding-top":"5px"}},[t._v("\n        Tipe Paket:\n      ")]),t._v(" "),n("div",{staticClass:"ml-1",staticStyle:{"font-size":"13px","font-weight":"600","text-transform":"capitalize","padding-top":"5px"}},[t._v("\n        "+t._s(t.parsed_lists.type)+"\n      ")])]),t._v(" "),n(d.a),t._v(" "),n(r.a,{staticStyle:{"text-transform":"capitalize"},attrs:{color:"red",small:"",outlined:"",depressed:"",dense:""},on:{click:function(e){return t.remove(t.idx)}}},[n(o.a,{staticClass:"mr-1",attrs:{color:"red",small:""}},[t._v("mdi-close-circle-outline")]),t._v("\n      Hapus paket\n    ")],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);