<script setup>
import { nextTick, ref } from 'vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  artEditService,
  artGetDetailService,
  artPublishService
} from '@/api/article.js'
import { baseURL } from '@/utils/request.js'
import axios from 'axios'

const visibleDrawer = ref(false)
const imgUrl = ref('')

const defaultFrom = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}

const formModel = ref({ ...defaultFrom })

const emit = defineEmits(['success'])

const editorRef = ref()

const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
}

const open = async (row) => {
  visibleDrawer.value = true
  if (row.id) {
    const res = await artGetDetailService(row.id)
    formModel.value = res.data
    imgUrl.value = baseURL + formModel.value.cover_img
    formModel.value.cover_img = await imageUrlToFileObject(
      imgUrl,
      formModel.value.cover_img
    )
    nextTick(() => {
      editorRef.value.setHTML(res.data.content)
    })
  } else {
    formModel.value = { ...defaultFrom }
    imgUrl.value = ''
    nextTick(() => {
      editorRef.value.setHTML('')
    })
  }
}

async function imageUrlToFileObject(imageUrl, imageName) {
  try {
    // Fetch image data using axios
    const response = await axios.get(imageUrl, {
      responseType: 'blob' // Ensure response is treated as binary data
    })

    // Extract image data from the response
    const imageData = response.data

    // Create a File object from the Blob
    const file = new File([imageData], imageName, { type: 'image/jpeg' })

    // console.log('Image converted to file object:', file)

    return file
  } catch (error) {
    console.error('Error converting image to file object:', error)
    return null
  }
}

const onPublish = async (state) => {
  formModel.value.state = state

  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  if (formModel.value.id) {
    await artEditService(fd)
    ElMessage.success('修改成功')
    visibleDrawer.value = false
    emit('success', 'edit')
  } else {
    await artPublishService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
    emit('success', 'add')
  }
}

defineExpose({
  open
})
</script>

<template>
  <el-drawer
    ref="abc"
    v-model="visibleDrawer"
    :title="formModel.id ? '编辑文章' : '添加文章'"
    direction="rtl"
    size="50%"
  >
    <!-- 发表文章表单 -->
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <channel-select
          v-model="formModel.cate_id"
          width="100%"
        ></channel-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onSelectFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor
            ref="editorRef"
            class="editor"
            content-type="html"
            v-model:content="formModel.content"
            theme="snow"
          ></quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
        <el-button type="info" @click="onPublish('草稿')">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style scoped lang="scss">
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
