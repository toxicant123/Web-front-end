<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { artGetChannelsService } from '@/api/article.js'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelEdit from '@/views/article/components/ChannelEdit.vue'

const channelList = ref([])
const isLoading = ref(true)
const dialog = ref(null)
const dialogTitle = ref('')

const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data
  isLoading.value = false
}

getChannelList()

const onEditChannel = (row, $index) => {
  dialogTitle.value = '编辑分类'
  dialog.value.open(row)
}

const onDelChannel = (row, $index) => {
  console.log(row, $index)
}

const onAddChannel = () => {
  dialogTitle.value = '添加分类'
  dialog.value.open({})
}

const onSuccess = async () => {
  await getChannelList()
}
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>

    <el-table v-loading="isLoading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <ChannelEdit ref="dialog" :title="dialogTitle" @success="onSuccess" />
  </PageContainer>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
