import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(store);
// 挂载路由
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 挂载实例
const a = app.mount('#app');
console.log(324, a, app);
