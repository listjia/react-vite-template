//axios的封装
import axios from 'axios'

//根域名配置
//超时时间
//请求/响应拦截

const http = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})

//请求拦截器
http.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

//响应拦截器
http.interceptors.response.use((response)=>{
    //2xx范围内的状态码都会触发该函数
    return response.data
},(error)=>{
    //超出2xx范围的状态码都会触发该函数
    return Promise.reject(error)
})

export {http}