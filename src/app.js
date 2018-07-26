import React from 'react'

import Header from 'component/header/header'
import Footer from 'component/footer/footer'
import AuthRoute from 'component/authroute/authroute'
import Loading from 'base/loading/loading'
import EditorUser from 'component/editor-user/editor-user'
import WriteArticle from 'component/write-article/wirte-article'
import Loadable from 'react-loadable'

import {Route, Switch} from 'react-router-dom'

const ArticleList = Loadable({
  loader: () => import('component/article-list/article-list'),
  loading: Loading,
})

const UserList = Loadable({
  loader: () => import('component/user-list/user-list'),
  loading: Loading,
})
const Option = Loadable({
  loader: () => import('component/option/option'),
  loading: Loading,
})

const Login = Loadable({
  loader: () => import('component/login/login'),
  loading: Loading,
})

const Register = Loadable({
  loader: () => import('component/register/register'),
  loading: Loading,
})

const UserInfo = Loadable({
  loader: () => import('component/user-info/user-info'),
  loading: Loading,
})

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' render={props => (
          <div>
            <AuthRoute/>
            <Header/>
            <Switch>
              <Route path='/editor-article/:editor' component={WriteArticle} key='editor'/>
              <Route path='/write-article' component={WriteArticle} key='write'/>
              <Route exact path='/editor-user/:user' component={EditorUser}/>
              <Route path='/article/:author' component={ArticleList} key='author'/>
              <Route path='/articles' component={ArticleList} key='all'/>
              <Route path='/users' component={UserList}/>
              <Route path='/options' component={Option}/>
              <Route path='/' component={UserInfo}/>
            </Switch>
            <Footer/>
            <Loading/>
          </div>
        )}/>
      </Switch>
    )
  }
}

export default App