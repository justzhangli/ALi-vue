<template>
	<footer class="footer">
		<ul>
			<li>
				<router-link to='/'>
					<span class="iconfont icon-home1
			"></span>
					<span>首页</span>
				</router-link>
			</li>
			<li >
				<router-link to='/hot'>
					<span class="iconfont icon-hot"></span>
					<span>人气单品</span>
				</router-link>
			</li>
			<li>
				<router-link to='/category'>
					<span class="iconfont icon-shangpinfenlei"></span>
					<span>商品分类</span>
				</router-link>
			</li>
			<li>
				<router-link to='/cart'>
					<span class="iconfont icon-gouwuchekong"></span>
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to='/login'>
					<span class="iconfont icon-gerenzhongxin"></span>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default{
		/*methods:{
			handleData(){
				// this.$router.push({path:'/searchList'})
				this.$jsonp('search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=927955ec-dfd0-4a6e-81fa-dc219d5aaefa&sort=new&_=1520512547254&callback=jsonp7',{callbackName:'jsonp7'}).then((res)=>{
				//console.log(res.data)
				})
			}
		}*/
	}
</script>
<style>
	.footer{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.8);
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.footer ul{
		overflow: hidden;
		margin: 0;
		margin-top: 0.25rem;
		padding: 0
	}
	.footer ul li{
		width: 20%;
		float: left;
	}
	.footer ul li a{
		color: #FFF;
		font-size: 0.6rem;
		font-weight: normal;
		font-style: normal;
	}
	.footer ul li a .iconfont{
		font-size:.8rem;
		display: block;
		font-weight: normal;
	}
	.footer ul li .router-link-active{
		color: #06c0b6!important;
	}
</style>