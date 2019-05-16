"use strict";define(["utils/muiview","utils/muiajax","utils/storage","utils/utils"],function(o,i,n,e){var t={};return t.config={filepath:"/sdcard/",filename:"Sounds"},t.choose=function(i,n){var e=[{title:"录音"},{title:"选择录音文件"}];o.osplus()?plus.nativeUI.actionSheet({cancel:"取消",buttons:e},function(o){switch(o.index){case 1:t.byRecord(i,n);break;case 2:t.bySystem(i,n);break;default:console.info(o.index)}}):n&&n(1)},t.byRecord=function(o,i){i&&i(0)},t.bySystem=function(o,i){i&&i(1)},t.directory=function(i,n){o.osplus()?plus.io.resolveLocalFileSystemURL(t.config.filepath,function(o){o.getDirectory(t.config.filename,{create:!0},function(o){var i=o.createReader(),t=function(){i.readEntries(function(o){o.length?!function(){var i=[];for(var t in o)o[t].isFile&&!function(){var n={name:o[t].name,toLocalURL:o[t].toLocalURL()};o[t].getMetadata(function(o){n.modificationTime=e.formatDate(o.modificationTime,"YYYY/MM/DD hh:mm"),n.size=e.bytesToSize(o.size),i.push(n)})}();setTimeout(function(){n&&n(1,i)},80)}():n&&n(1,[])},function(o){n&&n(-1,o.message)})};t()})},function(o){n&&n(-1,o.message)}):n&&n(1,[{name:"Recorder_004.wav",modificationTime:"2018/12/21 17:37",size:"83KB",toLocalURL:t.config.filepath+t.config.filename+"/Recorder_004.wav"},{name:"song.ogg",modificationTime:"2018/12/24 16:49",size:"5.5KB",toLocalURL:t.config.filepath+t.config.filename+"/song.ogg"}])},t.cleanHistory=function(i){o.osplus()?plus.io.resolveLocalFileSystemURL(t.config.filepath,function(o){o.getDirectory(t.config.filename,{create:!0},function(o){o.removeRecursively(function(){i&&i(1)},function(o){i&&i(-1,o.message)})})},function(o){i&&i(-1,o.message)}):i&&i(1)},t.ajax=function(o,e,t){i(o,e,function(i,e){var a=n.get("localAudioInfo")||{};a[e]=o,n.set("localAudioInfo",a),t&&t(i,e)})},t.downloader=function(o,i){return i(1,o),!1},t.duration=function(i,n,e){var a=void 0;!o.osplus()||e?(a=t.audioObj=new Audio,a.src=i,a.onloadedmetadata=function(){n&&n(1,parseInt(a.duration))},a.onerror=function(){n&&n(-1,"audio")}):t.downloader(i,function(o,i){if(o>0){a=t.audioObj=plus.audio.createPlayer(i),console.log("local",i);var e=a.getDuration();console.log("duration-1",e),isNaN(e)?setTimeout(function(){e=a.getDuration(),console.log("duration-2",e),isNaN(e)?n&&n(-1,"h5+"):n&&n(1,parseInt(e))},1800):n&&n(1,parseInt(e))}else n&&n(-1,i)})},t.play=function(i,n){var e=void 0;o.osplus()?t.downloader(i,function(o,i){o>0?(e=t.audioObj=plus.audio.createPlayer(i),e.play(function(){t.positioncbk&&t.positioncbk(1,parseInt(e.getDuration()))},function(o){n&&n(-1,o.message),t.positioncbk&&t.positioncbk(-1,parseInt(o.message))}),n&&n(1)):n&&n(-1,i)}):(e=t.audioObj=new Audio,e.src=i,e.play(),e.onerror=function(){n&&n(-1)},e.onloadedmetadata=function(){n&&n(1)})},t.stop=function(o){t.audioObj.pause(),o&&o(1)},t.getPosition=function(i){if(o.osplus()){var n=parseInt(t.audioObj.getDuration()),e=0;t.iternvalTime=setInterval(function(){e++;var o=t.audioObj.getPosition();i&&i(1,o),e>=n&&(clearInterval(t.iternvalTime),t.iternvalTime=0)},1e3),i&&(t.positioncbk=i)}else t.audioObj.ontimeupdate=function(){i&&i(1,t.audioObj.currentTime)},t.audioObj.onended=function(){i&&i(1,parseInt(t.audioObj.duration))}},t});