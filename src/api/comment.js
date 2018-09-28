import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.chinko.cc'
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

// 根据id删除评论
export function deleteCommentById(id) {
  return request.post(`/comment/delete`,{
    params:{
      id
    }
  })
}

// 根据pid删除评论
export function deleteCommentByPid(pid) {
  return request.post(`/comment/delete`,{
    params:{
      pid
    }
  })
}