<template>
  <div id="app">
    <div class="box"></div>
    <router-view/>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<style lang="less">
.box {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>
