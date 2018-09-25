import axios from 'axios'

const check = (data)=>{
  return axios({
      url:'//localhost:3002/users',
      method: 'post',
      data: data
    }).then((res)=>{
      return Promise.resolve(res.data)
    })
}

export default check
