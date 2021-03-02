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
import ResourceDisplay from "@/ResourceDisplay";
import axios from 'axios'
import store from "./store";
Vue.prototype.$axios = axios

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

axios.defaults.baseURL='http://47.100.79.77:8080'
axios.interceptors.request.use(config => {
    console.log("前置拦截")
    // 可以统一设置请求头
    return config
})
axios.interceptors.response.use(response => {
        const res = response.data;
        // 当结果的code是否为200的情况
        if (res.code === 200) {
            return response
        } else {
            // 弹窗异常信息
            Element.Message({
                message: response.data.msg,
                type: 'error',
                duration: 2 * 1000
            })
            // 直接拒绝往下面返回结果信息
            return Promise.reject(response.data.msg)
        }
    },
    error => {
        console.log('err' + error)// for debug
        if(error.response.data) {
            error.message = error.response.data.msg
        }
        // 根据请求状态觉得是否登录或者提示其他
        if (error.response.status === 401) {
            store.commit('REMOVE_INFO');
            error.message = '请重新登录';
        }
        if (error.response.status === 403) {
            error.message = '权限不足，无法访问';
        }
        Element.Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    })

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
    },
    {
        path:'/resource',
        name:'Resource',
        component:ResourceDisplay
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
