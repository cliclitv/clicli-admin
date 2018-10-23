import React from 'react'
import {writeArticle, getOneArticle, update} from 'api/article'
import {getVideos} from "api/video"
import {adminAuth} from "hoc/auth/auth"
import {getStorage} from "common/js/localstorage"
import {Link} from 'react-router-dom'

import Markdown from 'base/markdown/markdown'
import TopTip from 'base/top-tip/top-tip'

import './write-article.css'

@adminAuth
class WriteArticle extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      title: '',
      content: '',
      sort: '',
      status: '',
      msg: '',
      id: this.props.match.params.editor,
      uid: getStorage('user-info').id,
      text: '撰写',
      bg: '',
      type: '',
      videos: []
    }
  }

  componentDidMount() {
    this.loadArticle()
    this.loadVideo()
    this.props.location.pathname === '/write-article' ? this.setState({text: '添加'}) : this.setState({text: '修改'})
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  changeMde(content) {
    this.setState({
      content: content
    })
  }

  loadArticle() {
    if (this.state.id) {
      getOneArticle(this.state.id).then((res) => {
        this.setState({
          title: res.data.result.title,
          content: res.data.result.content,
          sort: res.data.result.sort,
          type: res.data.result.type,
          status: res.data.result.status,
          defaultValue: res.data.result.content
        })
      })
    }
  }

  loadVideo() {
    if (this.state.id) {
      getVideos(this.state.id, 1, 100).then(res => {
        this.setState({
          videos: res.data.videos
        })
      })
    }
  }

  handleClick() {
    if (!this.state.title || !this.state.content || !this.state.status || !this.state.sort || !this.state.type) {
      this.setState({
        msg: '都要填写都要填(〃＞皿＜)！',
        bg: '#ef736e'
      })
      setTimeout(() => {
        this.setState({
          msg: ''
        })
      }, 5000)
      return
    }

    if (this.props.location.pathname !== '/write-article') {
      update(this.state).then((res) => {
        if (res.data.code === 201) {
          this.setState({
            msg: '更新成功啦！',
            text: '修改',
            bg: '#b4d896'
          })
        }
        setTimeout(() => {
          this.setState({
            msg: ''
          })
        }, 5000)
      })
    } else {
      writeArticle(this.state).then((res) => {
        if (res.data.code === 201) {
          this.setState({
            msg: '添加成功啦',
            bg: '#b4d896'
          })
        }
        setTimeout(() => {
          this.props.history.push(`/article/${this.state.uid}`)
          this.setState({
            msg: ''
          })
        }, 5000)
      })
    }
  }

  render() {
    return (
      <div>{this.state.msg ? <TopTip text={this.state.msg} bg={this.state.bg}/> : null}
        <div className="write-article">
          <h1>{this.state.text}番剧</h1>
          <input type="text" placeholder="请输入标题"
                 value={this.state.title}
                 onChange={e => this.handleChange('title', e.target.value)}/>
          <Markdown handleMde={content => this.changeMde(content)}
                    value={this.state.content} defaultValue={this.state.defaultValue}/>
          <span><select onChange={e => this.handleChange('sort', e.target.value)}
                        value={this.state.sort}>
          <option value="">分类</option>
          <option value="xinfan">新番</option>
          <option value="lianzai">连载</option>
          <option value="wanjie">完结</option>
          <option value="yuanchuang">原创</option>
          <option value="wenzhang">文章</option>
        </select></span>
          <span><select onChange={e => this.handleChange('type', e.target.value)}
                        value={this.state.type}>
          <option value="">选项</option>
          <option value="moren">默认</option>
          <option value="tuijian">推荐</option>
          <option value="danmei">耽美</option>
          <option value="shenshi">绅士</option>
        </select></span>
          <span><select onChange={e => this.handleChange('status', e.target.value)}
                        value={this.state.status}>
            <option value="">状态</option>
          <option value="wait">待审核</option>
          <option value="draft">草稿</option>
            {this.props.state.role === 'admin' || this.props.state.role === 'editor' ?
              <option value="public">发布</option> : null}
        </select></span>
          <div className="video-list">
            {this.state.videos ? this.state.videos.map(item => {
              return (
                <Link to={`/editor-video/` + item.id} key={item.id}>
                  <li>
                    <div className="title">{item.oid}</div>
                  </li>
                </Link>
              )
            }) : null}
            <Link to={`/add-video/${this.state.id}`}>
              <li className="add">
                <div>＋</div>
              </li>
            </Link>
          </div>
          <div>
            <button onClick={this.handleClick.bind(this)}>{this.state.text}番剧</button>
          </div>
        </div>
      </div>
    )
  }
}


export default WriteArticle