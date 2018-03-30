<template>

	<header class="header">
		<ul>
			<li>
				<span class="iconfont icon-houtui left" v-if="path != '/'" v-on:click="handleHoutui"></span>
			</li>
			<li>{{showMsg.msg}}</li>
			<li class="nav_msg" >
				<router-link to="">
					<span class="iconfont icon-gerenzhongxin right"></span>
				</router-link>
			</li>
			
			
		</ul>
	</header>
	
</template>
<script>
	export default{
		data(){
			return{
				msg:"",
				path:this.$route.path//当前路径
			}
		},
		methods:{
			//后退一步
			handleHoutui(){
				this.$router.go(-1)
			}
		},
		computed:{
			showMsg:function(){
				if (this.path == "/" || this.path == "/index") {
					return{msg:"闪眼"} 
				}else if(this.path == "/hot"){
					return{msg:"人气单品"}
				}else if(this.path == "/searchList"){
					return{msg:"首页"}
				}else if(this.path == '/login' || this.path == '/regist'){
					return{msg:"会员登录"}
				}else if(this.path == '/detail'){
					return {msg:"商品详情"}
				}
			}
			
		}
	}
</script>
<style>
	.header{
		height: 2.2rem;
 		width: 100%;
 		background:rgba(0,0,0,0.8);
		line-height: 2.2rem;
		padding:0 0.5rem;
		margin-top: -1.05rem;
	}
	.header ul{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.header ul li{
		text-decoration: none;
		color: #FFF;
		font-size: 0.7rem;
		text-align: center;
	}
	.header ul li .left{
		float: left;
		margin-left: -2.05rem;
	}
	.header ul li{
		float: left;
	}
	.header ul .iconfont{
		color: #fff;
	}
	.header .right{
		float: right;
		font-size: 1.2rem;
		font-style: normal;
	}
</style>