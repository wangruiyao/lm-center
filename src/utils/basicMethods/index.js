import router from 'router'
import store from 'store'
import types from 'store/types'

export function go(page, params) {  // 前进
  store.commit(types.SET_PAGE_STATION, 'open');
  router.replace({name: page, params});
}

export function goback() {  // 后退
  store.commit(types.SET_PAGE_STATION, 'back');
  let pageName = store.state.historyPage[store.state.historyPage.length - 2];
  console.log(pageName);
  if(pageName === undefined) {
    router.replace({name: 'userLogin'})
  } else {
    router.replace({name: pageName})
  }


}
