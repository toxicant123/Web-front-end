import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: '大标题',
        count: 100
    },
    mutations: {
        addCount(state, payload) {
            state.count += payload
        },
        delCount(state, payload) {
            state.count -= payload
        }
    }
})

export default store
