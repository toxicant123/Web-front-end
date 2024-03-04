<template>
    <div class="box">
        <h2>SettingInfo 子组件</h2>
        从vuex中获取的值：theme -> <label>{{ theme }}</label>
        <br/>
        从vuex中获取的值：desc -> <label>{{ desc }}</label>
        <br/>
        从vuex中获取的值：lang -> <label>{{ lang }}</label>
        <br/>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "SettingInfo",
    computed: {
        ...mapState('setting', ['theme', 'desc', 'lang'])
    }
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
