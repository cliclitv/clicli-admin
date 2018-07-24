import React from 'react'
import {writeArticle, getOneArticle, update} from 'api/article'
import {adminAuth} from "hoc/auth/auth"

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
      type: '撰写',
      bg: ''
    }
  }

  componentDidMount() {
    this.loadArticle()
    this.props.location.pathname === '/write-article' ? this.setState({type: '撰写'}) : this.setState({type: '编辑'})
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
          status: res.data.result.status,
          defaultValue: res.data.result.content
        })
      })
    }
  }

  handleClick() {
    if (!this.state.title || !this.state.content || !this.state.status || !this.state.sort) {
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
            type: '编辑',
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

          <h1>{this.state.type}文章</h1>
          <input type="text" placeholder="请输入标题"
                 value={this.state.title}
                 onChange={e => this.handleChange('title', e.target.value)}/>
          <Markdown handleMde={content => this.changeMde(content)}
                    value={this.state.content} defaultValue={this.state.defaultValue}/>
          <span><select onChange={e => this.handleChange('sort', e.target.value)}
                        value={this.state.sort}>
          <option value="">分类</option>
          <option value="anime">动画</option>
          <option value="comic">漫画</option>
          <option value="imgpack">图包</option>
          <option value="music">音乐</option>
          <option value="game">游戏</option>
          <option value="novel">小说</option>
          <option value="news">号外</option>
          <option value="other">其他</option>
        </select></span>
          <span><select onChange={e => this.handleChange('status', e.target.value)}
                        value={this.state.status}>
            <option value="">状态</option>
          <option value="wait">待审核</option>
          <option value="draft">草稿</option>
            {this.props.state.role === 'admin' || this.props.state.role === 'editor' ?
              <option value="public">发布</option> : null}
        </select></span>
          <div>
            <button onClick={this.handleClick.bind(this)}>发布文章</button>
          </div>
        </div>
      </div>
    )
  }
}


export default WriteArticle