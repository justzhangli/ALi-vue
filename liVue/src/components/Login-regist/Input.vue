<template>
	<div class="input">
		<el-input v-model="check.username" placeholder="请输入登录账号（邮箱或手机号）"></el-input>
		<el-input v-model="check.pwd" placeholder="请输入登录密码）"></el-input>
		<p class="warn" v-model="check.warn" v-bind:style="blockShow">{{check.warn}}</p>

		<el-button type="primary"  v-on:click="handleCheck">登录</el-button>
		<el-button type="success" v-on:click="handleRegist">注册</el-button>
		<Click/>
	</div>
</template>
<script>
	import Click from '@/components/Login-regist/Click.vue';
	export default{
		data(){
			return{
				check:{
					username:"",
					pwd:"",
					warn:"",
					
				},
				isShow:false
			}
		},
		components:{
			Click
		},
		methods:{			
			handleCheck(){
				var reg = /^1\d{10}$/gi;
				if (!this.check.username || !this.check.pwd) {
					this.check.warn="请输入邮箱或手机号";
					if (!this.isShow) {
						this.isShow = true;	
					}
					return
				}else if(!reg.test(this.check.username) || !this.check.pwd){
					//判断手机号格式是否正确
					this.check.warn="请输入正确的手机号"
					if (!this.isShow) {
						this.isShow = true;	
					}
					return
				}else{
					this.isShow = false;
					this.$store.commit('changeLogin',1)
					//设置cookie
					this.$cookies.set("username",this.username,"1","/login")
					
					//登录成功自动跳转到用户中心界面
					setTimeout(()=>{
					this.$router.push({path:'/user/:user',username:this.check.username})
					},1000)
				}
				
							
			},
			handleRegist(){
				this.$router.push({path:'/regist'})
			}
		
		},
		computed:{
			blockShow(){
				return {display:this.isShow?"block":"none"}				
			}
		}
	}
</script>
<style>
	.input{
		width: 100%;
		padding: 0;
		margin: 0;
		overflow: hidden;
	}
	.input .el-input{
		border-top: none;
		border-top: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		padding: .6em .6em .5em .6em;
		height: 2.5rem;
		widows: 100%;
		margin: 0
	}
	.input .warn{
		background-color: #ffb;
		border: 1px solid #ffb;
		color: red;
		text-align: center;
		padding: .35rem 0;
		font-size:.8rem;
		display: none;
	}
	.input .el-input .el-input__inner{
		border:none;
	}
	.input .el-button--primary{
		border-color: #d95c5c;
		background-color: #d95c5c;
		width: 95%;
		margin-top: .75rem;
		border-radius: 2px;
		box-shadow: 0 1px 2px #CCC;
	}
	.input .el-button--success{
		border-color:#3b83c0;
		background-color: #3b83c0;
		width: 95%;
		margin-top: .5rem;
		border-radius: 2px;
		box-shadow: 0 1px 2px #CCC;
		margin-left: 0!important
	}
</style>