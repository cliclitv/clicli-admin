import React from 'react'
import {articleList, authorArticle} from 'api/article'
import ListView from '../../base/list-view/list-view'
import {withRouter} from 'react-router-dom'


@withRouter
class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  loadArticles() {
    articleList().then((res) => {
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
    if (this.props.location.pathname === '/articles') {
      return this.loadArticles()
    }
    this.loadAuthorArticle()
  }

  render() {
    return (
      <div className="article-list">
        <h1>我的文章</h1>
        <ListView list={this.state.posts} refresh={this.refresh.bind(this)}/>
      </div>
    )
  }

  componentDidMount() {
    this.refresh()
  }
}

export default ArticleList