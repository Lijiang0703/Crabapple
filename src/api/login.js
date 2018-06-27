import axios from 'axios'

const check = (data)=>{
  return axios({
    url:'//localhost:3002/users',
    method: 'post',
    data: data
  }).then((res)=>{
      Promise.resolve(res)
    })
}

export default check
