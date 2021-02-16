import App from './App.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
import Router from 'vue-router'
// 导入路由
import router from './Route'


Vue.use(VueRouter);
Vue.use(ElementUI)

/*

import axios from 'axios'
import moment  from 'moment'


Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format("YYYY-MM-DD"); // value可以是普通日期 20170723
});

Vue.prototype.$axios = axios

*/

Vue.config.productionTip = false
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

