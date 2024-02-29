<template>
    <div class="table-case">
        <MyTable :list="goods">
            <template #head>
                <th>编号</th>
                <th>名称</th>
                <th>图片</th>
                <th width="100px">标签</th>
            </template>
            <template #body="obj">
                <td>{{ obj.index + 1 }}</td>
                <td>{{ obj.item.name }}</td>
                <td>
                    <img :src="obj.item.picture"/>
                </td>
                <td>
                    <MyTag :tag.sync="obj.item.tag"/>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
import MyTag from "@/components/MyTag.vue";

export default {
    name: 'TableCase',
    components: {MyTag, MyTable},
    data() {
        return {
            goods: [
                {
                    id: 101,
                    picture: require('@/assets/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg'),
                    name: '梨皮朱泥三绝清代小品壶经典款紫砂壶',
                    tag: '茶具',
                },
                {
                    id: 102,
                    picture: require('@/assets/221317c85274a188174352474b859d7b.jpg'),
                    name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌',
                    tag: '男鞋',
                },
                {
                    id: 103,
                    picture: require('@/assets/cd4b840751ef4f7505c85004f0bebcb5.png'),
                    name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm',
                    tag: '儿童服饰',
                },
                {
                    id: 104,
                    picture: require('@/assets/56eb25a38d7a630e76a608a9360eec6b.jpg'),
                    name: '基础百搭，儿童套头针织毛衣1-9岁',
                    tag: '儿童服饰',
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
.table-case {
    width: 1000px;
    margin: 50px auto;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        vertical-align: middle;
    }
}
</style>