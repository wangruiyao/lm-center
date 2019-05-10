/*
* 联盟首页
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/home',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'center'
    },
    {
      path: 'center',
      name: 'homeCenter',
      meta: {
        title: '连萌首页'
      },
      component:  r => require.ensure([], () => r(require('views/home/homeCenter/HomeCenter')), 'homeCenter')
    }

  ]
}]