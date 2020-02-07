import React from 'react'

import TopTip from 'base/top-tip/top-tip'
import {getCookie, replaceCookie} from 'api/user'
import Cookies from 'js-cookie'

import './cookie.css'

class Cookie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hcy: '',
      quqi:'',
      msg: '',
      uid: Cookies.get('uid')
    }
  }

  componentDidMount() {
    this.getCookie()
  }

  getCookie() {
    getCookie(this.state.uid).then(res => {
      if (res.data.code === 200) {
        this.setState(res.data.result)
      }
    })
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleClick() {
    replaceCookie(this.state).then(res => {
      if (res.data.code === 200) {
        this.setState({
          msg: '更新成功啦！'
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
          <h1>设置Cookie</h1>
          <ul>
            <li>和彩云：<input type="text" value={this.state.hcy} onChange={e => this.handleChange('hcy', e.target.value)}/>
            </li>
            <li>360云盘：<input type="text" value={this.state.quqi} onChange={e => this.handleChange('quqi', e.target.value)}/>
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

export default Cookie