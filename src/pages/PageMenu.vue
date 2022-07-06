<script setup lang="ts">
import PageMenuTree from './PageMenuTree.vue';

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<template>
    <el-menu
        default-active="$route.path"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
    >
        <page-menu-tree
            :menu-list="$router.options.routes[0].children"
        ></page-menu-tree>

        <!-- <template v-for="i in $router.options.routes[0].children" :key="i.path">
            <el-sub-menu v-if="i.children" :index="i.path">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{ i.name }}</span>
                </template>
                <template v-for="k in i.children" :key="k.path">
                    <el-sub-menu v-if="k.children" :index="k.path">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>{{ k.name }}</span>
                        </template>
                        <el-menu-item
                            v-for="item in k.children"
                            :key="item.path"
                            >{{ item.name }}</el-menu-item
                        >
                    </el-sub-menu>
                    <el-menu-item v-else :index="k.path">
                        {{ k.name }}
                    </el-menu-item>
                </template>
            </el-sub-menu>
            <el-menu-item v-else :index="i.path"> {{ i.name }} </el-menu-item>
        </template> -->
    </el-menu>
</template>

<style scoped lang="scss"></style>
<!-- 这块的代码是一样的，只是在循环嵌套 ， 怎么优化抽取呢 -->
<!-- 原来可以直接在内部调用自己。。。参考MenuTree组件 -->
