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
        isLogin: false
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
      path: 'register',
      name: 'userRegister',
      meta: {
        title: '用户注册',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('../../views/user/UserRegister/UserRegister')), 'userRegister')
    },
    {
      path: 'enlist',
      name: 'userEnlist',
      meta: {
        title: '连萌招募',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('../../views/user/userEnlist/UserEnlist')), 'userEnlist')
    }

  ]
}]