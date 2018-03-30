<template>
	<div class="list">
		<Header/>
		<ListSort/>
		<ProductsList v-bind:section2="data"/>
		<Footer/>
	</div>
	
</template>
<script>
	import Header from '@/components/common/header.vue';
	import ProductsList from '../components/Search/Hot_productsList.vue'
	import ListSort from '../components/HotProducts/list-sort.vue'
	import Footer from '../components/common/Footer2.vue'
	export default{
		components:{
			Header,
			ProductsList,
			ListSort,
			Footer
		},
		data(){
			return{
				data:"11"
			}
		},
		beforeCreate(){
			this.$jsonp('/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=927955ec-dfd0-4a6e-81fa-dc219d5aaefa&fcid=10062747&_=1520929281663&callback=jsonp1',{callbackName:"jsonp1"}).then((res)=>{
				return this.data = res.data.list
			})
		}
	}
</script>
<style></style>