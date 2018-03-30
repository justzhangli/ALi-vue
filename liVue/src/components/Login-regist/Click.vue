<template>
	<div class="click">
		{{check}}
		<div class="findPwd">
			<router-link to="">忘记密码了？点这里找回密码</router-link>
			<p class="thirdLogin">还可以使用第三方网站登录</p>
		</div>

		<div class="thirdLink">
			<span class="iconfont icon-qq-copy"></span>
			<span class="iconfont icon-weibo"></span>
		</div>
		<div class="footerNav">
			<ul class="Nav">
				<li><router-link to="">登录</router-link></li>
				<li>|</li>
				<li><router-link to="">注册</router-link></li>
				<li>|</li>
				<li><router-link to="">首页 </router-link></li>
				<li>|</li>
				<li><router-link to="">返回顶部</router-link></li>

			</ul>
		</div>
	</div>
</template>
<script>

	//需求分析：多个页面公用同一个按钮组件
	//抽象对象：按钮
	//对象属性：按钮名称
	//对象行为：点击
	//对象方法：数据提交
	//regist和inpye打开的
	export default{
		props:["check"],//验证输入的用户密码
		/*data(){
			return{
				btnText:""
			}
		},
		methods:{			
			eventLoginHandle(){
				alert(1);
			}
		}*/
	}
</script>
<style>
	
	
	.click .findPwd{
		height: 2.5rem;
	}
	.click .findPwd,.input .thirdLink{
		text-align: center;
		border-bottom: 1px solid #ededed;
		font-size: .6rem;
		margin-top: 1rem;	
	}
	.click .thirdLink{
		line-height: 30px;
		/*padding-left: 1.5rem;*/
	}
	.click .thirdLogin{
		color: #999
	}
	.click .thirdLink .iconfont{
		font-size: 2.5rem;
		padding-right: 1.5rem;
		padding-left: .5rem;
	}
	.click .thirdLink .icon-qq-copy{
		color: #4589d6
	}
	.click .thirdLink .icon-weibo{
		color:#da8336
	}
	.footerNav{
		padding-left: 1.5rem; 
	}
	.footerNav .Nav{
		font-size: 0.6rem;
	}
	.footerNav .Nav li{
		float: left;
	}
	.footerNav .Nav li a{
		color: #444;
		padding: 0.6rem;
	}
</style>