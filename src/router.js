import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/index'
import Example from './components/Example/index'
import Counter from './components/Example/Counter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
