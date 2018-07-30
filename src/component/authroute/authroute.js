import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {setStorage,getStorage} from "common/js/localstorage"
import {getUserInfo} from "api/user"
import Cookies from 'js-cookie'

@withRouter
class AuthRoute extends React.Component {

  componentDidMount() {
    axios.get('/auth').then(res => {
        if (res.data.code === 401) {
          this.props.history.push('/login')
        }else {
          this.props.history.push('/')
          const user = getStorage('user-info')
          if(!user){
            const name = Cookies.get('uname')
            getUserInfo(name).then(res => {
              setStorage('user-info', res.data.user)
            })
          }
        }
    })

  }

  render() {
    return null
  }
}

export default AuthRoute