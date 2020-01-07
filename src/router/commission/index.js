/*
* 佣金路由
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/commission',
  component: BlankLayout,
  children: [
    {
      path: '',
      redirect: 'center'
    },
    {
      path: 'center',
      name: 'commissionCenter',
      meta: {
        title: '我的佣金',
        isLogin: false,

      },
      component:  r => require.ensure([], () => r(require('views/commission/commissionCenter/CommissionCenter')), 'commissionCenter'),
      children: [
        {
          path: 'pickUpInfo',
          name: 'commissionPickUpInfo',
          meta: {
            title: '提现明细',
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          children: [
            {
              path: 'commissionInfo/:id',
              name: 'pickUpCommissionInfo',
              meta: {
                title: '佣金明细',
                isLogin: false,
                pageIn: 'slideInRight',
                pageOut: 'slideOutRight'
              },
              component:  r => require.ensure([], () => r(require('views/commission/commissionInfo/CommissionInfo')), 'commissionInfo')
            }
          ],
          component:  r => require.ensure([], () => r(require('views/commission/commissionPickUpInfo/CommissionPickUpInfo')), 'commissionPickUpInfo')
        },
        {
          path: 'info',
          name: 'commissionInfo',
          meta: {
            title: '佣金明细',
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/commission/commissionInfo/CommissionInfo')), 'commissionInfo')
        },
        {
          path: 'account/:module',
          name: 'commissionAccount',
          meta: {
            title: '佣金账户',
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/commission/commissionAccount/CommissionAccount')), 'commissionAccount'),
          children: [
            {
              path: 'change/:awardType',
              name: 'commissionChange',
              meta: {
                title: '绑定佣金账户',
                isLogin: false,
                pageIn: 'slideInRight',
                pageOut: 'slideOutRight'
              },
              component:  r => require.ensure([], () => r(require('views/commission/commissionChange/CommissionChange')), 'commissionChange'),
            }
          ]
        }
      ]
    }
  ]
}]