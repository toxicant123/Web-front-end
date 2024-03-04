<template>
    <div class="box">
        <h2>UserInfo 子组件</h2>
        从vuex中获取的值：user.name -> <label>{{ this.$store.state.user.userInfo.name }}</label>
        <br/>
        从vuex中获取的值：score -> <label>{{ this.$store.state.user.score }}</label>
        <br/>
    </div>
</template>

<script>

export default {
    name: "UserInfo"
}
</script>

<style scoped lang="css">
.box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
}

h2 {
    margin-top: 10px;
}
</style>
