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
    }
})

export default store
