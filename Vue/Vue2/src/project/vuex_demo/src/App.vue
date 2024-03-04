<template>
    <div id="app">
        <h1>根组件
            - {{ title }}
            - {{ count }}
        </h1>
        <input type="text" :value="count" @input="changeCount">
        <Son1></Son1>
        <hr>
        <Son2></Son2>
        <hr>
        <Son3></Son3>
        <hr>
        <Son4></Son4>
        <hr>
        <UserInfo/>
        <hr>
        <SettingInfo/>
    </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import Son3 from './components/Son3.vue'
import Son4 from './components/Son4.vue'
import {mapState} from "vuex"
import UserInfo from "@/components/UserInfo.vue";
import SettingInfo from "@/components/SettingInfo.vue";


export default {
    name: 'app',
    methods: {
        changeCount(event) {
            this.$store.commit('changeCount', event.target.value)
        }
    },
    data: function () {
        return {}
    },
    components: {
        SettingInfo,
        UserInfo,
        Son1,
        Son2,
        Son3,
        Son4
    },
    created() {
        console.log(this.$store)
    },
    computed: {
        ...mapState(['count', 'title'])
    }
}
</script>

<style>
#app {
    width: 600px;
    margin: 20px auto;
    border: 3px solid #ccc;
    border-radius: 3px;
    padding: 10px;
}
</style>
