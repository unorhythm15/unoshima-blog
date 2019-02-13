import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post',
      component: Post
    }
  ]
})

export default router
