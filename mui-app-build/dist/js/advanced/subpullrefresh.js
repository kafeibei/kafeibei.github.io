"use strict";require(["vue","components/widgetLoading","utils/utils","utils/muiview"],function(e,t,i,n){t();new e({el:"#subpage-container",data:function(){return{title:"下拉刷新和上拉加载",navBarConfig:{left:{type:"icon",action:"back"}},finish:!1,errorCode:"",data:[],count:20,page:1}},created:function(){var e=this;setTimeout(function(){n.pullRefresh("#pullrefresh",e.pullupRefresh,e.pulldownRefresh)},800),this.getList()},methods:{getList:function(e){var t=this;return!n.loading.isWaiting()&&(n.loading.show(),void setTimeout(function(){console.log("page",t.page);for(var i=t.count*(t.page-1),o=t.count*t.page,s=i;s<o;s++)t.data.push({title:"Item "+(s+1),name:"Item "+(s+1)});t.finish=!0,n.loading.close(),e&&e()},800))},pullupRefresh:function(){var e=this;console.info("加载更多",this.page),this.page<3?(this.page++,this.getList(function(t){mui("#pullrefresh").pullRefresh().endPulldownToRefresh(e.page>=3)})):mui("#pullrefresh").pullRefresh().endPullupToRefresh(this.page>=3)},pulldownRefresh:function(){console.info("上拉刷新"),this.getList(function(e){mui("#pullrefresh").pullRefresh().endPulldownToRefresh()})}}})});