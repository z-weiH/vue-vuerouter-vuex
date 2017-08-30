import Vue from "vue";
import Vuex from 'vuex';
// 引入 vuex
Vue.use(Vuex)

const store = new Vuex.Store({
    // 全局状态
    state: {
        data: 0
    },
    // store 事件集合
    mutations: {
        addData(state) {
            state.data ++;
        },
        deleteData(state) {
            state.data --;
        }
    }
})

export default store;