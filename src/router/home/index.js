/*
* 联盟首页
* */

import { BlankLayout,HomeLayout } from 'components/layouts'

export default [{
  path: '/home',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'common'
    },
    {
      path: 'common',
      component: HomeLayout,
      children: [
        {
          path: '/',
          redirect: 'center'
        },
        {
          path: 'center',
          name: 'homeCenter',
          meta: {
            title: '连萌首页',
            isLogin: false,
            home: true
          },
          component:  r => require.ensure([], () => r(require('views/home/homeCenter/HomeCenter')), 'homeCenter')
        }
      ]
    }


  ]
}]