(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{691:function(e,t,r){"use strict";r.r(t);var n=r(144),o=r(303),l=r(89),c=r(312),d=(r(10),r(47),r(53),r(44),r(20),{props:{courier:Object,icons:Array,take_icons:Object,select_courier:Function},data:function(){return{is_all_express:!0,parsed_product:{product:[],total:0},is_available_today:!1}},computed:{is_available_express:function(){return this.$store.state.is_available_express},order_type:function(){return this.$store.state.order_type},store:function(){return this.$store.state.store},products:function(){return this.$store.state.products},cart:function(){return"single-order"===this.order_type?this.$store.state.cart:"subscription-order"===this.order_type?this.$store.state.subscription_cart:"package-order"===this.order_type?this.$store.state.package_cart:void 0},validate_express_delivery:function(){try{return this.parsed_product.product.filter((function(e){if(!e.express_delivery)return e}))}catch(e){return[]}}},created:function(){this.product_parser()},mounted:function(){this.check_day_availability()},methods:{express_delivery_description:function(){return this.is_available_express?"subscription-order"===this.order_type?"Express Delivery tidak tersedia untuk pembelian Mode Langganan":"package-order"===this.order_type?"Express Delivery tidak tersedia untuk pembelian Parcel/Box":this.validate_express_delivery.length?"Hanya tersedia untuk produk Sari Roti dengan label khusus “Express Delivery”":"":"Saat ini layanan “Express Delivery“ hanya tersedia di area tertentu"},check_day_availability:function(){try{var e=(new Date).getDay(),t=[];if(this.parsed_product.product.forEach((function(e){e.express_delivery_setup.days.forEach((function(e){return t.includes(e)?null:t.push(e)}))})),console.log("start check"),1==t.length&&"*"==t[0])this.is_available_today=!0;else{if(!t.includes(e))return void(this.is_available_today=!1);this.is_available_today=!0}}catch(e){return void(this.is_available_today=!1)}},express_delivery_validator:function(e){var t=!0,r=e.split("|")[2],n=this.parsed_product.product.filter((function(e){return!e.express_delivery})),o=this.parsed_product.product.filter((function(e){return e.express_delivery}));if(o.length){var l=new Date,c=(l.getHours()<10?"0"+l.getHours():l.getHours())+":"+(l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes());o.forEach((function(e){var r=+c.replace(":","")>+e.express_delivery_setup.time.start.replace(":","")&&+c.replace(":","")<=+e.express_delivery_setup.time.end.replace(":","");t&&(t=r)}))}if("Express Delivery"==r){var d="single-order"===this.order_type,_=!n.length;return!(d&&_&&t&&this.is_available_today&&this.is_available_express)}return!1},product_parser:function(){var e=this,t=0,r=[];this.cart.forEach((function(n){var o=e.products.filter((function(e){return e.id===n.id&&e.SKU===n.sku}));o.length&&(r.push({id:o[0].id,sku:o[0].SKU,detail_id:o[0].variant[0],main_image:o[0].main_image,name:o[0].name,normal_price:o[0].normal_price,discount_price:o[0].discount_price,is_promo:o[0].is_promo,qty:n.qty,express_delivery:o[0].express_delivery,express_delivery_setup:o[0].express_delivery_setup}),o[0].express_delivery||(e.is_all_express=!1),t+=(o[0].discount_price||o[0].normal_price)*n.qty)})),this.parsed_product={product:r,total:t}}}}),_=r(52),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex flex-row"},[r("div",{staticClass:"pl-2",staticStyle:{"align-self":"center","font-size":"14px","font-weight":"600"}},[e._v("\n      Pilih Pengiriman\n    ")]),e._v(" "),r(c.a),e._v(" "),r(n.a,{attrs:{color:"red",icon:"",text:""},on:{click:function(t){e.select_courier_dialog=!1}}},[r(l.a,[e._v("mdi-close")])],1)],1),e._v(" "),e.courier.loading?e._e():r("div",{staticStyle:{"overflow-y":"scroll !important","max-height":"450px !important"}},e._l(e.courier.lists,(function(t,n){return r(o.a,{key:n,staticClass:"pa-2 pl-0",class:n?null:"pb-0",staticStyle:{"text-align":"left"},attrs:{flat:""}},[r(o.a,{staticClass:"d-flex flex-row ml-2 pa-3 pt-1 pb-1 mb-2",staticStyle:{"border-radius":"8px"},attrs:{flat:"",outlined:""},on:{click:function(r){return e.select_courier(t)}}},[r("div",{staticStyle:{display:"grid",padding:"0 15px"}},[r("img",{staticStyle:{height:"22px",width:"60px","align-self":"center"},attrs:{src:t.logo,alt:""}})]),e._v(" "),r("div",{staticClass:"pa-3",staticStyle:{"font-size":"12px",padding:"5px 0 0 10px"}},[r("div",{staticStyle:{"font-weight":"500"}},[e._v("\n            "+e._s(t.name)+" - "+e._s(t.service)+"\n          ")]),e._v(" "),r("div",{staticStyle:{"font-weight":"500"}},[e._v("Rp "+e._s(t.final_price.toLocaleString().replace(/,/g,".")))]),e._v(" "),r("div",{staticStyle:{"font-weight":"400","padding-top":"7px"}},[e._v(e._s(t.description))])])])],1)})),1)])}),[],!1,null,null,null);t.default=component.exports}}]);