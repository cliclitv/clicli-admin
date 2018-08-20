import React from 'react'

import TopTip from 'base/top-tip/top-tip'

import {getUserByName, update} from 'api/user'
import {adminAuth} from "hoc/auth/auth"

import './editor-user.css'

@adminAuth
class EditorUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      uname: this.props.match.params.user,
      msg: '',
      name: '',
      qq: '',
      desc: '',
      role: ''
    }
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser() {
    getUserByName(this.state.uname).then(res => {
      if (res.data.code === 201) {
        this.setState(res.data.user)
      }
    })
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleClick() {

    update(this.state).then(res => {
      if (res.data.code === 201) {
        this.setState({
          msg: res.data.msg
        })
      }
      setTimeout(() => {
        this.setState({
          msg: ''
        })
      }, 5000)
    })
  }

  render() {
    return (
      <div>
        {this.state.msg ? <TopTip text={this.state.msg} bg="#b4d896"/> : null}

        <div className="editor-user">
          <h1>编辑用户</h1>
          <ul>
            <li>用户名：<input type="text" value={this.state.name}
                           onChange={e => this.handleChange('name', e.target.value)}/></li>
            <li>密码：<input type="text" placeholder="留空则不修改" onChange={e => this.handleChange('pwd', e.target.value)}/>
            </li>
            <li>QQ：<input type="text" value={this.state.qq} onChange={e => this.handleChange('qq', e.target.value)}/>
            </li>
            {this.props.state.role === 'admin' ? (
              <li>权限：
                <select value={this.state.role} onChange={e => this.handleChange('role', e.target.value)}>
                  <option value="user">用户</option>
                  <option value="author">作者</option>
                  <option value="editor">审核</option>
                  <option value="admin">管理</option>
                </select></li>
            ) : null}

            <li>签名：
              <textarea value={this.state.desc} onChange={e => this.handleChange('desc', e.target.value)}>
            </textarea>
            </li>
            <li className="center">
              <button onClick={this.handleClick.bind(this)}>保存</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EditorUser