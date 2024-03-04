<template>
    <div class="box">
        <h2>UserInfo 子组件</h2>
        从vuex中获取的值：user.name -> <label>{{ this.$store.state.user.userInfo.name }}</label>
        <br/>
        从vuex中获取的值：score -> <label>{{ this.$store.state.user.score }}</label>
        <br/>
        从vuex中获取的值：user.NAME -> <label>{{ this.$store.getters["user/upperCaseName"] }}</label>
        <br/>
        <input type="text" v-model="newName">
        <br>
        <button @click="updateName">更改名称</button>
        <button @click="updateName2">更改名称2</button>
        <button @click="updateNameLater">一秒后更改名称</button>
    </div>
</template>

<script>

export default {
    name: "UserInfo",
    data() {
        return {
            newName: ''
        }
    },
    methods: {
        updateName() {
            if (!this.newName) {
                return alert('newName is null!')
            }
            this.$store.state.user.userInfo.name = this.newName
            this.newName = ''
        },
        updateName2() {
            if (!this.newName) {
                return alert('newName is null!')
            }
            this.$store.commit('user/updateName', this.newName)
            this.newName = ''
        },
        updateNameLater() {
            if (!this.newName) {
                return alert('newName is null!')
            }
            this.$store.dispatch('user/updateNameLater', this.newName)
            this.newName = ''
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
