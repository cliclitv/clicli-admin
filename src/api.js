import Cookies from 'js-cookie'
const perfix = `https://api.clicli.us`

export function getPost(id) {
  return get(`${perfix}/post/${id}`)
}

export function add({ title, content, status, sort, tag, uid, videos }) {
  return post(`${perfix}/post/add`, {
    title,
    content,
    status,
    sort,
    tag,
    uid: parseInt(uid),
    videos,
  })
}

export function update({ id, title, content, status, sort, tag, uid, time, videos }) {
  return post(`${perfix}/post/update/${id}`, {
    title,
    content,
    status,
    sort,
    tag,
    uid: parseInt(uid),
    time,
    videos,
  })
}

export function login({ name, pwd }) {
  return post(`${perfix}/user/login`, {
    name,
    pwd,
  })
}

export function register({ name, pwd, qq }) {
  return post(`${perfix}/user/register`, {
    name,
    pwd,
    qq,
  })
}

export function getUser(uname, uid, uqq) {
  return get(`${perfix}/user?uanme=${uname}&uid=${uid}&uqq=${uqq}`)
}

export function updateUser({ id, name, pwd, qq, level, desc }) {
  return post(`${perfix}/user/update/${id}`, {
    name,
    pwd,
    qq,
    level: parseInt(level),
    desc,
  })
}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      token: Cookies.get('token'),
    },
    credentials: 'include',
  }).then((res) => res.json())
}

export function get(url) {
  return fetch(url, {
    credentials: 'include',
  }).then((res) => res.json())
}
