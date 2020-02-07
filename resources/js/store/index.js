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
    mapas
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