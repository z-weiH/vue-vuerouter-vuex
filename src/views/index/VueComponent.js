import Vue from 'vue';

import Layout from './pages/layout.vue';

export default {
    // 初始化 公共组件
    init : function(){
        Vue.component('Layout',Layout);
    }
}
