(window.webpackJsonp=window.webpackJsonp||[]).push([[77,78,79,80],{388:function(e,t,n){"use strict";n.r(t);var l={props:{pclass:String,style:String}},r=n(51),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{class:e.pclass,style:e.style,attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30px",height:"50px",viewBox:"0 0 60 200",preserveAspectRatio:"xMidYMid"}},[n("rect",{attrs:{x:"17.5",y:"30",width:"15",height:"40",fill:"#eab145"}},[n("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"18;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}}),e._v(" "),n("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"64;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}})]),e._v(" "),n("rect",{attrs:{x:"42.5",y:"30",width:"15",height:"40",fill:"#fad96d"}},[n("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}}),e._v(" "),n("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}})]),e._v(" "),n("rect",{attrs:{x:"67.5",y:"30",width:"15",height:"40",fill:"#959795"}},[n("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}}),e._v(" "),n("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}})])])])}),[],!1,null,null,null);t.default=component.exports},469:function(e,t,n){"use strict";n.r(t);var l=n(5),r=(n(43),n(54),n(47),{components:{"svg-loading":n(388).default},props:{loading:Boolean,uploaded:Boolean,uploading:Boolean,image:String,show_image:Function,event_handler:Function},watch:{image:function(e,t){e.includes("base64")&&this.upload_image()}},methods:{upload_image:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.event_handler("uploading",!0),t.next=3,e.$axios({url:"https://faq.balesin.id/api/custom/upload",method:"POST",headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImVtYWlsIjoib3ZpY2tic0BnbWFpbC5jb20iLCJpYXQiOjE2MTU2NzMyNzgyNTQsImV4cCI6MTYxNTY3MzI3ODI1NH0.8PurR7sFzqS3lr5STmdhhMqqrFxCn7X5Vgl0_Qh2wpI"},data:{file_name:"payment-receipt-"+e.$route.query.orderid,file:e.image}});case 3:"status"in(n=t.sent).data&&n.data.status&&(e.event_handler("image",n.data.response),e.event_handler("uploading",!1),e.event_handler("uploaded",!0));case 5:case"end":return t.stop()}}),t)})))()},open_image:function(){this.$refs.file.click()},readfile:function(e){var t=this;console.log("readfile");var n=new FileReader;n.onloadend=function(e){t.event_handler("image",e.target.result)},n.readAsDataURL(e.target.files[0])}}}),d=n(51),o=n(52),c=n.n(o),v=n(303),m=n(90),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4"},[e._m(0),e._v(" "),n("div",{staticClass:"d-flex flex-row mt-1"},[n("v-card",{staticClass:"d-flex flex-row",attrs:{disabled:e.loading||e.uploading,"max-height":"40",height:"40",width:"100%",outlined:""},on:{click:e.open_image}},[n("input",{ref:"file",staticClass:"image-loader",attrs:{name:"file",type:"file",accept:"image/png, image/jpeg"},on:{change:e.readfile}}),e._v(" "),e.uploading?n("div",{staticClass:"image--value pa-2 pt-0 pl-3 pr-3 d-flex flex-row"},[n("div",{staticClass:"svg-wrapper mr-1"},[n("svg-loading",{attrs:{pclass:"svg-field",pstyle:""}})],1),e._v(" "),n("div",{staticClass:"text-uploading"},[e._v("UPLOADING YOUR IMAGE")])]):n("div",{staticClass:"image--value pa-2 pl-3 pr-3"},[e._v("\n        "+e._s(e.uploaded?e.image:"Gunakan Format file .jpg, .jpeg atau .png")+"\n      ")]),e._v(" "),n("div",{staticClass:"image--choose-file"},[n("center",{staticClass:"choose-label"},[e._v("PILIH FILE")])],1)]),e._v(" "),e.uploaded?n("v-card",{staticClass:"ml-2",attrs:{color:"#d6f2fd",flat:""},on:{click:e.show_image}},[n("div",{staticClass:"image--preview"},[n("center",{staticClass:"preview-label"},[e._v("LIHAT")])],1)]):e._e()],1),e._v(" "),n("div",{staticClass:"form--details d-flex flex-row mt-1"},[n("v-icon",{staticClass:"mr-1",attrs:{color:e.uploaded?"success":"white",size:"16"}},[e._v("mdi-check-circle")]),e._v(" "),n("div",{staticClass:"image-uploaded",style:e.uploaded?null:"color: white"},[e._v("IMAGE UPLOADED")])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form--label"},[e._v("\n    UPLOAD BUKTI PEMBAYARAN\n    "),n("span",{staticClass:"form--required"},[e._v("*")])])}],!1,null,null,null);t.default=component.exports;c()(component,{VCard:v.a,VIcon:m.a})},470:function(e,t,n){"use strict";n.r(t);var l={props:{b_title:String,mtop:String,placeholder:String,name:String,value:String,required:String,details:String,readonly:Boolean,disabled:Boolean,event_handler:Function}},r=n(51),d=n(52),o=n.n(d),c=n(432),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.mtop},[n("div",{staticClass:"form--label"},[e._v("\n    "+e._s(e.b_title)+"\n    "),n("span",{staticClass:"form--required"},[e._v(e._s(e.required))])]),e._v(" "),n("div",{staticClass:"mt-1"},[n("v-text-field",{staticClass:"form--field",style:e.readonly?"background: #e9ecef":"background: white",attrs:{value:e.value,readonly:e.readonly,placeholder:e.placeholder,disabled:e.disabled,"hide-details":"",outlined:"",dense:""},on:{input:function(t){return e.event_handler(e.name,t)}}}),e._v(" "),n("div",{staticClass:"form--details"},[e._v(e._s(e.details))])],1)])}),[],!1,null,null,null);t.default=component.exports;o()(component,{VTextField:c.a})},511:function(e,t,n){"use strict";n.r(t);var svg=n(388),l=n(469),r=n(470),d={components:{"svg-loading":svg.default,"text-field":r.default,"image-uploader":l.default},props:{requirements:Boolean,loading:Boolean,notif:Boolean,uploading:Boolean,uploaded:Boolean,image:String,phone:String,bank:String,rek:String,notes:String,event_handler:Function,get_store:Function,submit:Function,show_image:Function}},o=n(51),c=n(52),v=n.n(c),m=n(145),f=n(338),_=n(459),component=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrapper mt-2 pb-12 pt-7"},[n("div",{staticClass:"information mt-4 mb-4"},[e._v("\n      Mohon konfirmasikan pembayaran di sini agar orderan kamu bisa segera di proses\n    ")]),e._v(" "),n("text-field",{attrs:{value:e.$route.query.orderid,readonly:!0,event_handler:e.event_handler,disabled:e.loading,required:"*",mtop:"mt-4",details:"Order ID ditemukan",b_title:"ORDER ID",name:"orderid"}}),e._v(" "),n("image-uploader",{attrs:{loading:e.loading,uploading:e.uploading,uploaded:e.uploaded,image:e.image,show_image:e.show_image,event_handler:e.event_handler}}),e._v(" "),n("text-field",{attrs:{value:e.phone,readonly:!1,event_handler:e.event_handler,disabled:e.loading,placeholder:"Nomor Handphone",required:"*",mtop:"mt-12",details:"",b_title:"NOMOR HANDPHONE",name:"phone"}}),e._v(" "),n("text-field",{attrs:{value:e.bank,readonly:!1,event_handler:e.event_handler,disabled:e.loading,placeholder:"Nama Bank",required:"*",mtop:"mt-4",details:"",b_title:"DARI BANK",name:"bank"}}),e._v(" "),n("text-field",{attrs:{value:e.rek,readonly:!1,event_handler:e.event_handler,disabled:e.loading,placeholder:"No. Rekening",required:"*",mtop:"mt-4",details:"",b_title:"REKENING PENGIRIM",name:"rek"}}),e._v(" "),n("div",{staticClass:"mt-4"},[e._m(0),e._v(" "),n("div",{staticClass:"mt-1"},[n("v-textarea",{attrs:{value:e.notes,disabled:e.loading,placeholder:"Keterangan",rows:"4","hide-details":"",outlined:"",dense:"","no-resize":""},on:{input:function(t){return e.event_handler("notes",t)}}})],1)]),e._v(" "),n("v-footer",{staticClass:"pa-2",attrs:{fixed:""}},[n("v-btn",{staticClass:"submit-btn",attrs:{disabled:!e.requirements||e.loading,color:"#fd0",block:"",depressed:""},on:{click:e.submit}},[e.loading?n("div",{staticClass:"mr-1",staticStyle:{"max-width":"30px"}},[n("svg-loading",{attrs:{pclass:"",pstyle:"margin: 0; margin-top: 25px; margin-left: -10px; display: block;"}})],1):e._e(),e._v("\n        Konfirmasi\n      ")])],1)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form--label"},[e._v("\n        CATATAN\n        "),n("span",{staticClass:"form--not-required"},[e._v("(OPTIONAL)")])])}],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:m.a,VFooter:f.a,VTextarea:_.a})}}]);