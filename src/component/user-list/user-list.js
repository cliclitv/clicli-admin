import React from 'react'

import {userList} from 'api/user'
import {Link} from 'react-router-dom'

import './user-list.css'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    userList().then((res) => {
      if (res.status === 200 & res.data.code === 0) {
        this.setState({user: res.data.result})
      }
    })
  }

  render() {

    return (
      <div className="user-list">
        <h1>所有用户</h1>
        <ul>
          {this.state.user.map((item) => {
            const qq = `http://q2.qlogo.cn/headimg_dl?dst_uin=` + item.qq + `&spec=100`
            return (
              <li key={item._id}>
                <Link to={`/editor-user/` + item._id}>
                  <div className="avatar"><img src={qq} alt=""/></div>
                  <div className="name">{item.name}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
}

export default UserList