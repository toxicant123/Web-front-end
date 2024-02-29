<template>
    <div class="my-tag">
        <input
            v-if="isEdit"
            v-focus
            ref="inp"
            @blur="isEdit = false"
            @keyup.enter="handleEnter"
            :value="tag"
            class="input"
            type="text"
            placeholder="输入标签"
        />
        <div
            v-else
            @dblclick="handleClick"
            class="text">
            {{ tag }}
        </div>
    </div>
</template>

<script>
export default {
    name: "MyTag",
    props: {
        tag: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isEdit: false
        }
    },
    methods: {
        handleClick() {
            this.isEdit = true

            // this.$nextTick(() => this.$refs.inp.focus())
        },
        handleEnter(e) {
            if (e.target.value.trim() === '') {
                return alert('请输入内容')
            }

            this.$emit('update:tag', e.target.value)
            this.isEdit = false
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