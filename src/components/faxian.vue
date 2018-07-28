<template>
	<div id="faxian">
		<img src="static/aaa.jpg" class="niwo"/>
		<div class="tuijian">
			<p class="tj_tit">推荐码： <span style="color: #13b28d;">5122541  ></span></p>		
			<img src="static/Group2@3x.png"/>
			<p class="tj_bot">已获奖励  <span>0  元 ></span></p>
	</div>
	<!--我的积分-->
	<div class="jifen">
		<ul class="jifen_list">
			<router-link to="">
				<li>
					<img src="https://m.lcshidai.com/images/found/%E7%A7%AF%E5%88%86@3x.png"/>
					<p>我的积分</p>
					<span class="line"></span>
				</li>
			</router-link>
			
			<router-link to="">
				<li>
					<img src="https://m.lcshidai.com/images/found/%E6%96%B0%E4%BA%BA%E7%A4%BC%E9%81%87@3x.png"/>
					<p>新人尊享礼遇</p>
					<span class="line"></span>
				</li>
			</router-link>
			
			<router-link to="">
				<li>
					<img src="https://m.lcshidai.com/images/found/%E5%AE%89%E5%85%A8%E8%A7%A3%E8%AF%BB@3x.png"/>
					<p>项目安全解读</p>
				</li>
			</router-link>
			
			<router-link to="">
				<li>
					<img src="https://m.lcshidai.com/images/found/new13.png"/>
					<p>新闻动态</p>
					<span class="line"></span>
				</li>
			</router-link>
			
			<router-link to="">
				<li>
					<img src="https://m.lcshidai.com/images/found/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83@3x.png"/>
					<p>帮助中心</p>
					<span class="line"></span>
				</li>
			</router-link>
			
			
			
			
		</ul>
	</div>
	
		
		
		
	</div>
	
</template>

<script>
	export default{
		name:'Faxian'
	}	
</script>

<style scoped="">
	*{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
	#faxian{
		background: #ccc;
	}
	#faxian .niwo{
		width: 100%;
		height: 290px;
	}
	.tuijian{
		height: 150px;
		width: 100%;
		text-align: center;
		background: #fff;
	}
	
	.tuijian .tj_tit{
		height: 23px;
		line-height: 23px;
		font-family: "微软雅黑";
	}
	.tuijian img{
		height: 50px;
		width:100%;
		margin: 12px 0;
	}
	ul{
		margin-top: 6px;
	}
	.jifen_list li{
		width: 33.33%;
	    position: relative;
	    float: left;
	    padding-top: 10px;
	    text-align: center;
	    height: 82px;
	    width: 33.3%;
	    float: left;
	    color: #717487;
	    font-size: 14px;
	    border-bottom: 1px solid rgba(0,0,0,.12);
	}
		.jifen_list li img{
			height: 35px;
			width: 35px;
		}
		
		.line{
				display: block;
			    border-right: 1px solid #dadada;
			    height: 35px;
			    position: absolute;
			    right: 0;
			    top: 20px;
		}
	
</style>