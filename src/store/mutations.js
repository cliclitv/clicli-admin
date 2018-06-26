export default {
  login(state, data) {
    state.msg = data.msg
    state.isAuth = true
    state.bg = '#b4d896'
  },
  errMsg(state, msg) {
    state.msg = msg
    state.bg = '#ef736e'
  },
  logout(state, data) {
    state.isAuth = false
    state.msg = data.msg
    state.bg = '#b4d896'
    state.redirectTo = '/login'
  }
}