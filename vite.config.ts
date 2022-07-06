import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            dts: true,
            dirs: ['src/components'],
            resolvers: [ElementPlusResolver()],
        }),
        // gzip压缩 生产环境生成 .gz 文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    build: {
        outDir: 'dist',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        cssCodeSplit: false,
    },
    server: {
        port: 3333, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 3333,
        },
        // 设置 https 代理
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true,
        //         rewrite: (path: string) => path.replace(/^\/api/, '')
        //     }
        // }
    },
});
