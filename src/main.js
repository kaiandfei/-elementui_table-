import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import commonComponent from '@/utils/commonComponent';
import 'element-ui/lib/theme-chalk/index.css';
import { preventReClick } from '../../防抖/index';
import i18n from './locals/index'
import '@/directives/index'

Vue.use(ElementUI);
Vue.use(commonComponent);
Vue.prototype.$preventReClick = preventReClick
import { mockXHR } from './mock/mockWatch'
if (process.env.NODE_ENV == 'development') {
  mockXHR();
}

Vue.config.productionTip = false

let context = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
export default context  //国际化需要导出vue实例在js文件中使用