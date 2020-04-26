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
      path: '/FichaStock/:id',
      name: 'fichaStock',
      component: () => import(/* webpackChunkName: "about" */ '../views/FichaDeStock.vue')
    },
    {
      path: '/comercial/menu',
      name: 'menuComercial',
      component: () => import(/* webpackChunkName: "about" */ '../views/MenuComercial.vue')
    },
    {
      path: '/nuevoPrespuesto',
      name: 'nuevoPrespuesto',
      component: () => import(/* webpackChunkName: "about" */ '../views/NuevoPresupuesto.vue')
    },
    {
      path: '/datosEmpresa',
      name: 'datosEmpresa',
      component: () => import(/* webpackChunkName: "about" */ '../views/DatosEmpresa.vue')
    },
    {
      path: '/listadoPresupuestosCliente/:id',
      name: 'listadoPresupuestosCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListadoPresupuestosCliente.vue')
    },
    {
      path: '/detallePresupuesto/:id',
      name: 'detallePresupuesto',
      component: () => import(/* webpackChunkName: "about" */ '../views/DetallePresupuesto.vue')
    },
    {
      path: '/listadoPresupuestos',
      name: 'listadoPresupuestos',
      component: () => import(/* webpackChunkName: "about" */ '../views/ListadoPresupuestos.vue')
    },
    {
      path: '/editarPresupuesto/:id',
      name: 'editarPresupuesto',
      component: () => import(/* webpackChunkName: "about" */ '../views/EditarPresupuesto.vue')
    },
    {
      path: '/formasDePago',
      name: 'formasDePago',
      component: () => import(/* webpackChunkName: "about" */ '../views/FormasDePago.vue')
    },
    {
      path: '/actualizarPrecios',
      name: 'actualizarPrecios',
      component: () => import(/* webpackChunkName: "about" */ '../views/ActualizacionDePrecios.vue')
    },
    {
      path: '/comparativaProductos',
      name: 'compararProductos',
      component: () => import(/* webpackChunkName: "about" */ '../views/ComprativaDeProductos.vue')
    },
    {
      path: '/nuevaVenta',
      name: 'nuevaVenta',
      component: () => import(/* webpackChunkName: "about" */ '../views/NuevaVenta.vue')
    },
    {
      path: '/cuentaCliente',
      name: 'cuentaCliente',
      component: () => import(/* webpackChunkName: "about" */ '../views/CuentaCliente.vue')
    },
    {
      path: '/nuevaEntrega',
      name: 'nuevaEntrega',
      component: () => import(/* webpackChunkName: "about" */ '../views/NuevaEntrega.vue')
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  

export default router