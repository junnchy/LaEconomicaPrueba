import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proveedores: [],
    categorias: [],
    proveedor:{id:'', nombre:'', cuit:'', telefono:''},
    categoria: {}
  },
  mutations: {
    setProveedores(state, proveedores){
      state.proveedores = proveedores
    },
    setProveedor(state, proveedor){
      state.proveedor = proveedor
    },
    setCategorias(state, categorias){
      state.categorias = categorias
    },
    setCategoria(state, categoria){
      state.categoria = categoria
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
        let proveedor = {id:'', nombre:'', cuit:'', telefono:'', categorias: []}
        let aux = {}
        axios.get(`http://127.0.0.1:8000/proveedores/${id}`).then(response => {
          console.log(response.data)
          proveedor.id = response.data.id
          proveedor.nombre = response.data.nombre
          proveedor.telefono = response.data.telefono
          proveedor.cuit = response.data.cuit
          proveedor.categorias = response.data.categorias
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
    },
    async getCategorias({commit}){
      let cat = []
      try {
        let categorias = await axios.get('http://127.0.0.1:8000/categoria')
        categorias.data.forEach(element => {
          console.log(element)
          cat.push(element)
        });
      } catch (error) {
        console.log(error)
      }
      finally{
        commit('setCategorias', cat)
      }
    },
    agregarCategoria({commit, dispatch},[categoria, proveedor, descuento]){
      let id = proveedor.id
      let  cat = parseInt(categoria)
      let prov = {nombre: proveedor.nombre, telefono: proveedor.telefono, cuit: proveedor.cuit, id_cat: cat, descuento: descuento}
      console.log(prov)
      axios.put(`http://127.0.0.1:8000/proveedores/${id}`, prov).then(function (response) {
        console.log(response)
        dispatch('getProveedor', id)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    async getCategoriasO({commit}){
      let cat = []
      try {
        let categorias = await axios.get('http://127.0.0.1:8000/categoria')
        categorias.data.forEach(element => {
            cat.push(element)
        });
        var aux = []
        cat.forEach(h=>{
          if (h.padre === null){
            h.nro = 0
            aux.push(h)
            if (h.children != []) {
              h.children.forEach(i=>{
                i.nro = 1
                aux.push(i)
                cat.forEach(j=>{
                  if (j.categoria_id === i.id) {
                    j.nro = 2
                    aux.push(j)
                  }
                })
              })
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
      finally{
        commit('setCategorias', aux)
      }
    },
    async getCategoria({commit}, id){
      let cat
      let categoria = await axios.get(`http://127.0.0.1:8000/categoria/${id}`).then(response => {
        console.log(response.data)
        cat = response.data
        commit('setCategoria', cat)
      })
    }
  }
})