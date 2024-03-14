import { changeCount, delSelect, getCartList } from '@/api/cart'
import { Toast } from 'vant'

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
    },
    toggleCheck (state, payload) {
      const goods = state.cartList.find(item => item.goods_id === payload)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, payload) {
      state.cartList.forEach(item => {
        item.isChecked = payload
      })
    },
    changeCount (state, { goodsId, goodsNum }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    async changeCartAction (context, payload) {
      const { goodsNum, goodsId, goodsSkuId } = payload
      context.commit('changeCount', { goodsId, goodsNum })
      await changeCount(goodsId, goodsNum, goodsSkuId)
    },
    async delSelect (context) {
      const selCartList = context.getters.selCartList
      const cartIds = selCartList.map(item => item.id)
      await delSelect(cartIds)

      Toast('删除成功')
      await context.dispatch('getCartAction')
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
      return getters.selCartList.reduce((p, c) => p + c.goods_num * c.goods.goods_price_min, 0).toFixed(2)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
