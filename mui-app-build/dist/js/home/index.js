"use strict";require(["vue","mui","components/bottomBar","components/navBar","components/backTop","config/function","config/router","utils/muiview"],function(n,t,e,i,o,u,a,c){i(),o(),e();new n({el:"#page-container",data:function(){return{title:"首页",navBarConfig:{},functions:u}},created:function(){this.muiBack()},methods:{goPage:function(n){a[n]?c.openWebview(a[n]):c.toast({message:"暂未配置该页面数据"})},muiBack:function(){var n=null;t.back=function(){n?(new Date).getTime()-n<2e3&&plus.runtime.quit():(n=(new Date).getTime(),c.toast("再按一次退出系统!"),setTimeout(function(){n=null},2e3))}}}})});