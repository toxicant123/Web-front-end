<template>
    <div class="box">
        <h2>Son1 子组件</h2>
        从vuex中获取的值：title -> <label>{{ this.$store.state.title }}</label>
        <br/>
        从vuex中获取的值：count -> <label>{{ this.$store.state.count }}</label>
        <br/>
        <button @click="handleAdd(1)">值 + 1</button>
        <button @click="handleAdd(5)">值 + 5</button>
        <button @click="handleAdd(10)">值 + 10</button>
        <button @click="handleChangeTitle">改标题</button>
    </div>
</template>

<script>
export default {
    name: 'Son1Com',
    methods: {
        handleAdd(num) {
            this.$store.state.count += num
        },
        handleChangeTitle() {
            this.$store.state.title = 'Son1 changed the title'
        }
    }
}
</script>

<style lang="css" scoped>
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
