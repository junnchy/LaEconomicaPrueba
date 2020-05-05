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
    {
      path: '/agregarProducto',
      name: 'agregarProducto',
      component: () => import(/* webpackChunkName: "about" */ '../views/AgregarProducto.vue')
    },
    {
      path: '/detalleProducto/:id',
      name: 'detalleProducto',
      component: () => import(/* webpackChunkName: "about" */ '../views/DetalleProducto.vue')
    },
    {
      path: '/editarProducto/:id',
      name: 'editarProducto',
      component: () => import(/* webpackChunkName: "about" */ '../views/EditarProducto.vue')
    },
    {
      path: '/clientes/',
      name: 'menuClientes',
      component: () => import(/* webpackChunkName: "about" */ '../views/MenuClientes.vue')
    },
    {
      path: '/agregarCliente',
      name: 'agregarCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/AgregarCliente.vue')
    },
    {
      path: '/detalleCliente/:id',
      name: 'detalleCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/DetalleCliente.vue')
    },
    {
      path: '/editarCliente/:id',
      name: 'editarCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/EditarCliente.vue')
    },
    {
      path: '/tablaDatosCliente',
      name: 'tablaDatosCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/TablasDatosClientes.vue')
    },
    {
      path: '/usuarios/',
      name: 'menuUsuarios',
      component: () => import(/* webpackChunkName: "about" */ '../views/MenuUsuarios.vue')
    },
    {
      path: '/agregarUsuario',
      name: 'agregarUsuario',
      component: () => import(/* webpackChunkName: "about" */ '../views/AgregarUsuario.vue')
    },
    {
      path: '/detalleUsuario/:id',
      name: 'detalleUsuario',
      component: () => import(/* webpackChunkName: "about" */ '../views/DetalleUsuario.vue')
    },
    {
      path: '/editarUsuario/:id',
      name: 'editarUsuario',
      component: () => import(/* webpackChunkName: "about" */ '../views/EditarUsuario.vue')
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  

export default router