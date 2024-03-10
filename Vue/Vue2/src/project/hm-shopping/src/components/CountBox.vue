<template>
  <div class="count-box">
    <button @click="buttonChangeNum(-1)" class="minus" :disabled="this.value < 2" :style="this.value < 2 ? 'color: #BBBBBBFF' : ''">-</button>
    <input :value="value" @change="handleChange" class="inp" type="text">
    <button @click="buttonChangeNum(1)" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }

      this.$emit('input', num)
    },
    buttonChangeNum (num) {
      const newValue = this.value + num
      if (newValue < 1) {
        return
      }
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped lang="less">
.count-box {
  width: 110px;
  display: flex;

  .add,
  .minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }

  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
