(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{353:function(t,e,n){t.exports=n.p+"img/merchant.84e4351.jpg"},658:function(t,e,n){"use strict";n.r(e);var r=n(303),o=n(199),l=n(407),c=n(141),d=n(5),h=n(6),m=(n(43),n(10),n(32),n(15),n(55),n(56),n(44),n(46),n(47),n(54),{props:{loadingmerchant:{type:Boolean,required:!0}},data:function(){return{scroll:"this is self scroll state",page:0,windowWidth:null,windowHeight:null,loading_merchant:!1,scrollTop:0,clientHeight:0,scrollHeight:0,end:!1,search_type:[],search_value:[],select_search_type:[]}},computed:{time_today:function(){return["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()]},store:function(){return this.$store.state.store},list_merchant:function(){return this.$store.state.list_merchant},checkScroll:function(){return this.$document.scrollTop()>250}},mounted:function(){var t=this,e=this;this.$store.dispatch("setState",{payload:{key:"list_merchant",data:[]}}),this.get_list_merchant(this.page),this.$nextTick((function(){window.addEventListener("scroll",e.handleScroll),t.getWindowWidth(),t.getWindowHeight()}))},methods:{is_in_operational:function(t){var e=this;console.log("is_in_operational");try{var n=this.list_merchant.filter((function(e){return e.id===t.id})),r=Object(h.a)(n,1)[0].params.operational;if(!r.length)return!0;var o=r.filter((function(t){return t.day===e.time_today}));if(!o.length)return!0;var l=(new Date).toString().slice(16,21);return console.log("schedule_today.open_hour  ",o[0].open_hour.replace(":","")),console.log("now                       ",l.replace(":","")),console.log("schedule_today.close_hour ",o[0].close_hour.replace(":","")),!(+o[0].open_hour.replace(":","")<=+l.replace(":","")&&+o[0].close_hour.replace(":","")>=+l.replace(":",""))}catch(t){return console.log("error:is_in_operational",t),!0}},handleScroll:function(t){var e=t.target,n=e.scrollTop,r=e.clientHeight,o=e.scrollHeight;this.scrollTop=n,this.clientHeight=r,this.scrollHeight=o,n>=Math.floor(o-r)-1&&!this.end&&(this.page+=1,this.get_list_merchant(this.page))},get_list_merchant:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var r,o,l,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("ini get list merchant :: component/mini"),e.loading_merchant=!0,e.$store.dispatch("setState",{payload:{key:"general_loading",data:!0}}),r=e.$route.query.market,n.next=6,e.$store.dispatch("request",{url:"/api/store/market/merchant",method:"post",data:{bot_id:e.store.bot_id,market_id:r,page:t}});case 6:o=n.sent,console.log("list_merchant.data.response",o.data.response);try{o.data.response=o.data.response.map((function(t){return t.params&&(console.log("parse params merchant"),t.params=JSON.parse(t.params)),t}))}catch(t){console.log("error.parse")}e.loading_merchant=!1,e.$store.dispatch("setState",{payload:{key:"general_loading",data:!1}}),10!=o.data.response.length&&(e.end=!0),l=[].concat(Object(c.a)(e.list_merchant),Object(c.a)(o.data.response)),d=[],h=[],l.forEach((function(t){d.includes(t.id)||(h.push(t),d.push(t.id))})),e.$store.dispatch("setState",{payload:{key:"list_merchant",data:h}});case 17:case"end":return n.stop()}}),n)})))()},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},select_merchant:function(t){var e=this.$route,n=e.params.store,r=e.query,o=r.market,l=(r.c,r.src),u=r.u;this.$store.dispatch("setState",{payload:{key:"merchant",data:t}}),this.$router.push("/site/".concat(n,"?market=").concat(o,"&u=").concat(u,"&src=").concat(l,"&c=").concat(t.id))}}}),_=n(52),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"pb-12",staticStyle:{}},[c("div",{staticClass:"ma-1 mb-0 d-flex flex-row",staticStyle:{"margin-top":"13px !important"},attrs:{id:"b-find-merchant"}},[c("div",{staticStyle:{width:"100%"}},[c(l.a,{staticStyle:{"font-size":"13px"},attrs:{"append-icon":"mdi-magnify",placeholder:"Cari nama toko",dense:"",outlined:"","hide-details":""},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}})],1)]),t._v(" "),c("div",{staticClass:"ma-1 mt-2",staticStyle:{"overflow-y":"scroll"},style:t.loading_merchant?"height: calc(100vh - 180px);":"height: calc(100vh - 120px);",attrs:{id:"b-list-merchant"},on:{scroll:t.handleScroll}},[t._l(t.list_merchant,(function(e,l){return c(r.a,{key:l,staticClass:"mt-2 mb-1",attrs:{disabled:t.is_in_operational(e),outlined:""},on:{click:function(n){return t.select_merchant(e)}}},[c("div",{staticClass:"d-flex flex-row"},[c("div",{staticClass:"ma-2 pa-2",staticStyle:{border:"0.5px solid lightgrey","border-radius":"3px"}},[c(o.a,{style:t.is_in_operational(e)?"filter: grayscale(100%);":"",attrs:{width:"40",src:e.image||n(353)}})],1),t._v(" "),c("div",{staticStyle:{"align-self":"center"}},[c("div",{staticStyle:{"font-size":"14px",color:"black","text-align":"left"}},[t._v(t._s(e.name))]),t._v(" "),c("div",{staticStyle:{"font-size":"11px",color:"#999999","text-align":"left"}},[t._v(t._s(e.description))])])])])})),t._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:t.loading_merchant,expression:"loading_merchant"}]},t._l(3,(function(e){return c(r.a,{key:e,staticClass:"mt-2 mb-1",attrs:{"min-height":"75","max-height":"75",outlined:""}},[c("div",{staticClass:"d-flex flex-row"},[c("div",{staticClass:"ma-2 pa-2",staticStyle:{border:"0.5px solid lightgrey","border-radius":"3px",height:"57px",width:"57px",background:"lightgrey"}},[t._v("\n             \n          ")]),t._v(" "),c("div",{staticStyle:{"padding-top":"20px"}},[c(r.a,{staticClass:"mb-2",staticStyle:{background:"lightgrey"},attrs:{height:"14","min-width":"130","max-width":"130",flat:""}},[t._v(" ")]),t._v(" "),c(r.a,{staticStyle:{background:"lightgrey"},attrs:{height:"11","min-width":"180","max-width":"180",flat:""}},[t._v(" ")])],1)])])})),1),t._v(" "),c("div",{staticStyle:{"min-height":"110px"}},[t._v(" ")])],2)])}),[],!1,null,null,null);e.default=component.exports}}]);