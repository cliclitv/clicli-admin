import React from 'react'

import TopTip from 'base/top-tip/top-tip'

import {getVideo, updateVideo} from "api/video"
import {adminAuth} from "hoc/auth/auth"
import {withRouter} from 'react-router-dom'
import {getStorage} from "common/js/localstorage"

import '../editor-user/editor-user.css'

@adminAuth
@withRouter
class EditorVideo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      oid: '',
      title: '',
      content: '',
      pid: '',
      uid: getStorage('user-info').id,
      text: '编辑'
    }
  }

  componentDidMount() {

    if (this.props.location.pathname === '/add-video') {
      this.setState({text: '添加'})
    } else {
      this.loadVideo()
      this.setState({text: '编辑'})
    }
  }

  loadVideo() {
    getVideo(this.state.id).then(res => {
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

    updateVideo(this.state).then(res => {
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
          <h1>{this.state.text}视频</h1>
          <ul>
            <li>序号：<input type="text" value={this.state.oid} placeholder="数字"
                          onChange={e => this.handleChange('oid', e.target.value)}/></li>
            <li>标题：<input type="text" value={this.state.oid} placeholder="可不填"
                          onChange={e => this.handleChange('title', e.target.value)}/>
            </li>
            <li>地址：<input type="text" value={this.state.content} placeholder="支持mp4、m3u8、哔哩哔哩、腾讯视频、dilidili、halihali、silisili"
                          onChange={e => this.handleChange('content', e.target.value)}/>
            </li>
            <li className="center">
              <button onClick={this.handleClick.bind(this)}>提交</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EditorVideo