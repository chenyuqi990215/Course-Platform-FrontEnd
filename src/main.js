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
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Element)
Vue.prototype.$axios = axios

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

//服务端的入口文件app.js
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

// 实例化koa
const app = new Koa()
app.use(bodyParser())

// 实现跨域
app.use(cors({
    credentials: true
}))

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

axios.defaults.baseURL='http://47.100.79.77:8080'
axios.defaults.withCredentials=true;
axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000, // 请求超时时间
    headers: { 'Content-Type':'application/json' }
})
axios.defaults.transformRequest = [function (data) {
    let newData = ''
    for (let k in data) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
}]
axios.interceptors.request.use(config => {
    if (sessionStorage.getItem('token')) { // 若存在token，则每个Http Header都加上token
        config.headers.Authorization = `token ${sessionStorage.getItem('token')}`
    }
    return config
})
axios.interceptors.response.use(response => {
        const res = response;
        if (res.status === 200) {
            return res
        } else {
            // 弹窗异常信息
            Element.Message({
                message: res.status,
                type: 'error',
                duration: 2 * 1000
            })
            // 直接拒绝往下面返回结果信息
            return Promise.reject(res.status)
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
