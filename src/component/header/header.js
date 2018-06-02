import React from 'react'

import {Link, Redirect} from 'react-router-dom'
import {adminAuth} from "hoc/auth/auth"
import {withStore} from "../../smox"

import './header.css'
@withStore
@adminAuth
class Header extends React.Component {

  render() {
    return (
      <header>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <ul>
          <Link to='/'>
            <li>控制台</li>
          </Link>
          {this.props.state.role !== 'user' ?
            <Link to='/write-article'>
              <li>撰写</li>
            </Link> : null}
          {this.props.state.role === 'admin' || this.props.state.role === 'editor' ?
            <li>管理
              <ul>
                <Link to='/articles'>
                  <li>管理文章</li>
                </Link>
                <Link to='/users'>
                  <li>管理用户</li>
                </Link>
              </ul>
            </li>
            : null}
          {this.props.state.role === 'admin' ? <Link to='/options'>
            <li>设置</li>
          </Link> : null}
          <li onClick={this.props.onLogout} className="logout">
            退出
          </li>
          <a href="http://www.idanmu.cc" target="_blank">
            <li className="logout">
              网站首页
            </li>
          </a>
        </ul>
      </header>
    )
  }

}

export default Header