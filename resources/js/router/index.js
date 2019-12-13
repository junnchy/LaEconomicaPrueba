import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/proveedores',
    name: 'listadoProveedores',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListadoProveedores.vue')
    },
    {
        path: '/detalleProv/:id',
        name: 'detalleProv',
        component: () => import(/* webpackChunkName: "about" */ '../views/DetalleProv.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  

export default router