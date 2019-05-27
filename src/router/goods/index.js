/*
* 商品页
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/goods',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'list'
    },
    {
      path: 'list',
      name: 'goodsList',
      meta: {
        title: '商品列表',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('views/goods/goodsList/GoodsList')), 'goodsList')
    },
    {
      path: 'detail/:id',
      name: 'goodsDetail',
      meta: {
        title: '商品详情',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/goods/goodsDetail/GoodsDetail')), 'goodsDetail')
    }

  ]
}]