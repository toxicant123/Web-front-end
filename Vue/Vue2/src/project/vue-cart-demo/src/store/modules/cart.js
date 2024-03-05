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
        },
        /**
         *
         * @param state
         * @param {number} id
         * @param {number} newCount
         */
        updateCount(state, { id, newCount }) {
            const item = state.list.find(ie => ie.id === id)
            item.count = newCount
        }
    },
    actions: {
        async getList(context) {
            const res = await axios.get('http://localhost:3000/cart')
            context.commit('updateList', res.data)
        },
        /**
         *
         * @param context
         * @param {{id: number, newCount: number}} payload
         */
        async updateCountAsync(context, payload) {
            await axios.patch(`http://localhost:3000/cart/${payload.id}`, { count: payload.newCount })
            context.commit('updateCount', {
                id: payload.id,
                newCount: payload.newCount
            })
        }
    },
    getters: {
        total(state) {
            return state.list.reduce((p, c) => p + c.count, 0)
        },
        totalPrice(state) {
            return state.list.reduce((p, c) => p + c.count * c.price, 0)
        }
    }
}
