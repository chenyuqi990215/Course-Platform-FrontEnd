import App from './App.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
import CourseDisplay from "@/CourseDisplay";
import Home from "@/Home";


Vue.use(VueRouter);
Vue.use(ElementUI)


const routers = [
    {
      path: '/course',
      name: 'Course',
      component: CourseDisplay
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]

const router = new VueRouter({
  routes: routers
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

