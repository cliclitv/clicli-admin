import React from 'react'
import axios from 'axios'
import './loading.css'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  render() {
    axios.interceptors.request.use((config) => {
      this.setState({
        isShow: true
      })
      return config
    })
    axios.interceptors.response.use((config) => {

      this.setState({
        isShow: false
      })
      return config
    })
    if (this.state.isShow === true) {
      return (
        <div className="loading">
          <div className="img">
          </div>
          <div className="text">
            努力加载中……
          </div>
        </div>
      )
    } else {
      return null
    }

  }

}

export default Loading