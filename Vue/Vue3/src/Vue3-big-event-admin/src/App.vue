<script setup>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goList = () => {
  router.push({
    path: '/list'
  })
}

</script>

<template>
  <div>
    this is App
    <button @click="$router.push('/home')">跳首页</button>
    <button @click="goList">跳列表页</button>
  </div>
</template>

<style scoped>

</style>
