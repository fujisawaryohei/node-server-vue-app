import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Adresses from '../views/Adresses.vue'
import AddressFrom from '../views/AdressForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: Adresses
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'address_edit',
    component: AddressFrom
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
