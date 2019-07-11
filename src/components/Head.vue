<template>
	<div class="header">
		<div class="w1200">
			<div class="fl">
				<img  v-if="!mobile" src="../assets/images/logo_w.png" class="logo">
			</div>
			<div class="fl nav" >
				<ul v-if="mobile">
					  <li v-for="list in mobilelists">
					  	<router-link :to="{path:list.path}" exact>
							  {{list.name}}
						  </router-link>
					  </li>
				</ul>
				<ul v-else>
					  <li v-for="list in lists">
					  	<router-link :to="{path:list.path}" exact>
							  {{list.name}}
						  </router-link>
					  </li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default{
		name:'h',
		data(){
			return{
         lists:[
            {name:'首页',path:'/'},
            // {name:'关于我们',path:'/about'},
            // {name:'产品中心',path:'/product'},
            {name:'人才招聘',path:'/advertise'},
            {name:'联系我们',path:'/connect'},
         ],
         mobilelists:[
            {name:'首页',path:'/mindex'},
            // {name:'关于我们',path:'/about'},
            // {name:'产品中心',path:'/product'},
            {name:'人才招聘',path:'/madvertise'},
            {name:'联系我们',path:'/mconnect'},
         ]
			}
		},props: {
      mobile:true
    }
	}

</script>
<style scoped>
	.header{height: 80px;line-height: 80px;margin: 0 auto;overflow: hidden;background: #1680C7;position: fixed;left: 0;top:0;width: 100%;z-index: 99}
	.logo{height: 60px;margin-top:10px;cursor: pointer;}
	.nav{margin-left: 120px;overflow: hidden;}
	.nav li{ margin:0 16px;font-size: 24px;float: left;cursor: pointer;position: relative;}
	.nav li a{display: block;color: #fff;}
	.nav li a.active:after{content: '';display: block;width: 100%;height: 2px;background: #fff;position: absolute;bottom: 10px;left: 0}
	.mobile .header{width: 100%;height: 1.2rem;line-height: 1.2rem}
	.mobile .nav{margin:0;}
	.mobile .nav li{font-size: .5rem}
	.mobile .nav li a.active:after{bottom:.1rem}
</style>