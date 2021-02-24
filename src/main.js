import App from './App.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
import Router from 'vue-router';
import CourseDisplay from "@/CourseDisplay";
import Home from "@/Home";
import Posts from "@/Posts"
import AppSearch from "@/AppSearch";
import VeeValidate, { Validator } from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import CenterHome from "@/CenterHome";

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
    },
    {
        path: '/post',
        name: 'Post',
        component: Posts
    },
    {
        path:'/search',
        name:'Search',
        component:AppSearch
    },
    {
        path:'/center',
        name:'Center',
        component: CenterHome
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
