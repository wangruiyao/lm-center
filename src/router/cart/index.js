/*
* 购物车
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/cart',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'list'
    },
    {
      path: 'list',
      name: 'cartList',
      meta: {
        title: '连萌首页',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/cart/cartList/CartList')), 'cartList')
    }

  ]
}]