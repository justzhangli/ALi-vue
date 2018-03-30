<template>
	<div class="mainContent"  v-bind:id="id" >
		<div class="mainDetail" v-for="Listitem in shopList" v-if="Listitem.shopId == id">
		<!-- 图片展示 -->
		<div class="img">
			<img v-bind:src="Listitem.show.img">
		</div>
		<!-- 商品描述 -->
		<div class="product-base">
			<h3 class="title">{{Listitem.title}}</h3>
			<div class="product-label">
				<label>购买价</label>
				<span  class="data-price" v-bind:text="Listitem.price" >
					￥{{Listitem.price}}
				</span>
			</div>
		</div>
		<!-- 官方设计 -->
		<div class="desigin">
			<router-link to="">
				<span>眨眼官方工作室</span>
				<span>进入设计师主页</span>
				<span class="iconfont icon-gengduo"></span>
			</router-link>
		</div>
		<!-- 商品选择尺寸,颜色等 -->
		<div class="product-select">
			<div class="product-color">
				<span>颜色</span>
				<button class="color-value" 
				v-for="(item,index) in Listitem.color" 
				v-bind:id="index"
				v-on:click="handleColor(item,Listitem.price,num,Listitem.title)">{{item}}</button>
			</div>
			<div class="product-size">
				<span>尺寸</span>
				<button class="size-value" 
				v-for="(item,index) in Listitem.size" 
				v-on:click="handleSize(item)">{{item}}</button>
			</div>
			<div class="products-amount">
				<span>数量</span>
				<div class="caculate">
					<span class="reduce" v-on:click="handleRe">-</span>
					<input type="text" v-model:value="num" class="amount">
					<span class="add" v-on:click="handleAdd">+</span>
				</div>
			</div>
		</div>
		<!-- 商品详情 -->
		<div class="product-detail">
			<div class="product-tab">
				<span class="pro-de">商品详情</span>
				<span class="buy-know">购买须知</span>
				<div class="img-detail">
					<img src="">
				</div>
				<div class="buy-need-know"></div>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
	export default{
		props:["id","shopList"],
		data(){
			return{
				num:1,
				color:"",
				size:"",
				price:"",
				title:""
				
			}
		},
		methods:{
			//数量减
			handleRe(){
				if(this.shopNum >= 2){
					return this.num = (this.num) -= 1//
				}	
			},
			//数量增加
			handleAdd(){
				return this.num = (this.num) += 1
			},
			handleColor(item,price,num,title){
				this.color = item
				this.price = price
				this.title = title
			},
			handleSize(item){
				this.size = item
				console.log(this.size)
			}
		}
	}
</script>	
<style>
	.mainContent{
		font-size: .7rem;
		padding-bottom: 2.5rem;
	}
	.product-size{
		margin-top: .5rem;
	}
	.product-color .color-value,.product-size .size-value{
		margin-right: .5rem;
		height: 1.5rem;
		line-height: 1.5rem;
		padding-left: .5rem;
		padding-right: .5rem;
		display: inline-block;
		border: none;
		outline: none;
	}
	.product-color .selected{
		color: #fff;
		background: #ec2c00;
	}
		
	.products-amount .amount{
		width: 1.5rem;
		height: 1rem;
		text-align: center;
		outline: none;
	}
	.products-amount .reduce,.products-amount .add{
		font-size: 1rem;
	}
</style>