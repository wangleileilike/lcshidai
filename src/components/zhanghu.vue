<template>
	<div id="zhanghu">
		<!--头部-->
		<div class="zh_top">
			<div class="zh_tit">
				<i class="iconfont icon-zhanghux" style="margin-right: 5px;" @click='toregister'></i>
				<span v-if='ylogin'>
					<span style="float: right;" @click='tuichu()'>退出登录</span>
					Hi {{this.$store.state.name}}					
				</span>
				<span v-if='nlogin'>收获，来自每一次的积累</span>				
				<i class="iconfont icon-ling" style="float: right;"></i>
			</div>
			
			<div class="zichan" v-if='ylogin'>
				<p>
					<span>净资产(元)</span>
					<img src="https://m.lcshidai.com/images/account/v2/%E7%9D%81%E7%9C%BC@3x.png"/>
				</p>
				<p style="font-size: 30px;padding-top: 5px;padding-left: 5px;">
					<!--{{this.$store.state.str}}-->
					{{str}}
				</p>
				<p style="font-size: 20px;padding-top: 30px;padding-left: 5px;">
					<!--{{this.$store.state.shouyi}}-->
					0.00
				</p>
				<p>
					<span>累计收益(元)</span>
				</p>
				
				<div class="yue">
					<div class="btn_right">
						<mt-button type="default" class="btn chongzhi" @click='chongzhi'>充值</mt-button>	
						<mt-button type="default" class="btn tixian" @click='tixian'>提现</mt-button>		
						
					</div>
					<p>可用余额</p>
					<span><!--{{this.$store.state.money}}-->{{str}}</span>					
				</div>			
			</div>
			
			<!--未登录页面-->
			<div class="zichan nlogin_zichan" v-if='nlogin'>
				<div>
					<img src="https://m.lcshidai.com/images/account/v2/logo@3x.png" style="width:70%;height: 50px;margin-left: -90px;"/>
				</div>
					
					
				<p style="font-size: 20px;padding-top: 80px;padding-left: 90px;">
					<mt-button type="default" class="btn chongzhi" @click='login' style="width: 120px;">注册/登录</mt-button>	
				</p>
				<p>
				</p>
				
				<div class="yue">
					<div class="btn_right">

						
					</div>
					<p style="padding-top: 5px;">可用余额</p>
					<span style="font-size: 22px;">登陆后即可查看</span>					
				</div>			
			</div>
			
			<!--中间部分-->
			<div class="zh_bottom">				
				<div style="padding-left: 80px;">
					<img src="https://m.lcshidai.com/images/account/v2/%E5%87%BA%E5%80%9F%E8%AE%B0%E5%BD%95@3x.png"/>
					<router-link to="/jilu" tag="span">
						<mt-cell title="出借记录" is-link>
							<span> <span></span></span>
						</mt-cell>
					</router-link>
				</div>
				
				<div style="padding-left: 80px;">
					<img src="https://m.lcshidai.com/images/account/v2/%E8%B5%84%E9%87%91@3x.png"/>
					<mt-cell title="资金记录"  is-link></mt-cell>
				</div>
			</div>
			
	
			<div class="zh_dibu zh_bottom">
				<div style="padding-left: 80px;">
					<img src="https://m.lcshidai.com/images/account/v2/%E5%A5%96%E5%8A%B1@3x.png"/>
					<mt-cell title="我的奖励"  is-link></mt-cell>
				</div>
				<div style="padding-left: 80px;">
					<img src="https://m.lcshidai.com/images/account/v2/%E5%87%BA%E5%80%9F%E9%87%91@3x.png"/>
					<mt-cell title="出借体验金" is-link>
						<span></span>
					</mt-cell>	
				</div>
			</div>
			
		</div>	
	</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Zhanghu',
		data(){
			return{
//			 str:parseInt(0.00),
			 str:'',
			 shouyi:parseInt(0.00),
			 kyye:parseInt(0.00),
			 ylogin:false,
			 nlogin:true
		}
	},
	methods:{
		toregister(){
			this.$router.push('/register')
		},
		chongzhi(){
				location.href = '#/chongzhi'
		},
		tixian(){
			location.href = '#/tixian'
		},
		login(){
			this.$router.push('/register')
		},
		tuichu(){
			this.$store.commit('denglu','');	
			location.href = '#/login'
		}
	},
	mounted(){
		if(this.$store.state.name){
			this.ylogin = true;
			this.nlogin = false;
		}
		var _this = this;
				axios('http://localhost:3000/xinxi',{
					method:'post',
					headers:{
							 'Content-type': 'application/x-www-form-urlencoded'
						},
					params:{
						name:_this.$store.state.name,
						id:2
					}					
				}).then(function(data){		
					if(_this.$store.state.name){
						//console.log(data.data)
					_this.str = data.data[0].allmoney	
					}
								
			})	
		
	}
	
}

				


</script>

<style scoped="">
	*{
	margin: 0;
	padding: 0;
}
.zh_top{
	height: 280px;
	background: url(https://m.lcshidai.com/images/account/v2/card@3x.png) no-repeat 50% 60px/80% 200px,url(https://m.lcshidai.com/images/account/v2/Group5@3x.png) no-repeat left top/100% 280px;
}
.zh_tit{
	height: 62px;
	box-sizing: border-box;
	padding:20px 20px;
	color: #C0C0C0;
}
#zhanghu{
	background:#eee;
}
.zichan{
	width:100%;
	padding-left: 60px;
	padding-right: 60px;
	box-sizing: border-box;
	color: #fff;
	padding-top: 28px;
}
.zichan img{
	height: 20px;
	width: 30px;
	float: right;
}
.yue{
	height: 98px;
	margin-top: 20px;
	color: #999;
	box-sizing: border-box;
	padding-top: 20px;
}
.btn_right{
	float: right;
}
.yue p,.yue span{
	color: #B2B2B2;
    font-family: PingFangSC-Light;
}
.yue span{
	color: #717486;
    font-size: 1.6rem;
    font-weight: 550;
    font-family: PingFangSC-Light;
}
.yue .btn{
	width: 86px;
	height: 31px;
	margin-top:10px ;
	color: #717486;
	background: #fff;
}
.zh_bottom img{
	width: 25px;
	height: 25px;
}
	.zh_bottom>div{
		position: relative;
	}
	.zh_bottom>div>img{
		position: absolute;
		left: 50px;
		top: 13px;
	}
</style>