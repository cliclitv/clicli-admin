import axios from 'axios'

// 获取设置项
export function getOption() {
  return axios.get('/option/option')
}

// 获取设置项
export function update(option) {
  return axios.post('/option/update', option)
}