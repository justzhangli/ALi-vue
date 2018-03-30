import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

//定义异步组件，加载登录组件,通过webpack的require.ensure方法来把代码从主bundle中进行抽离
//const Login = (resolve) =>{require.ensure([],()=>{resolve(require('@/pages/Login.vue'))},'login')}
const Hot = (resolve) =>{require.ensure([],()=>{resolve(require('@/pages/HotPro.vue'))},'HotPro')}
const SearchList = (resolve) =>{require.ensure([],()=>{resolve(require('@/pages/SearchList.vue'))},'SearchList')}
const Category =  (r) => {require.ensure([],() => r(require('@/pages/CategoryPage.vue')),'CategoryPage')}
const Login =  (r) => {require.ensure([],() => r(require('@/pages/Login1.vue')),'login')}
const Regist =  (r) => {require.ensure([],() => r(require('@/pages/Regist.vue')),'login')}
const Detail =  (r) => {require.ensure([],() => r(require('@/pages/Detail.vue')),'login')}
const Cart =  (r) => {require.ensure([],() => r(require('@/pages/Cart.vue')),'cart')}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    /*{
      path:'/login',
      name:'Login',
      component:Login
    },*/
    {
      path:'/hot',
      name:'Hot',
      component:Hot
    },
    {
      path:'/searchList',
      name:'searchList',
      component:SearchList
    },
    {
      path:'/category',
      name:"Category",
      component:Category
    },
    {
      path:'/login',
      name:"Login",
      component:Login
    },
    {
    path:'/regist',
    name:'regist',
    component:Regist
    },
    {
      path:'/detail',
      name:"detail",
      component:Detail
    },
    {
      path:'/cart',
      name:"cart",
      component:Cart
    }
  ]
})
