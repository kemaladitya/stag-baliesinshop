(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{468:function(t,e,r){"use strict";r.r(e);var o={computed:{site:function(){return this.$store.state.site},store:function(){return this.$store.state.store},customer:function(){return this.$store.state.customer}}},n=r(53),c=r(54),l=r.n(c),_=r(146),m=r(89),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pa-1 pt-2 text-left"},[r("div",{staticStyle:{"font-size":"12px"}},[t._v("Alamat pengiriman")]),t._v(" "),r("div",{staticStyle:{"font-size":"14px","font-weight":"600"}},[t._v("\n    "+t._s(t.customer.name)+"\n  ")]),t._v(" "),r("div",{staticStyle:{"font-size":"11px","margin-top":"2px",color:"#212221"}},[r("div",[t._v(t._s(t.customer.phone))]),t._v(" "),r("div",[t._v(t._s(t.customer.email))]),t._v(" "),r("div",[t._v(t._s(t.customer.address))]),t._v(" "),r("div",[t._v(t._s(t.customer.urban)+", "+t._s(t.customer.sub_district)+", "+t._s(t.customer.city)+" ("+t._s(t.customer.zip_code)+")")])]),t._v(" "),t.store&&t.store.hasOwnProperty("registered_mode")&&!t.store.registered_mode?r("div",{staticClass:"mt-1"},[r("v-btn",{staticStyle:{"text-transform":"capitalize","letter-spacing":"normal","font-size":"10px","font-weight":"600"},attrs:{color:"primary",block:"",outlined:"",to:"/site/"+t.site.store+"/userprofile?u="+t.site.uuid+"&src=Whatsapp&mtd=reg"}},[r("v-icon",{staticClass:"mr-1",attrs:{"x-small":""}},[t._v("mdi-pencil")]),t._v("\n      Ubah Alamat\n    ")],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:_.a,VIcon:m.a})}}]);