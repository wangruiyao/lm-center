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
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/pay/payCheckOutCounter/PayCheckOutCounter')), 'payCheckOutCounter')
    }
  ]
}]