import axiosInstance from '@/utils/axios';
import { Axios, AxiosInstance } from 'axios';
import { Get, Post, Put } from '@/types/axiosRequest';
// const get = async (url: string, config: AxiosRequestConfig) => {
//     const res = await axiosInstance.get(url, { ...config });
//     return res.data;
// };
const get: Get = async (url, config) => {
    const response = await axiosInstance.get(url, { ...config });
    return response.data;
};

const post: Post = async (url, params, config) => {
    const response = await axiosInstance.post(url, params, { ...config });
    return response.data;
};

const request = {
    get,
    post,
};

export default request;
