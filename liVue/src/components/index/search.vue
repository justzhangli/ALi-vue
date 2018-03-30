<template>
	<div class="search">
		<input type="text" v-model="vaule" placeholder="搜索设计师或美衣" class="search_input">
		<button class="search_btn" v-on:click="handleSearch">搜索</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num:2,
				vaule:'',
				getValue:' '
			}
		},
		methods:{
			handleSearch(){				
				console.log(this.vaule)
				if (this.vaule =="" ) {
					alert("不能为空")
					return
				}
				 this.$router.push({path:'/searchList'})
				//axios获取对应搜索框中的数据
				/*axios({
					method:'post',
					url:'',
					data:this.vaule,
					sucess:function(){
						this.$router.push({path:'/searchList'})
					}
				})*/
			}	
			
		}
		
	}
</script>
<style>
	.search{
		width: 100%;
		font-size: 0.8rem;
		font-family: Arial!important
	}
	.search .search_input{
		width: 70%;
		height: 1.6rem;
		border: 1px solid #BBB;
		border-radius: .1rem;
		margin-top: 0.25rem;
		outline: none;
		padding-left: 0.2rem;
	}
	.search .search_btn{
		width:25%;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: center;
		color: #fff;
		border: none;
		border-color: #d95c5c;
		border-radius: .1rem;
		background: #d95c5c;
		margin-left: 0;
	}
</style>