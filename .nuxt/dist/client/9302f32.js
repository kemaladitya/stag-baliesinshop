(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{456:function(t,e,r){"use strict";r.r(e);r(45),r(46);var n=r(9),c={layout:"empty",data:function(){return{uuid:"",bot_name:"sarirotiwa"}},methods:{find_user:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uuid,n=t.bot_name,e.next=3,t.$store.dispatch("request",{url:"/api/balesin/user",method:"post",data:{uuid:r,bot_name:n}});case 3:(c=e.sent).data.status?t.$router.replace("/site/".concat(n,"?u=").concat(r,"&src=").concat(c.data.source,"&c=").concat(c.data.category)):(t.$router.replace("/site/".concat(n,"?u=").concat(r,"&src=web-url&c=all")),console.log("access danied."));case 5:case"end":return e.stop()}}),e)})))()},reg_user:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uuid,n=t.bot_name,e.next=3,t.$store.dispatch("request",{url:"/api/balesin/user",method:"post",data:{uuid:r,bot_name:n}});case 3:c=e.sent,t.$router.replace("/site/".concat(n,"/userprofile?u=").concat(r,"&src=").concat(c.data.source,"&mtd=reg"));case 5:case"end":return e.stop()}}),e)})))()}}},o=r(67),l=r(68),d=r.n(l),m=r(137),v=r(314),f=r(185),_=r(358),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pa-3 pt-12"},[r("center",{staticClass:"mb-8 mt-3"},[r("v-img",{attrs:{src:"https://faq.balesin.id/icon.ico",width:"210"}}),t._v(" "),r("div",{staticClass:"mt-6",staticStyle:{"font-weight":"600"}},[t._v("\n      balesin shop - Internal testing\n    ")])],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-text-field",{attrs:{label:"Phone",placeholder:"628123456789",outlined:""},model:{value:t.uuid,callback:function(e){t.uuid=e},expression:"uuid"}})],1),t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-text-field",{attrs:{label:"Bot Name",placeholder:"sarirotiwa",outlined:""},model:{value:t.bot_name,callback:function(e){t.bot_name=e},expression:"bot_name"}})],1),t._v(" "),r("v-btn",{attrs:{color:"#FD0",block:""},on:{click:t.find_user}},[t._v("shop")]),t._v(" "),r("div",{staticClass:"mt-4"},[r("v-btn",{attrs:{color:"#FD0",block:""},on:{click:t.reg_user}},[t._v("register")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VImg:f.a,VTextField:_.a})}}]);