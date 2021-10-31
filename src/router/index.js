import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New Task',
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
