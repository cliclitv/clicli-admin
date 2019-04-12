import axios from 'axios'
import {isDev, API_LINK} from 'common/js/util'

const request = axios.create({
  baseURL: API_LINK
})

// 用户登录
export function login(user) {
  return axios.post('/user/login', {
    name: user.name,
    pwd: user.pwd
  })
}


// 用户注册
export function register(user) {
  return axios.post('/user/register', {
    name: user.name,
    pwd: user.pwd,
    qq: user.qq,
    role: 'user',
    desc: '人懒，竟然没有签名~'
  })
}

// 更新用户信息
export function update(user) {
  return axios.post(`/user/update/${user.id}`, {
    name: user.name,
    pwd: user.pwd,
    qq: user.qq,
    role: user.role,
    desc: user.desc
  })
}

// 获取用户列表
export function userList(role) {
  return request.get('/users', {
    params: {
      role,
      page: 1,
      pageSize: 100
    }
  })
}


// 用户退出
export function logout() {
  return axios.post('/user/logout')
}

// 获取用户cookie
export function getCookie(uid) {
  return axios.get(`/cookie/${uid}`)
}

export function getUser(uname, uid) {
  return request.get('/user', {
    params: {
      uname,
      uid
    }
  })
}

// 替换用户cookie
export function replaceCookie(data) {
  return axios.post('/cookie/replace', {
    uid: parseInt(data.uid),
    hcy: data.hcy,
    bit: data.bit
  })

}

export function auth() {
  return axios.get('/auth')
}