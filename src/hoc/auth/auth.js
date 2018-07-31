// 鉴权公共方法
import {getStorage} from "common/js/localstorage"
import React from "react"
import Cookies from "js-cookie"
import { Base64 } from 'js-base64'
import {getUserByName} from 'api/user'

export function adminAuth(Component) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: 'user'
      }
    }

    componentDidMount() {
      const role = getStorage('user-info').role
      if (role) {
        this.setState({
          role: role
        })
      } else {
        const name = Base64.decode(Cookies.get('uname'))
        if (name) {
          getUserByName(name).then(res => {
            this.setState({
              role: res.data.user.role
            })
          })
        }

      }
    }

    render() {
      return <Component state={this.state} {...this.props}></Component>
    }
  }
}