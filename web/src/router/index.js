import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue'
import News from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News,
    // meta: { title : 'お知らせ'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
