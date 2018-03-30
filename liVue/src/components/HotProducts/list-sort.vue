<template>
	<div class="list_sort">
		<div v-bind:class="{time_red:isRed}" v-on:click="handleRed">
			<span title="点击按上架最晚时间排序" >上架时间</span>
			<span class="iconfont icon-xiangxia" v-show='!isRed'></span>
			<span class="iconfont icon-xiangshang" v-show="isRed"></span>
		</div>
		<div v-bind:class="{amount_red:isAmounted}" v-on:click="handleAmounted">
			<span title="点击按销量从多到少排序">销量</span>
			<span class="iconfont icon-xiangxia" v-show='!isAmounted'></span>
			<span class="iconfont icon-xiangshang" v-show="isAmounted"></span>
		</div>
		<div v-bind:class="{price_red:isPriced}" v-on:click="handlePriced">
			<span title="点击按价格从高到低排序">价格</span>
			<span class="iconfont icon-xiangxia" v-show="!isPriced"></span>
			<span class="iconfont icon-xiangshang" v-show="isPriced"></span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isRed:false,
				isAmounted:false,
				isPriced:false,
				_color:{
					color:"#d95c5c"
				}
			}
		},
		methods:{
			handleRed(){
				this.isRed = !this.isRed
			},
			handleAmounted(){
				this.isAmounted = !this.isAmounted
				
			},
			handlePriced(){
				this.isPriced = !this.isPriced
				
			}
		}
	}
</script>
<style>
	@import '../../../static/base.css';
	.list_sort{
		height: 1.8rem;
		font-size: 0.7rem;
		line-height: 1.8rem;
		margin: 0;
		padding: 0;
	}	
	.list_sort div{
		display: inline-block;
		border:1px solid #ededed;
		width: 32.6%
	}
	.list_sort div .iconfont{
		font-size: 0.6rem
	}
	.list_sort .time_red,
	.list_sort .amount_red,
	.list_sort .price_red{
		color: #d95c5c
	}
</style>