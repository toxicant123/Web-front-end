const state = {
    userInfo: {
        name: 'Tom',
        age: 18
    },
    score: 80
}

const mutations = {
    updateName(state, payload) {
        state.userInfo.name = payload
    }
}

const actions = {
    updateNameLater(context, payload) {
        setTimeout(() => context.commit('updateName', payload), 1000)
    }
}

const getters = {
    upperCaseName(state) {
        return state.userInfo.name.toUpperCase()
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
