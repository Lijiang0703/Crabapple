import axios from 'axios'

const getToken = ()=>{
  return axios({
      url:'/qiniu',
      method: 'get'
    }).then((res)=>{
      return Promise.resolve(res)
    })
}

export default getToken
