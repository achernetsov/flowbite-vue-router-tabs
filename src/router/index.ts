import { createRouter, createWebHistory } from 'vue-router'
import ItemDescriptionTab from '../components/ItemDescriptionTab.vue'
import ItemStatsTab from '../components/ItemStatsTab.vue'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'

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
          path: '',
          redirect: { name: 'itemDescription' },
        },
        {
          name: 'itemDescription',
          path: 'description',
          component: ItemDescriptionTab,
        },
        {
          name: 'itemStats',
          path: 'stats',
          component: ItemStatsTab,
        },
      ],
    },
  ]
})

export default router
