import React from 'react'

import Header from 'component/header/header'
import Footer from 'component/footer/footer'
import Loading from 'base/loading/loading'
import EditorUser from 'component/editor-user/editor-user'
import WriteArticle from 'component/write-article/wirte-article'
import EditorVideo from 'component/editor-video/editor-video'
import Loadable from 'react-loadable'

import {Route, Switch} from 'react-router-dom'

const ArticleList = Loadable({
  loader: () => import('component/article-list/article-list'),
  loading: Loading,
})

const Cookie = Loadable({
  loader: () => import('component/cookie/cookie'),
  loading: Loading,
})

const PanBit = Loadable({
  loader: () => import('component/pan-bit/pan-bit'),
  loading: Loading,
})

const PanHcy = Loadable({
  loader: () => import('component/pan-hcy/pan-hcy'),
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
            <Header/>
            <Switch>
              <Route path='/editor-article/:editor' component={WriteArticle} key='editor'/>
              <Route path='/write-article' component={WriteArticle} key='write'/>
              <Route path='/editor-video/:id' component={EditorVideo} key='editor-video'/>
              <Route path='/add-video/:pid' component={EditorVideo} key='add-video'/>
              <Route exact path='/editor-user/:user' component={EditorUser}/>
              <Route path='/article/:author' component={ArticleList} key='author'/>
              <Route path='/posts/:type' component={ArticleList} key={location.pathname}/>
              <Route path='/users/:role' component={UserList} key={location.pathname}/>
              <Route path='/options' component={Option}/>
              <Route path='/pan/cookie' component={Cookie}/>
              <Route path='/pan/bit' component={PanBit} key={location.pathname}/>
              <Route path='/pan/bit-list/:fid' component={PanBit} key={location.pathname}/>
              <Route path='/pan/hcy' component={PanHcy} key={location.pathname}/>
              <Route path='/pan/hcy-list/:fid' component={PanHcy} key={location.pathname}/>
              <Route path='/' component={UserInfo}/>
            </Switch>
            <Footer/>
          </div>
        )}/>
      </Switch>
    )
  }
}

export default App