/*
* 订单
* */
import Vue from 'vue'
import { BlankLayout, BasicLayout } from 'components/layouts'
// import toolkit from "../../../public/toolkit.umd";
// Vue.use(toolkit)

export default [{
  path: '/order',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'submit'
    },
    /* 订单提交 */
    {
      path: 'submit/:info',
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
          path: 'updateIdCard',
          name: 'orderSubmitUpdateIdCard',
          meta: {
            title: '上传证件照',
            isLogin: false,
            keepAlive: true,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/mine/mineUpdateIdCard/MineUpdateIdCard')), 'mineUpdateIdCard'),
        },
        {
          path: 'broadBandAddress',
          name: 'OrderBroadBand',
          meta: {
            title: '宽带地址查询',
            keepAlive: true,
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderBroadBand/OrderBroadBandAddress')), 'broadBandAddress'),
        },
        {
          path: 'numberCheck/:numberCheckInfo',
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
    /* 订单列表 */
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
          path: 'detail/:orderinfo',
          name: 'orderDetail',
          meta: {
            title: '订单详情',
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderDetail/OrderDetail')), 'orderDetail'),
          children: [
            /*查询订单*/
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
            },
            /*查询修改*/
            {
              path: 'changeInfo/:flag',
              name: 'orderDetailChangeInfo',
              meta: {
                title: '修改订单信息',
                isLogin: false,
                pageIn: 'slideInRight',
                pageOut: 'slideOutRight'
              },
              component:  r => require.ensure([], () => r(require('views/order/orderChangeInfo/OrderChangeInfo')), 'orderChangeInfo'),
              children: [
                {
                  path: 'updateIdCard',
                  name: 'orderDetailChangeInfoUpdateIdCard',
                  meta: {
                    title: '上传证件照',
                    isLogin: false,
                    keepAlive: true,
                    pageIn: 'slideInRight',
                    pageOut: 'slideOutRight'
                  },
                  component:  r => require.ensure([], () => r(require('views/mine/mineUpdateIdCard/MineUpdateIdCard')), 'mineUpdateIdCard'),
                },
                {
                  path: 'cityPicker',
                  name: 'orderDetailChangeInfoCityPicker',
                  meta: {
                    title: '选择地市',
                    isLogin: false,
                    keepAlive: true
                  },
                  component:  r => require.ensure([], () => r(require('components/lmCityPicker2/LmCityPicker2')), 'orderCityPicker'),
                },
                {
                  path: 'broadBandAddress',
                  name: 'orderDetailChangeInfoBroadBand',
                  meta: {
                    title: '宽带地址查询',
                    keepAlive: true,
                    isLogin: false,
                    pageIn: 'slideInRight',
                    pageOut: 'slideOutRight'
                  },
                  component:  r => require.ensure([], () => r(require('views/order/orderBroadBand/OrderBroadBandAddress')), 'broadBandAddress'),
                },
              ]
            },
            /* 订单退款申请 */
            {
              path: 'refundApply/:orderinfo',
              name: 'orderRefundApply',
              meta: {
                title: '退款申请',
                keepAlive: true,
                isLogin: false,
                pageIn: 'slideInRight',
                pageOut: 'slideOutRight'
              },
              component:  r => require.ensure([], () => r(require('views/order/orderRefundApply/OrderRefundApply')), 'orderRefundApply'),
            }
          ]
        },
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
        },
        {
          path: 'delivery',
          name: 'orderListDelivery',
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
    },
    /* 订单退款 */
    {
      path: 'orderRefundList',
      name: 'orderRefundList',
      meta: {
        title: '退款单',
        isLogin: false,
      },
      component:  r => require.ensure([], () => r(require('views/order/orderRefundList/OrderRefundList')), 'orderRefundList'),
      children: [
        {
          path: 'detail/:refundid',
          name: 'orderRefundDetail',
          meta: {
            title: '退款单详情',
            isLogin: false,
            pageIn: 'slideInRight',
            pageOut: 'slideOutRight'
          },
          component:  r => require.ensure([], () => r(require('views/order/orderRefundDetail/OrderRefundDetail')), 'orderRefundDetail')
        }
      ]
    }
  ]
}]