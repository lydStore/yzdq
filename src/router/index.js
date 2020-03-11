import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import About from '@/pages/about';
import Product from '@/pages/product';
import Advertise from '@/pages/advertise';
import Connect from '@/pages/connect';
import mIndex from '@/pages/mIndex';
import madvertise from '@/pages/madvertise';
import mconnect from '@/pages/mconnect';


Vue.use(Router);



export default new Router({
  // base:'/welcome/',
  // mode: 'history',
	linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/about',
      name: 'about',
      component:About
    },{
      path: '/product',
      name: 'product',
      component: Product
    },{
      path: '/advertise',
      name: 'advertise',
      component: Advertise
    },{
      path: '/connect',
      name: 'connect',
      component: Connect
    },{
      path: '/mindex',
      name: 'm_index',
      component:mIndex
    },{
      path: '/madvertise',
      name: 'madvertise',
      component:madvertise
    },{
      path: '/mconnect',
      name: 'mconnect',
      component:mconnect
    }
  ]
})
