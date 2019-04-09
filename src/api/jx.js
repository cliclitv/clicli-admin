import axios from 'axios'


export function getBitList(fid) {
  return axios.get('/bit/list', {
    params: {
      fid
    }
  })

}

export function getHcyList(fid) {
  return axios.get('/hcy/list', {
    params: {
      fid
    }
  })

}

export function getRealUrl(fid) {
  return axios.get('/bit/list', {
    params: {
      fid
    }
  })
}