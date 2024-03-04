const state = {
    theme: 'light',
    desc: 'test demo',
    lang: 'zh',
    level: 5
}

const mutations = {
    changeLevel(state, payload) {
        state.level = payload
    }
}

const actions = {
    changeLevenLater(context, payload) {
        setTimeout(() => context.commit('changeLevel', payload), 1000)
    }
}

const getters = {
    getFinalLevel(state) {
        return Math.pow(state.level, 2)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
