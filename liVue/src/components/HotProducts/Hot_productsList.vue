<template>
	<div class="products">
		<ul class="products_ul">
			<li 
			v-for="(list,index) in uploadVuex"
			v-bind:key="list.shopId"
			v-bind:id="list.shopId" @click="handleId(list.shopId)">
				<span>{{list.shopId}}</span>
				<router-link to="/detail"><img v-bind:src="list.show.img"></router-link>
				<p class="list_title">{{list.title}}</p>
				<p class="price">
					<strong>￥{{list.price}}</strong>
				</p>
			</li>
		</ul>
		<div class="upload_more" v-on:click="handleMore">加载更多</div>
	</div>
</template>
<script>
	export default{
		props:["uploadVuex"],
		methods:{
			handleMore(){
				/*this.$jsonp(`/search?frame=0&page=${this.num++}&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=%25E8%25A3%2599%25E5%25AD%2590%25E5%25A5%2597%25E8%25A3%2585&_mgjuuid=927955ec-dfd0-4a6e-81fa-dc219d5aaefa&_=1520494519181&callback=jsonp1`,{callbackName:"jsonp1"}).then((res)=>{
					this.data.push(this.data,res.data.list)//把最新的数据添加到原有的数据之上，再进行渲染
				})*/
	
			},
			handleId(shopId){
				localStorage.setItem("shopId",shopId)
			}
		}
	}
</script>
<style>
	.products{
		width: 100%;
		height: 100%;
        margin-top: -0.65rem;
	}
	.products .products_ul{
		width: 100%;
		height: 100%;
		padding: 0;
	}
	.products .products_ul li{
		float: left;
		width: 47%;
		height: 100%;
		margin-left: 0.4rem;
		margin-top: .25rem;
        box-shadow: 0 0.1em 0.1em #6c6a6a
	}
	.products .products_ul h4{
		color: #444;
		font-weight: normal;
	}
	.products .products_ul li img{
		width: 100%;
		height: 100%;
	}
	.products .products_ul li .list_title{
		width: 100%;
		overflow: hidden;
		font-size: 0.6rem;
		text-align: center;
		height: 1.75rem;
		line-height: 1.75rem;
		margin: 0;
		padding: 0
	}
	.products .products_ul li .price{
		background: #444444;
		width: 100%;
		height: 1.75rem;
		line-height: 1.75rem;
		text-align: center;
		color: #FFF;
		border-top: 1px dotted #CCC;
		margin: 0;
		padding: 0
	}
	.products .products_ul .upload{
		font-size: 1rem;
		display: block;
		text-align: right;
	}
	.products .products_ul .upload .img{
		height: 1.5rem;
	}
	.products .upload_more{
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.6rem;
		color: ##999;
	}
</style>