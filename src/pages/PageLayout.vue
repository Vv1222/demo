<script setup lang="ts">
import { ref } from 'vue';
import PageMenu from './PageMenu.vue';
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<template>
    <div>
        <div class="common-layout">
            <el-container>
                <el-aside width="200px">
                    <PageMenu />
                </el-aside>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
