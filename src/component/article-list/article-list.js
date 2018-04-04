import React from 'react'
import {articleList, authorArticle} from 'api/article'
import ListView from '../../base/list-view/list-view'
import {withRouter} from 'react-router-dom'


@withRouter
class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: []
    }
  }

  loadArticles() {
    articleList().then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        this.setState({
          article: res.data.result
        })
      }
    })
  }

  loadAuthorArticle() {
    authorArticle(this.props.match.params.author).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        this.setState({
          article: res.data.result
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
        <ListView list={this.state.article} refresh={this.refresh.bind(this)}/>
      </div>
    )
  }

  componentDidMount() {
    this.refresh()
  }
}

export default ArticleList