<template>
	<div class="products">
		<ul class="products_ul">
			<li 
			v-for="(list,index) in section2" 
			v-bind:key="list.id" 
			v-on:click="handleDetail(index)"
			>
				<img v-bind:src="list.show.img" >
				<p class="list_title">{{list.title}}</p>
				<p class="price">
					<strong>￥{{list.price}}</strong>
				</p>
			</li>
			<li 
			v-for="(list,index) in data" 
			v-bind:key="list.id">
				<router-link to=""><img v-bind:src="list.show.img"></router-link>
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
		props:["section2"],		
		data(){
			return{
				data:"",
				num:2
			}
		},
		methods:{
			handleMore(){
				this.$jsonp(`/search?frame=0&page=${this.num++}&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=927955ec-dfd0-4a6e-81fa-dc219d5aaefa&fcid=10062747&_=1520929281663&callback=jsonp1`,{callbackName:"jsonp1"}).then((res)=>{
					//把最新的数据添加到原有的数据之上，再进行渲染
					//console.log(this.data)
					return this.data = res.data.list
					this.data.push(res.data.list)
					console.log(this.data)
				})

			},
			handleDetail(index){
				console.log(this.section2[index])
				var _list = this.section2[index]
				localStorage.setItem("list",_list)
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