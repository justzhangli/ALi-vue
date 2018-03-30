<template>
	<div class="small_nav">
		<ul>
			<template v-for="(small_nav,index) in small_navs">
				<li>
					<router-link to="">
						<img v-bind:src="small_nav.image">
					</router-link>
					<p class="title">{{small_nav.description}}</p>
				</li>
			</template>
			
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				small_navs:[{
		            "image": "https\u003A\u002F\u002Fs11.mogucdn.com\u002Fmlcdn\u002Fc45406\u002F171218_38g60flle3ijih0hk78g6i07e6eg4_225x225.gif",
		            "link": "http\u003A\u002F\u002Fact.meilishuo.com\u002Fwap\u002Fyxzc1\u003Facm\u003D3.mce.2_10_1dggc.13730.0.itmrvqLtYrwFC.m_313898\u002Dpos_0",
		            "acm": "3.mce.2_10_1dggc.13730.0.itmrvqLtYrwFC.m_313898\u002Dpos_0",
		            "sort": 1,
		            "title": "\u5723\u8BDE\u79CD\u8349",
		            "description":'圣诞种草'
		        }, {
		            "image": "https\u003A\u002F\u002Fs11.mogucdn.com\u002Fmlcdn\u002Fc45406\u002F171218_09ej59f9578c1jk92kk3448ic3i04_225x225.png",
		            "link": "http\u003A\u002F\u002Fact.meilishuo.com\u002Fnew1223\u003Facm\u003D3.mce.2_10_1dgge.13730.0.itmrvqLtYrwFC.m_313899\u002Dpos_1",
		            "acm": "3.mce.2_10_1dgge.13730.0.itmrvqLtYrwFC.m_313899\u002Dpos_1",
		            "sort": 2,
		            "title": "\u65B0\u54C1\u901F\u9012",
		            "description":'新品速递'
		        }, {
		            "image": "https\u003A\u002F\u002Fs3.mogucdn.com\u002Fmlcdn\u002Fc45406\u002F171218_5i01g6j4lj02db6e4a9928k826767_225x225.png",
		            "link": "http\u003A\u002F\u002Fact.meilishuo.com\u002Fdjdzmmingcheng\u003Facm\u003D3.mce.2_10_1b610.13730.0.itmrvqLtYrwFC.m_260486\u002Dpos_2",
		            "acm": "3.mce.2_10_1b610.13730.0.itmrvqLtYrwFC.m_260486\u002Dpos_2",
		            "sort": 3,
		            "title": "\u5927\u5BB6\u90FD\u5728\u4E70",
		            "description":'大家都在买'
		        }, {
		            "image": "https\u003A\u002F\u002Fs3.mogucdn.com\u002Fmlcdn\u002Fc45406\u002F171218_40111ih9k7300213aed9beh3af45b_225x225.png",
		            "link": "http\u003A\u002F\u002Fm.meilishuo.com\u002Fhuiyuan\u002Fsign\u003Facm\u003D3.mce.2_10_1dggg.13730.0.itmrvqLtYrwFC.m_313900\u002Dpos_3",
		            "acm": "3.mce.2_10_1dggg.13730.0.itmrvqLtYrwFC.m_313900\u002Dpos_3",
		            "sort": 4,
		            "title": "\u7B7E\u5230\u9886\u5238",
		            "description":'签到领券'
	        	}]
    		}
		}
}
</script>
<style>
	.small_nav{
		width: 100%;
		height: 6.5rem;
		margin: 0!important
	}
	.small_nav ul{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		padding: 0
	}
	.small_nav ul li{
		margin-left: 0.2rem
	} 
	.small_nav ul li img{
		width: 100%;
	}
	.small_nav ul li .title{
		font-size: 0.7rem;
		color: #999
	}
</style>