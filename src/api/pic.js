import axios from 'axios'

const getPics = ()=>{
  return axios({
      url:'//localhost:3002/pic',
      method: 'get'
    }).then((res)=>{
      return Promise.resolve(res.data)
    })
}
const removePic = (data)=>{
  return axios({
    url: '//localhost:3002/pic',
    method: 'delete'
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

export {
  getPics,
  removePic
}
