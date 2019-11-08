/*
 * 用户操作页面
 */
import { BlankLayout, BasicLayout } from 'components/layouts'
export default [{
  path: '/user',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: 'login',
      name: 'userLogin',
      meta: {
        title: '用户登录',
        isLogin: true
      },
      component:  r => require.ensure([], () => r(require('../../views/user/userLogin/UserLogin')), 'userLogin')
    },
    {
      path: 'checkAccount',
      name: 'userLoginCheckAccount',
      meta: {
        title: '选择账号登录',
        isLogin: false
      },
      component: r => require.ensure([], () => r(require('views/user/userLoginCheckAccount/UserLoginCheckAccount')), 'userLogin'),
    },
    {
      path: 'register/:developer',
      name: 'userRegister',
      meta: {
        title: '用户注册',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('../../views/user/UserRegister/UserRegister')), 'userRegister'),
      children: [
        {
          path: 'cityPicker',
          name: 'userRegisterCityPicker',
          meta: {
            title: '选择地市',
            isLogin: false,
            keepAlive: true
          },
          component:  r => require.ensure([], () => r(require('components/lmCityPicker2/LmCityPicker2')), 'orderCityPicker'),
        }
      ]
    },
    {
      path: 'enlist/:developer',
      name: 'userEnlist',
      meta: {
        title: '连萌招募',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('../../views/user/userEnlist/UserEnlist')), 'userEnlist')
    }

  ]
}]