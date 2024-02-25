import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css'
import BaseGoodsItem from "@/components/BaseGoodsItem.vue"; // 字体图标的样式

Vue.config.productionTip = false

Vue.component('BaseGoodsItem', BaseGoodsItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
