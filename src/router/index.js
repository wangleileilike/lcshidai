import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Home from '../components/home'
import Chujie from '../components/chujie'
import Zhanghu from '../components/zhanghu'
import Faxian from '../components/faxian'
import Register from '../components/register'
import Login from '../components/login'
import Detail from '../components/detail'
import Fenye from '../components/fenye'
import Jilu from '../components/jilu'
import Chongzhi from '../components/chongzhi'
import Tixian from '../components/tixian'

Vue.use(Router)

export default new Router({
  routes: [
				{
					path:'/',
					redirect:'/home'
				},
				{
					path:"/",
					component:Main,
					children:[
						{
							path:'/home',
							component:Home
						},
						{
							path:'/chujie',
							component:Chujie
						},
						{
							path:'/zhanghu',
							component:Zhanghu
						},
						{
							path:'/faxian',
							component:Faxian
						}
						
					]
				},
					{
							path:'/register',
							component:Register
						},
						{
							path:'/login',
							component:Login
						},
							{
							path:'/detail/:id',
							component:Detail
						},
						{
								path:'/fenye',
							component:Fenye
						},
						{
								path:'/jilu',
							component:Jilu
						},
						{
							path:'/chongzhi',
							component:Chongzhi
						},
						{
							path:'/tixian',
							component:Tixian
						}
  ]
})
