/*
* 支付路由
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/pay',
  component: BlankLayout,
  children: [
    {
      path: 'checkOutCounter',
      name: 'payCheckOutCounter',
      meta: {
        title: '收银台',
        isLogin: false,

      },
      component:  r => require.ensure([], () => r(require('views/pay/payCheckOutCounter/PayCheckOutCounter')), 'payCheckOutCounter'),
      children: [
        {
          path: 'openInBrowser',
          name: 'payOpenInBrowser',
          meta: {
            title: '提示',
            isLogin: false
          },
          component:  r => require.ensure([], () => r(require('views/pay/payOpenInBrowser/PayOpenInBrowser')), 'payOpenInBrowser')
        },
        {
          path: 'lineAddress',
          name: 'payLineAddress',
          meta: {
            title: '支付链接',
            isLogin: false
          },
          component:  r => require.ensure([], () => r(require('views/pay/payLineAddress/PayLineAddress')), 'payLineAddress')
        },
        {
          path: 'loading',
          name: 'payLoading',
          meta: {
            title: '等待',
            isLogin: false
          },
          component:  r => require.ensure([], () => r(require('views/pay/payLoading/PayLoading')), 'payLoading')
        },
        ,
        {
          path: 'result',
          name: 'payResult',
          meta: {
            title: '支付结果',
            isLogin: false
          },
          component:  r => require.ensure([], () => r(require('views/pay/payResult/PayResult')), 'payResult')
        }
      ]
    }
  ]
}]