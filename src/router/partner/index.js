/*
* 合伙人
* */

import { BlankLayout } from 'components/layouts'

export default [{
  path: '/partner',
  component: BlankLayout,
  children: [
    {
      path: '/',
      redirect: 'center'
    },
    {
      path: 'center',
      name: 'partnerCenter',
      meta: {
        title: '我的合伙人',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/partner/partnerCenter/PartnerCenter')), 'partnerCenter')
    },
    {
      path: 'eslist',
      name: 'partnerEslist',
      meta: {
        title: '招募合伙人',
        isLogin: false
      },
      component:  r => require.ensure([], () => r(require('views/partner/partnerEslist/PartnerEslist')), 'partnerEslist')
    }

  ]
}]