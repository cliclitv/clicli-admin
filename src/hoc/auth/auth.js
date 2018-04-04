// 鉴权公共方法
import {getStorage} from "common/js/localstorage"
import React from "react"

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
      this.setState({
        role: role
      })
    }

    render() {
      return <Component state={this.state} {...this.props}></Component>
    }
  }
}