"use strict";define(["utils/muiview","api/global"],function(n,e){var t={};return t.getCurrentPosition=function(n){plus.geolocation.getCurrentPosition(function(e){n&&n(1,e.coords)},function(e){n&&n(-1,e.message)})},t.goCurrentPosition=function(e){n.osplus()?t.getCurrentPosition(function(n,o){t.centerMap(o,e)}):setTimeout(function(){e&&e(1)},1e3)},t.goSpecificPosition=function(e,o){return!!e&&void(n.osplus()?plus.maps.Map.geocode(e,{city:t.city},function(n){var e=n.coord;t.centerMap(e,o)},function(e){o&&o(-1),n.toast({message:"异常："+e.message})}):o&&o(1))},t.initMap=function(n,e,o){t.appMap=new plus.maps.Map(n,{top:0,left:0,width:"100%",height:300,zoom:15});t.centerMap(e,o)},t.centerMap=function(e,o){if(n.osplus()){var i=new plus.maps.Point(e.longitude,e.latitude);t.appMap.centerAndZoom(i,15),t.addMarker(e,o)}else setTimeout(function(){o&&o(1)},1e3)},t.addMarker=function(n,e){t.appMap.removeOverlay(t.curMarker);var o=new plus.maps.Point(n.longitude,n.latitude),i=t.curMarker=new plus.maps.Marker(o),u=new plus.maps.Position(o);i.setLabel(u.name||""),t.appMap.addOverlay(i),e&&e(1)},t.reverseGeocode=function(n,e){var t=new plus.maps.Point(n.longitude,n.latitude);plus.maps.Map.reverseGeocode(t,{},function(n){e&&e(1,n.address)},function(n){e&&e(-1,n.message)})},t.nearby=function(o){n.osplus()?t.getCurrentPosition(function(n,e){var i=new plus.maps.Search(t.appMap),u=[],a=["小区","写字楼","商场","餐厅","酒店","医院"],r=a.length,s=0,p=0,c=0;i.onPoiSearchComplete=function(n,e){if(s++,0===n){if(p++,e.currentNumber>0)for(var i=0,a=e.currentNumber;i<a;i++){var l=e.getPosition(i);l.longlat=[l.point.longitude,l.point.latitude].join("_"),u.push(l)}}else c++;s===r&&(c===s&&o&&o(-1,"检索失败"),0===u.length?o&&o(-1,"没有检索到结果"):(t.city=u[0].city,o&&o(1,u)))};for(var l=new plus.maps.Point(e.longitude,e.latitude),f=0;f<r;f++)i.poiSearchNearBy(a[f],l,350)}):e.locationConfig().then(function(n){o&&o(1,n)})},t.init=function(e,o){return!!e&&void(n.osplus()?mui.plusReady(function(){t.getCurrentPosition(function(n,i){t.initMap(e,i,o)},function(){o&&o(-1)})}):o&&o(1))},t});