import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {

  componentDidMount() {

    // 是否登录
    axios.get('/auth').then(res => {
      if (res.status === 200) {
        if (res.data.code === 401) {
          this.props.history.push('/login')
        }
      }
    })

  }

  render() {
    return null
  }
}

export default AuthRoute