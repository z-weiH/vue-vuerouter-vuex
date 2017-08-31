import App from "./index.vue";
import Vue from "vue";
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';

// 引入 样式库
Vue.use(ElementUI);

// 初始化公共组件
import VueComponent from './VueComponent.js';
VueComponent.init();

import router from './router';
import store from './store';

router.replace({
  path : '/background/default'
});



new Vue({
  el: "#root",
  router,
  store,
  render: h => h(App)
});

