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
        title: '用户登录'
      },
      component:  r => require.ensure([], () => r(require('../../views/user/UserLogin')), 'userLogin')
    },
    {
      path: 'register',
      name: 'userRegister',
      meta: {
        title: '用户注册'
      },
      component:  r => require.ensure([], () => r(require('../../views/user/UserRegister/UserRegister')), 'userRegister')
    },
    {
      path: 'enlist',
      name: 'userEnlist',
      meta: {
        title: '连萌招募'
      },
      component:  r => require.ensure([], () => r(require('../../views/user/userEnlist/UserEnlist')), 'userEnlist')
    }
  ]
}]