"use strict";define(["utils/utils","utils/verify","config/router"],function(t,e,n){var i={data:function(){return{pageAnimated:!1}},mounted:function(){this.pageAnimated=!0,this.reload&&!this.no_reload_on_mount&&this.reload()},methods:{}};return i.methods.imgSrc=function(t,e){return t},i.methods.formatTime=function(e,n){return t.formatDate(e,n)},i});