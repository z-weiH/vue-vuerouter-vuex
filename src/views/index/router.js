import Vue from "vue";
import VueRouter from 'vue-router';
// 引入router
Vue.use(VueRouter)

import Layout from './pages/layout.vue';
import F404 from './pages/error.vue';
import Default from './pages/default.vue';
import Page2 from './pages/page2.vue';
import Store from './pages/store.vue';

let config = [
    {
        path : '/background',
        component : Layout,
        children : [
            {
                path : 'default',
                component : Default,
                // name里面的参数 每一个 对应路由都可以从 this.$route.name.xxx中获取
                name : {
                    active : '/background/default',
                },
            },
            {
                path : 'page2',
                component : Page2,
                name : {
                    active : '/background/page2',
                },
            },
            {
                path : 'store',
                component : Store,
                name : {
                    active : '/background/store',
                },
            }
        ],
    },
    {
        path : '/error',
        component : F404,
    },
    // 重定向到 404页面
    {
        path : '/*',
        redirect : '/error',
    }
];

let router = new VueRouter({
    routes : config // （缩写）相当于 routes: routes
});

export default router;