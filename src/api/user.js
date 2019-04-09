import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.clicli.top/'
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
  return request.post('/user/register', {
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

// 根据ID查找用户信息

export function getUserById(id) {
  return request.get('/user', {
    params: {
      uid: id
    }
  })
}

// 根据用户名查找用户信息

export function getUserByName(name) {
  return request.get('/user', {
    params: {
      uname: name
    }
  })
}

// 用户退出
export function logout() {
  return request.post('/user/logout')
}

// 获取用户cookie
export function getCookie(uid) {
  return request.get(`/cookie/${uid}`)
}

// 替换用户cookie
export function replaceCookie(data) {
  return request.post('/cookie/replace', {
    uid: parseInt(data.uid),
    hcy: data.hcy,
    kandian: data.kandian,
    bit: data.bit
  })

}