"use strict";require(["vue","utils/muiview","config/router","utils/utils"],function(e,t,a,r){new e({el:"#page-container",created:function(){var e=r.getUrlParam("out_trade_no"),i=r.getUrlParam("type")||"alipay";e?t.openWebview({url:a.paysuccess.url,id:a.paysuccess.id,extras:{cid:e,type:i,key:"outTradeNo"}}):t.toast({message:"回调参数错误"})},methods:{}})});