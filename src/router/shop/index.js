/*
* 商城首页
* */

import { BlankLayout,HomeLayout } from 'components/layouts'

export default [{
  path: '/shop',
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
          name: 'shopCenter',
          meta: {
            title: '云商城',
            isLogin: false
          },
          component:  r => require.ensure([], () => r(require('views/shop/shopCenter/ShopCenter')), 'shopCenter')
        }
      ]
    }


  ]
}]