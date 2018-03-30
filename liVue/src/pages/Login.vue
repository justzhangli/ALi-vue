<template>
	<div class="login">
		<div class="form-group">
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="username">
	  	</div>
	    <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="pwd">
	    </div>
	    <button type="submit" class="btn btn-default" v-on:click.stop.prevent="handleSubmit">Submit</button>
  </div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				username:"", 
				pwd:""
			}
		},
		methods:{

			handleSubmit(){
				var username = this.username;
				var pwd = this.pwd;
				console.log(username)
				if (!username || !pwd) {
					alert("不能为空")
					return
				}
				axios.post('/api/login',{
					username,pwd
				}).then((res)=>{
					console.log(res.data)
					this.$router.push('/')
				})
			}
		}
	}
</script>
<style>
	.btn-default{
		background: #337ab7;
		color: white
	}
</style>