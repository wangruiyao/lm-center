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
            isLogin: false,
            home: true
          },
          component:  r => require.ensure([], () => r(require('views/shop/shopCenter/ShopCenter')), 'shopCenter'),
          children: [
            {
              path: 'goodsList/:query',
              name: 'shopCenterGoodsList',
              meta: {
                title: '商品列表',
                isLogin: false,
              },
              component:  r => require.ensure([], () => r(require('views/goods/goodsList/GoodsList')), 'goodsList'),
              children: [
                {
                  path: 'goodsDetail/:params',
                  name: 'shopCenterGoodsDetail',
                  meta: {
                    title: '商品详情',
                    isLogin: false,
                    pageInAnimate: 'slideInRight',
                    pageOutAnimate: 'slideOutRight'
                  },
                  component:  r => require.ensure([], () => r(require('views/goods/goodsDetail/GoodsDetail')), 'goodsDetail')
                }
              ]
            }
          ]
        }
      ]
    }


  ]
}]