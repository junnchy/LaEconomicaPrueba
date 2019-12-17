import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proveedores: [],
    proveedor:{id:'', nombre:'', cuit:'', telefono:''}
  },
  mutations: {
    setProveedores(state, proveedores){
      state.proveedores = proveedores
    },
    setProveedor(state, proveedor){
      state.proveedor = proveedor
    }
  },
  actions: {
    async getProveedores({commit}){
      let p = []
      try {
        let proveedores = await axios.get('http://127.0.0.1:8000/proveedores')
        proveedores.data.forEach(element => {
          p.push(element)
        });
      } catch (error) {
        console.log(error)
      }
      finally{
        commit('setProveedores', p)
      }
    },
    getProveedor({commit}, id){
        let proveedor = {id:'', nombre:'', cuit:'', telefono:''}
        let aux = {}
        axios.get(`http://127.0.0.1:8000/proveedores/${id}`).then(response => {
          proveedor.id = response.data.id
          proveedor.nombre = response.data.nombre
          proveedor.telefono = response.data.telefono
          proveedor.cuit = response.data.cuit
        })
        commit('setProveedor', proveedor)
    },
    agregarProveedor({commit}, proveedor){
      axios.post('http://127.0.0.1:8000/proveedores', {nombre: proveedor.nombre, telefono: proveedor.telefono, cuit: proveedor.cuit}).then(function (response) {
        console.log(response);
        router.push({name: 'listadoProveedores'})
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    editarProveedor({commit},proveedor){
      let id = proveedor.id
      let prov = {nombre: proveedor.nombre, telefono: proveedor.telefono, cuit: proveedor.cuit}
      console.log(id)
      console.log(prov)
      axios.put(`http://127.0.0.1:8000/proveedores/${id}`, prov).then(function (response) {
        console.log(response);
        router.push({name: 'detalleProv', params:{id: proveedor.id}})
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
}
})