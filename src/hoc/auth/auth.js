// 鉴权公共方法
import {getStorage} from "common/js/localstorage"
import React from "react"
import Cookies from "js-cookie"
import {Base64} from 'js-base64'
import {getUserByName} from 'api/user'
import axios from "axios/index"

export function adminAuth(Component) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: 'admin'
      }
    }

    componentDidMount() {
      axios.get('/auth').then(res => {
        if (res.data.code === 401) {
          this.props.history.push('/login')
        } else {
          this.setState({
            role: res.data.user.role
          })
        }
      })
    }

    render() {
      return <Component state={this.state} {...this.props}></Component>
    }
  }
}