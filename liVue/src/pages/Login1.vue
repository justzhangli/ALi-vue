<template>
	<div class="main">
		<Header/>
		<LoginInput/>
		<!-- <Footer/> -->
	</div>
</template>
<script>
	import Header from '@/components/common/header.vue';
	import Footer from '@/components/common/footer.vue';
	import LoginInput from '@/components/Login-regist/Input.vue'
	export default{
		components:{
			LoginInput,
			Header,
			Footer,
		}

	}
</script>
<style></style>