import axios from 'axios'

// 用户登录
export function login(user) {
  return axios.post('/login', user)
}


// 用户注册
export function register(user) {
  return axios.post('/register', {name: user.name, pwd: name.pwd, qq: parseInt(user.qq), role: 'user', desc: ''})
}

// 更新用户信息
export function update(user) {
  return axios.post('/user/update', user)
}

// 获取用户列表
export function userList() {
  return axios.get('/user/user')
}

// 删除用户

export function deleteUser(id) {
  return request.post('/user/delete', id)
}

// 查找单一用户信息

export function getUserInfo(id) {
  return axios.get('/user/info', {
    params: {
      id: id
    }
  })
}

// 用户退出
export function logout() {
  return axios.post('/user/logout')
}