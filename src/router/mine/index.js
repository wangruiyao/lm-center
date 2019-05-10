/*
* 个人页面
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/mine',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'account'
    },
    {
      path: 'account',
      name: 'mineAccount',
      meta: {
        title: '我的账号'
      },
      component:  r => require.ensure([], () => r(require('views/mine/mineAccount/MineAccount')), 'mineAccount')
    },
    {
      path: 'personalData',
      name: 'minePersonalData',
      meta: {
        title: '完善个人资料'
      },
      component:  r => require.ensure([], () => r(require('views/mine/minePersonalData/MinePersonalData')), 'personalData')
    }

  ]
}]