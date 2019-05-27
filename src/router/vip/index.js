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
      redirect: 'center'
    },
    {
      path: 'center',
      name: 'vipCenter',
      meta: {
        title: '连萌首页',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/vip/vipCenter/VipCenter')), 'vipCenter')
    }

  ]
}]