<template>
	<div class="detail">
		<Header/>
		<FooterNav/>
		<Detail v-bind:id="id" v-bind:shopList="shopList"/>
		<Footer/>
	</div>
</template>
<script>
	import Footer from '../components/Detail/footer.vue';
	import FooterNav from '../components/common/Footer2.vue';
	import Detail from '../components/Detail/foodsDetail.vue';
	import Header from '../components/common/header.vue'

	import { mapState } from 'vuex'
	export default{
		components:{
			Footer,
			FooterNav,
			Detail,
			Header
		},
		data(){
			return{
				id : localStorage.shopId//获取存储的商品唯一的id值
			}
		},
		computed:{
			...mapState({
				shopList:state=>state.hot.list//获取仓库数据
			})
		}
	}
</script>
<style>
	.detail .footer2{
		bottom: 3rem;
	}
	.detail .header{
		margin-top: 0
	}
	.detail .header ul li .left{
		margin-left: 0;
	}
</style>