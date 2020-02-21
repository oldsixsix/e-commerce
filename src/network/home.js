// 在这里封装对首页数据的所有请求
//调用方便，维护也方便
//
import {request} from './axios'

//请求1，每一个请求封装一个函数
export function getHomeMutidata() {
  //对axiox实例导入具体配置，默认get请求
  return request({
    url:'/home/multidata'

  })

}
