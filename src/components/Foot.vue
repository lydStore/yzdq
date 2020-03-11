<template>
	<div class="footer">
		<div class="w1200" >
      <p>公司联系电话：<a href="tel:15670982182">15670982182</a> 邮箱：<a href="mailto:lyz102@yeah.net">lyz102@yeah.net</a></p>
			<p><a href="http://www.beian.miit.gov.cn" target="_blank">豫ICP证：18032866号</a></p>
			<P>公司名称：河南雨点机器人技术有限公司</p>
			<p>公司地址：河南省郑州市高新技术产业开发区金梭路202号2幢1单元22层78号</p>
		</div>
	</div>
</template>
<script>

	export default{
		name:'f',
		data(){
			return{

			}
		}
	}

</script>
<style scoped>
	.footer{background:#333;padding: 20px 0}
  .footer p,.footer p a{font-size: 14px;color: #fff;padding-bottom:6px}
  @media screen and ( max-width : 640px ){
  	.footer .w1200{width: 100%;text-align: center;}
  }
</style>
