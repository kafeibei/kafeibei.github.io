"use strict";define(["utils/muiview","utils/headers","api/index","api/link"],function(e,a,i,t){var o=function(o,s,l){e.loading.show();var n=i.getUrl(t.uploadFile);if(e.osplus()){var r=plus.uploader.createUpload(n,{method:"POST"},function(a,i){if(e.loading.close(),200===i){var t=JSON.parse(a.responseText);if("100"===t.code)if(t.data&&t.data[0]){var o="http://172.25.50.201:8080/api/",s="http://hwcsp.cn:7089/api/",n=t.data[0].portrait;n.indexOf(o)>-1&&(n=n.replace(o,s)),l&&l(1,n)}else l&&l(-1,"资源返回错误");else l&&l(-1,t.message)}else l&&l(-1,"上传失败");e.loading.close()},function(a){e.loading.close(),console.error("rej",a)}),d=a();for(var p in d)r.setRequestHeader(p,d[p]);r.addFile(o,{key:"files"}),r.start()}else setTimeout(function(){e.loading.close(),l&&l(1,"http://demo.dcloud.net.cn/test/audio/apple.mp3")},1e3)};return o});