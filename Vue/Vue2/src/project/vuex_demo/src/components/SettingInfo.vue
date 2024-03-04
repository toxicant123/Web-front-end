<template>
    <div class="box">
        <h2>SettingInfo 子组件</h2>
        从vuex中获取的值：theme -> <label>{{ theme }}</label>
        <br/>
        从vuex中获取的值：desc -> <label>{{ desc }}</label>
        <br/>
        从vuex中获取的值：lang -> <label>{{ lang }}</label>
        <br/>
        从vuex中获取的值：finalLevel -> <label>{{ getFinalLevel }}</label>
        <br/>
        <input type="text" v-model.number="newLevel">
        <br>
        <button @click="updateLevel">更改等级</button>
        <button @click="updateLevelLater">一秒后更改等级</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    name: "SettingInfo",
    data() {
        return {
            newLevel: null
        }
    },
    computed: {
        ...mapState('setting', ['theme', 'desc', 'lang']),
        ...mapGetters('setting', ['getFinalLevel'])
    },
    methods: {
        ...mapMutations('setting', ['changeLevel']),
        ...mapActions('setting', ['changeLevenLater']),
        updateLevel() {
            if (!this.newLevel) {
                return alert('newLevel is null!')
            }
            this.changeLevel(this.newLevel)
            this.newLevel = null
        },
        updateLevelLater() {
            if (!this.newLevel) {
                return alert('newLevel is null!')
            }
            this.changeLevenLater(this.newLevel)
            this.newLevel = null
        }
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
