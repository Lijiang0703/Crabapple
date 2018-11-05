// 安全起见，每个工作台接口都要进行权限验证
import axios from 'axios'

axios.interceptors.request.use(function(config){
  const author = window.localStorage.getItem('crabapple_author') || ""
  if(!config.authoration){
      config.authoration = author
  }
  return config
},function(eror){
  return Promise.reject(error)
})

export default axios
