"use strict";define(["vue","echarts"],function(t,i){var e=function(){t.component("pie-echarts",{props:["data","id","config"],template:'<div class="echarts-canvas pie-echarts" :id="id"></div>',data:function(){return{options:{title:{textStyle:{color:"#3D4D79",fontSize:"12",fontWeight:"normal"}},calculable:!1,color:["#FF6E88","#24DCB3","#EFB645"],series:[{type:"pie",radius:["50%","70%"],itemStyle:{normal:{borderWidth:2,borderColor:"#fff",borderType:"solid"}}}]}}},created:function(){var t=this;this.id||(this.id="echart_"+utils.randomNum(4)),setTimeout(function(i){t.initEcharts()},800)},methods:{initEcharts:function(){var t=document.getElementById(this.id),i=window.echarts.init(t);i.setOption(this.echartOpts())},echartOpts:function(){return this.options.series[0].data=this.data,this.options}}})};return e});