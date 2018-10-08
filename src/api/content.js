import axios from 'axios'

const getContent = ()=>{
  return axios({
      url:'//localhost:3002/content',
      method: 'get'
    }).then((res)=>{
      return Promise.resolve(res.data)
    })
}

const removeContent = (data)=>{
  return axios({
    url: '//localhost:3002/content',
    method: 'delete'
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

const create = (data)=>{
  return axios({
    url: '//localhost:3002/content',
    method: 'post',
    data: data
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

export {
  getContent,
  removeContent,
  create
}
