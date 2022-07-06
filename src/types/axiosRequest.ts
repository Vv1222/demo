import { AxiosResponse, AxiosRequestConfig } from 'axios';

// 网络请求响应格式，T 是具体的接口返回类型数据
export interface CustomSuccessData<T> {
    code: number;
    msg?: string;
    message?: string;
    data?: T;
    [keys: string]: any;
}

export interface Get {
    <T>(url: string, config?: AxiosRequestConfig): Promise<
        CustomSuccessData<T>
    >;
}

export interface Post {
    <T>(
        url: string,
        params?: string | object,
        config?: AxiosRequestConfig,
    ): Promise<CustomSuccessData<T>>;
}

export interface Put {
    <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<
        CustomSuccessData<T>
    >;
}
