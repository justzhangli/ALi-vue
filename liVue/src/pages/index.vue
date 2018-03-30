<template>
	<div class="index">
		<v-header></v-header>
		<v-banners></v-banners>
		<v-search ></v-search>
		<v-nav></v-nav>
		<v-products v-bind:section1="data"></v-products>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import Header from '@/components/common/header.vue';
	import Footer from '@/components/common/footer.vue';
	import Banners from '@/components/index/banners.vue';
	import Search from '@/components/index/search.vue';
	import SmallNav from '@/components/index/small_nav.vue';
	import ProductLists from '@/components/index/Hot_productsList.vue'

	export default{
		components:{
			'v-header':Header,
			'v-footer':Footer,
			'v-banners':Banners,
			'v-search':Search,
			'v-nav':SmallNav,
			'v-products':ProductLists
		},
		data(){
			return{
				data:""
			}
		},
		beforeCreate(){	
			//加载数据	
			this.$jsonp(`/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=927955ec-dfd0-4a6e-81fa-dc219d5aaefa&sort=pop&_=1520923178248&callback=jsonp4`,{callbackName:"jsonp4"}).then((res)=>{
					return this.data = res.data.list
			});
			
		}
	}
</script>
<style>
.index{
	overflow: auto;
}
	
</style>