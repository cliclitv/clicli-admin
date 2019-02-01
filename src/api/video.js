import axios from 'axios'
import {replaceContent} from 'common/js/util'

const request = axios.create({
  baseURL: 'https://api.clicli.top'
})

// 根据pid查找视频
export function getVideos(pid, page, pageSize) {
  return request.get('/videos', {
    params: {
      pid: pid,
      page,
      pageSize
    }
  })
}

// 根据vid查找单一视频

export function getVideo(vid) {
  return request.get(`/video/${vid}`)

}

// 添加视频
export function addVideo({oid, title, content, pid, uid}) {
  content = replaceContent(content)
  return request.post('/video/add', {
    oid: parseInt(oid),
    title,
    content,
    pid: parseInt(pid),
    uid
  })
}

// 修改视频
export function updateVideo({id, oid, title, content, pid, uid}) {
  content = replaceContent(content)
  return request.post(`/video/update/${id}`, {
    oid: parseInt(oid),
    title,
    content,
    pid: parseInt(pid),
    uid
  })
}

// 根据id删除视频
export function deleteVideoById(id) {
  return request.delete('/delete/video', {
    params: {
      id
    }
  })
}

// 根据pid删除视频
export function deleteVideoByPid(pid) {
  return request.delete('/delete/video', {
    params: {
      pid
    }
  })
}


//上传

export function getUploadToken(fname, rname) {
  return axios.get('https://www.clicli.top/upload/auth', {
    params: {
      fname,
      rname
    }
  })
}