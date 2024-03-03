<template>
    <div class="box">
        <h2>Son4 子组件</h2>
        从vuex中获取的值：filterList -> <label>{{ this.$store.getters.filterList }}</label>
        <hr/>
        从vuex中获取的值：filterList -> <label>{{ filterList }}</label>
        <br/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'Son4Com',
    computed: {
        ...mapGetters(['filterList'])
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
