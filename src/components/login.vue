<template>
<div id="register">
	<v-header :name='tit'></v-header>
	
	<div id="reg_box">
		<img src="https://m.lcshidai.com/images/account/logo@3x.png" class="login_logo"/>
		<div id="reg_form" style="padding-top: 30px;">
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" style="height: 50px;" v-model='phoneNum'></mt-field>				
			<mt-field label="密码" placeholder="请输入密码" type="password" style="height: 60px;" v-model='pass'></mt-field>

		</div>
		
		<mt-button type="primary" @click='denglu()' style="width: 100%;margin-top: 50px;">登录</mt-button>
	<p class="reg_bottom">			
			<p class="zhuce_tit" style="text-align: left;">
				没有账号?
			<router-link to="/register" tag="span" style="color: #13B28D;">立即注册</router-link>
			<span class="protocol-text" style="color: #13B28D;float: right;">忘记密码?</span>
		</p>
		</p>
	</div>
			
</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	import Backheader from './backheader.vue'
export default{
	name:'Login',
	data(){
		return{
			tit:'登 录',
			phoneNum:'',
			pass:''
		}
	},
	components:{
		'v-header':Backheader
	},
	methods:{
		denglu(){
			if(this.phoneNum==''){
				MessageBox('提示', '登录名不能为空');
			}else if (this.pass=='') {
				MessageBox('提示', '密码不能为空');
			}else{
				var _this = this;
			axios('http://localhost:3000/login',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{
					phoneNum:_this.phoneNum,
					pass:_this.pass,
					id:'2'
				}					
			}).then(function(data){
				//console.log(data.data)
				if (data.data==1) {
					MessageBox('提示', '登录成功');
					_this.$store.commit('denglu',_this.phoneNum)
					location.href = '#/home'
				}else{
					MessageBox('提示', '用户名或密码错误');
					location.href = '#/login'
				}
			})
			}
			
			
		}
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
	    text-align: right;
}
.login_logo{
	width: 25%;
    margin-left: 37.5%;
    padding-top: 0;
    margin-top: 30px;
}
	
	
</style>