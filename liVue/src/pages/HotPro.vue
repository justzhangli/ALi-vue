<template>
	<div class="content">
		<v-header></v-header>
		<v-sort></v-sort>
		<v-product v-bind:uploadVuex="uploadVuex"></v-product>
		<Footer/>
	</div>
</template>
<script>
	import Header from '../components/common/header.vue'
	
	import ProductsList from '../components/HotProducts/Hot_productsList.vue'
	import ListSort from '../components/HotProducts/list-sort.vue'
	import Footer from '../components/common/Footer2.vue'

	import { mapState } from 'vuex'
	export default{
		components:{
			'v-header':Header,
			'v-product':ProductsList,
			'v-sort':ListSort,
			Footer
		},
		computed:{
			/*uploadVuex(){
				return this.$store.state.hot.state
			}*/
			...mapState({ 
       			uploadVuex:state=>state.hot.list //参数为状态的state
			})
		}
	}
</script>
<style></style>