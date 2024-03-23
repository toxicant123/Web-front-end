<script setup>
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button>添加文章</el-button>
    </template>
    <div>添加文章主体部分</div>
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
