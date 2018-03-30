<template>
	<footer class="footerDetail">
		<ul>
			<li>
				<span class="iconfont icon-sixin"></span>
				<span>发送私信</span>
			</li>
			<li>
				<span class="iconfont icon-shoucang"></span>
				<span>收藏</span>
			</li>
			<li><button class="add" v-bind:click="AddtoCart">加入购物车</button></li>
			<li><button class="buy" v-bind:click="handleBuy">立即购买</button></li>
		</ul>
	</footer>
</template>
<script>
	export default{
		methods:{
			AddtoCart(){
				// this.$router.push({path:'/cart'})
			}
		}
	}
</script>
<style>
	*{margin: 0;padding: 0}
	.footerDetail {
	    width: 100%;
	    height: auto;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: #FFF;
	    z-index: 999;
	}
	.footerDetail ul {
	    overflow: hidden;
	    margin: 0;
	    margin-top: 0.25rem;
	    padding: 0;
	    height: 100%
	}
	.footerDetail ul li{
		float: left;
		height: 100%;
		
	}
	.footerDetail ul li:nth-child(2),.footerDetail ul li:nth-child(1){
		padding-right: .8rem;
	}
	.footerDetail button{
		width: 6rem;
		color: #fff;
		height: 2.3rem;
		text-align: center;
	}
	.footerDetail ul li .iconfont {
	    display: block;
	    font-weight: normal;
	    display: block;
	   font-size: 1.2rem;
	    margin: auto;
	}
	.footerDetail ul li  span{
		font-size: .7rem;
	}
	.footerDetail ul li .add{
		background: #d95c5c;
		border: none;
	}
	.footerDetail ul li .buy{
		background: #3b83c0;
		border: none;
	}
</style>
