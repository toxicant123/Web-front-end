<template>
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" class="new-todo" v-model="todoName" @keyup.enter="addTask"/>
        <button class="add" @click="addTask">添加任务</button>
    </header>
</template>

<script>
export default {
    name: "TodoHeader",
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        addTask() {
            if (!this.todoName) {
                return alert('请输入任务名称')
            }

            this.$emit('add', this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<style scoped>

</style>