<template>
	<div id="header">
		<router-link  to="/chujie">
				<span class="iconfont icon-fanhui"></span>
		</router-link>
		<span>{{name}}</span>
	</div>
</template>

<script>
	export default{
		name:"Header",
		props:['name']
	}
</script>

<style scoped="">
	*{
		margin: 0;
		padding: 0;
	}
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
		font-size: 20px;
		font-family: "微软雅黑";
	}
</style>