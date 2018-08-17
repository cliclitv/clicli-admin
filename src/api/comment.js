import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.chinko.cc'
})

// 根据pid查找评论
export function getComment(pid, page, pageSize) {
  return request.get('/comments', {
    params: {pid, page, pageSize}
  })
}

// 根据 uid 查找评论
export function getComment(uid, page, pageSize) {
  return request.get('/comments', {
    params: {uid, page, pageSize}
  })
}

// 添加评论
export function addComment(comment) {
  return request.post('/comment/add', comment)
}

// 删除评论
export function deleteComment(pid) {
  return request.delete(`/comment/delete${id}`)
}