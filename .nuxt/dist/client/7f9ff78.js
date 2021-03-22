(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{318:function(t,e,n){"use strict";n(26);var o=n(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},319:function(t,e,n){"use strict";var o=n(4),r=n(0);e.a=r.a.extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(o.e)("lazy",this)},methods:{showLazyContent:function(content){return this.hasContent&&content?content():[this.$createElement()]}}})},323:function(t,e,n){"use strict";var o=n(12),r=(n(40),n(10),n(22),n(318)),c=n(42),l=n(11),d=n(1),h=n(4),v=Object(l.a)(r.a,c.a);e.a=v.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(d.p)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(h.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(d.o)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"==typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var o=this.activatorNode[0].componentInstance;e=o&&o.$options.mixins&&o.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?o.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(d.o)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},324:function(t,e,n){"use strict";var o=n(133),r=n(11);function c(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(o.a)(c(r.$children)))}return e}e.a=Object(r.a)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?c(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(o.a)(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(o.a)(this.getOpenDependentElements())),t}}})},325:function(t,e,n){"use strict";var o=n(12);function r(){return!0}var c={inserted:function(t,e){var n=function(n){return function(t,e,n){var c="function"==typeof n.value?n.value:n.value.handler,l="object"===Object(o.a)(n.value)&&n.value.closeConditional||r;if(t&&!1!==l(t)){var d=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();d.push(e),!d.some((function(e){return e.contains(t.target)}))&&setTimeout((function(){l(t)&&c&&c(t)}),0)}}(n,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",n,!0),t._clickOutside=n},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}};e.a=c},330:function(t,e,n){"use strict";var o=n(2),r=n(12),c=n(319),l=n(1),d=n(11),h=n(4);e.a=Object(d.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=Object(l.m)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(h.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},331:function(t,e,n){"use strict";var o=n(0);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},332:function(t,e,n){"use strict";var o=n(133),r=(n(64),n(40),n(0)),c=n(1);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.q)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.q)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.q)(n[r]));return Math.max.apply(Math,e)}}})},363:function(t,e,n){"use strict";n.r(e);var o=n(133),r=(n(45),n(22),n(53),n(9),n(33),{data:function(){return{type:"box",dialog:!1,rm_dialog:!1,target_rm:null,list_items:[],expansion:[]}},watch:{customized_values:function(t,e){t&&(this.expansion=t.map((function(t){return{show:!1}})))}},computed:{store:function(){return this.$store.state.store},create_btn:function(){return"box"==this.type&&this.total<3e4||"parcel"==this.type&&this.total<6e4},customized_values:function(){return this.$store.state.customized_values},user_notes:function(){return this.$store.state.user_notes},cart:function(){return this.$store.state.cart},dates:function(){return this.$store.state.dates},rp_order:function(){return this.$store.state.rp_order},total:function(){var t=0;return this.list_items.forEach((function(e){var n=e.discount_price?e.discount_price:e.normal_price;t+=e.qty*n})),t}},beforeMount:function(){var t=this;this.cart.forEach((function(e){t.list_items.push({id:e.id,name:e.name,SKU:e.SKU,qty:0,image:e.detail[0].main_image,variant:e.detail[0].variant,normal_price:e.detail[0].normal_price,discount_price:e.detail[0].discount_price}),t.expansion.push({show:!1})}))},methods:{created_notes:function(){var t=this.user_notes.split("----------------------------#\n"),e=this.customized_values.map((function(t,e){return"bundle-".concat(e+1," :\n* tipe = ").concat(t.type,"\n").concat(t.items.map((function(t){return'- "'.concat(t.SKU,'" = ').concat(t.qty," item.")})).join("\n"),"\n")})).join("\n");this.$store.dispatch("setState",{payload:{key:"user_notes",data:"".concat(e,"\n----------------------------#\n").concat(t.length>1?t[1]:t[0],"\n")}})},confirm_remove_bundle:function(t){this.target_rm=t,this.rm_dialog=!0},remove_bundle:function(){var t=this;this.rm_dialog=!1;var e=this.customized_values.filter((function(e,n){return n!=t.target_rm}));e.length?this.$store.dispatch("setState",{payload:{key:"customized_values",data:e}}):this.$store.dispatch("setState",{payload:{key:"customized_values",data:null}})},cancel:function(){var t=this;this.total=0,this.dialog=!1,this.cart.forEach((function(e){t.list_items.push({id:e.id,name:e.name,SKU:e.SKU,qty:0,image:e.detail[0].main_image,variant:e.detail[0].variant,normal_price:e.detail[0].normal_price,discount_price:e.detail[0].discount_price})})),this.list_items=this.list_items.slice(this.cart.length)},change_group_qty:function(t,e){var n=this;this.list_items.forEach((function(o,i){i==e&&(t?n.list_items[i].qty+=1:n.list_items[i].qty-=1)}))},submit_bundle:function(){var t=this,e=this.list_items.slice(0);this.customized_values?this.$store.dispatch("setState",{payload:{key:"customized_values",data:[].concat(Object(o.a)(this.customized_values),[{type:this.type,items:e.filter((function(t){return t.qty})),total:this.total}])}}):this.$store.dispatch("setState",{payload:{key:"customized_values",data:[{type:this.type,items:e.filter((function(t){return t.qty})),total:this.total}]}}),this.cart.forEach((function(e){t.list_items.push({id:e.id,name:e.name,SKU:e.SKU,qty:0,image:e.detail[0].main_image,variant:e.detail[0].variant,normal_price:e.detail[0].normal_price,discount_price:e.detail[0].discount_price})})),this.list_items=this.list_items.slice(e.length),this.dialog=!1}}}),c=n(71),l=n(72),d=n.n(l),h=n(85),v=n(312),m=n(402),f=n(310),_=n(86),x=n(192),y=n(304),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.store.customize_setup?n("div",{staticClass:"pa-1",staticStyle:{"text-align":"right"}},[n("v-dialog",{attrs:{persistent:"","max-width":"90%"},model:{value:t.rm_dialog,callback:function(e){t.rm_dialog=e},expression:"rm_dialog"}},[n("v-card",{staticClass:"pa-2 pl-4 pr-4",staticStyle:{"text-align":"left"},attrs:{flat:"",tile:""}},[n("div",{staticStyle:{"font-size":"20px","font-weight":"600","padding-bottom":"10px"}},[t._v("\n        Hapus Paket?\n      ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px",color:"grey","padding-bottom":"10px"}},[t._v("\n        Paket ini akan dihapus dari mode paket Anda.\n      ")])]),t._v(" "),n("v-card",{staticClass:"d-flex flex-row pa-2",staticStyle:{"justify-content":"flex-end"},attrs:{flat:"",tile:""}},[n("v-btn",{staticClass:"mr-2",staticStyle:{"text-transform":"capitalize"},attrs:{small:"",dense:"",depressed:"",text:""},on:{click:function(e){t.rm_dialog=!1}}},[t._v("\n        Batal\n      ")]),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"error",small:"",dense:"",depressed:""},on:{click:t.remove_bundle}},[t._v("\n        Hapus\n      ")])],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"90%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("div",{staticStyle:{"background-color":"lightgray"}},[n("div",{staticClass:"pa-2 pb-0",staticStyle:{"text-align":"left","font-weight":"600","font-size":"12px"}},[t._v("\n          Pilih Tipe Paket:\n        ")]),t._v(" "),n("v-card",{staticClass:"d-flex flex-row pa-2",staticStyle:{"background-color":"lightgray !important"},attrs:{flat:""}},[n("v-card",{staticClass:"pt-1",staticStyle:{"font-size":"13px"},style:"box"==t.type?"color: white":"color: grey",attrs:{width:"48%",height:"28",light:"",flat:"",color:"box"==t.type?"success":"white"},on:{click:function(e){t.type="box"}}},[t._v("\n            Box\n          ")]),t._v(" "),n("v-card",{staticStyle:{"background-color":"lightgray !important"},attrs:{width:"4%",flat:"",tile:""}}),t._v(" "),n("v-card",{staticClass:"pt-1",staticStyle:{"font-size":"13px"},style:"parcel"==t.type?"color: white":"color: grey",attrs:{width:"48%",height:"28",light:"",flat:"",color:"parcel"==t.type?"success":"white"},on:{click:function(e){t.type="parcel"}}},[t._v("\n            Parcel\n          ")])],1),t._v(" "),"box"==t.type?n("div",{staticClass:"pb-2",staticStyle:{"font-size":"10px","text-align":"left","padding-left":"10px","font-style":"italic"},style:t.total<3e4?"color: red;":"color: grey;"},[t._v("\n          Minimum order 30k.\n        ")]):t._e(),t._v(" "),"parcel"==t.type?n("div",{staticClass:"pb-2",staticStyle:{"font-size":"10px","text-align":"left","padding-left":"10px","font-style":"italic"},style:t.total<6e4?"color: red;":"color: grey;"},[t._v("\n          Minimum order 60k.\n        ")]):t._e()],1),t._v(" "),t.list_items.length?n("v-card",{staticClass:"pa-2",staticStyle:{"overflow-y":"scroll"},attrs:{flat:"",tile:"","max-height":"400"}},t._l(t.list_items,(function(e,o){return n("v-card",{key:o,staticClass:"d-flex flex-row mb-2",attrs:{outlined:""}},[n("div",{staticClass:"pa-2"},[n("v-img",{attrs:{src:e.image,width:"70",height:"70"}})],1),t._v(" "),n("div",{staticClass:"pa-3 pl-1",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"font-size":"14px"}},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),n("div",{staticStyle:{"font-size":"12px"}},[t._v("\n              "+t._s(e.variant)+"\n            ")]),t._v(" "),n("div",{staticStyle:{"font-size":"12px"}},[t._v("\n              Rp. "+t._s(e.discount_price?e.discount_price.toLocaleString().replace(/,/g,"."):e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n            ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"d-flex flex-row pl-1 pr-2",staticStyle:{"align-self":"center"}},[n("div",[n("v-btn",{staticStyle:{padding:"0","border-color":"#4caf50 !important"},attrs:{color:"success","max-width":"26",width:"26","min-width":"26","max-height":"26",height:"26","min-height":"26",depressed:"",outlined:"",rounded:"",small:"",text:"",disabled:!e.qty},on:{click:function(e){return t.change_group_qty(!1,o)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-minus")])],1)],1),t._v(" "),n("v-card",{staticClass:"pt-1 text-center",staticStyle:{"font-size":"14px"},attrs:{"min-width":"30",flat:""}},[t._v("\n              "+t._s(e.qty)+"\n            ")]),t._v(" "),n("div",[n("v-btn",{staticStyle:{padding:"0","border-color":"#4caf50 !important"},attrs:{color:"success","max-width":"26",width:"26","min-width":"26","max-height":"26",height:"26","min-height":"26",depressed:"",outlined:"",rounded:"",small:"",text:""},on:{click:function(e){return t.change_group_qty(!0,o)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1)],1)],1)],1)})),1):t._e(),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{"text-align":"right","font-size":"12px"},style:t.total?"color: red":"color: grey"},[t._v("\n        Total : Rp. "+t._s(t.total.toLocaleString().replace(/,/g,"."))+", -\n      ")]),t._v(" "),n("v-card",{staticClass:"d-flex flex-row mt-0 pa-2 pt-0",attrs:{flat:""}},[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mr-2",attrs:{color:"black",depressed:"",small:"",text:""},on:{click:t.cancel}},[t._v("\n          Kembali\n        ")]),t._v(" "),n("v-btn",{staticStyle:{color:"black"},attrs:{color:"#fd0",depressed:"",small:"",disabled:t.create_btn},on:{click:t.submit_bundle}},[t._v("\n          Tambah\n        ")])],1)],1)],1),t._v(" "),t.customized_values?n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("v-card",{staticClass:"pa-1",attrs:{flat:"",tile:""}},t._l(t.customized_values,(function(e,o){return n("v-card",{key:o,staticClass:"mb-2 pa-2",staticStyle:{"text-align":"left"},attrs:{outlined:""}},[n("div",{staticClass:"d-flex flex-row"},[n("div",{staticStyle:{"text-transform":"capitalize","font-size":"12px",color:"grey"},style:"box"==e.type?"margin-right: 20px":null},[n("div",{staticClass:"d-flex flex-row mt-2"},["box"==e.type?n("center",{staticStyle:{width:"25px"}},[n("v-img",{staticClass:"mr-2",attrs:{"max-width":"15px","min-width":"15px","max-height":"18px","min-height":"18px",height:"18px",width:"15px",src:"https://image.freepik.com/free-icon/present-box-with-big-bow_318-9536.jpg"}})],1):t._e(),t._v(" "),"parcel"==e.type?n("center",{staticStyle:{width:"25px"}},[n("v-img",{staticClass:"mr-2",attrs:{"max-width":"18px","min-width":"18px","max-height":"18px","min-height":"18px",height:"18px",width:"18px",src:"https://icons-for-free.com/iconfiles/png/512/bakery+svg+line+bread+basket-1319964864467425081.png"}})],1):t._e(),t._v(" "),n("div",{staticStyle:{"font-weight":"600"}},[t._v(t._s(e.type))])],1)]),t._v(" "),n("div",{staticClass:"ml-12",staticStyle:{"text-transform":"capitalize","font-size":"14px",color:"grey","padding-top":"8px","text-align":"left",width:"60%"}},[n("div",{staticClass:"mr-1",staticStyle:{"font-size":"12px",color:"grey","font-weight":"600"}},[t._v("\n                Rp. "+t._s(e.total.toLocaleString().replace(/,/g,"."))+", -\n              ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticStyle:{padding:"4px 0 4px 4px"}},[n("v-btn",{attrs:{icon:"",depressed:"",dense:"",small:"",ripple:!1},on:{click:function(e){t.expansion[o].show=!t.expansion[o].show}}},[t.expansion.length?n("v-icon",[t._v("\n                "+t._s(t.expansion[o].show?"mdi-chevron-up":"mdi-chevron-down")+"\n              ")]):t._e()],1)],1)],1),t._v(" "),n("v-expand-transition",[t.expansion.length?n("div",{directives:[{name:"show",rawName:"v-show",value:t.expansion[o].show,expression:"expansion[idx].show"}]},[t._l(e.items,(function(e,o){return n("v-card",{key:o,staticClass:"mt-2 ml-0 mr-0",attrs:{outlined:""}},[n("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",width:"100%"}},[n("v-card",{staticClass:"ma-2 ml-0",staticStyle:{"padding-top":"2px"},attrs:{flat:""}},[n("v-img",{attrs:{src:e.image,width:"70",height:"70"}})],1),t._v(" "),n("div",{staticClass:"pa-2",staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","max-width":"150px",display:"inline-block","min-width":"150px","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"}},[t._v("\n                    "+t._s(e.variant)+"\n                  ")]),t._v(" "),n("div",{staticClass:"d-flex flex-row",staticStyle:{"font-size":"13px"}},[n("div",{staticClass:"mr-2",staticStyle:{"font-size":"13px","font-weight":"600",color:"black"}},[t._v("\n                      "+t._s(e.qty)+" x\n                    ")]),t._v(" "),e.discount_price?n("div",[n("div",{staticStyle:{"font-size":"13px","font-weight":"600","text-decoration":"line-through",color:"#999"}},[t._v("\n                        Rp. "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n                      ")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n                        Rp.\n                        "+t._s(e.discount_price.toLocaleString().replace(/,/g,"."))+", -\n                      ")])]):n("div",{staticStyle:{"font-size":"13px","font-weight":"600"}},[t._v("\n                      Rp. "+t._s(e.normal_price.toLocaleString().replace(/,/g,"."))+", -\n                    ")])])])],1)],1)})),t._v(" "),n("div",{staticClass:"d-flex flex-row mt-1 pt-1"},[n("v-spacer"),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"red",small:"",text:"",depressed:"",dense:""},on:{click:function(e){return t.confirm_remove_bundle(o)}}},[n("v-icon",{staticClass:"mr-1",attrs:{color:"red",small:""}},[t._v("mdi-close-circle-outline")]),t._v("\n                Hapus paket\n              ")],1)],1)],2):t._e()])],1)})),1)],1):t._e(),t._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"pa-1 pt-0",staticStyle:{"text-align":"left",width:"70%"}},[n("div",{staticClass:"d-flex flex-row"},[n("v-img",{staticClass:"mr-2",staticStyle:{"margin-top":"6px","border-radius":"2px"},attrs:{src:"https://cdn.onlinewebfonts.com/svg/img_569342.png",width:"22",height:"22","max-width":"22","max-height":"22"}}),t._v(" "),n("div",[t.customized_values?t._e():n("div",{staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n            Beli Paket\n          ")]),t._v(" "),t.customized_values?n("div",{staticStyle:{"font-size":"12px","font-weight":"600"}},[t._v("\n            Tambah Paket Lainnya\n          ")]):t._e(),t._v(" "),n("div",{staticStyle:{"font-size":"10px",color:"grey"}},[t._v("\n            Pembelian roti dalam bentuk paket.\n          ")])])],1)]),t._v(" "),n("div",{staticStyle:{width:"30%"}},[n("v-btn",{staticClass:"mt-1 mr-1",staticStyle:{"text-transform":"capitalize","letter-spacing":"normal"},attrs:{color:"success",small:"",depressed:""},on:{click:function(e){t.dialog=!0}}},[t._v("\n        Tambah\n      ")])],1)])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VCard:v.a,VDialog:m.a,VExpandTransition:f.a,VIcon:_.a,VImg:x.a,VSpacer:y.a})},391:function(t,e,n){"use strict";n(90);var o=n(27);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})}}]);