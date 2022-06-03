import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BlogList from '@/views/BlogList.vue';
import BlogDetails from '@/views/BlogDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: BlogDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
