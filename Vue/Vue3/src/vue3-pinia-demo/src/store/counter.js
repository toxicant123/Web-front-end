import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const addCount = () => count.value++
    const subCount = () => count.value--

    const double = computed(() => {
        return count.value * 2
    })

    const msg = ref('hello pinia')

    return {
        count,
        msg,
        addCount,
        subCount,
        double
    }
}, {
    persist: {
        key: 'hm-counter'
    }
})
