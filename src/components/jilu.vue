<template>
	<div id="jilu">
		<!--<div class="myinvesr">-->
			<v-backheader :name="tit"></v-backheader>
			<!--<div class="myinvesrPadding">
				<div class="myinvesrBg">
					<div class="myinvesr_l ng-binding">
						0.00
						<p>待收本金(元)</p>
					</div>
					<div class="myinvesr_l ng-binding">
						0.00
						<p>预期待收收益(元)</p>
					</div>
				</div>
			</div>		-->
		<!--</div>-->
		<!--出借列表-->
		<div class="jl_box">
			<ul class="jl_list">
				<li v-for='(item,index) in arr' v-if='index'>
					<p>产品名称：<span>{{item.name}}</span></p>
					<p>年收益率：<span>{{item.shouyi}}</span>1.00%</p>
					<p>借款期限：<span>{{item.date}}</span>天</p>
					<p>出借金额：<span>{{item.money}}</span>元</p>
					<button class="shanchu" @click='del(item.goodsId,item.money,index)'>删 除</button>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	import Backheader from './backheader.vue'
	export default{
		name:'Jilu',
		data(){
			return{
				tit:'出借记录',
				arr:[],
				index:true
			}
		},
		methods:{
			del(goodsId,goodsmoney){
				var _this = this;
			axios('http://localhost:3000/jilu',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{
					name:_this.$store.state.name,
					goodsmoney:goodsmoney,
					goodsId:goodsId,
					id:3
				}					
			}).then(function(data){					
				if(data.data==1){
					_this.index = false;
					MessageBox('提示', '删除成功');						
				}else{
					MessageBox('提示', '删除失败');	
				}				
			})	
				
			}
		},
		components:{
			'v-backheader':Backheader
		},
		mounted(){
			var _this = this;
			axios('http://localhost:3000/jilu',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{
					name:_this.$store.state.name,
					id:2
				}					
			}).then(function(data){					
					_this.arr = data.data;				
			})
		}
	}
</script>

<style scoped="">
	.myinvesr {
    height: 17.872rem;
    background-image: linear-gradient(to left,#3BDD8D 0,#28C0BE 95%);
    background-size: cover;
    overflow: hidden;
    width: 100%;
}
.myinvesr .myinvesrPadding {
    padding: 0 19px;
}
.myinvesr .myinvesrPadding .myinvesrBg {
    margin-top: 2rem;
    background: url(https://m.lcshidai.com/images/account/myinvesr/bg.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 10.936rem;
    align-items: center;
    display: flex;
}
.myinvesr .myinvesr_l {
    width: 50%;
    float: left;
    font-size: 2.297rem;
    color: #000;
    text-align: center;
}
.myinvesr .myinvesr_l p {
    font-size: 1.106rem;
    color: #7c7f8f;
}

.jl_box{
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
}
.jl_box .jl_list li{
	list-style: none;
	border: 1px solid #CECECE;
	background: #3BDD8D;
	box-sizing: border-box;
	padding-left: 5%;
	margin-bottom: 10px;
}
.jl_box .jl_list li p{
	font-size: 20px;
	color: #FFF;
	line-height: 35px;
	font-family: "微软雅黑";
}
.jl_box .jl_list li p span{
	box-sizing: border-box;
}

.shanchu{
	height: 40px;
	width: 85%;
	background: #C16050;
	font-size: 20px;
	color: #fff;
}

</style>