import React from 'react'

import TopTip from 'base/top-tip/top-tip'

import {getVideo, updateVideo, deleteVideoById, addVideo, getUploadToken} from "api/video"
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
      pid: this.props.match.params.pid,
      uid: getStorage('user-info').id,
      text: '修改',
      zhilian: false,
      per: 0
    }
  }

  componentDidMount() {
    if (this.props.location.pathname.indexOf('add-video') > -1) {
      this.setState({text: '添加'})
    } else {
      this.loadVideo()
      this.setState({text: '修改'})
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

  deleteVideo() {
    deleteVideoById(this.state.id).then(res => {
      if (res.data.code === 201) {
        this.setState({
          msg: '删除成功啦'
        })
        setTimeout(() => {
          this.props.history.goBack()
          this.setState({
            msg: ''
          })
        }, 2000)
      }
    })
  }

  handleClick() {
    if (this.props.location.pathname.indexOf('editor-video') > -1) {
      updateVideo(this.state).then(res => {
        if (res.data.code === 201) {
          this.setState({
            msg: '更新成功啦'
          })
        }
        setTimeout(() => {
          this.props.history.goBack()
          this.setState({
            msg: ''
          })
        }, 2000)
      })
    } else {
      if (this.state.zhilian) {
        this.addVideos()
      } else {
        this.onUpload()
      }
    }
  }

  addVideos() {
    addVideo(this.state).then(res => {
      if (res.data.code === 201) {
        this.setState({
          msg: '添加成功啦'
        })
      }
      setTimeout(() => {
        this.props.history.goBack()
        this.setState({
          msg: ''
        })
      }, 2000)
    })
  }

  async onUpload() {
    let self = this
    let file = this.refs.uploader.files[0]
    console.log(this.state.title)
    const token = await getUploadToken(file.name, this.state.title).then(res => {
      return res.data.uploadToken
    })

    const uploader = new DogeUploader({
      file,
      token,
      next(progress) {
        self.setState({
          per: `${Math.floor(progress.percent)}`
        })
      },
      error(err) {
        alert('上传出错( ' + err.code + ' )：' + err.message + '')
      },
      complete(res) {
        console.log('上传完成，视频 vcode：' + res.vid)
        self.setState({
          content: `${res.vid}@dogecloud`,
          per: 0
        })
        self.addVideos()
      }
    })

    uploader.upload()
  }

  render() {
    return (
      <div>
        {this.state.msg ? <TopTip text={this.state.msg} bg="#b4d896"/> : null}
        {this.state.per ? <div className='per'>{this.state.per + '%'}</div> : null}

        <div className="editor-user">
          <h1>{this.state.text}视频</h1>
          <ul>
            <li>序号：<input type="text" value={this.state.oid} placeholder="数字"
                          onChange={e => this.handleChange('oid', e.target.value)}/></li>
            <li>备注：<input type="text" value={this.state.title} placeholder="可不填"
                          onChange={e => this.handleChange('title', e.target.value)}/>
            </li>
            <li>地址：{this.state.zhilian ? <input type="text" value={this.state.content}
                                                placeholder="支持mp4、m3u8等直链"
                                                onChange={e => this.handleChange('content', e.target.value)}/>
              : <input type="file" ref='uploader' accept="video/*"/>} </li>
            <li className="center">
              <button onClick={this.handleClick.bind(this)}>提交</button>
              <button onClick={this.deleteVideo.bind(this)}>删除</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EditorVideo