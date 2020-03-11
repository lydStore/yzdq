<template>
	<div class="content">
		<div class="advertise-banner"></div>
		<div class="w1200">
			<div class="advertise-info">
				<div class="fl"></div>
				<div class="adver-con fr">
					<h2>【人才理念】</h2>
					<p>河南雨点机器人技术有限公司,  一贯倡导人性化管理，我们的人力资源开发工作始终坚持“尊重人、培养人、成就人”的人才理念，坚持观念创新、制度创新，为人才的成长与竞争营造一种“公平、公正、公开”的氛围，建立一套尊重人才、培养人才和充分发挥个人潜能的机制，保障了企业的发展壮大与实现个人较大价值的完美、和谐统一。</p>
				</div>
			</div>
			<div class="advertise-box">
				<div class="title">
		  		<h1>人才招聘</h1>
		  		<div class="t-english">
		  			TALENT RECRUITMENT
		  		</div>
		  	</div>
		  	<table>
		  		<tr>
		  			<th width="15%">职位</th>
		  			<th width="10%">年龄</th>
		  			<th width="65">职位要求</th>
		  			<th width="10%">薪资</th>
		  		</tr>
		  	  <tr>
		  	  	<td>应届毕业生5人<br>实习生5人</td>
		  	  	<td>22-40</td>
		  	  	<td class="tl">
							<p>岗位职责：<br>
								1、诚实能吃苦耐劳，服从意识强。<br>
								2、能够积极主动学习，责任心强。<br>
								3、自动化、通信专业的理工类大专及以上学历毕业生（限男生）。<br>
								4、能适应长期出差。<br>
								工作内容：<br>
								移动机器人的安装调试、售后维修工作。<br>
								工资待遇：<br>
								基本工资+出差补贴+工程激励+其他福利。<br>
								工作地点，平顶山，三门峡，洛阳。<br>
							</p>
						</td>
		  	  	<td>面议</td>
		  	  </tr>
		  	  <tr>
		  	  	<td colspan="4" class="tl connect-mode">
		  	  		<p>报名方法：<br>
								1、地址：河南省郑州市高新技术产业开发区金梭路202号2幢1单元22层78号<br>
								2、联系电话：15670982182（李先生）。<br>
								3、网上报名办法：发简历至<a href="mailto:lyz102@yeah.net">lyz102@yeah.net</a>
							</p>
		  	  	</td>
		  	  </tr>
		  	</table>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		name:'advertise',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
.advertise-banner{width: 100%;height:440px;background: url(../assets/images/advertise.jpg) no-repeat center top;}
.advertise-info{overflow: hidden;padding:36px 0;}
.advertise-info .fl{width: 600px;height:280px;background: url(../assets/images/adver2.jpg) no-repeat center;}
.adver-con{width: 560px;text-align: center;}
.adver-con h2{font-size: 36px;color: #1680C7}
.adver-con p{font-size:14px;color: #343434;text-align: left;padding-top: 12px}
.title{text-align: center;}
.title h1{font-size: 36px;color: #1680C7}
.title .t-english{font-size: 20px;color: #666;padding:10px 0;position: relative;width: 480px;margin:0 auto;}
.title .t-english:after,.title .t-english:before{content: '';display: block;width: 66px;height: 2px;background: #666;position: absolute;left: 0;top:50%}
.title .t-english:after{left:auto;right: 0}
table{border:1px solid #ababab;width: 100%;text-align: center;vertical-align: middle;margin: 36px 0}
table th,table td{border:1px solid #ababab;text-align: center;}
table th{height: 48px;font-size: 26px;color: #343434}
table td{font-size: 16px;color: #666;padding: 24px 0}
table td.tl{text-align: left;padding-left: 24px}
table td .col-red{color: #f00}
table td p a{color: #666;text-decoration: underline};
</style>
