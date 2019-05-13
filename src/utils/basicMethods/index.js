import router from 'router'
import store from 'store'
import types from 'store/types'

export function go(page, params) {
  store.commit(types.SET_PAGE_STATION, 'open');
  console.log(params)
  router.replace({name: page, params})
}

export function goback(page) {
  store.commit(types.SET_PAGE_STATION, 'back');
  router.replace({name: page})
}
