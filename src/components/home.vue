<template>
	<div id="home">
		<mt-swipe :auto="3000" style="height: 190px;"class="h_luobo">
		  <mt-swipe-item>
		  		<img src="https://img.lcshidai.com/data/uploads/img/2018/07/18/5b4e84b2d4916.jpg"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  		<img src="https://img.lcshidai.com/data/uploads/img/2018/07/05/5b3e369101a6d.jpg"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  		<img src="https://img.lcshidai.com/data/uploads/img/2018/07/05/5b3e36b0785cd.jpg"/>
		  </mt-swipe-item>
	</mt-swipe>
		
		<div class="packetBg">
			<div class="packetLeft">
				<div class="text">
					<p ng-if="indexNavigationNew.type==2" class="">
						恭喜！您已获
						<span class="ng-binding">首次出借加息4%</span>
						专属权益</p>						
					<p ng-if="indexNavigationNew.type==2" class="ng-binding">
						每万元出借30天可得98.62元
					</p>
				</div>
			</div>
			<div class="packetRight">
				<div class="text" ng-if="indexNavigationNew.type==2||indexNavigationNew.type==3||indexNavigationNew.type==5" ui-sref="app.tabs.plist" href="#/plist//">
				<p class="ng-binding">立即</p>
				<p class="ng-binding">使用</p>
			</div>
	<div class="arrowRight">	
			</div>
			</div>
		</div>
		
		<!--IndexMenu-->
		<div class="indexMenu">
			<ul>
				<router-link to='/detail/1' tag='span'>
				<li style="padding-top: 10px;">
					<div class="menu_tit1">
						优选推荐
						<span>与您共享财富人生</span>
					</div>
					<div class="menu_con">
						<div class="productFinace" style="margin: 0" ng-click="goInvest(recommend)">
							<div class="proTop">
								<div class="proTit ng-binding">企额贷-JYD180723001</div>
								<div class="proBox">
									<i ng-repeat="rewardExtImg in recommend.reward_ext_img" class="">
										<img class="img_icon" ng-src="//www.lcshidai.com/public/images/indexwap/prj_hongbao.png" src="//www.lcshidai.com/public/images/indexwap/prj_hongbao.png">
									</i>
								</div>
								<div class="grad">								
								</div>
							</div>
							<div class="proCenter">
								<div class="proCenItem">
									<div class="proNum orange" ng-class="recommend.bid_status>2?'gary':'orange'">
										<span class="ng-binding" style="font-size: 22px;">9</span> 
										<span ng-bind="recommend.year_rate | intaddSecond" class="ng-binding" style="font-size: 22px;">+1.00</span>
										<span>%</span>
									</div>
									<div class="text">预期年化</div>
								</div>
								<div class="proCenItem">
									<div class="proNum">
										<span class="ng-binding" style="color: #ABABAB;font-size: 22px;">30</span> 
										<span class="ng-binding" style="color: #ABABAB;">天</span>
									</div>
									<div class="text">出借天数</div>
								</div>
								<div class="proCenItem">
									<div class="proNum">
										<span class="ng-binding" style="color: #ABABAB;font-size: 22px;">3.10 </span> 
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
				</li>
			</router-link>
				<!--值得信赖-->
				<li style="padding-top: 10px;">
					<div class="menu_tit1 menu_tit2">
						值得信赖
					</div>
					<div class="menu_con2">
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/escrow.png"/>
						</router-link>
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/company.png"/>
						</router-link>
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/riskControl.png"/>
						</router-link>
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/expert.png"/>
						</router-link>
					</div>
				</li>
				<!--真实透明-->
				<li style="padding-top: 10px;">
					<div class="menu_tit1 menu_tit2">
						真实透明
					</div>
					<div class="menu_con2 menu_con3">
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/platform.png"/>
						</router-link>
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/disclosure.png"/>
						</router-link>
						<router-link to=''>
							<img src="https://www.lcshidai.com/public/images/indexwap/regulations.png"/>
						</router-link>
					</div>
				</li>
			</ul>
			
			<div class="indexBottom"><span>截止当前，如期回款率100%</span></div>
		</div>
		
		
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		name:'Home',
		data(){
			return{
				str:'这是首页页面'
			}
		},
		mounted(){

		}
	}
</script>

<style scoped="">
	*{
		padding:0;
		margin: 0;
	}

#home{
	margin-top: 10px;
}
#home .h_luobo img{
	width: 100%;
	height: 190px;
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

.menu_con2{
	display: flex;
	justify-content: space-around;
	align-content: center;
}
.menu_con2 img{
	width: 86px;
    height: 92.5px;
}
.menu_tit2{
	margin: 10px 0;
}
.menu_con3 img{
	width: 110px;
    height: 77.5px;
}
	.indexBottom {
    margin-top: 30px;
    padding-bottom: 20px;
    text-align: center;
}

.indexBottom span {
    font-size: .93rem;
    color: #CECECE;
}
	
</style>