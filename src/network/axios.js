import axios from 'axios'
//封装axios拦截器
export function request(config) {
  //封装一个axios实例
  const instance =axios.create({
    baseURL : "http://123.207.32.32:8000/api/hy",
    // baseURL : "http://106.54.54.237:8000/api/hy"
    timeout:5000
  })
  //axios的请求拦截器，请求拦截的作用
  instance.interceptors.request.use(config =>{
    return config
  },err =>{

  })

  //响应拦截器
  instance.interceptors.response.use(res =>{
    return res.data
  },error => {
    console.log(error);
  })

  // 这里返回一个axios实例
  return instance(config)
}

