import { getInfo, setInfo } from '@/utils/storage.js'

export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
      setInfo(payload)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})

      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {}
}
