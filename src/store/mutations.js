export default {
  login(state, data) {
    return {
      isAuth: true,
      msg: data.msg,
      bg: '#b4d896'
    }
  },
  errMsg(state, msg) {
    return {
      msg: msg,
      bg: '#ef736e'
    }
  },
  logout(state, data) {
    return {
      isAuth: false,
      msg: data.msg,
      bg: '#b4d896',
      redirectTo: '/login'
    }
  }
}