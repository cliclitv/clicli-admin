import React from "react"
import {getStorage} from "common/js/localstorage"
import {API_LINK} from "common/js/util"
import {auth} from 'api/user'

export function adminAuth(Component) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: 'admin'
      }
    }

    // componentDidMount() {
    //   auth().then(res => {
    //     if (res.data.code === 401) {
    //       this.props.history.push('/login')
    //     } else {
    //       this.setState({
    //         role: res.data.user.role
    //       })
    //     }
    //   })
    // }

    render() {
      return <Component state={this.state} {...this.props}></Component>
    }
  }
}