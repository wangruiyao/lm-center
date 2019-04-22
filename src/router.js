import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import toolkit from '../lib/toolkit.common'
// Vue.use(toolkit);
Vue.use(Router);
import toolkit from '../public/toolkit.umd'
Vue.use(toolkit);



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: toolkit.broadbandAddress
    }
  ]
})
