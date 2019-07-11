<template>
  <div id="app"  :class="{'mobile':mobile}">
    <Head :mobile="mobile"/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Head from './components/Head'
import Foot from './components/Foot'

export default {
  name: 'App',
  data(){
    return{
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
      mobile:_isMobile()
    }
  },
  components:{
    Head,
    Foot
  },
  mounted() {
    if (_isMobile()) {
      this.router.replace('/mindex');
    } else {
      this.router.replace('/');
    }
  }
}
</script>

<style>
html,body,div,span,applet,object,iframe,a,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,audio,canvas,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,summary,time,video{margin:0;padding:0}
fieldset,img,select{border:0;margin:0;padding:0;}
html,body,select,input{font-family: "Microsoft YaHei","Arial","é»‘ä½“","å®‹ä½“",sans-serif;}
address,caption,cite,code,dfn,em,th,var,optgroup{font-style:normal;font-weight:400}
ins{text-decoration:none}
ul,li,dl,dt,dd,ol{list-style:none}
table{border-collapse:collapse;border-spacing:0;font-size:inherit;font:100%}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%}
q:before,q:after{content:''}
abbr,acronym{border:0;font-variant:normal} 
legend{color:#000}
input,button,textarea,select,optgroup,option{font-family:"Microsoft YaHei",inherit;font-size:inherit;font-style:inherit;font-weight:inherit}
input,button,textarea,select{*font-size:100%;line-height:1.2;margin:0;outline: none}
input:-webkit-autofill {-webkit-box-shadow: 0 0 0px 1000px white inset;box-shadow: 0 0 0px 1000px white inset}
a img,img{-ms-interpolation-mode:bicubic;}
a{text-decoration:none;}
sub,sup{vertical-align:baseline}
article,aside,dialog,figure,footer,header,hgroup,nav,section,blockquote{display:block}
pre{white-space:pre-wrap;word-wrap:break-word}
.f-family{font-family:"Microsoft YaHei", "å®‹ä½“","arial", "sans-serif"}
/****å±€éƒ¨å®šä¹‰*****/
html body .clear{background:none;border:0;margin:0;padding:0;clear:both;}
.clearfix:after{content:".";display:block;clear:both;visibility: hidden;height:0;width:0;}
.clearfix{*+height:1%;}
/*å•è¡Œæ–‡æœ¬æ˜¾ç¤ºçœç•¥å·*/
.ells{ white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;}
/*å¤šè¡Œæ–‡æœ¬æ˜¾ç¤ºçœç•¥å·*/
.manyells{ text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;}
i,em{font-style: normal;}
.w1200{width:1200px;margin:0 auto;position:relative;}
.fr{float:right;}
.fl{float:left;}
.hide{display: none} 
.show{display: block;}
.content{padding-top: 80px;}
.mobile .content{padding-top: 1.2rem}
</style>
