<script setup>
import PageContainer from '@/components/PageContainer.vue'

import { ref } from 'vue'
import { userUpdatePasswordService } from '@/api/user.js'
import { useUserStore } from '@/stores/index.js'
import router from '@/router/index.js'

const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const pwdFormRef = ref(null)

const rules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value === pwdForm.value.old_pwd) {
          callback(new Error('新密码不能与原密码相同'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  re_pwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== pwdForm.value.new_pwd) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const userStore = useUserStore()

const submitForm = async () => {
  await pwdFormRef.value.validate()
  await userUpdatePasswordService(pwdForm.value)
  ElMessage.success('密码修改正确')
  userStore.setToken('')
  userStore.setUser({})
  router.push('/login')
}

const resetForm = () => {
  pwdFormRef.value.resetFields()
}
</script>

<template>
  <page-container title="重置密码">
    <el-form :model="pwdForm" ref="pwdFormRef" :rules="rules" @submit.prevent>
      <el-form-item label="原密码" prop="old_pwd">
        <el-input v-model="pwdForm.old_pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="new_pwd">
        <el-input v-model="pwdForm.new_pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="re_pwd">
        <el-input v-model="pwdForm.re_pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">修改密码</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>

<style scoped></style>
