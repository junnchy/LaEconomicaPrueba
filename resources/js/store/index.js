import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
import clientes from './modules/clientes'
import localidades from './modules/localidades'
import condicionIva from './modules/condiconIva'
import proveedores from './modules/proveedores'
import categorias from './modules/categorias'
import productos from './modules/productos'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    clientes,
    localidades,
    condicionIva,
    proveedores,
    categorias,
    productos
  },
  state: {
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters:{
  }
})  