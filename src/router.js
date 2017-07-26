import Vue from 'vue'
import Router from 'vue-router'
import Counter from './components/Example/Counter'
import Example from './components/Example/index'
import Home from './components/Home/index'
import Member from './components/Member/index'
import Shop from './components/Shop/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      alias: '/'
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/example',
      name: 'example',
      component: Example,
      children: [
        {
          path: 'counter',
          name: 'counter',
          component: Counter
        }
      ]
    }
  ]
})

export default router
