import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import B from '@/components/B'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A:a',
      name: 'a',
      component: A
    },
    {
      path: '/B',
      name: 'b',
      component: B
    }
  ]
})
