<template>
	<div id="chongzhi">

	<div id="header">
				<span class="iconfont icon-fanhui" @click='back()'></span>
			<span>{{tit}}</span>
	</div>
	
	<div class="line">
		<label for="jine">提现金额：</label>
		<input type="text" v-model='money' id="jine" placeholder="请输入提现金额" />
	</div>
	
	<button  @click="tixian()" style="width: 100%;height: 50px;font-size: 18px;margin-top: 30px;">确定提现</button>
	</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Tixian',
		data(){
			return{
				tit:'提现',
				money:''
			}
		},
		methods:{
			back(){
				history.go(-1)
			},
			tixian(){
				var _this = this;
				axios('http://localhost:3000/xinxi',{
					method:'post',
					headers:{
							 'Content-type': 'applica	tion/x-www-form-urlencoded'
						},
					params:{
						name:_this.$store.state.name,
						outmoney:_this.money,
						id:3
					}					
				}).then(function(data){			
					if(data.data==1){						
						MessageBox('提示', '提现成功');	
						location.href = '#/zhanghu'
					}else{
						MessageBox('提示', '提现失败');	
					}				
			})	
			}
		}
	}
</script>

<style scoped="">
	.iconfont{
		float: left;
		margin-top: 5px;
		margin-left: 5px;
	}
	#header{
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 24px;
		color: #fff;
		font-family: "微软雅黑";
		background: #002A80;
	}
	
	.line{
		margin-top: 100px;
		height: 60px;
		width:100%;
		padding: 5px;
		box-sizing: border-box;
	}
	input{
		height: 30px;
		font-size: 18px;
		margin-left: 5px;
		margin-top: 5px;
	}
	label{
		margin-left: 5px;
		font-size: 20px;
	}
</style>

