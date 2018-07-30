import React from 'react'

import {Link} from 'react-router-dom'
import {getStorage, setStorage} from "common/js/localstorage"
import {adminAuth} from "hoc/auth/auth"
import {getUserInfo} from 'api/user'


import './user-info.css'
import Cookies from "js-cookie"

@adminAuth
class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const name = Cookies.get('uname')
    getUserInfo(name).then(res => {
      setStorage('user-info', res.data.user)
      this.setState({
        user: res.data.user
      })
    })
  }

  render() {
    const qq = `http://q2.qlogo.cn/headimg_dl?dst_uin=` + this.state.user.qq + `&spec=100`
    const router = `/article/` + this.state.user.id
    const info = `/editor-user/` + this.state.user.name
    return (
      <div className="user-info">
        <div className="avatar">
          <img src={qq} alt="作者头像"/>
        </div>
        <div className="name">欢迎！{this.state.user.name} sama~</div>
        <div className="quick-start">
          快速开始：
          {this.props.state.role !== 'user' ? <span>
            <Link to="/write-article">写文章</Link>
          </span> : null}
          {this.props.state.role !== 'user' ? <span><Link to={router}>查看文章</Link></span> : null}
          <span><Link to={info}>设置</Link></span>
        </div>
      </div>
    )
  }
}

export default UserInfo