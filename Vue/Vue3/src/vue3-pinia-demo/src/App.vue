<script setup>
import Son1Com from "@/components/Son1Com.vue";
import Son2Com from "@/components/Son2Com.vue";

import {useCounterStore} from '@/store/counter'
import {useChannelStore} from "@/store/channel.js";
import {ref} from "vue";
import {storeToRefs} from "pinia";

const counterStore = useCounterStore()
const channelStore = useChannelStore();

// 使用storeToRefs后解构可以保留响应式
const { count, msg } = storeToRefs(counterStore)

const list = ref([]);

const pushButton = async () => {
    await channelStore.getList()
    list.value = channelStore.channelList
}

</script>

<template>
    <div>
        <h3>App.vue根组件 - {{ count }} - {{ msg }} - double:
            {{ counterStore.double }}</h3>
        <Son1Com/>
        <Son2Com/>
        <hr>
        <button @click="pushButton">获取频道数据</button>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
