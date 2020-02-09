import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css'
import router from './router'
import store from './store'
import { errorHandler, warnHandler } from '@/utils/error'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('../mock')

Vue.use(Element)
Vue.config.productionTip = false

// 全局捕获错误
Vue.config.errorHandler = errorHandler
// 全局捕获Vue warning
Vue.config.warnHandler = warnHandler

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
