"use strict";require(["vue","components/navBar","components/widgetLoading","config/router","utils/muiview","api/payment"],function(e,r,t,o,i,n){r(),t();new e({el:"#page-container",data:function(){return{title:"收银台",navBarConfig:{right:{title:"返回首页",action:this.goRouter}},payInfo:{},finish:!1,cid:""}},created:function(){var e=this;i.webviewParams(function(r){e.cid=r.cid,e.type=r.type||"alipay",e.payReturn()})},methods:{payReturn:function(){var e=this,r={};"alipay"===this.type?r.outTradeNo=this.cid:"wxpay"===this.type&&(r.orderCode=this.cid),n[this.type+"Return"]?n[this.type+"Return"]({data:r}).then(function(r){e.finish=!0,"TRADE_SUCCESS"===r.tradeStatus?e.payInfo=r:e.payInfo={error_code:"error",error_message:"请进入到订单列表中查看订单支付状态"}},function(r){console.error("接口访问错误："+r.error_message),e.finish=!0,e.payInfo={error_code:r.error_code,error_message:"请进入到订单列表中查看订单支付状态"}}):console.error("暂未提供该订单查询方法")},goOrder:function(e){i.openWebview({url:o.orderdetail.url,id:o.orderdetail.id,extras:{orderCode:e,type:"waitdelivery"}})},goRouter:function(){i.openWebview(o.home)}}})});