import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proveedores: [],
    proveedor:{id:'', nombre:'', cuit:'', telefono:''}
  },
  mutations: {
    setProveedores(state, proveedores){
      state.proveedores = proveedores
    }
  },
  actions: {
    getProveedores({commit}){
      let proveedores = []
      axios.get('http://127.0.0.1:8000/proveedores').then(response => (response.data.forEach(element => {
        proveedores.push(element)
      })))
      commit('setProveedores', proveedores)
    },
    getProveedor({commit}, id){
        axios.get('http://127.0.0.1:8000/proveedores/' + id).then(response => (console.log(response.data)))
    },
}
})