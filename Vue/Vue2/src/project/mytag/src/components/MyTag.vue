<template>
    <div class="my-tag">
        <input
            v-if="isEdit"
            v-focus
            ref="inp"
            @blur="isEdit = false"
            class="input"
            type="text"
            placeholder="输入标签"
        />
        <div
            v-else
            @dblclick="handleClick"
            class="text">
            茶具
        </div>
    </div>
</template>

<script>
export default {
    name: "MyTag",
    data() {
        return {
            isEdit: false
        }
    },
    methods: {
        handleClick() {
            this.isEdit = true
            // this.$nextTick(() => this.$refs.inp.focus())
        }
    }
}
</script>

<style scoped lang="less">
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>