import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {

  componentDidMount() {

    // 是否登录
    axios.get('/auth').then(res => {
        if (res.data.code === 401) {
          this.props.history.push('/login')
        }else {
          this.props.history.push('/')
        }
    })

  }

  render() {
    return null
  }
}

export default AuthRoute