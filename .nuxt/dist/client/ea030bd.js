(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{504:function(e,t,r){"use strict";r.r(t);r(23),r(25),r(73),r(74);var n=r(469),o={computed:{screen:function(){return this.$store.state.screen},customer:function(){return this.$store.state.customer},store:function(){return this.$store.state.store}},mounted:function(){this.$store.dispatch("insert_device",{"screen-size":this.screen,chatkey:this.customer.chatkey,bot_id:this.store.bot_id,description:n.description,layout:n.layout,manufacturer:n.manufacturer,name:n.name,os:{architecture:n.os.architecture,family:n.os.family,toString:n.os.toString,version:n.os.version},prerelease:n.prerelease,product:n.product,ua:n.ua,version:n.version})}},c=r(36),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=component.exports}}]);