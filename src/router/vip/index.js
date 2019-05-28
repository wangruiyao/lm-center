/*
* 联盟首页
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/vip',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
      path: 'home',
      component:  r => require.ensure([], () => r(require('views/vip/vipHome/VipHome')), 'vipHome'),
      children: [
        {
          path: '/',
          redirect: 'vipCenter'
        },
        {
          path: 'vipCenter',
          name: 'vipCenter',
          meta: {
            title: 'VIP',
            isLogin: true
          },
          component:  r => require.ensure([], () => r(require('views/vip/vipCenter/VipCenter')), 'vipCenter')
        },
        {
          path: 'depositCenter',
          name: 'depositCenter',
          meta: {
            title: '保证金',
            isLogin: true
          },
          component:  r => require.ensure([], () => r(require('views/vip/depositCenter/DepositCenter')), 'depositCenter')
        },
        {
          path: 'rightsCenter',
          name: 'rightsCenter',
          meta: {
            title: '权益',
            isLogin: true
          },
          component:  r => require.ensure([], () => r(require('views/vip/rightsCenter/RightsCenter')), 'rightsCenter')
        }
      ]
    }


  ]
}]