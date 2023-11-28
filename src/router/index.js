import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../components/ProfilUser.vue')
  },
  {
    path: '/ajouterProjet',
    name: 'ajouterprojet',
    component: () => import('../components/AjoutProjet.vue')
  },
  {
    path: '/ajouterTache',
    name: 'ajoutertache',
    component: () => import('../components/AjoutTache.vue')
  },
  {
    path: '/listProjets',
    name: 'listprojet',
    component: () => import('../components/ListeProjet.vue')
  },
  {
    path: '/listTaches',
    name: 'listtache',
    component: () => import('../components/ListeTache.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
