// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Home from '@/layouts/Home.vue'
import Admindashboard from '@/layouts/Admindashboard.vue'
import Productpage from '@/components/productcard.vue'

const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admindashboard',
    component: Admindashboard
  },
  {
    path: '/productdetails/:product_id',
    name: 'Productpage',
    component: Productpage,
    props: true,
  },

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
