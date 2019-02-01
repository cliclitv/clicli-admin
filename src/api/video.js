import axios from 'axios'

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
  if (content.indexOf('ftn.qq.com')) content = content.replace('http://', 'https://').replace('ftn_handler/', 'rkey=')
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
  // http://tj-ctfs.ftn.qq.com/ftn_handler/4c935fcf6ab1ce4a20d59270dc546602935119fb7edd2e7b032124955a1048ee76228edd082cf5a917b393e7347052f841465e0c5299e9683a2bca4c2e521963/wz04.mp4
  if (content.indexOf('ftn.qq.com')) content = content.replace('http://', 'https://').replace('ftn_handler/', 'rkey=')
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