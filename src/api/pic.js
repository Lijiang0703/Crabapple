import axios from 'axios'

const baseUrl = process.env.REQUEST_URL + '/pic'
const getPics = ()=>{
  return axios({
      url: baseUrl,
      method: 'get'
    }).then((res)=>{
      return Promise.resolve(res.data)
    })
}
const removePic = (data)=>{
  return axios({
    url: baseUrl,
    method: 'delete'
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

export {
  getPics,
  removePic
}
