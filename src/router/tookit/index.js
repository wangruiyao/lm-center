/*
* 工具
* */
import Vue from 'vue'
import { BlankLayout, BasicLayout } from 'components/layouts'
import toolkit from 'public/toolkit.umd'

Vue.use(toolkit)


export default [{
  path: '/tookit',
  component: BlankLayout,
  children: [
    {
      path: '/basic',
      component: BasicLayout,
      children: [
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
    },

  ]
}]