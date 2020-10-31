import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createWebHistory, createRouter } from 'vue-router'
import Upload from './Upload.vue'
import User from './User.vue'
import Manage from './Manage.vue'
import Login from './Login.vue'
import Cookies from 'js-cookie'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Upload, children: [{ path: '/:gv', component: Upload }] },
    { path: '/manage', component: Manage },
    { path: '/user', component: User, children: [{ path: ':qq', component: User }] },
  ],
})

let app
if (Cookies.get('token')) {
  app = createApp(App)
  app.use(router)
} else {
  app = createApp(Login)
}
app.mount('#app')
