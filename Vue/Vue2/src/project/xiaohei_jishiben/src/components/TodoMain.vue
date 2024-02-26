<template>
    <section class="main">
        <ul class="todo-list">
            <li v-for="(item, index) in list" :key="item.id" class="todo">
                <div class="view">
                    <span class="index">{{ index +  1 }}.</span> <label>{{ item.name }}</label>
                    <button class="destroy" @click="delTask(item.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "TodoMain",
    props: {
        list: {
            type: [],
            require: true,
            default: []
        }
    },
    methods: {
        delTask(id) {
            this.$emit('delTask', id)
        }
    }
}
</script>

<style scoped>

</style>