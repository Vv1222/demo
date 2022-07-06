import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
//qs jsonp

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SD_SERVER || 'http://localhost:7001',
});

// 请求拦截
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (config.method === 'post') {
            config.headers &&
                (config.headers['Content-Type'] = 'application/json');
        }

        const token = localStorage.getItem('token');
        token &&
            config.headers &&
            (config.headers.Authorization = `Bearer ${token}`);

        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

// 响应拦截
axiosInstance.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response;
    },
    (error: any) => {
        if (error && error.response) {
            // 公共错误处理
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求400';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '404,请求错误,未找到该资源';
                    break;
                case 500:
                    error.message = '服务器端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                default:
                    error.message = `${error.response.message}`;
            }
        } else {
            // 超时处理
            if (JSON.stringify(error).includes('timeout')) {
                // ElMessage.error('服务器响应超时，请刷新当前页')
            } else error.message = '连接服务器失败';
        }
        // ElMessage.error(error.message)
        return Promise.reject(error);
    },
);

// 取消请求 什么时候会出现重复请求？ 是否会有什么问题？ 取消当前请求还是上次请求？

// 失败重试 失败自动重试有什么缺点没？

// 要自己封装get post方法吗，还是直接返回实例

export default axiosInstance;
