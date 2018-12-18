import axios from 'axios'


export function getBitList(fid) {
  return axios.get('/bit/list', {
    params: {
      fid
    }
  })

}

export function getKandianList() {
  return axios.get('/kandian/list')

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