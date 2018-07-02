import {login, logout} from "api/user"
import {setStorage, removeStorage} from "common/js/localstorage"

export default {
  onLogin({commit}, user) {
    if (!user.name || !user.pwd) {
      commit('errMsg', '都要填都要填！')
      setTimeout(() => {
        commit('errMsg', '')
      }, 4500)
    }
    return login(user).then(res => {
      if (res.data.code === 0) {
        setStorage('user-info', res.data.result)
        commit('login', res.data)
      }
      if (res.data.code === 1) {
        commit('errMsg', res.data.msg)
        setTimeout(() => {
          commit('errMsg', '')
        }, 4500)
      }
    })
  },
  onLogout({commit}) {
    return logout().then(res => {
      if (res.data.code === 0) {
        removeStorage('user-info')
        commit('logout', res.data)
        setTimeout(() => {
          commit('errMsg', '')
        }, 4500)
      }
    })
  }

}