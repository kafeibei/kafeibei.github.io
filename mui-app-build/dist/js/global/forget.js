"use strict";require(["vue","md5","components/navBar","api/login","utils/userinfo","utils/muiview","utils/verify","config/router"],function(e,o,s,r,t,n,i,a){s();new e({el:"#page-container",data:function(){return{title:"找回密码",navBarConfig:{left:{type:"icon",action:"back"}},timeoutCode:null,calcCount:60,codeText:"获取验证码",module:"member",form:{sid:"",mobile:"",password:"",vcode:""},password:"",confirmPassword:"",existVcode:!1}},methods:{checkmobile:function(e){return i.checkPhone(e)},checkpassword:function(e){return i.checkPassword(this.form.password)},checkconfirmPassword:function(){return this.form.confirmPassword!==this.form.password&&-1},getCode:function(){var e=this;if(!this.form.mobile)return n.toast({message:"请输入手机号码",duration:1500}),!1;if(i.checkPhone(this.form.mobile)===-1)return n.toast({message:"手机号码格式错误",duration:1500}),!1;r.msgCode({data:{mobile:this.form.mobile}}).then(function(o){o&&(e.calcCountdown(),n.toast({message:"发送验证码成功",duration:1500}))},function(e){console.error("接口访问错误："+e.error_message),n.toast({message:e.error_message,duration:1500})})},calcCountdown:function(){var e=this;this.existVcode=!0,this.timeoutCode=setTimeout(function(){e.calcCount--,0===e.calcCount?(e.timeoutCode&&clearTimeout(e.timeoutCode),e.codeText="重新获取",e.existVcode=!1,e.calcCount=60):(e.codeText="还剩"+e.calcCount+"s",e.calcCountdown())},1e3)},validate:function(){var e={};return this.form.mobile?i.checkPhone(this.form.mobile)===-1?(e.error_message="手机号格式错误",e.error_code="mobile"):this.form.vcode?this.password&&this.confirmPassword?this.password!==this.confirmPassword?(e.error_message="两次输入的密码不一致",e.error_code="password"):i.checkPassword(this.password)===-1&&(e.error_message="密码格式错误",e.error_code="password"):(e.error_message="请输入密码",e.error_code="password"):(e.error_message="请输入验证码",e.error_code="vcode"):(e.error_message="请输入手机号码",e.error_code="mobile"),e.error_code?Promise.reject(e):Promise.resolve()},next:function(e){var o=this,s=mui(e.target);s.button("loading"),this.validate().then(function(e){o.submitForm(s)})["catch"](function(e){n.toast({message:e.error_message,onClose:function(){s.button("reset")}})})},submitForm:function(e){return this.form.password=window.md5(this.password).toUpperCase(),n.toast({message:"修改密码成功",onClose:function(){t.setUserInfo({ss:"abc1234%",registerStatus:3,applyinfo:{condMap:{},provinceId:1,cityId:35,regionId:379,province:"北京市",city:"北京市",region:"东城区",address:"何虎小店",userId:"1013988940494712832",applyStatus:3,applyType:2,companyType:"1",companyName:"何虎小店",fristBusiness:"何虎小店",secondBusiness:null,tradeForm:null,companyUrl:"www.***.com",personLiable:null,zip:null,contactPersonMobile:null,contactPerson:"何虎",birthday:null,sex:null,qq:"123456",email:"suchsun@163.com",tel:null,businessVolume:"0",photo:"saas/100/member/client/180703/180703b476d47dcf904aa7aec53cb202c838da.jpg",extinfo:null,remark:null,creator:null,createTime:1530588833e3,modifyPerson:null,modifyTime:1530588833e3,saasId:100,mobile:null,registSource:null,registChannel:null,registTime:null},userinfo:{userId:"1013988940494712832",mobile:"18969067660",name:"游客",saasId:null,memberLevelId:100,profit:null,lastAccessTime:0},token:"MTAxMzk4ODk0MDQ5NDcxMjgzMiwxNTMwNjY4Mjc2MTUzLDIxOC43Ny4xMDYuMTI1LDEwMSwxMg==-BD66B55E2C23ACF126D6E3FBD7138FEC-ZsQMFPFh"}),e.button("reset")}}),setTimeout(function(){n.openWebview(a.login)},2e3),!1}}})});