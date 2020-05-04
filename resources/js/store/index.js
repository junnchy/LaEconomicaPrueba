import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
import clientes from './modules/clientes'
import localidades from './modules/localidades'
import condicionIva from './modules/condiconIva'
import proveedores from './modules/proveedores'
import categorias from './modules/categorias'
import productos from './modules/productos'
import mapas from './modules/mapas'
import stock from './modules/stock'
import usuarios from './modules/usuarios'
import datos from './modules/comercial/empresa'
import presupuestos from './modules/comercial/presupuestos'
import formasDePago from './modules/comercial/formasDePago'
import precios from './modules/comercial/precios'
import ventas from './modules/comercial/ventas'
import cuentaCliente from './modules/comercial/cuentaCliente'
import pagos from './modules/Caja/pagos'
import bancos from './modules/Caja/bancos'
import tarjetas from './modules/Caja/tarjetas'
import cajas from './modules/Caja/caja'
import cheques from './modules/Caja/cheques'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clientes,
    localidades,
    condicionIva,
    proveedores,
    categorias,
    productos,
    stock,
    usuarios,
    datos,
    presupuestos,
    formasDePago,
    mapas,
    precios,
    ventas,
    cuentaCliente,
    pagos,
    bancos,
    tarjetas,
    cajas,
    cheques
  },
  state: {
    actual: 0,
    arregloPaginado: [],
    menu: false
  },
  mutations: {
    setActual(state, nro){
      state.actual = nro;
    },
    setArregloPaginado(state, arreglo){
      state.arregloPaginado = arreglo
    },
    setMenu(state){
      state.menu = !state.menu
    }
  },
  actions: {
    cambiarEstado({commit}, valor){
      commit('setActual', valor)
    },
    cambiarMenu({commit}){
      commit('setMenu')
    }
  },
  getters:{
  }
})  