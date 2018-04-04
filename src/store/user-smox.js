import {login, logout} from 'api/user'
import {removeStorage, setStorage} from 'common/js/localstorage'

const initState = {
  name: '',
  pwd: '',
  msg: '',
  bg: '',
  redirectTo:'',
  isAuth: false
}

export function user(state = initState, action) {
  switch (action.type) {
    case 'loginSuccess':
      return {...state, msg: '', bg: '#b4d896', ...action.payload, isAuth: true,redirectTo:'/'}
    case 'logoutSuccess':
      return {...state,msg: '', isAuth: false,redirectTo:'/login',...action.payload}
    case 'errMsg':
      return {...state, msg: action.msg, bg: '#ef736e', isAuth: false}
    default:
      return state
  }
}

function errMsg(msg) {
  return {msg, type: 'errMsg'}
}

function loginSuccess(data) {
  return {type: 'loginSuccess', payload: data}
}

function logoutSuccess(data) {
  return {type: 'logoutSuccess', payload: data}
}

export function onLogin({name, pwd}) {
  if (!name || !pwd) {
    return errMsg('填写用户和密码！')
  }
  return dispatch => {
    login({name, pwd}).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        setStorage('user-info', res.data.result)
        dispatch(loginSuccess(res.data))
      } else {
        dispatch(errMsg(res.data.msg))
      }
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
    })
  }
}