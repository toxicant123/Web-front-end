import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

createApp(App)
    .use(pinia)
    .mount('#app')
