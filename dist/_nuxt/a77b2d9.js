(window.webpackJsonp=window.webpackJsonp||[]).push([[47,55],{373:function(t,e,r){"use strict";r.r(e);var n={computed:{customer:function(){return this.$store.state.customer}}},l=r(71),c=r(72),o=r.n(c),d=r(312),v=r(311),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"left"}},[r("v-card",{staticClass:"pt-1",attrs:{color:"#f8f8f8",flat:"",tile:""}},[t.customer?r("v-card",{staticClass:"pt-1 pb-1",attrs:{color:"white",flat:"",tile:""}},[r("div",{staticClass:"ma-1"},[r("div",{staticStyle:{"font-size":"12px"}},[t._v("Alamat pengiriman")]),t._v(" "),r("div",{staticClass:"mt-1",staticStyle:{"font-size":"14px","font-weight":"600"}},[t._v("\n          "+t._s(t.customer.name)+"\n        ")]),t._v(" "),r("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.customer.no_phone))]),t._v(" "),r("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.customer.email))]),t._v(" "),r("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.customer.address))]),t._v(" "),r("div",{staticStyle:{"font-size":"14px"}},[t._v("\n          "+t._s(t.customer.city)+", "+t._s(t.customer.zip_code)+"\n        ")])])]):t._e()],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCard:d.a,VDivider:v.a})},374:function(t,e,r){"use strict";r.r(e);var n={props:{changehandler:{type:Function,required:!0},applyingvoucher:{type:Boolean,required:!0},appliedvoucher:{type:Object,required:!0}}},l=r(71),c=r(72),o=r.n(c),d=r(85),v=r(312),_=r(311),f=r(426),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"left"}},[r("v-card",{staticClass:"pa-1",attrs:{flat:""}},[r("div",{staticClass:"mb-2",staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n      VOUCHER\n    ")]),t._v(" "),r("v-btn",{staticStyle:{"font-weight":"600"},attrs:{depressed:"",block:"",color:"#fd0"},on:{click:function(e){return t.changehandler("voucher",!0)}}},[t._v("\n      GUNAKAN VOUCHER\n    ")])],1),t._v(" "),r("center",{staticClass:"ma-1"},[t.applyingvoucher?r("v-progress-linear",{attrs:{color:"#FD0",indeterminate:"",height:"3"}}):t._e()],1),t._v(" "),t.appliedvoucher.name?t._e():r("br"),t._v(" "),t.appliedvoucher.name?r("div",{staticClass:"pa-1"},[r("div",{staticClass:"ma-1 ml-0 pl-1",staticStyle:{"background-color":"#3276f7","border-radius":"2px","font-size":"12px",width:"fit-content","min-width":"200px",color:"white","padding-right":"5px"}},[t._v("\n      * "+t._s(t.appliedvoucher.name)+" Voucher applied\n    ")]),t._v(" "),r("div",{staticClass:"ma-1 ml-0 pl-1",staticStyle:{"background-color":"#3276f7","border-radius":"2px","font-size":"12px",width:"fit-content","min-width":"200px",color:"white"}},[t._v("\n      * kamu hemat Rp. "+t._s(t.appliedvoucher.value.toLocaleString().replace(/,/g,"."))+", -\n    ")])]):t._e(),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VCard:v.a,VDivider:_.a,VProgressLinear:f.a})},378:function(t,e,r){"use strict";r.r(e);var n={computed:{notes:function(){return this.$store.state.user_notes}}},l=r(71),c=r(72),o=r.n(c),d=r(311),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"left"}},[t.notes?r("div",[r("div",{staticClass:"mt-4 mb-4 pa-1"},[r("div",{staticStyle:{"font-size":"12px"}},[t._v("Catatan untuk penjual (optional):")]),t._v(" "),r("div",{staticClass:"mt-1",staticStyle:{"font-size":"13px",color:"grey","font-weight":"600"}},[t._v("\n        "+t._s(t.notes)+"\n      ")])]),t._v(" "),t.notes.length?r("br"):t._e(),t._v(" "),r("v-divider")],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;o()(component,{VDivider:d.a})},379:function(t,e,r){"use strict";r.r(e);r(26);var n={props:{grandtotal:{type:Number,required:!0}},computed:{store:function(){return this.$store.state.store},customized_values:function(){return this.$store.state.customized_values},customized_values_total:function(){var t=0;return this.customized_values&&this.customized_values.forEach((function(e){t+=e.total})),t},rp_order:function(){return this.$store.state.rp_order}}},l=r(71),c=r(72),o=r.n(c),d=r(311),v=r(304),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex flex-row mt-4 mb-1 pa-1"},[r("div",{staticStyle:{"font-size":"12px"}}),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"d-flex flex-row pa-1"},[r("div",{staticStyle:{"font-weight":"600"}},[t._v("Subtotal:")]),t._v("\n       \n      "),r("v-spacer"),t._v(" "),t.customized_values?r("div",{staticStyle:{"font-weight":"600",color:"#2196f3"}},[t._v("\n        Rp.\n        "+t._s(t.customized_values_total.toLocaleString().replace(/,/g,"."))+"\n      ")]):r("div",[r("div",{staticStyle:{"font-weight":"600",color:"#2196f3"}},[t._v("\n          Rp.\n          "+t._s(t.grandtotal.toLocaleString().replace(/,/g,"."))+"\n        ")])])],1)],1),t._v(" "),!this.rp_order&&t.grandtotal<t.store.min_order?r("div",{staticStyle:{"font-size":"9px",color:"red","text-align":"center"}},[t._v("\n    "+t._s(JSON.parse(t.store.response.min_order).message[0])+"\n  ")]):t._e(),t._v(" "),!this.rp_order&&t.grandtotal>t.store.max_order?r("div",{staticStyle:{"font-size":"9px",color:"red","text-align":"center"}},[t._v("\n    "+t._s(JSON.parse(t.store.response.max_order).message[0])+"\n  ")]):t._e(),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VDivider:d.a,VSpacer:v.a})},380:function(t,e,r){"use strict";r.r(e);var n={props:{changehandler:{type:Function,required:!0},selectedcourier:{type:Object,required:!0},shippingcostloading:{type:Boolean,required:!0}}},l=r(71),c=r(72),o=r.n(c),d=r(85),v=r(311),_=r(86),f=r(128),h=r(304),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex flex-row mt-4 mb-4 pa-1"},[r("div",{staticStyle:{"font-weight":"600",width:"50%"}},[r("v-btn",{class:t.selectedcourier.status?null:"pulse-button",style:t.selectedcourier.status?"box-shadow: none; text-transform: none":"text-transform: none",attrs:{block:"",color:"#fd0",disabled:t.shippingcostloading},on:{click:function(e){return t.changehandler("courier",!0)}}},[t._v("\n        Kurir\n      ")])],1),t._v(" "),r("v-spacer"),t._v(" "),t.shippingcostloading?r("div",{staticClass:"pt-1"},[r("v-progress-circular",{attrs:{size:25,color:"primary",indeterminate:""}})],1):r("div",[t.selectedcourier.name.length?r("div",{staticStyle:{"font-weight":"600","align-self":"center"}},[t.selectedcourier.status?r("div",[r("div",{staticClass:"d-flex flex-row"},[r("v-spacer"),t._v(" "),r("div",{staticStyle:{"font-size":"11px"}},[t._v(t._s(t.selectedcourier.name)+" | "+t._s(t.selectedcourier.service))]),t._v(" "),r("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-truck")])],1),t._v(" "),r("div",{staticClass:"d-flex flex-row"},[r("v-spacer"),t._v(" "),r("div",{staticStyle:{"font-size":"13px"}},[t._v("Rp. "+t._s(t.selectedcourier.price.toLocaleString().replace(/,/g,".")))]),t._v(" "),r("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-cash")])],1),t._v(" "),t.selectedcourier.custom?t._e():r("div",{staticClass:"d-flex flex-row"},[r("v-spacer"),t._v(" "),r("div",{staticStyle:{"font-size":"11px"}},[t._v(t._s(t.selectedcourier.range))]),t._v(" "),r("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-clock-time-four")])],1)]):r("div",{staticStyle:{"font-size":"9px","max-width":"120px",color:"red"}},[t._v("\n          "+t._s(t.selectedcourier.message)+"\n        ")])]):r("div",{staticClass:"pt-2",staticStyle:{"font-weight":"600","align-self":"center"}},[r("div",{staticStyle:{"font-size":"13px"}},[t._v("Belum Dipilih")])])])],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VDivider:v.a,VIcon:_.a,VProgressCircular:f.a,VSpacer:h.a})},381:function(t,e,r){"use strict";r.r(e);var n={props:{selectedpayment:{type:String,required:!0},changehandler:{type:Function,required:!0}}},l=r(71),c=r(72),o=r.n(c),d=r(85),v=r(304),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-row mt-4 pa-1",staticStyle:{height:"100px"}},[r("div",{staticStyle:{"font-weight":"600",width:"50%"}},[r("v-btn",{class:""==t.selectedpayment?"pulse-button":null,style:t.selectedpayment?"box-shadow: none; text-transform: none":"text-transform: none",attrs:{block:"",color:"#fd0"},on:{click:function(e){return t.changehandler("payment",!0)}}},[t._v("\n      Pilih Pembayaran\n    ")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"pt-2",staticStyle:{"font-weight":"600"}},[t.selectedpayment?r("div",{staticStyle:{"font-size":"13.9px","text-transform":"uppercase"}},[t._v("\n      "+t._s(t.selectedpayment)+"\n    ")]):r("div",{staticStyle:{"font-size":"13px"}},[t._v("\n      Belum Dipilih\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VSpacer:v.a})},411:function(t,e,r){"use strict";r.r(e);r(26);var n=r(373),l=r(374),c=r(401),o=r(378),d=r(379),v=r(380),_=r(381),f={components:{"Customer-information":n.default,"Order-detail":c.default,Voucher:l.default,Notes:o.default,Subtotal:d.default,Kurir:v.default,Payment:_.default},props:{changehandler:{type:Function,required:!0},applyingvoucher:{type:Boolean,required:!0},shippingcostloading:{type:Boolean,required:!0},appliedvoucher:{type:Object,required:!0},date:{type:String,required:!0},selectedcourier:{type:Object,required:!0},parsedate:{type:Function,required:!0},parseprice:{type:Function,required:!0},expansion:{type:Array,required:!0},grandtotal:{type:Number,required:!0},selectedpayment:{type:String,required:!0}}},h=r(71),m=r(72),y=r.n(m),x=r(312),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",tile:""}},[r("Customer-information"),t._v(" "),r("v-card",{staticClass:"mt-2 pt-1 pb-1",attrs:{color:"white",flat:"",tile:""}},[r("Voucher",{attrs:{changehandler:t.changehandler,applyingvoucher:t.applyingvoucher,appliedvoucher:t.appliedvoucher}}),t._v(" "),r("Order-detail",{attrs:{date:t.date,parsedate:t.parsedate,parseprice:t.parseprice,expansion:t.expansion}}),t._v(" "),r("Notes"),t._v(" "),r("Subtotal",{attrs:{grandtotal:t.grandtotal}}),t._v(" "),r("Kurir",{attrs:{changehandler:t.changehandler,selectedcourier:t.selectedcourier,shippingcostloading:t.shippingcostloading}}),t._v(" "),r("Payment",{attrs:{selectedpayment:t.selectedpayment,changehandler:t.changehandler}}),t._v(" "),r("v-card",{attrs:{height:"40vh",flat:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCard:x.a})}}]);