import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'


import App from './app'

import './common/style/reset.css'
import './common/style/index.css'
import './common/style/iconfont.css'

import {createStore,Provider,applyMiddleware, thunk ,arrayThunk} from 'smox'
import {user} from "./store/user-smox"

const store = createStore(user,applyMiddleware(thunk,arrayThunk))


ReactDom.render((
  <Provider value={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

), document.getElementById('app'))

