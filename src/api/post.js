import axios from 'axios'

const request = axios.create({
  baseURL: '/api'
})

export function getPosts(status, sort, tag, uid, page, pageSize) {
  return request.get(`/posts?status=${status}&sort=${sort}&uid=${uid}&tag=${tag}&page=${page}&pageSize=${pageSize}`)
}

export function getPost(id) {
  return request.get(`/post/${id}`)
}

export function add({title, content, status, sort, tag, uid}) {
  return request.post('/post/add', {
    title,
    content,
    status,
    sort,
    tag,
    uid
  })
}

// 更新文章
export function update({id, title, content, status, sort, tag, uid, time}) {
  return request.post(`/post/update/${id}`, {
    title,
    content,
    status,
    sort,
    tag,
    uid,
    time
  })
}

// 删除一篇文章
export function deletePost(id) {
  return request.post(`/post/delete/${id}`)
}

