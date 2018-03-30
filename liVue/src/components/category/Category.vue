<template>
	<div class="_main">
		<header class="_header">
			<div class="back" v-on:click="handleBack">
				<span class="iconfont icon-houtui"></span>
				<span>后退</span>
			</div>
			
		</header>
		<Search/>
		<template>
			<div class="list">
				<dl>
					<dt class="women">女装</dt>
					<dd>
						<List v-bind="womenDresss"/>
					</dd>
				</dl>
					<dl>
					<dt class="man">男装</dt>
					<dd>
						<List v-bind="menDresss"/>
					</dd>
					
				</dl>
			</div>
		</template>
	</div>
</template>

<script>
 import Search from '../index/search.vue'
 import List from '@/components/category/DressList.vue'  
 export default{
 	data(){
		return{
			womenDresss:[
				// "T恤","外套","卫衣","毛衣/针织衫","衬衫","半身裙","连衣裙"
				{title:"T恤"},{title:"外套"},
				{title:"卫衣"},{title:"毛衣/针织衫"},
				{title:"衬衫"},{title:"半身裙"},
				{title:"连衣裙"},{title:"长裤"},
				{title:"短裤"},{title:"套装"},
				{title:"直接进入首页>>"}
			],
			menDresss:[
				{title:"T恤"},{title:"外套"},
				{title:"卫衣"},{title:"毛衣/针织衫"},
				{title:"衬衫"},{title:"牛仔裤"},
				{title:"休闲裤/西装"},{title:"短裤"},
				{title:"套装"},{title:"直接进入首页>>"}
			]
		}
 	},
 	components:{
 		Search,
 		List
 	},
 	methods:{
 		handleBack(){
 			this.$router.go(-1)
 		}
 	}
 }
	
</script>
<style>
	._main{
		position: fixed;
		left: 15%;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 91;
		background: #666;
    	box-shadow: 0 0 2em #000;
		color: #FFF;
	    font-size: 0.8rem;
	}
	._main ._header{
		height: 2.25rem;
		line-height: 2.25rem;
		padding-left: .5rem;
		letter-spacing: .25rem;
		text-align: left!important;
		border-bottom: .0667em solid #555;
	    background: #575757;
	 
	}
	._main ._header .back{
		width: 30%;
	}
	._main .list dt{
		display: block;
		width: 30%;
		height: 2.5rem;
		line-height: 2.5rem;
		border: 1px solid #606060;
		border-left: none;
		border-right: none;
		letter-spacing: 0.25rem;
	}
</style>