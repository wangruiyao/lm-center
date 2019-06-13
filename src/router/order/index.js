/*
* 订单
* */
import { BlankLayout } from 'components/layouts'


export default [{
  path: '/order',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'submit'
    },
    {
      path: 'submit',
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
            title: '提交订单',
            isLogin: false,
            keepAlive: true
          },
          component:  r => require.ensure([], () => r(require('components/lmCityPicker2/LmCityPicker2')), 'orderCityPicker'),
        },

      ]
    }

  ]
}]