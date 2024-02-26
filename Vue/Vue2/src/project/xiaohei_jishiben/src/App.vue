<template>
    <!-- 主体区域 -->
    <section id="app">
        <!-- 输入框 -->
        <TodoHeader @add="addTask"/>
        <!-- 列表区域 -->
        <TodoMain :list="list" @delTask="delTask"/>
        <!-- 统计和清空 -->
        <TodoFooter/>
    </section>
</template>

<script>
import TodoFooter from "@/components/TodoFooter.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";

export default {
    components: {TodoMain, TodoHeader, TodoFooter},
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: '打篮球'
                },
                {
                    id: 2,
                    name: '看电影'
                },
                {
                    id: 3,
                    name: '吃水果'
                }
            ]
        }
    },
    methods: {
        addTask(taskName) {
            this.list.push({
                id: +new Date(),
                name: taskName
            })
        },
        delTask(id) {
            this.list = this.list.filter(ie => ie.id !== id)
        }
    }
}
</script>

<style>

</style>
