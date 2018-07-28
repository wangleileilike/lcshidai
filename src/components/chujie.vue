<template>
	<div id="chujie">
		<div id="botu">		
				<mt-swipe :auto="3000" style="height: 168px;">
				  <mt-swipe-item>
				  		<img src="https://img.lcshidai.com/data/uploads/img/2018/07/04/5b3c80af50362.jpg"/>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  		<img src="https://img.lcshidai.com/data/uploads/img/2018/07/04/5b3c819d7e7a0.jpg"/>
				  </mt-swipe-item>
		
			</mt-swipe>
		</div>
		<!--数据页面-->
			<!--IndexMenu-->
		<div class="indexMenu">
			<ul>
				<!--第一条-->
				
				<li style="padding-top: 10px;">
					<router-link :to="'/detail/'+item.id" tag='span' v-for='(item,index) in arr'>
					<div class="menu_con">
						<div class="productFinace" style="margin: 0" ng-click="goInvest(recommend)">
							<div class="proTop">
								<div class="proTit ng-binding">{{item.name}}</div>
								<div class="proBox">
								</div>
								<div class="grad">								
								</div>
							</div>
							<div class="proCenter">
								<div class="proCenItem">
									<div class="proNum orange" ng-class="recommend.bid_status>2?'gary':'orange'">
										<span class="ng-binding" style="font-size: 22px;">{{item.shouyi}}</span> 
										<span ng-bind="recommend.year_rate | intaddSecond" class="ng-binding" style="font-size: 22px;">+1.00</span>
										<span>%</span>
									</div>
									<div class="text">预期年化</div>
								</div>
								<div class="proCenItem">
									<div class="proNum">
										<span class="ng-binding" style="color: #ABABAB;font-size: 22px;">{{item.date}}</span> 
										<span class="ng-binding" style="color: #ABABAB;">天</span>
									</div>
									<div class="text">出借天数</div>
								</div>
								<div class="proCenItem">
									<div class="proNum">
										<span class="ng-binding" style="color: #ABABAB;font-size: 22px;">{{item.money}} </span> 
										<span class="ng-binding" style="color: #ABABAB;">万</span></div>
										<div class="text">剩余金额</div>
								</div>
							</div>
							<div class="proBottom">
								<div class="progress" style="padding: 0">
									<div class="progressBg" style="width:14%;border-bottom-left-radius:2px;height: 2px">										
									</div>
								</div>
							</div>
						</div>
					</div>		
					</router-link>	
				</li>	
							
			</ul>
		</div>
		
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Chujie',
		data(){
			return{
				arr:[]
			}
		},
		mounted(){
				var _this = this;
			axios('http://localhost:3000/chujie',{
				method:'post',
				headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
				params:{

				}					
			}).then(function(data){
				//console.log(data.data)
				_this.arr = data.data;				
			})			
		}
	}
	
</script>


<style scoped="">
	*{
	margin: 0;
	padding: 0;
}
#chujie{
	margin-top: 10px;
}

#botu{
	width:100%;
}
#chujie img{
	width: 100%;
	height: 168px;
	border-radius: 15px;
}
	.indexMenu ul{
		background: #EEEEEE;
	}
	.indexMenu ul li{
		background: #fff;
	}
	.packetBg{
    width: 100%;
    height: 60px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
}

.packetLeft {
    height: 50px;
    width: 84.5%;
    background: url(https://m.lcshidai.com/images/finance/index/packetLeft.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    z-index: 2;
    padding: 9.25px 0;
}

.packetRight {
    height: 40px;
    width: 18%;
    background: url(https://m.lcshidai.com/images/finance/index/packetRight.png) no-repeat;
    background-size: 100% 100%;
    left: 82%;
    position: absolute;
    padding: 14px 0;
}

.packetLeft .text p{
	text-align: center;
}

.packetLeft .text p:nth-of-type(1){
	    font-size: 14px;
    	color: #876D43;
}
.packetLeft .text p:nth-of-type(1) span{
	    font-size: 16px;
    	color: #DBA047;
}
	.packetLeft .text p:nth-of-type(2){
	    font-size: 12px;
    	color: #B08D53;
}
	.packetRight .text p{
		    font-size: 12px;
		    color: #FFF;
		    text-align: center;
	}
	
	.menu_tit1{
			height: 23px;
			line-height: 23px;
		    font-size: 20px;
    		color: #3C4050;
    		padding-left: 10px;
	}
	.menu_tit1 span{
		font-size: 12px;
   		 color: #A9A9A9;
	}
	
	.menu_con{
		margin: 10px 0;
	}
	.productFinace {
    background: #FFF;
    box-shadow: 0 1px 4px 1px rgba(94,103,153,.5);
    border-radius: 4px;
    margin: 0 17px 10px;
    position: relative;
}
.productFinace .proTop .proBox i{
    display: inline-block;
    width: 35px;
    margin-left: 3px;
    height: 16.28px;
}

.productFinace .proTop .proBox i img{
	 height: 17px;
}
.productFinace .proTop {
    display: inline-block;
}
.productFinace .proTop .proTit {
    margin-left: 8px;
    font-size: .93rem;
    color: rgba(0,0,0,.37);
    float: left;
    line-height: 38px;
}
.productFinace .proTop .proBox {
    float: left;
    margin: 10px 0 10px 6px;
    height: 16px;
}
.productFinace .proTop .grad {
    clear: both;
    width: 100%;
    height: 1px;
    background: -webkit-linear-gradient(left,#cacaca,#e9e9e9);
}

	.productFinace .proCenter {
    display: flex;
    justify-content: space-around;
    font-family: PingFangSC-Regular,sans-serif;
    padding: 11.5px 0;
    align-items: baseline;
}
.productFinace .proCenter .proCenItem {
    position: relative;
}
.orange {
    color: #ff811c;
}
.productFinace .proCenter .proCenItem .text {
    font-size: 12px;
    color: #ABABAB;
}		
.productFinace .proBottom, .productFinace .proBottom .progress {
    width: 100%;
}

.progressBg {
    height: 1px;
    background: #13B28D;
}

</style>