/*
* 订单
* */
import Vue from 'vue'
import { BlankLayout, BasicLayout } from 'components/layouts'
import toolkit from "../../../public/toolkit.umd";
Vue.use(toolkit)

export default [{
  path: '/order',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'submit'
    },
    {
      path: 'submit/:id/:num',
      name: 'orderSubmit',
      meta: {
        title: '提交订单',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/order/orderSubmit/OrderSubmit')), 'orderSubmit'),
      children: [
        {
          path: 'cityPicker',
          name: 'orderCityPicker',
          meta: {
            title: '选择地市',
            isLogin: false,
            keepAlive: true
          },
          component:  r => require.ensure([], () => r(require('components/lmCityPicker2/LmCityPicker2')), 'orderCityPicker'),
        },
        {
          path: 'toolkit',
          component: BasicLayout,
          children: [
            {
              path: 'broadBandAddress',
              name: 'OrderBroadBand',
              meta: {
                title: '宽带地址查询',
                isLogin: false
              },
              component:  toolkit.broadbandAddress
            }
          ]
        },
        {
          path: 'numberCheck',
          name: 'orderNumberCheck',
          meta: {
            title: '号码查询',
            isLogin: false,
            keepAlive: true,
            pageIn: 'slideInUp',
            pageOut: 'slideOutDown'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderNumberCheck/OrderNumberCheck')), 'orderNumberCheck')
        }


      ]
    },
    {
      path: 'list',
      name: 'orderList',
      meta: {
        title: '订单查询',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/order/orderList/OrderList')), 'orderList'),
      children: [
        {
          path: 'check',
          name: 'orderListCheck',
          meta: {
            title: '订单查询',
            isLogin: false,
            keepAlive: true,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderList/components/OrderSearch')), 'OrderSearch')
        }
      ]
    },
    {
      path: 'detail/:id',
      name: 'orderDetail',
      meta: {
        title: '订单详情',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/order/orderDetail/OrderDetail')), 'orderDetail'),
      children: [
        {
          path: 'delivery',
          name: 'orderDetailDelivery',
          meta: {
            title: '订单查询',
            isLogin: false,
            keepAlive: true,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderDelivery/OrderDelivery')), 'orderDelivery')
        }
      ]
    }
  ]
}]