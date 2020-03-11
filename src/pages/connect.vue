<template>
	<div class="content">
		<div class="connect-banner"></div>
		<div class="w1200">
			<div class="title">
	  		<h1>联系我们</h1>
	  		<div class="t-english">
	  			CONTACT US
	  		</div>
	  	</div>
			<div class="connect-con">
				<div class="fl"></div>
				<div class="fr connect-mode">
					<p>公司联系电话：15670982182</p>
					<p>邮箱：<a href="mailto:lyz102@yeah.net">lyz102@yeah.net</a></p>
					<p>公司地址：河南省郑州市高新技术产业开发区金梭路202号2幢1单元22层78号</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'connect',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
.connect-banner{width: 100%;height: 380px;background: url(../assets/images/connect.jpg) no-repeat center top;margin-bottom: 36px}
.connect-con{overflow: hidden;padding:24px 0;}
.connect-con .fl{width: 600px;height:280px;background: url(../assets/images/adver2.jpg) no-repeat center;}
.title{text-align: center;}
.title h1{font-size: 36px;color: #1680C7}
.title .t-english{font-size: 20px;color: #666;padding:10px 0;position: relative;width: 480px;margin:0 auto;}
.title .t-english:after,.title .t-english:before{content: '';display: block;width: 66px;height: 2px;background: #666;position: absolute;left: 0;top:50%}
.title .t-english:after{left:auto;right: 0}
.connect-mode{width: 360px;padding-left: 200px; background: url(../assets/images/ewm.jpg) no-repeat left 26px;background-size: 160px auto;min-height: 280px}
.connect-mode p{font-size: 16px;color: #343434;padding-top: 26px}
.connect-mode a{color: #666;text-decoration: underline}
</style>
