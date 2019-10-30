import Vue from 'vue'
import LmMoreTools from './LmMoreTools'

const MoreTools = {};
MoreTools.install = function(Vue, options) {
  const instance = Vue.extend(LmMoreTools);
  let currentMoreTools;
  const initInstance = () => {
    currentMoreTools = new instance();
    let MoreToolsEl = currentMoreTools.$mount().$el;
    document.body.appendChild(MoreToolsEl);
    currentMoreTools.isShow = true;
  };
  const destroyMoreTools = () => {
    currentMoreTools.isShow = false;
    let MoreToolsEl = currentMoreTools.$mount().$el;
    setTimeout(()=> {
      document.body.removeChild(MoreToolsEl)
    },500)
  };
  Vue.prototype.$moreTools = {
    show() {
      currentMoreTools = new instance();
      if(!currentMoreTools.isShow) {
        initInstance();
      } else {
        alert(1)
      }
    },
    hide() {
      if(currentMoreTools.isShow) {
        destroyMoreTools();
      }
    }
  }
};

export default MoreTools;