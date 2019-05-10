import Vue from 'vue'
import Router from 'vue-router'
import types from 'store/types'
import store from 'store'

//用户操作模块路由
import user from './user'
import mine from './mine'
import home from './home'

Vue.use(Router);


const router = new Router({
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...user,
    ...mine,
    ...home
  ]
});


/*
 *  #全局导航卫视
 *  ## @param to - Route 即将要进入的目标路由对象
 *  ## @param from - Route 当前导航正要离开的路由
 *  ## @param {Function} next - 一定要调用该方法来resolve这个钩子
 */
router.beforeEach((to, from, next) => {
  // 更改页面
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '连萌平台'
  }

  store.commit(types.SET_HISTORY_PAGE, from);
  next()
});

export default router