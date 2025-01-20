import axios from 'axios';
import { toast } from 'sonner';

const service = axios.create({
  baseURL: '/api',
  timeout: 5 * 1000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // if (contentType && contentType.includes("text/plain")) {
      //   try {
      //     response.data = JSON.parse(response.data);
      //   } catch (e) {
      //     console.error("JSON解析错误:", e);
      //   }
      // }
      return response.data;
    }
    return Promise.reject(new Error(response.status));
  },
  (error) => {
    if (error) {
      if (error.message.indexOf(401) > -1) {
        console.log(error.message);
      } else if (error.message.indexOf(5000) > -1) {
        console.log('api请求超时');
      } else if (error.message.indexOf(500) > -1) {
        toast.info(error.message);
      } else {
        toast.error(error.message);
      }
    }

    return Promise.reject(error);
  }
);

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwt_access_token');
    if (token) {
      config.headers.Authorization = `Bearer  ${token}`;
      config.headers.lan = 'zh-CN';
    } else {
      console.log('没有token');
      // if (config.method === 'get') {
      //   config.paramsSerializer = function (params) {
      //     return qs.stringify(params, { arrayFormat: 'repeat' });
      //   };
      // }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default service;
