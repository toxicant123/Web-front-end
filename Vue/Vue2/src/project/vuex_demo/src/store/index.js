import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: '大标题',
        count: 100,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    mutations: {
        addCount(state, payload) {
            state.count += payload
        },
        delCount(state, payload) {
            state.count -= payload
        },
        changeCount(state, payload) {
            state.count = payload
        },
        changeTitle(state, payload) {
            state.title = payload
        }
    },
    actions: {
        changeCountAction(context, num) {
            setTimeout(() => context.commit('changeCount', num), 1000)
        },
        changeTitleAction(context, title) {
            setTimeout(() => context.commit('changeTitle', title), 1000)
        }
    },
    getters: {
        filterList(state) {
            return state.list.filter(ie => ie > 5)
        }
    }
})

export default store
