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
      name: 'vipHome',
      component:  r => require.ensure([], () => r(require('views/vip/vipHome/VipHome')), 'vipHome'),
      children: [
        // {
        //   path: '/',
        //   redirect: 'vipCenter'
        // },
        {
          path: 'vipCenter',
          name: 'vipCenter',
          meta: {
            title: '权益',
            isLogin: true,
            tabOrigin: '/vip/home'
          },
          component:  r => require.ensure([], () => r(require('views/vip/vipCenter/VipCenter')), 'vipCenter')
        },
        {
          path: 'depositCenter',
          name: 'depositCenter',
          meta: {
            title: '保证金',
            isLogin: true,
            tabOrigin: '/vip/home'
          },
          component:  r => require.ensure([], () => r(require('views/vip/depositCenter/DepositCenter')), 'depositCenter'),
        },
        {
          path: 'rightsCenter',
          name: 'rightsCenter',
          meta: {
            title: 'VIP',
            isLogin: true,
            tabOrigin: '/vip/home'
          },
          component:  r => require.ensure([], () => r(require('views/vip/rightsCenter/RightsCenter')), 'rightsCenter')
        }
      ]
    },
    {
      path: 'rightsGoldDetail',
      name: 'rightsGoldDetail',
      meta: {
        title: '升级金明细',
        isLogin: true,
      },
      component:  r => require.ensure([], () => r(require('views/vip/rightsGoldDetail/RightsGoldDetail')), 'rightsGoldDetail')
    },
    {
      path: 'rightsDetails',
      name: 'rightsDetails',
      meta: {
        title: '连萌VIP升级之路',
        isLogin: true,
      },
      component:  r => require.ensure([], () => r(require('views/vip/rightsDetails/RightsDetails')), 'rightsDetail')
    },
    {
      path: 'depositPay',
      name: 'depositPay',
      meta: {
        title: '缴纳保证金',
        isLogin: true,
      },
      component:  r => require.ensure([], () => r(require('views/vip/depositPay/DepositPay')), 'depositPay')
    }
  ]
}]