"use strict";define(["vue","utils/muiview"],function(t,i){var n=function(){t.component("widget-numbox",{props:{config:{type:Object,"default":{}},data:Number},template:'<div class="mui-numbox">\n\t\t\t  <button class="mui-btn mui-numbox-btn-minus" :disabled="minusDisabled" type="button" @tap="triggerQuantity(-1)">-</button>\n\t\t\t  <input class="mui-numbox-input" type="number" v-model="quantity" @change="triggerCount" />\n\t\t\t  <button class="mui-btn mui-numbox-btn-plus" :disabled="plusDisabled" type="button" @tap="triggerQuantity(1)">+</button>\n\t\t\t</div>',data:function(){return{quantity:0,copyquantity:0,minusDisabled:!1,plusDisabled:!1}},created:function(){this.config.step=this.config.step||1,this.quantity=this.data||this.config.min||0,this.copyQuantity(1),this.judgeDisabled()},methods:{triggerQuantity:function(t){this.quantity=t>0?this.quantity+this.config.step:this.quantity-this.config.step,this.copyQuantity(1),this.judgeDisabled()},triggerCount:function(){var t=this,n="";return this.config.min&&this.quantity<this.config.min?n="输入数字最小不能低于"+this.config.min:this.config.max&&this.quantity>this.config.max&&(n="输入数字最大不能超过"+this.config.max),n?(i.toast({message:n,onClose:function(){t.copyQuantity(-1)}}),!1):void this.copyQuantity(1)},judgeDisabled:function(){this.config.min&&this.quantity===this.config.min?this.minusDisabled=!0:this.minusDisabled=!1,this.config.max&&this.quantity===this.config.max?this.plusDisabled=!0:this.plusDisabled=!1},copyQuantity:function(t){t>0?(this.copyquantity=this.quantity,this.$emit("finish",this.quantity,this.config)):this.quantity=this.copyquantity}}})};return n});