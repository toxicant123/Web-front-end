<script setup>
import { ref } from 'vue'
import { artAddChannelService, artEditChannelService } from '@/api/article.js'

defineProps({
  title: {
    required: true,
    type: String
  }
})

const dialogVisible = ref(false)
const formModel = ref({
  id: '',
  cate_name: '',
  cate_alias: ''
})
const formRef = ref()

const rules = {
  cate_name: [
    {
      required: true,
      message: '请输入分类名称',
      trigger: 'blur'
    },
    {
      pattern: /^\S{1,10}$/,
      message: '分类必须是 1-10 位的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    {
      required: true,
      message: '请输入分类别名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{1,10}$/,
      message: '分类必须是 1-15 位的字母或数字',
      trigger: 'blur'
    }
  ]
}

const emit = defineEmits(['success'])

const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await artEditChannelService(formModel.value)
  } else {
    await artAddChannelService(formModel.value)
  }
  dialogVisible.value = false
  emit('success')
}

const open = (row) => {
  dialogVisible.value = true
  formModel.value = {
    ...row
  }
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="formModel"
      label-width="100px"
      style="padding-right: 30px"
    >
      <el-form-item label="分类名称：" prop="cate_name">
        <el-input
          v-model="formModel.cate_name"
          placeholder="请输入分类名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名：" prop="cate_alias">
        <el-input
          v-model="formModel.cate_alias"
          placeholder="请输入分类别名"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false"> 取消 </el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
