"use strict";define(["vue","utils/video","utils/muiview","utils/utils"],function(i,n,o,s){var a=function(){i.component("upload-video",{props:{data:Array,config:Object},template:'<div class="video-area">\n        <div class="img-upload video-upload">\n          <div class="video-box show-image hasimg hg-flex" v-for="(item, index) in videoList" :key="index" @click="playVideo(item, index)" :class="{active: index === playInfo.index && playInfo.on === 1}">\n            <div class="video-area"></div>\n          </div>\n          <div class="img-box add-image" @click="triggerUpload()" v-if="data.length < config.maxlength">\n            <i class="el-icon-plus"></i>\n          </div>\n        </div>\n        <p class="tips-status" v-if="playInfo.on !== 0">当前播放状态：{{playInfo.on > 0 ? \'播放中；当前播放视频地址：\' + playInfo.src : \'已暂停\'}}</p>\n        <div v-if="!osplus">\n          <div class="video-obj" v-if="playInfo.on > 0">\n            <video id="videoDom" class="video-dom" :src="playInfo.src"></video>\n          </div>\n        </div>\n        <div v-else>\n          <div class="video-obj" v-if="playInfo.on > 0" id="videoDom"></div>\n        </div>\n  \t\t</div>',data:function(){return{videoList:[],playInfo:{on:0,src:""},osplus:""}},created:function(){this.data&&(this.videoList=this.data),this.osplus=o.osplus()},methods:{triggerUpload:function(){var i=this;n.choose(this.config.key,function(n,o){n>0&&i.videoList.push({src:o})})},playVideo:function(i,s){var a=this;1===this.playInfo.on&&s===this.playInfo.index?n.stop(function(i){a.playInfo.src="",a.playInfo.index=-1,a.playInfo.on=-1}):(this.playInfo.src=i.src,this.playInfo.index=s,setTimeout(function(){a.playInfo.on=1,setTimeout(function(){n.play(i.src,function(i,n){i<0&&o.toast({message:n||"视频播放错误",cbk:function(){a.playInfo.on=-1,a.playInfo.src="",a.playInfo.index=-1}})})},50)},50))}}})};return a});