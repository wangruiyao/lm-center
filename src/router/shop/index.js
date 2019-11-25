/*
* 商城首页
* */

import { BlankLayout,HomeLayout, BasicLayout } from 'components/layouts'
// import toolkit from "../../../public/toolkit.umd";

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
            isLogin: true,
            home: true
          },
          component:  r => require.ensure([], () => r(require('views/shop/shopCenter/ShopCenter')), 'shopCenter'),
          children: [
            {
              path: 'goodsDetail/:params',
              name: 'shopCenterDetail',
              meta: {
                title: '商品详情',
                isLogin: true
              },
              component:  r => require.ensure([], () => r(require('views/goods/goodsDetail/GoodsDetail')), 'goodsDetail')
            },
            {
              path: 'goodsList/:query',
              name: 'shopCenterGoodsList',
              meta: {
                title: '商品列表',
                isLogin: true,
              },
              component:  r => require.ensure([], () => r(require('views/goods/goodsList/GoodsList')), 'goodsList'),
              children: [
                {
                  path: 'goodsDetail/:params',
                  name: 'shopCenterGoodsDetail',
                  meta: {
                    title: '商品详情',
                    isLogin: true,
                    pageInAnimate: 'slideInRight',
                    pageOutAnimate: 'slideOutRight'
                  },
                  component:  r => require.ensure([], () => r(require('views/goods/goodsDetail/GoodsDetail')), 'goodsDetail'),
                }
              ]
            },
            {
              path: 'saleGuid',
              name: 'shopCenterSaleGuid',
              meta: {
                title: '销售指导',
                isLogin: false
              },
              component:  r => require.ensure([], () => r(require('views/goods/goodsSaleGuid/GoodsSaleGuid')), 'goodsSaleGuid')
            }
          ]
        }
      ]
    }


  ]
}]