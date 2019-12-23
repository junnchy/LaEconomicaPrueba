import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/proveedores/',
    name: 'listadoProveedores',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListadoProveedores.vue')
    },
    {
      path: '/detalleProv/:id',
      name: 'detalleProv',
      component: () => import(/* webpackChunkName: "about" */ '../views/DetalleProv.vue')
    },
    {
      path: '/agregarProv',
      name: 'agregarProv',
      component: () => import(/* webpackChunkName: "about" */ '../views/AgregarProv.vue')
    },
    {
      path: '/editarProveedor/:id',
      name: 'editarProveedor',
      component: () => import(/* webpackChunkName: "about" */ '../views/EditarProveedor.vue')
    },
    {
      path: '/productos/home',
      name: 'MenuProductos',
      component: () => import(/* webpackChunkName: "about" */ '../views/MenuProductos.vue')
    },
    {
      path: '/listaCategorias',
      name: 'listadoCategorias',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListadoCategorias.vue')
    },
    {
      path: '/editarCategoria/:id',
      name: 'verEditarCategoria',
      component: () => import(/* webpackChunkName: "about" */ '../views/VerEditarCategoria.vue')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  

export default router