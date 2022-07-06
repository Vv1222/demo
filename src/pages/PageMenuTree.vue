<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { RouteRecordRaw } from 'vue-router';

interface Props {
    menuList: RouteRecordRaw[];
}
withDefaults(defineProps<Props>(), {
    menuList: () => [],
});
</script>

<template>
    <template v-for="i in menuList" :key="i.path">
        <el-sub-menu v-if="i.children" :index="i.path">
            <template #title>
                <el-icon><location /></el-icon>
                <span>{{ i.name }}</span>
            </template>
            <page-menu-tree :menu-list="i.children"></page-menu-tree>
        </el-sub-menu>
        <el-menu-item v-else :index="i.path"> {{ i.name }} </el-menu-item>
    </template>
</template>
