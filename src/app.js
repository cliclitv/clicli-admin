import React from 'react'

import Footer from 'component/footer/footer'
import Header from 'component/header/header'
import UserInfo from 'component/user-info/user-info'
import Login from 'component/login/login'
import AuthRoute from 'component/authroute/authroute'
import Register from 'component/register/register'
import ArticleList from "component/article-list/article-list"
import Loading from 'base/loading/loading'


import {Route, Switch} from 'react-router-dom'
import WriteArticle from "component/write-article/wirte-article"
import UserList from "component/user-list/user-list"
import EditorUser from 'component/editor-user/editor-user'
import Option from 'component/option/option'


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