import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import ItemDescription from '../components/ItemDescription.vue'
import ItemStats from '../components/ItemStats.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items/:id',
      component: ItemView,
      // https://router.vuejs.org/guide/essentials/nested-routes.html
      children: [
        {
          path: 'description',
          component: ItemDescription,
        },
        {
          path: 'stats',
          component: ItemStats,
        },
      ],
    },
  ]
})

export default router
