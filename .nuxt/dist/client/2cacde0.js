(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{376:function(t,e,n){t.exports=n.p+"img/merchant.84e4351.jpg"},521:function(t,e,n){"use strict";n.r(e);var r=n(142),c=n(5),l=(n(43),{props:{loadingmerchant:{type:Boolean,required:!0}},data:function(){return{scroll:"this is self scroll state",page:0,windowWidth:null,windowHeight:null,loading_merchant:!1,scrollTop:0,clientHeight:0,scrollHeight:0,end:!1,search_type:[],search_value:[],select_search_type:[]}},computed:{store:function(){return this.$store.state.store},list_merchant:function(){return this.$store.state.list_merchant},checkScroll:function(){return this.$document.scrollTop()>250}},mounted:function(){var t=this,e=this;this.$store.dispatch("setState",{payload:{key:"list_merchant",data:[]}}),this.get_list_merchant(this.page),this.$nextTick((function(){window.addEventListener("scroll",e.handleScroll),t.getWindowWidth(),t.getWindowHeight()}))},methods:{handleScroll:function(t){var e=t.target,n=e.scrollTop,r=e.clientHeight,c=e.scrollHeight;this.scrollTop=n,this.clientHeight=r,this.scrollHeight=c,n>=Math.floor(c-r)-1&&!this.end&&(this.page+=1,this.get_list_merchant(this.page))},get_list_merchant:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading_merchant=!0,e.$store.dispatch("setState",{payload:{key:"general_loading",data:!0}}),c=e.$route.query.market,n.next=5,e.$store.dispatch("request",{url:"/api/store/market/merchant",method:"post",data:{bot_id:e.store.bot_id,market_id:c,page:t}});case 5:l=n.sent,e.loading_merchant=!1,e.$store.dispatch("setState",{payload:{key:"general_loading",data:!1}}),10!=l.data.response.length&&(e.end=!0),e.$store.dispatch("setState",{payload:{key:"list_merchant",data:[].concat(Object(r.a)(e.list_merchant),Object(r.a)(l.data.response))}});case 10:case"end":return n.stop()}}),n)})))()},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},select_merchant:function(t){var e=this.$route,n=e.params.store,r=e.query,c=r.market,l=(r.c,r.src),u=r.u;this.$store.dispatch("setState",{payload:{key:"merchant",data:t}}),this.$router.push("/site/".concat(n,"?market=").concat(c,"&u=").concat(u,"&src=").concat(l,"&c=").concat(t.id))}}}),o=n(51),d=n(52),h=n.n(d),m=n(303),v=n(200),_=n(432),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-12",staticStyle:{}},[r("div",{staticClass:"ma-1 mb-0 d-flex flex-row",staticStyle:{"margin-top":"13px !important"},attrs:{id:"b-find-merchant"}},[r("div",{staticStyle:{width:"100%"}},[r("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{"append-icon":"mdi-magnify",placeholder:"Cari nama toko",dense:"",outlined:"","hide-details":""},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}})],1)]),t._v(" "),r("div",{staticClass:"ma-1 mt-2",staticStyle:{"overflow-y":"scroll"},style:t.loading_merchant?"height: calc(100vh - 180px);":"height: calc(100vh - 120px);",attrs:{id:"b-list-merchant"},on:{scroll:t.handleScroll}},[t._l(t.list_merchant,(function(e,c){return r("v-card",{key:c,staticClass:"mt-2 mb-1",attrs:{outlined:""},on:{click:function(n){return t.select_merchant(e)}}},[r("div",{staticClass:"d-flex flex-row"},[r("div",{staticClass:"ma-2 pa-2",staticStyle:{border:"0.5px solid lightgrey","border-radius":"3px"}},[r("v-img",{attrs:{width:"40",src:e.image||n(376)}})],1),t._v(" "),r("div",{staticStyle:{"align-self":"center"}},[r("div",{staticStyle:{"font-size":"14px",color:"black","text-align":"left"}},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticStyle:{"font-size":"11px",color:"#999999","text-align":"left"}},[t._v(t._s(e.description))])])])])})),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading_merchant,expression:"loading_merchant"}]},t._l(3,(function(e){return r("v-card",{key:e,staticClass:"mt-2 mb-1",attrs:{"min-height":"75","max-height":"75",outlined:""}},[r("div",{staticClass:"d-flex flex-row"},[r("div",{staticClass:"ma-2 pa-2",staticStyle:{border:"0.5px solid lightgrey","border-radius":"3px",height:"57px",width:"57px",background:"lightgrey"}},[t._v("\n             \n          ")]),t._v(" "),r("div",{staticStyle:{"padding-top":"20px"}},[r("v-card",{staticClass:"mb-2",staticStyle:{background:"lightgrey"},attrs:{height:"14","min-width":"130","max-width":"130",flat:""}},[t._v(" ")]),t._v(" "),r("v-card",{staticStyle:{background:"lightgrey"},attrs:{height:"11","min-width":"180","max-width":"180",flat:""}},[t._v(" ")])],1)])])})),1),t._v(" "),r("div",{staticStyle:{"min-height":"110px"}},[t._v(" ")])],2)])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:m.a,VImg:v.a,VTextField:_.a})}}]);