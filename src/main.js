import App from './App.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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

new Vue({
  render: h => h(App),
}).$mount('#app')