(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{420:function(t,e,l){"use strict";l.r(e);l(24);var r={props:{type:{type:String,required:!0},setup:{type:Object,required:!0},total:{type:Number,required:!0},cancel:{type:Function,required:!0},submit:{type:Function,required:!0},validated:{type:Boolean,required:!0}}},o=l(53),n=l(54),c=l.n(n),d=l(145),v=l(301),y=l(309),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticStyle:{"font-size":"10px","text-align":"left","padding-left":"10px","font-style":"italic",color:"grey"}},[t._v("\n    "+t._s(t.setup.footer_message)+"\n  ")]),t._v(" "),l("div",{staticClass:"d-flex flex-row"},[t._l(t.setup.rules.detail,(function(e){return l("div",{directives:[{name:"show",rawName:"v-show",value:t.type==e.type,expression:"type == detail.type"}],key:e.type,staticClass:"pb-2 pt-1",staticStyle:{"font-size":"10px","text-align":"left","padding-left":"10px","font-style":"italic"}},[l("div",{staticClass:"d-flex flex-row"},[l("div",{style:t.total<e.min?"color: red;":"color: grey;"},[t._v("\n          Min. order "+t._s(e.min/1e3)+"k\n        ")]),t._v(" "),l("div",{staticClass:"ml-2 mr-2"},[t._v("|")]),t._v(" "),l("div",{style:t.total>e.max?"color: red;":"color: grey;"},[t._v("\n          Max. order "+t._s(e.max/1e3)+"k\n        ")])])])})),t._v(" "),l("v-spacer"),t._v(" "),l("div",{staticClass:"pa-2 pt-4",staticStyle:{"text-align":"right","font-size":"10px"},style:t.total?"color: rgb(33, 150, 243); font-weight: bold":"color: grey"},[t._v("\n      Total : Rp "+t._s(t.total.toLocaleString().replace(/,/g,"."))+", -\n    ")])],2),t._v(" "),l("v-card",{staticClass:"d-flex flex-row mt-0 pa-2 pt-0",attrs:{flat:""}},[l("v-spacer"),t._v(" "),l("v-btn",{staticClass:"mr-2",attrs:{color:"black",depressed:"",small:"",text:""},on:{click:t.cancel}},[t._v("\n      Kembali\n    ")]),t._v(" "),l("v-btn",{staticStyle:{color:"black !important"},attrs:{color:"#fd0",depressed:"",small:"",disabled:t.validated},on:{click:t.submit}},[t._v("\n      Tambah\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VSpacer:y.a})}}]);