<script setup>
import {useCounterStore} from '@/store/counter'

const counterStore = useCounterStore();
</script>

<template>
    <div>
        son1 - {{ counterStore.count }} -
        <button @click="counterStore.addCount">+</button>
    </div>
</template>

<style scoped>

</style>
