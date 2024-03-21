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
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>
  </div>
</template>

<style scoped>

</style>
