<template>
	<div class="regist">
		<Header/>
		<div class="registType">
			<label class="typeRe">注册方式</label>
			<input type="radio" name="type" value="手机" v-model="picked" checked>
			<label>手机</label>
			<input type="radio" name="type" value="邮箱" v-model="picked">
			<label>电子邮箱</label>
		</div>

		<div class="Regist_input" >
			<label>{{picked}}</label>
			<input type="text" v-bind:title="picked" v-bind:placeholder="'请输入'+ picked" v-model="user">
		</div>

		<div class="Regist_input code-box">
			<label>验证码</label>
			<input type="text" v-bind:placeholder="'请输入'+picked+'验证码'" v-bind:title="picked" class="check">
			<el-button class="codeBtn" type="success" plain>获取验证码</el-button>
		</div>

		<div class="sex">
			<label class="sexCheck">您的性别</label>
			<input type="radio" name="sex" value="男">
			<label>男士</label>
			<input type="radio" name="sex" value="女" checked>
			<label>女士</label>
		</div>

		<div class="Regist_input" v-for="item in typeInput">
			<label>{{item.msg}}</label>
			<input v-bind:type="item.typeInput" v-bind:placeholder="item.placeholder" >

		</div>
		<el-button type="success" v-on:click="handleRegist">完成注册</el-button>

		<el-button type="primary"  v-on:click="handleLogin">我有账号，我要登录</el-button>
		
		<Click />

	</div>
</template>
<script>
	import Click from '@/components/Login-regist/Click.vue'//引用组件
	import Header from '@/components/common/header.vue'

	//在这个页面调用click组件里的方法的语法是啥？
	export default{

		data(){
			return{
				picked:"手机号",
				user:"",
				typeInput:[
					{msg:"登录密码",type:"text",placeholder:"请设置登录密码"},
					{msg:"确认密码",type:"text",placeholder:"请确认登录密码"}	
				]
			}
		},
		components:{
			Header,
			Click//定义组件
		},
		methods:{
			handleRegist(){
				if(!this.user){
					alert("不能为空")
				}else{
					this.$router.push({path:'/user'})
				}
				
			},
			handleLogin(){
				this.$router.push({path:'/login'})
			}
		}
	}
</script>
<style>

	.Regist_input,.registType,.sex{
		width: 100%;
		height: 2.5rem;
		border-bottom:1px solid #ededed;
		font-size: .65rem;
		line-height: 2.5rem;
		padding-left:.6rem;
		margin: 0;
		text-align: left;
	}
	.Regist_input .tishi,.registType .typeRe,.sex .sexCheck{
		width: 25%;
		display: inline-block;
	}
	.Regist_input label{
		width: 25%;
		display: inline-block;
	}
	.Regist_input input{
		width: 70%;
		border:none;
		outline: none;
	}
	.radio{
		width: 1rem;
		height: 1rem;
		background-color: none;
		border: 1px solid #666
	}
	.Regist_input .is-plain{
		float: right;
		margin-right: .5rem;
		margin-top: .25rem!important;
		width: 30%!important;
		text-align: center;
		background: #67c23a;
		color: #FFF
	}
	.Regist_input .check{
		width: 33%;
	}
	.regist .el-button--primary{
		border-color: #d95c5c;
		background-color: #d95c5c;
		width: 95%;
		margin-top: .75rem;
		border-radius: 2px;
		box-shadow: 0 1px 2px #CCC;
	}
	.regist .el-button--success{
		border-color:#3b83c0;
		background-color: #3b83c0;
		width: 95%;
		margin-top: .5rem;
		border-radius: 2px;
		box-shadow: 0 1px 2px #CCC;
		margin-left: 0!important
	}
	.click .thirdLink{
		margin-top: 1rem;
	}
</style>