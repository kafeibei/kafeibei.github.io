"use strict";define(["vue","components/upload"],function(n,i){i();var a=function(){n.component("image-view",{props:{data:Array,config:Object},template:'<div class="mui-table-area">\n        <div class="mui-table-view-title">\n          <span class="label">{{config.title}}<span v-if="config.maxlength">({{config.maxlength}}张)</span><em class="required" v-if="config.required">*</em></span>\n          <span class="tips" v-if="config.maxlength">已添加{{data.length}}/{{config.maxlength}}张</span>\n        </div>\n        <upload-img :data="data" :config="{\n          key: config.key\n        }"></upload-img>\n        <div class="tips warning tips-warning" v-if="config.tips">\n          <span class="tips-title">注意：{{config.tips}}</span>\n        </div>\n      </div>'})};return a});