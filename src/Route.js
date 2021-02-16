import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)
import AppDetail from "@/AppDetail";

const router = new Router({
    // 指定路由选中时的样式类名
    linkActiveClass: 'active',
    hashbang: true, // 将路径格式化为#!开头
    history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    /**
     * 4.@desc 路由配置配置具体的路径
     */
    routes: [
        {
            path: '/course',
            name: 'AppDetail',
            component: AppDetail
        },
    ]
})
/**
 * @desc 全局监听路由变化
 */
export default router
