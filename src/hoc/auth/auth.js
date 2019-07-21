import React from "react"
import {API_LINK} from "common/js/util"
import {auth} from 'api/user'

export function adminAuth(Component) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      auth().then(res => {
        if (res.data.code === 401) {
          this.props.history.push('/login')
        } else {}
      })
    }

    render() {
      return <Component state={this.state} {...this.props}></Component>
    }
  }
}