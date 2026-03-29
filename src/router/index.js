import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Routes optionnelles pour la compatibilité avec d'anciens liens ou ancres
  {
    path: '/:pathMatch(.*)*', // Redirige toute URL inconnue vers l'accueil
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Gestion du défilement fluide vers les ancres (#projets, #contact, etc.)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Compensation pour la navbar fixe (ajustez selon la hauteur de votre navbar)
      }
    }
    // Sinon, retour en haut de page
    return { top: 0, behavior: 'smooth' }
  }
})

export default router