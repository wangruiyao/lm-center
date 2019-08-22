import Vue from 'vue'
import Router from 'vue-router'
import types from 'store/types'
import store from 'store'


//用户操作模块路由
import user from './user'
import mine from './mine'
import home from './home'
import vip from './vip'
import goods from './goods'
import cart from './cart'
import order from './order'
import partner from './partner'
import shop from './shop'
import pay from './pay'
import tookit from './tookit'
import permission from './permission'
import commission from './commission'

Vue.use(Router);


const router = new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 100 }),
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    ...user,
    ...mine,
    ...home,
    ...goods,
    ...vip,
    ...cart,
    ...order,
    ...partner,
    ...tookit,
    ...permission,
    ...shop,
    ...pay,
    ...commission
  ]
});


/* 
 *  #全局导航卫视
 *  ## @param to - Route 即将要进入的目标路由对象
 *  ## @param from - Route 当前导航正要离开的路由
 *  ## @param {Function} next - 一定要调用该方法来resolve这个钩子
 */
router.beforeEach((to, from, next) => {
  store.commit(types.SET_PAGE_SCROLL_STATE, true);
  // if(getSession('lmUserInfo')){ // 已登录
  //   goNext(to,from,next);
  // } else {  // 未登录
  //   if(!to.meta.isLogin) {
  //     goNext(to,from,next);
  //   }else {
  //     goforward('userLogin', {
  //       redirect: to.name
  //     })
  //   }
  //
  // }
  goNext(to,from,next);
});

router.afterEach(route => {
  setTimeout(function() {
    store.commit(types.SET_PAGE_SCROLL_STATE, false);
  },500)

})


function goNext(to,from,next) {
  // 更改页面
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '连萌'
  }
  const nowHistory = store.state.historyPage[store.state.historyPage.length - 1];
  const lastHistory = store.state.historyPage[store.state.historyPage.length - 2];
  const toPage = to.meta.tabOrigin === undefined ? to.path : to.meta.tabOrigin;
  // const toPage = to.name;
  if(lastHistory !== toPage) {
    const para = {
      handle: 'forward',
      page: toPage
    };
    store.commit(types.SET_HISTORY_PAGE, para);
  } else {
    store.commit(types.SET_HISTORY_PAGE, {handle: 'back'})
  }

  next()
}

export default router