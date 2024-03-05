import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            list: []
        }
    },
    mutations: {
        updateList(state, payload) {
            state.list = payload
        }
    },
    actions: {
        async getList(context) {
            const res = await axios.get('http://localhost:3000/cart')
            context.commit('updateList', res.data)
        }
    },
    getters: {}
}
