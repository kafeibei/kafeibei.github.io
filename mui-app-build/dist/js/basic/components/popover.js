"use strict";define(["vue","utils/muiview","config/function"],function(i,t,e){var n=function(){i.component("picker-popover",{props:["options"],template:'<div class="mui-popover-content picker-popover">\n        <ul class="mui-table-view">\n          <li class="mui-table-view-cell hg-flex" v-for="(item, index) in functions" :key="item" :class="{\'mui-active\': curActive.name === item.name}" @click="doActive(item)">{{item.title}}</li>\n        </ul>\n    \t</div>',data:function(){return{functions:e,curActive:{}}},methods:{doActive:function(i){this.curActive=i,this.$emit("finish",1,this.curActive),mui("#"+this.options.id).popover("toggle")}}})};return n});