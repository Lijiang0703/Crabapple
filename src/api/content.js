import axios from 'axios'

const baseUrl = process.env.REQUEST_URL + '/content/'
const getContent = (id,opts)=>{
  let url = baseUrl
  if(id) url+= id
  if(opts){
    url+= "?page=" + (opts.page || 1) + "&size=" + (opts.size || 20)
  }
  return axios({
      url: url,
      method: 'get'
    }).then((res)=>{
      return Promise.resolve(res.data)
    })
}

const removeContent = (id)=>{
  return axios({
    url: baseUrl +id,
    method: 'delete'
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

const createContent = (data)=>{
  return axios({
    url: baseUrl,
    method: 'post',
    data: data
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

const updateContent = (data)=>{
  const id = data.id
  return axios({
    url: baseUrl + id,
    method: 'put',
    data: data
  }).then(res=>{
    return Promise.resolve(res.data)
  })
}

export {
  getContent,
  removeContent,
  createContent,
  updateContent
}
