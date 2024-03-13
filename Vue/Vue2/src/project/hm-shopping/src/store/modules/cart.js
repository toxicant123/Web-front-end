import { getCartList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((p, c) => p + c.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((p, c) => p + c.goods_num, 0)
    },
    selPrice (state, getters) {
      console.log(getters.selCartList)
      return getters.selCartList.filter((p, c) => p + c.goods_num * c.goods.goods_price_min, 0)
    }
  }
}
