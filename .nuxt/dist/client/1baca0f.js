(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{441:function(t,e,n){"use strict";n.r(e);n(50),n(45);var r=n(9),o={layout:"empty",data:function(){return{uuid:"",bot_name:"sarirotiwa"}},methods:{find_user:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.uuid,r=t.bot_name,e.next=3,t.$store.dispatch("request",{url:"/api/balesin/user",method:"post",data:{uuid:n,bot_name:r}});case 3:(o=e.sent).data.status?t.$router.replace("/site/".concat(r,"?u=").concat(n,"&src=").concat(o.data.source,"&c=").concat(o.data.category)):console.log("access danied.");case 5:case"end":return e.stop()}}),e)})))()}}},c=n(67),l=n(68),d=n.n(l),m=n(135),v=n(315),f=n(185),_=n(353),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-3 pt-12"},[n("center",{staticClass:"mb-8 mt-3"},[n("v-img",{attrs:{src:"https://faq.balesin.id/icon.ico",width:"210"}}),t._v(" "),n("div",{staticClass:"mt-6",staticStyle:{"font-weight":"600"}},[t._v("\n      balesin shop - Internal testing\n    ")])],1),t._v(" "),n("v-card",{attrs:{flat:""}},[n("v-text-field",{attrs:{label:"Phone",placeholder:"628123456789",outlined:""},model:{value:t.uuid,callback:function(e){t.uuid=e},expression:"uuid"}})],1),t._v(" "),n("v-card",{attrs:{flat:""}},[n("v-text-field",{attrs:{label:"Bot Name",placeholder:"sarirotiwa",outlined:""},model:{value:t.bot_name,callback:function(e){t.bot_name=e},expression:"bot_name"}})],1),t._v(" "),n("v-btn",{attrs:{color:"#FD0",block:""},on:{click:t.find_user}},[t._v("start")])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VImg:f.a,VTextField:_.a})}}]);