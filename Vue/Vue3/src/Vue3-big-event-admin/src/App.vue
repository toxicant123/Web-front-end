<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/index.js'

const router = useRouter()
const route = useRoute()

const goList = () => {
  router.push({
    path: '/list'
  })
}

const userStore = useUserStore()
</script>

<template>
  <div>
    this is App
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('ABC')">登录</el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>
  </div>
</template>

<style scoped></style>
