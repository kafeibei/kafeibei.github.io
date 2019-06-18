"use strict";define(["vue","previewimage","utils/upload","utils/muiview"],function(i,e,n,t){var a=function(){i.component("upload-img",{props:{data:{type:Array,"default":[]},config:Object},template:'<div class="flex flex-wrap img-upload">\n        <div class="img-box show-image" :class="{hasimg: item.url}" v-for="(item, index) in data" :key="index">\n          <img :src="item.url" data-preview-src="" data-preview-group="1" />\n          <div class="delete-round" @click.stop="deleteImg(index)">\n            <i class="iconfont icon-del"></i>\n          </div>\n        </div>\n        <div class="img-box add-image" @click="triggerUpload()">\n          <i class="el-icon-plus"></i>\n        </div>\n  \t\t</div>',created:function(){mui.previewImage()},methods:{triggerUpload:function(){var i=this;n.choose(this.config.key,function(e,n){e>0&&i.data.push(n)})},deleteImg:function(i){var e=this;t.confirm({message:"确定删除此图片？",onClose:function(n){n&&e.data.splice(i,1)}})}}})};return a});