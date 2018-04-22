import React from 'react'

import TopTip from 'base/top-tip/top-tip'

import {update, getOption} from 'api/option'
import {adminAuth} from "hoc/auth/auth"

import '../editor-user/editor-user.css'

@adminAuth
class EditorUser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      banner: ''
    }
  }

  componentDidMount() {
    this.loadOption()
  }

  loadOption() {
    getOption().then(res => {
      if (res.status === 200 & res.data.code === 0) {
        this.setState(res.data.result[0])
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
      if (res.data.code === 0) {
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
          <h1>设置</h1>
          <ul>

            {this.props.state.role === 'admin' ? (
              <li>顶部图片：<input type="text" placeholder="高度200px，宽度1200+px" value={this.state.banner}
                              onChange={e => this.handleChange('banner', e.target.value)}/>
              </li>
            ) : null}

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