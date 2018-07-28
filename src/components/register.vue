<template>
<div id="register">
	<v-backheader :name="tit"></v-backheader>
	<div id="reg_box">
		<p class="login-title-v2">注册新账号</p>
		<p class="login-desc-v2">完成注册后，立即获得新人福利</p>
		<div id="reg_form" style="padding-top: 30px;">
				<mt-field label="手机号" placeholder="请输入手机号" v-model='phoneNum' type="tel" style="height: 50px;"></mt-field>	
				
	
				
			<mt-field label="验证码" placeholder="请输入验证码" type="text" style="height: 50px;" v-model='msmyzm'></mt-field>
			
			
			<mt-field label="密码" placeholder="请设置6-18位字母数字组合密码" v-model='pass' type="password" style="height: 60px;"></mt-field>
			<button class="sendCode" @click="yzm()" style="width: 100%;height: 50px;font-size: 18px;">{{str}}获取验证码</button>
		</div>
		
		<mt-button type="primary" @click='register()' style="width: 100%;margin-top: 50px;">确认注册</mt-button>
		<p class="reg_bottom">
			<span style="font-size: 14px;">轻触"确认注册"，即表示你同意</span>
			<span class="protocol-text" style="color: #13B28D;font-size: 14px;">《理财时代注册协议》</span>			
		</p>
		<router-link to='/login' tag='p' style="color: #13B28D;font-size: 16px;text-align: left;">已有账户?直接登录</router-link>
	</div>
			
</div>
</template>

<script>
	import axios from 'axios';
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import Backheader from './backheader.vue'
export default{
	name:'Register',
	data(){
		return{
			str:'',
			tit:'注 册',
			phoneNum:'',
			msmyzm:'',
			pass:''
		}
	},
	methods:{
					yzm(){						
						var reg = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;												
						if(this.phoneNum==''){
							MessageBox('提示', '手机号码不能为空');
					}else if(reg.test(this.phoneNum)==false){
						MessageBox('提示', '手机号码格式不对');						
					}else{
							//开始请求验证码
							var num = 60;
							var _this = this;
							clearInterval(timer)
							var timer = setInterval(function(){
								num--;
								_this.str = num + 's后重新'	
								if(num<=0){
									_this.str = ''
									clearInterval(timer);
								}								
							},1000)
						axios('http://localhost:3000/register',{
							method:'post',
							headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
						params:{
							phoneNum:_this.phoneNum,
							id:"1"
							}				
						}).then(function(data){
							console.log(data.data)
						})
					}
											
				},
				register(){
					var reg = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
					var res = /^[0-9a-zA-Z!@#$^]{6,18}$/;   //6-18位 ，由数字、大写字母、小写字母、特殊字符
					if(this.phoneNum==''){
							MessageBox('提示', '手机号码不能为空');
					}else if(this.msmyzm==''){
							MessageBox('提示', '验证码不能为空');
					}else if(this.pass==''){
						MessageBox('提示', '密码不能为空');
					}else if(reg.test(this.phoneNum)==false){
						MessageBox('提示', '手机号码格式不对');
					}else if(res.test(this.pass)==false){
						MessageBox('提示', '密码格式不对');
					}else{
						var _this = this;
						axios('http://localhost:3000/register',{
							method:'post',
							headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
						params:{
							phoneNum:_this.phoneNum,
							pass:_this.pass,
							msmyzm:_this.msmyzm,
							id:'2'
						}
						}).then(function(data){
							console.log(data.data)	
							if(data.data==1){
								MessageBox('提示', '注册成功');
								location.href = '#/login'
							}else if(data.data==2){
								MessageBox('提示', '用户名已存在');
							}else{
								MessageBox('提示', '验证码错误');
							}
						})						
					}
									
				}
		},
		components:{
			'v-backheader':Backheader
		}
		
}
</script>

<style scoped="">
	*{
		margin: 0;
		padding: 0;
	}
	#reg_box{
		    margin: 18.565px;
    	font-family: PingFangSC-Regular,sans-serif;
	}
	.login-title-v2{
		    font-size: 24px;
   			 color: #8a8fa8;
    		padding-top: 40px;
	}
	.login-desc-v2{
		    margin-top: 3px;
   			 color: #ababab;
	}
	.sendCode {
    width: 100%;
    background-color: #fff;
    color: #13B28D;
    border: 1px solid #13B28D;
    height: 30px;
    border-radius: 12px;
}
.reg_bottom{
	    margin-top: 10px;
	    font-size: 12px;
	    color: #666;
	    text-align: inherit;
}
	
	
</style>