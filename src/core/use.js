import Vue from 'vue'
import 'lib-flexible'
// import style files
import 'assets'
import ajax from 'utils/axios/index.js'
window.ajax = ajax;


// import mint-ui component
import { Popup, Picker  } from 'mint-ui'
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
