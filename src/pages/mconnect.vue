<template>
	<div class="content">
		<div class="connect-banner"></div>
		<div class="">
			<div class="title">
	  		<h1>联系我们</h1>
	  		<div class="t-english">
	  			CONTACT US
	  		</div>
	  	</div>
			<div class="connect-con">
				<div class="fl"><img src="../assets/images/ewm.jpg"></div>
				<div class="fr connect-mode">
          <p>公司联系电话：<a href="tel:15670982182">15670982182</a></p>
          <p>邮箱：<a href="mailto:lyz102@yeah.net">lyz102@yeah.net</a></p>
					<p>公司地址：河南省郑州市高新技术产业开发区金梭路202号2幢1单元22层78号</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'mconnect',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
.connect-banner{width: 100%;height: 2rem;background: url(../assets/images/connect.jpg) no-repeat center top;margin-bottom: 36px;background-size: 100% auto}
.connect-con{overflow: hidden;padding:.3rem 0 4rem;}
.title{text-align: center;}
.title h1{font-size: .5rem;color: #333}
.title .t-english{font-size: .375rem;color: #666;padding:10px 0;position: relative;width: 100%;margin:0 auto;}
.title .t-english:after,.title .t-english:before{content: '';display: block;width:2rem;height: 1px;background: #666;position: absolute;left: 0;top:50%}
.title .t-english:after{left:auto;right: 0}
.connect-con .fl{width:30%;margin:0 2%;}
.connect-con .fl img{width: 100%}
.connect-mode{width:65%}
.connect-mode p{font-size: .375rem;color: #343434;padding-bottom:.3rem}
</style>
