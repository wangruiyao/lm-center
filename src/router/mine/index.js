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
        title: '我的账号',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/mine/mineAccount/MineAccount')), 'mineAccount')
    },
    {
      path: 'personalData',
      name: 'minePersonalData',
      meta: {
        title: '完善个人资料',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/mine/mineCompleteInfo/MineCompleteInfo')), 'mineCompleteInfo')
    },
    {
      path: 'changeNumber',
      name: 'mineChangeNumber',
      meta: {
        title: '变更手机号',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/mine/mineChangeNumber/MineChangeNumber')), 'mineChangeNumber')
    },
    {
      path: 'pwdChange',
      name: 'minePasswordChange',
      meta: {
        title: '密码修改',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/mine/minePassword/MinePasswordChange')), 'minePasswordChange')
    },
    {
      path: 'pwdFind',
      name: 'minePasswordFind',
      meta: {
        title: '密码找回',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/mine/minePassword/MinePasswordFind')), 'minePasswordFind')
    }

  ]
}]