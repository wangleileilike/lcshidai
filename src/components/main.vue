<template>
	<div id="main">	
		<section>
			<router-view></router-view>
		</section>
		
		<footer>
			<router-link to="/home" tag="span">
				<i class="iconfont icon-shouye"></i>
				首页
			</router-link>
			<router-link to="/chujie" tag="span">
				<i class="iconfont icon-licai"></i>
				出借
			</router-link>
			<router-link to="/zhanghu" tag="span">
				<i class="iconfont icon-zhanghux"></i>
				账户
			</router-link>
			<router-link to="/faxian" tag="span">
				<i class="iconfont icon-Compass-simple-line-icons"></i>
				发现
			</router-link>			
		</footer>
		
	</div>
		
</template>

<script>
	export default{
		name:'Main'
	}
	
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
	.router-link-active{
		color: #63af6f;
	}
	#main{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	footer {
	border-top: 1px solid #CCCCCC;
	height: 50px;
	background: #ECECEC;
	text-align: center;
	font-size: 16px;
	font-family: "微软雅黑";
}
	section{
	flex: 1;
	overflow-y: auto;
}
footer span{
	float: left;
	width: 25%;
	font-size: #666;
}
footer span i{
	display: block;
	font-size: 20px;
	margin-top: 3px;
}



</style>