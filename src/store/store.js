import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	
	state:{
		name:'',
		money:'0.00',
		shouyi:'0.00',
		str:'0.00',
		detailId:'',
		fyname:'',
		fymoney:'',
		fydate:'',
		fyshouyi:''
	},
	mutations:{
		denglu(a,b){
			a.name = b;
		},
		chongzhi(a,b){
			a.money = b;
		},
		shouyi(a,b){
			a.shouyi = b;
		},
		str(a,b){
			a.str = b;
		},
		goodsId(a,b){
			a.detailId = b;
		},
		goodsName(a,b){
			a.fyname = b;
		},
		fymoney(a,b){
			a.fymoney = b;
		},
		fydate(a,b){
			a.fydate = b;
		},
		fyshouyi(a,b){
			a.fyshouyi = b;
		}
	}

})
