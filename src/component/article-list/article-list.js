import React from 'react'
import {articleList, authorArticle} from 'api/article'
import ListView from '../../base/list-view/list-view'
import {withRouter,Link} from 'react-router-dom'

import ReachBox from 'base/reach-box/reach-box'


@withRouter
class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  loadArticles() {
    articleList(this.props.match.params.type).then((res) => {
      if (res.data.code === 201) {
        this.setState({
          posts: res.data.posts
        })
      }
    })
  }

  loadAuthorArticle() {
    authorArticle(this.props.match.params.author).then(res => {
      if (res.data.code === 201) {
        this.setState({
          posts: res.data.posts
        })
      }
    })
  }

  refresh() {
    if (this.props.location.pathname === '/posts/wait'||this.props.location.pathname === '/posts/public') {
      return this.loadArticles()
    }
    this.loadAuthorArticle()
  }

  render() {
    return (
      <div className="article-list">
        <ReachBox text='请输入文章id' prefix='/editor-article/'/>
        <Link to="/posts/wait" style={{padding:'20px'}}>待审核</Link>
        <Link to="/posts/public">已发布</Link>
        <ListView list={this.state.posts} refresh={this.refresh.bind(this)}/>
      </div>
    )
  }

  componentDidMount() {
    this.refresh()
  }
}

export default ArticleList