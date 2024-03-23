<script setup>
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button>按钮</el-button>
    </template>
    <div>文章分类主体部分</div>
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
