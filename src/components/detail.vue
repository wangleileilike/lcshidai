<template>
	<div id="detail">
		<v-header :name="tit"></v-header>
		<div class="investHeaderBg">		
			<div class="investContent">
				<p class="title">预期年化收益率</p>
					<div class="de_data">
						<strong>{{shouyi}}</strong>+<b>1.00</b><span>%</span>
					</div>
				</div>
				<!--30天-->
				<div class="de_month">
					<div class="flo de_month_left">
						<p><span>{{date}}</span>天</p>
						<p>借款期限</p>
					</div>
					<div class="flo de_month_right">
						<p><span>{{money}}.00</span>万元</p>
						<p>剩余金额</p>
					</div>					
				</div>
		</div>	
		<div>
			<mt-cell title="出借限额">
  				<span><span>100</span>元，<span>100</span>元</span>递增
			</mt-cell>
			<mt-cell title="还款方式">
  				<span>到期还本付息</span>
			</mt-cell>
			<mt-cell title="出借时间">
  				<span>2018-8-11</span>
			</mt-cell>
		</div>
		<mt-button class="btn btn-ckxq" @click='ckxq()' plain>点击查看详情</mt-button>
		<mt-button class="btn btn-ckxq btn-buy" @click='buy()' plain>立即出借</mt-button>
		</div>
	</div>
</template>




<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	import Header from './header.vue'
	export default{
		name:'Detail',
		data(){
			return{
				tit:'',
				shouyi:'',
				date:'',
				money:''
			}
		},
		methods:{
			ckxq(){
				this.$store.commit('goodsId',this.$route.params.id);	
				this.$router.push('/fenye');				
			},
			buy(){
				var _this = this;
				MessageBox.prompt('请输入出借金额').then(({ value, action }) => {
					var _this = this;
			axios('http://localhost:3000/jilu',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{
					goodsId:this.$route.params.id,
					phoneNum:_this.$store.state.name,
					name:_this.tit,
					shouyi:_this.shouyi,
					date:_this.date,
					money:value,
					id:1
				}					
			}).then(function(data){					
				if(data.data==1){
					MessageBox('提示', '出借成功');	
				}else{
					MessageBox('提示', '出借失败');	
				}
				
			})		
			
			//开始
			
							
								
			});			
			}
		},
		components:{
			'v-header':Header
		},
		mounted(){
			var _this = this;
			axios('http://localhost:3000/detail',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{
					id:_this.$route.params.id
				}					
			}).then(function(data){
				//console.log(data.data)
				_this.tit = data.data[0].name;
				_this.shouyi = data.data[0].shouyi;
				_this.date = data.data[0].date;
				_this.money = data.data[0].money;
				_this.$store.commit('goodsName',data.data[0].name);	
				_this.$store.commit('fymoney',data.data[0].money);	
				_this.$store.commit('fydate',data.data[0].date);								
				_this.$store.commit('fyshouyi',data.data[0].shouyi);				
			})	
		}
		
	}
</script>

<style scoped="">
	.investHeaderBg {
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to bottom,#04B2A6 0,#1CD1A7 92%);
    box-sizing: border-box;
    padding-top: 50px;
    	color: #fff;
}
.investHeaderBg .investContent .title {
    font-size: .85rem;
    color: #fff;
    text-align: center;
}
.de_data{
	text-align: center;
}
.de_data>strong{
	font-size: 34px;
}
.de_data>b{
	font-size: 22px;
}
.de_month{
	margin-top: 10px;
}
.flo{
	float: left;
	width: 49%;
	text-align: center;
	
}
.de_month_left{
	border-right: 1px solid #fff;
}
.btn-ckxq{
	width: 40%;
	margin-top: 30px;
	margin-left: 30%;
}
.btn-buy{
	background: #1CD1A7;
	color: #fff;
	border: 0;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0;
	width: 100%;
}

</style>