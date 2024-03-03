<template>
    <div class="box">
        <h2>Son2 子组件</h2>
        从vuex中获取的值：title -> <label>{{ title }}</label>
        <br/>
        从vuex中获取的值：count -> <label>{{ count }}</label>
        <br/>
        <button @click="handleDelCount(1)">值 - 1</button>
        <button @click="handleDelCount(5)">值 - 5</button>
        <button @click="handleDelCount(10)">值 - 10</button>
        <button @click="changeSon2Title">改标题</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
    name: 'Son2Com',
    methods: {
        ...mapMutations(['delCount', 'changeTitle']),
        handleDelCount(num) {
            this.delCount(num)
        },
        changeSon2Title() {
            this.$store.commit('changeTitle', 'Son2 changed the title')
        }
    },
    computed: {
        ...mapState(['count', 'title'])
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
