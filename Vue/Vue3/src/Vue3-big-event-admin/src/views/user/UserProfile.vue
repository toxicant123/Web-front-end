<script setup>
import { reactive, ref } from 'vue'
import PageContainer from '@/components/PageContainer.vue'
import { useUserStore } from '@/stores/index.js'

const {
  user: { email, id, nickname, username }
} = useUserStore()
// 表单数据
const form = reactive({
  id,
  username,
  nickname,
  email
})

// 表单校验规则
const rules = {
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称长度在2-10个非空字符之间',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ]
}

const formRef = ref(null)

// 提交表单
const submitForm = () => {
  console.log('2134')
}
</script>

<template>
  <page-container title="基本资料">
    <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
      <!-- 登录名称 -->
      <el-form-item label="登录名称">
        <el-input v-model="form.loginName" disabled></el-input>
      </el-form-item>

      <!-- 用户昵称 -->
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>

      <!-- 用户邮箱 -->
      <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交修改</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>

<style scoped></style>
