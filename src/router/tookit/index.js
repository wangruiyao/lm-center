/*
* 工具
* */
import Vue from 'vue'
import { BlankLayout } from 'components/layouts'
import toolkit from 'public/toolkit.umd'

Vue.use(toolkit)


export default [{
  path: '/tookit',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'broadBandAddress'
    },
    {
      path: 'broadBandAddress',
      name: 'tookitBroadBandAddress',
      meta: {
        title: '宽带地址查询',
        isLogin: false
      },
      component:  toolkit.broadbandAddress
    }
  ]
}]