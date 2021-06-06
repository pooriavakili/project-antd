import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:"/",
    name:"App"
  },
  {
    path:"/cart",
    name:"cart",
    components:()=>import("../components/Cart.vue")
  },
  {
    path:"/header",
    name:"header",
    components:()=>import("../components/Header.vue")
  },
  {
    path:"/productList",
    name:"productList",
    components:()=>import("../components/ProductList.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
