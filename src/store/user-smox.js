import {login, logout} from 'api/user'
import {removeStorage, setStorage} from 'common/js/localstorage'

const initState = {
  name: '111',
  pwd: '',
  msg: '',
  bg: '',
  redirectTo: '',
  isAuth: false
}

export function user(state=initState, action) {
  switch (action.type) {
    case 'loginSuccess':
      return {...state, bg: '#b4d896', isAuth: true, msg: action.msg, ...action.payload}
    case 'logoutSuccess':
      return {msg: '', redirectTo: '/login', ...action.payload}
    case 'errMsg':
      return {msg: action.msg, bg: '#ef736e'}
    default:
      return state
  }
}

function errMsg(msg) {
  return {msg, type: 'errMsg'}
}

function loginSuccess(data) {
  return {type: 'loginSuccess', msg: data.msg, payload: data.result}
}

function logoutSuccess(data) {
  return {type: 'logoutSuccess', msg: data.msg, payload: data.result}
}

export function onLogin({name, pwd}) {
  if (!name || !pwd) {
    return dispatch => {
      dispatch(errMsg('输入用户名和密码！'))
      setTimeout(() => {
        dispatch(errMsg(''))
      }, 4500)
    }
  }
  return dispatch => {
    login({name, pwd}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        setStorage('user-info', res.data.result)
        dispatch(loginSuccess(res.data))
      } else {
        dispatch(errMsg(res.data.msg))
      }
      setTimeout(() => {
        dispatch(errMsg(''))
      }, 4500)
    })
  }

}


export function onLogout() {
  return dispatch => {
    logout().then(res => {
      if (res.status === 200 && res.data.code === 0) {
        removeStorage('user-info')
        dispatch(logoutSuccess(res.data))
      } else {
        errMsg(res.data.msg)
      }
      setTimeout(() => {
        dispatch(errMsg(''))
      }, 4500)
    })
  }
}