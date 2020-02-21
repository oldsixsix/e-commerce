import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home= () => import('../views/Home/Home.vue')
const category= () => import('../views/Category/category.vue')
const profile= () => import('../views/Profile/profile.vue')
const shoppingcart= () => import('../views/ShoppingCart/shopCart.vue')
const routes = [
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/shopcart',
    component:shoppingcart
  },
  {
    path:'/profile',
    component:profile
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
