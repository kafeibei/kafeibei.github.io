"use strict";define(["vue","utils/muiview"],function(t,i){var n=function(){t.component("widget-switches",{props:{config:{type:Object,"default":{}},data:Number},template:'<div class="mui-switch mui-switch-mini mui-switches" :class="{\'mui-active\': this.quantity}" @tap="triggerCount">\n\t\t\t\t<div class="mui-switch-handle"></div>\n\t\t\t</div>',data:function(){return{quantity:!1}},created:function(){this.quantity=this.data||!1,this.triggerFinish()},methods:{triggerCount:function(){this.quantity=!this.quantity,this.triggerFinish()},triggerFinish:function(){this.$emit("finish",this.quantity,this.config)}}})};return n});