<script setup>
import {useCounterStore} from '@/store/counter'

const counterStore = useCounterStore();
</script>

<template>
    <div>
        son2 - {{ counterStore.count }} -
        <button @click="counterStore.subCount">-</button>
    </div>
</template>

<style scoped>

</style>
