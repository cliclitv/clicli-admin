import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


@withRouter

class AuthRoute extends React.Component {

  componentDidMount() {
    axios.get('http://api.chinko.cc/auth').then(res => {
      if (res.data.code === 201) {
        this.props.history.push('/')
      } else {
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return null
  }
}

export default AuthRoute