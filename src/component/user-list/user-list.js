import React from 'react'

import {userList} from 'api/user'
import {Link} from 'react-router-dom'

import './user-list.css'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    userList(this.props.match.params.role).then((res) => {
      if (res.data.code === 201) {
        this.setState({users: res.data.users})
      }
    })
  }

  render() {

    return (
      <div className="user-list">
        <div className="role">
          <Link to="/users/user" style={{padding: '20px'}}>用户</Link>
          <Link to="/users/author">作者</Link>
          <Link to="/users/editor" style={{padding: '20px'}}>审核</Link>
        </div>

        <ul>
          {this.state.users.map((item) => {
            const qq = `http://q2.qlogo.cn/headimg_dl?dst_uin=` + item.qq + `&spec=100`
            return (
              <li key={item.id}>
                <Link to={`/editor-user/` + item.id}>
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