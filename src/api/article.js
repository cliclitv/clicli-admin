import axios from 'axios'
import Cookies from 'js-cookie'

const request = axios.create({
  baseURL: 'https://api.chinko.cc'
})

// 根据状态获取文章
export function articleList(status) {
  return request.get('/posts/type', {
    params: {
      status: status,
      page: 1,
      pageSize: 20
    }
  })
}

// 根据作者获取文章
export function authorArticle(id) {
  return request.get('/posts/type', {
    params: {
      uid: id,
      page: 1,
      pageSize: 20
    }
  })
}

// 查找一篇文章
export function getOneArticle(id) {
  return request.get(`/post/${id}`)
}

// 撰写增加文章

export function writeArticle(post) {

  return request.post('/post/add', {
    title: post.title,
    content: post.content,
    status: post.status,
    sort: post.sort,
    type: post.type,
    uid: post.uid
  })
}

// 更新文章
export function update(post) {
  return request.post(`/post/update/${post.id}`, {
      title: post.title,
      content: post.content,
      status: post.status,
      sort: post.sort,
      type: post.type,
      uid: post.uid
    },
    {
      headers: {
        'Token': Cookies.get('token')
      }
    })
}

// 删除一篇文章
export function deleteArticle(id) {
  return request.post(`/post/delete/${id}`)
}

