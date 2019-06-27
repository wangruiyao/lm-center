import 'utils/vconsole'
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from 'store'
import 'core/use'

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

document.body.addEventListener('touchmove', function (e) {
  e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false}); //passive 参数不能省略，用来兼容ios和android
