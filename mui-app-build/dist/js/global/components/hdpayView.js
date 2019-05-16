"use strict";define(["vue","utils/userinfo","utils/muiview","api/login","api/payment"],function(t,e,o,i,n){var s=function(){t.component("hdpay-sheet",{props:{options:Object,data:Object},template:'<div class="mui-popover-content mui-hdpay">\n        <div class="mui-table-title hg-flex">\n          <span class="btntext">&nbsp;</span>\n          <h3 class="flex-one">支付确认</h3>\n          <span class="btntext" @click="closeSheet">关闭</span>\n        </div>\n        <div class="mui-content">\n          <p class="pay-tips">为了您账户资金安全，请输入验证码</p>\n          <div class="mui-view mui-input-row">\n            <input type="text" class="msgCode" name="msgCode" :placeholder="placeholder" v-model="detailInfo.msgCode" class="mui-input-clear" />\n            <button type="button" class="mui-btn mui-btn-default mui-code" @click="getCode" :class="{\'btn-disabled\': existVcode}">{{codeText}}</button>\n  \t\t\t\t</div>\n          <button type="button" class="mui-btn mui-btn-primary mui-btn-full" data-loading-icon="mui-spinner mui-spinner-white" data-loading-text="提交中" @click="onSubmit($event)">确定</button>\n  \t\t\t</div>\n  \t\t</div>',data:function(){return{detailInfo:{},codeText:"获取验证码",placeholder:"",existVcode:!1,calcCount:60,timeoutCode:null}},created:function(){this.detailInfo.orderCode=this.data.ordercode,this.userinfo()},methods:{userinfo:function(){var t=e.getUserInfo("userinfo")||{mobile:"15223456789"},o=t.mobile;this.detailInfo.mobile=o,this.placeholder="发送手机 "+(o.slice(0,3)+"****"+o.slice(7,11))},closeSheet:function(){this.timeoutCode&&(clearTimeout(this.timeoutCode),this.timeoutCode=null),this.detailInfo.msgCode="",this.codeText="获取验证码",mui("#"+this.options.id).popover("toggle")},getCode:function(){var t=this;return!this.existVcode&&(this.detailInfo.msgCode="",void n.shortmsgcode({data:{mobile:this.detailInfo.mobile,bizType:51}}).then(function(e){if(e)return t.calcCountdown(),o.toast({message:"发送验证码成功",duration:1500}),!1},function(t){console.error("接口访问错误："+t.error_message),o.toast({message:t.error_message})}))},calcCountdown:function(){var t=this;this.existVcode=!0,this.timeoutCode=setTimeout(function(){t.calcCount--,0===t.calcCount?(t.timeoutCode&&clearTimeout(t.timeoutCode),t.codeText="重新获取",t.existVcode=!1,t.calcCount=60):(t.codeText="还剩"+t.calcCount+"s",t.calcCountdown())},1e3)},onSubmit:function(t){var e=this;if(!this.detailInfo.msgCode)return o.toast({message:"验证码不能为空"}),!1;var i=mui(t.target);i.button("loading"),n.balancepay({data:this.detailInfo}).then(function(t){i.button("reset"),o.toast({message:"支付成功",onClose:function(){mui("#"+e.options.id).popover("toggle"),e.$emit("finish")}})})["catch"](function(t){console.error("接口访问错误："+t.error_message),o.toast({message:t.error_message,onClose:function(){i.button("reset")}})})}}})};return s});