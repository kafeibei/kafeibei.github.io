"use strict";require(["vue","components/navBar","muiview/dtPicker","utils/utils"],function(t,e,i,n){e();new t({el:"#page-container",data:function(){return{title:"日期时间选择器",navBarConfig:{left:{type:"icon",action:"back"}},pickerInfo:{}}},created:function(){this.pickerInfo.datetime=n.formatDate(null,"YYYY-MM-DD hh:mm"),this.pickerInfo.date=n.formatDate(null,"YYYY-MM-DD"),this.pickerInfo.month=n.formatDate(null,"YYYY-MM")},methods:{pickerTime:function(t,e){var n=this,o=i(e,this.pickerInfo[t]);o(function(e,i){n.$set(n.pickerInfo,t,e),i.dispose()})}}})});