<template>
    <div class="box">
        <h2>Son3 子组件</h2>
        从vuex中获取的值：title -> <label>{{ this.$store.state.title }}</label>
        <br/>
        从vuex中获取的值：count -> <label>{{ this.$store.state.count }}</label>
        <br/>
        <button @click="handleChange(666)">一秒后修改为666</button>
        <button @click="handleChangeTitle">一秒后修改标题</button>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'Son3Com',
    methods: {
        ...mapActions(['changeTitleAction']),
        handleChange(num) {
            this.$store.dispatch('changeCountAction', num)
        },
        handleChangeTitle() {
            this.changeTitleAction('Son3 changed the title')
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
