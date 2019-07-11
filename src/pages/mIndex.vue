<template>
	<div class="content">
		<div class="m-nav">
			<ul>
				<li></li>
			</ul>
		</div>
		<template>
		  <swiper :options="swiperOption">
		    <swiper-slide><img src="../assets/images/banner1.jpg"></swiper-slide>
		    <swiper-slide><img src="../assets/images/banner2.jpg"></swiper-slide>
		    <swiper-slide><img src="../assets/images/banner3.jpg"></swiper-slide>
		    <swiper-slide><img src="../assets/images/banner4.jpg"></swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		  </swiper>
		</template>
	  <div class="advantages">
	  	<div class="title">
	  		<h1>服务和优势</h1>
	  		<div class="t-english">
	  			SERVICES AND ADVANTAGES
	  		</div>
	  		<div class="advan-desc">
	  			<dl v-for="service in services">
	  				<dt><img :src="service.img"></dt>
	  				<dd class="s-name">{{service.name}}</dd>
	  				<dd class="s-desc">{{service.desc}}</dd>
	  			</dl>
	  		</div>
	  	</div>
	  </div>
	  <div class="about-us">
	  	<div class="title">
	  		<h1>关于我们</h1>
	  		<div class="t-english">
	  			ABOUT OUR COMPANY
	  		</div>
	  	</div>
	  	<div class="about-con">
	  		<div class="fl">
	  			  <p>河南雨点机器人技术有限公司坐落在中国核心大城市——郑州。公司主营高品质机器人服务，国内外名优机器人公司合作等。做到全国价格较低！</p>
            <p>公司秉承着：诚信经营的一贯宗旨！知客户之所需，供客户之所求，急客户之所想！同样的产品我们的质量更优，同样的质量我们的价格更低，同样的价格我们的服务更好。</p>
            <p>全国覆盖省份：河南、安徽、山东、山西、河北、北京、天津、宁夏、内蒙、新疆等150台机器人的售后、调试</p>
            <p>合作的厂家：杭州智慧机器人技术有限公司、杭州方印科技有限公司、浙江国自机器人技术有限公司</p>
	  		</div>
	  	</div>
	  </div>
	  <div class="products">
	  	<div class="title">
	  		<h1>产品展示</h1>
	  		<div class="t-english">
	  			PRODUCTS DISPLAY
	  		</div>
	  	</div>
	  	<div class="products-con">
	  		<img src="../assets/images/banner1.jpg">
	  		<img src="../assets/images/banner2.jpg">
	  		<img src="../assets/images/banner3.jpg">
	  		<img src="../assets/images/banner4.jpg">
	  	</div>
	  </div>
	</div>
</template>
<script>
	export default{
		name:'index',
		data(){
			return{
				//banner 
        swiperOption: {
          autoplay: true,
			    pagination: {
			      el: '.swiper-pagination',
			      clickable:true
			    },
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    }
        },
        //服务和优势
        services:[
           {img:require('../assets/images/advan1.png'),name:'质量保证',desc:'我公司生产的所有产品均达到国际机械制造标准，质量有保障'},
           {img:require('../assets/images/advan2.png'),name:'送货上门',desc:'凡在本公司购买机械产品达xxx元，可享受市区内免费送货上门的服务'},
           {img:require('../assets/images/advan3.png'),name:'免费安装',desc:'所有机械产品均享受上门安装服务，购买产品后有专业安装师傅上门安装'},
           {img:require('../assets/images/advan4.png'),name:'售后保修',desc:'所有机械类产品享受一年包退换，三年保修的服务'}
        ]
			}
		}
	}
</script>
<style>
.swiper-container,.swiper-slide{width: 100%}
.swiper-container,.swiper-container img{width: 100%;max-height: 14rem;}
.swiper-button-prev,.swiper-button-next{display: none}
.swiper-button-prev{background-position: left top}
.swiper-button-next{background-position: left bottom}
.swiper-pagination-bullet{background: #fff;opacity: 1;}
.swiper-pagination-bullet-active{background: #1680C7}
</style>
<style scoped>
body,html{width: 100%;}
.advantages{background: #fff;padding:.5rem 0;width: 100%;margin: 0 auto}
.title{text-align: center;}
.title h1{font-size: .5rem;color: #333}
.title .t-english{font-size: .375rem;color: #666;padding:10px 0;position: relative;width: 100%;margin:0 auto;}
.title .t-english:after,.title .t-english:before{content: '';display: block;width:2rem;height: 1px;background: #666;position: absolute;left: 0;top:50%}
.title .t-english:after{left:auto;right: 0}
.advan-desc{overflow: hidden;}
.advan-desc dl{width:50%;float: left;text-align: center;}
.advan-desc dl dt img{width: 90%}
.s-name{font-size: .4rem;color: #333;margin: 12px 0}
.s-desc{font-size:.3rem;color: #999;padding:0 .3rem;}
.about-us{background: #1680C7;padding:.5rem 0;}
.about-us .title .t-english,.about-us .title  h1{color: #fff}
.about-us .title .t-english:after,.about-us .title .t-english:before{background: #fff}
.about-con{width: 100%;margin:.3rem auto 0;overflow: hidden;}
.about-con .fl{width: 100%;}
.about-con .fl p{font-size: .375rem;color: #fff;padding:.2rem .5rem}
.about-con .fr img{width: 100%;}
.products{padding: .5rem 0}
.products-con{width: 100%;margin: .3rem auto 0;font-size: 0;text-align: center;}
.products-con img{width: 45%;margin:2.5%;}
</style>