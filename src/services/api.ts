import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.50.45:3001'
})

export default api
