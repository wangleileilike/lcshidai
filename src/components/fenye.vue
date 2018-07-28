<template>
	<div id="fenye">
		<header>
				<router-link  to="" tag='span'>
					<strong @click="back()">X</strong>
				</router-link>
				<span>{{this.$store.state.fyname}}</span>
		</header>
		<!--同页面的分页-->
		<el-tabs v-model="activeName" @tab-click="handleClick" class="diff">
		    <el-tab-pane label="项目信息" name="first" class="diff_per">
		    	<div class="box">
		    		<div class="sec_box1">
			  			<mt-cell title="产品名称">
						 	 <span>{{this.$store.state.fyname}}</span>
						</mt-cell>
						<mt-cell title="剩余金额">
						 	 <span>{{this.$store.state.fymoney}}</span>万
						</mt-cell>
						<mt-cell title="起利时间">
						 	 出借后<span>1</span>日
						</mt-cell>
						<mt-cell title="可以提前结束出借">
						 	 <span>否</span>
						</mt-cell>
						<mt-cell title="是否允许展期">
						 	 <span>否</span>
						</mt-cell>
						<mt-cell title="是否提前还款">
						 	 <span>否</span>
						</mt-cell>
						<mt-cell title="安全等级">
						 	 <span>B</span>级-本金收益比较稳定
						</mt-cell>
			  		</div>
			  		
			  		<!--项目介绍-->
			  		<div class="sec_box1 sec_box1_word1">
			  			<h3>项目介绍</h3>
			  			<p>本借款项目系为中小企业的经营者提供的经营性借款项目。该项目由中小企业作为借款人，由专业的金融风控机构推荐到理财时代平台申请借款。经过理财时代平台风控复审之后，确认借款人资信良好，借款用途真实，由借款人在平台方发布借款信息，申请借款。</p>
			  			<p>
			  				本借款项目由借款人的合作经营账户受到理财时代资金监管，并且由合作企业及企业法人承担连带责任担保。本产品具有借款资金监管、借款用途真实，借款保障系数高的特点。
			  			</p>
			  			
			  		</div>
		    	</div>
			  		
		    </el-tab-pane>
		    <el-tab-pane label="风控说明" name="second">风控说明
		    	<div class="box">
		    		<div class="sec_box1 fksm">
		    			<h3>风控流程</h3>
		    			<ul>
		    				<li>借款人实地考察</li>
		    				<li>借款人真实性、反欺诈、黑名单审核</li>
		    				<li>借款人征信审核，互联网大数据征信审核</li>
		    			</ul>
		    		</div>
		    		<div class="sec_box1">
		    			<h3>优化措施</h3>
		    			<ul>
		    				<li>还款来源全流程全场景监控，确保还款资金按时回款</li>
		    			</ul>
		    		</div>
		    		<div class="sec_box1">
		    			<h3>风控结论</h3>
		    			<ul>
		    				<li>经风控部综合评估，借款人资信良好，还款来源充足，同意放款</li>
		    			</ul>
		    		</div>
		    		<div class="sec_box1">
		    			<h3>风险提示</h3>
		    			<ul>
		    				<li>市场有风险，出借需谨慎</li>
		    			</ul>
		    		</div>
		    		
		    		
		    		
		    	</div>
		    
		    </el-tab-pane>
		    <el-tab-pane label="回款计划" name="third">
		    	<div>
		    		以下数据根据"出借金额<span>21500.00</span>,期限<span>30</span>天"计算，您的收益请至[账户-出借记录]中查看
		    	</div>
		    <div class="sec_box1 sec_huikuan">
		    		<p>应收回款合计<span style="float: right;margin-bottom: 20px;">单位：元</span></p>
		    		<strong style="font-size: 28px;margin: 20px 0;">21659.04</strong>
		    		<div style="clear: both;">
		    			<span>应收本金 <b>21500.00</b></span>
		    			 <span style="float: right;">应收利息 <b>159.04</b></span>
		    		</div>
		    </div>
		    
		    </el-tab-pane>
		    <el-tab-pane label="出借记录" name="fourth">
		    	<div class="sec_box1">		    				    	
			    	<div class="field-wrap">
			    		<div class="borderLine"></div>	    					    		
			    		<span class="field-wrap-ranking-title">出借排行榜</span>
			    		<div class="borderLine"></div>		    					    		
			    	</div>
			    	<div class="logo_flex">
					    	<dl>
					    		<dt><img src="https://m.lcshidai.com/images/finance/invest/first.png"/></dt>
					    		<dd>等你上榜</dd>
					    	</dl>
					    	<dl>
					    		<dt><img src="https://m.lcshidai.com/images/finance/invest/second.png"/></dt>
					    		<dd>等你上榜</dd>
					    	</dl>
					    	<dl>
					    		<dt><img src="https://m.lcshidai.com/images/finance/invest/thrid.png"/></dt>
					    		<dd>等你上榜</dd>
					    	</dl>
			    	</div>
		    	</div>
		    </el-tab-pane>
  		</el-tabs>
  		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Fenye',
		data(){
			return{
				tit:'企额贷-JYD180723001',
				 activeName: 'first'
			}
		},
		methods:{
			 handleClick(tab, event) {
        			console.log(tab, event);
    		 },
    		 back(){
    		 	history.go(-1)
    		 }
		}
	}
</script>

<style scoped="">
	#fenye{
		position: relative;
		overflow: hidden;
	}
	header{
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		font-family: "微软雅黑";
		position: fixed;
		z-index: 999999999;
		background: #ccc;
	}
	strong{
		float: left;
		padding-left: 10px;
		font-size: 22px;
		font-weight: normal;
	}
	.diff{
		padding-left: 10px;
		padding-right: 20px;
		margin-top: 70px;
	}
	.diff_per{
		margin: 0;
		padding: 0;
	}
	.sec_box1{
		border: 1px solid #cecece;
		margin-bottom: 10px;
		padding: 10px;
	}
	.box{
		overflow: auto;
	}
	.sec_box1_word1 p{
		text-indent: 22px;
		line-height: 28px;
	}
	.sec_box1_word1 h3{
		margin: 8px 0;
	}
	.fksm ul li{
		background: url(https://m.lcshidai.com/images/finance/invest/icon2.png) no-repeat 5px 5px/14px 14px;
		padding-left: 20px;
		height: 20px;
		margin: 8px 0;
	}
	
	.sec_huikuan{
		margin: 10px;
		height: 150px;
		border:1px solid #13B28D;
	}
	.field-wrap {
	line-height: 4rem;
    display: flex;
    position: relative;
    font-size: 18px;
    color: #7C7F8F;
	}
	.borderLine {
    position: absolute;
    width: 50px;
    background: #7C7F8F;
    height: 1px;
    top: 50%;
    left: 65%;
}

.field-wrap .borderLine:nth-of-type(1){
	 left: 20%;
}
	.field-wrap-ranking-title {
    margin: 0 auto;
}

.logo_flex{
	display: flex;
	align-items:center ;
}
.logo_flex dl{
	width: 33.3%;
	text-align: center;
}
.logo_flex dl img{
	width: 39px;
	height: 41px;
}
</style>