"use strict";require(["vue","components/navBar","components/widgetLoading","utils/muiview","utils/map"],function(i,n,t,o,e){n(),t();new i({el:"#page-container",data:function(){return{title:"地图定位",navBarConfig:{left:{type:"icon",action:"back"}},address:"",listItems:[],curItem:{},errorcode:"",finish:!1}},created:function(){var i=this;e.init("map",function(n){n>0&&e.nearby(function(n,t){i.finish=!0,n>0?(i.listItems=t,i.errorcode=""):(i.listItems=[],i.errorcode=t)})})},methods:{addressSearch:function(){var i=this;e.goSpecificPosition(this.address,function(n){n>0&&(i.address="")})},currentPosition:function(){o.loading.show(),e.goCurrentPosition(function(i){o.loading.close()})},goSpecificPoint:function(i){o.loading.show(),this.curItem=i,e.centerMap(i.point,function(i){o.loading.close()})}}})});