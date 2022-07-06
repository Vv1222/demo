import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/PageLayout.vue'),
        children: [
            {
                path: '/echarts',
                name: 'Echarts',
                component: () => import('@/pages/echarts/index.vue'),
                children: [
                    {
                        path: '/echarts-line',
                        name: '折线图',
                        component: () =>
                            import('@/pages/echarts/EchartsLine.vue'),
                    },
                    {
                        path: '/echarts-pie',
                        name: '饼图',
                        component: () =>
                            import('@/pages/echarts/EchartsPie.vue'),
                    },
                ],
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import('@/pages/map/index.vue'),
                children: [
                    {
                        path: '/map-mapbox',
                        name: 'mapbox',
                        component: () => import('@/pages/map/mapbox/index.vue'),
                    },
                    {
                        path: '/map-cesium',
                        name: 'cesium',
                        component: () => import('@/pages/map/cesium/index.vue'),
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
