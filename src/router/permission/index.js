/*
* 权限页面
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/permission',
  component: BlankLayout,
  children: [
    {
      path: '404',
      name: 'error404',
      meta: {
        title: '404',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/permission/404/error404')), 'error404')
    },
    {
      path: '500',
      name: 'error500',
      meta: {
        title: '500',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/permission/500/error500')), 'error500')
    },
    {
      path: 'commingsoon',
      name: 'commingSoon',
      meta: {
        title: '敬请期待',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/permission/commingSoon/CommingSoon')), 'commingSoon')
    }
  ]
}]