"use strict";require(["vue","components/navBar","components/message","utils/muiview"],function(e,n,t,i){n(),t();new e({el:"#page-container",data:function(){return{title:"关于我们",navBarConfig:{left:{type:"icon",action:"back"}},version:""}},created:function(){this.getVersion()},methods:{getVersion:function(){var e=this;i.getVersion(function(n,t){n>0&&(e.version=t)})}}})});