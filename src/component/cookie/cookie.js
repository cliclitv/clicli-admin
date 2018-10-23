import React from 'react'

import TopTip from 'base/top-tip/top-tip'
import {getStorage} from "common/js/localstorage"
import {getCookie, replaceCookie} from 'api/user'

import './cookie.css'

class Cookie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      uid: getStorage('user-info').id,
      hcy: '',
      tyyp: '',
      bit: ''
    }
  }

  componentDidMount() {
    this.getCookie()
  }

  getCookie() {
    getCookie(this.state.uid).then(res => {
      if (res.data.code === 201) {
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
          <h1>设置Cookie</h1>
          <ul>
            <li>和彩云：<input type="text" value={this.state.hcy}
                           onChange={e => this.handleChange('hcy', e.target.value)}/></li>
            <li>天翼云：<input type="text" value={this.state.tyyp} onChange={e => this.handleChange('tyyp', e.target.value)}/>
            </li>
            <li>比特云：<input type="text" value={this.state.bit} onChange={e => this.handleChange('bit', e.target.value)}/>
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