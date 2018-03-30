<template>
	<div class="footer2">
		<router-link to="">
			<span class="iconfont icon-home1"></span>
		</router-link>
		<router-link to="">
			<span class="iconfont icon-shangpinfenlei"></span>
		</router-link>
		<router-link to="">
			<span class="iconfont icon-gouwuchekong"></span>
	</router-link>
	</div>
</template>
<script>
	export default{}
</script>
<style>
	.footer2{
		/*/background: rgba(0,0,0,0.8);*/
		position: fixed;
		bottom: 0;
		right: 0.5rem;
	}
	.footer2 a{
		width:2rem;height: 2rem;
		line-height:2rem;
		text-align: center;
		display: block;
		color: #FFF;
		
		margin: .4rem;
		background: rgba(0,0,0,0.8);
		border-radius: 50%; 

	}
	.footer2 a .iconfont{
		font-size: 1.2rem;
	}
</style>