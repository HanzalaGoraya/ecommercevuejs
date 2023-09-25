// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Home from '@/layouts/Home.vue'


const routes = [

    {
      path: '/login',
      name: 'Login',
      component: Login
  },

  {
    path: '/',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  ]
  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
