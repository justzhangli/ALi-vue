<template>
	<div class="banner">
		<el-carousel height="150px">
	      <el-carousel-item v-for="(banner,index) in banners" :key="index">
	      
	        <img v-bind:src="banner.image">
	      </el-carousel-item>
    	</el-carousel>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				banners:[
					{"image": "https://s3.mogucdn.com/mlcdn/c45406/180226_06big153jaee4a72c5gb8014a1i1l_750x390.jpg"}, 
	           		 {"image": "https://s3.mogucdn.com/mlcdn/c45406/180301_7ah6e97f19afjlilajh1gaf7g3a53_750x390.jpg"},
	           		 {"image":"https://s3.mogucdn.com/mlcdn/c45406/180306_8ej8ghfjia144fdlbiii5bkdla930_750x390.jpg_800x9999.v1c7E.70.webp"}
					]
			}
		}
	}
</script>
<style>
	.banner{
		width: 100%;
		height: 7.5rem;
	}
	.banner img{
		height: 100%;
		width: 100%;
	}
</style>