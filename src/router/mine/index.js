/*
* 个人页面
* */

import { BasicLayout } from 'components/layouts'

export default [{
  path: '/mine',
  component: BasicLayout,
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
      path: 'register',
      name: 'userRegister',
      meta: {
        title: '用户注册'
      },
      component:  r => require.ensure([], () => r(require('../../views/user/UserRegister/UserRegister')), 'userRegister')
    },
    {
      path: 'enlist',
      name: 'userEnlist',
      meta: {
        title: '连萌招募'
      },
      component:  r => require.ensure([], () => r(require('../../views/user/userEnlist/UserEnlist')), 'userEnlist')
    }

  ]
}]