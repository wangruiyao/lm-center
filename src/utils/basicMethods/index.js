import router from 'router'
import store from 'store'
import types from 'store/types'

export function go(page) {
  store.commit(types.SET_PAGE_STATION, 'open');
  router.replace({name: page})
}

export function goback(page) {
  store.commit(types.SET_PAGE_STATION, 'back');
  router.replace({name: page})
}
