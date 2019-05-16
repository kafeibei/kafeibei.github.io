"use strict";define(["vue","utils/muiview"],function(i,n){var t=function(){i.component("widget-range",{props:{config:{type:Object,"default":{}},data:Number},template:'<div class="mui-range hg-flex">\n        <label class="number-tips">{{config.min}}</label>\n        <div class="flex-one mui-input-row mui-input-range">\n          <input type="range" id=\'block-range\' :step="config.step" v-model="quantity" :min="config.min" :max="config.max" @change="triggerCount" />\n        </div>\n        <label class="number-tips">{{config.max}}</label>\n      </div>',data:function(){return{quantity:0}},created:function(){this.config.step=this.config.step||1,this.quantity=this.data||this.config.min||0,this.triggerFinish()},methods:{triggerCount:function(){this.triggerFinish()},triggerFinish:function(i){this.$emit("finish",this.quantity,this.config)}}})};return t});