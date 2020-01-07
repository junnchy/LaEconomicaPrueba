import router from '../../router'

export default {
    namespaced: true,
    state:{
        respuesta: null,
        proveedores: [],
        proveedor:{id:'', nombre:'', cuit:'', telefono:''},
        filter: {
            query: '',
        }
    },
    mutations: {
        setProveedores(state, proveedores){
          state.proveedores = proveedores
        },
        setProveedor(state, proveedor){
          state.proveedor = proveedor
        },
        setRespuesta(state, respuesta){
          state.respuesta = respuesta
        },
        SET_QUERY(state, query){
          state.filter.query = query;
      },
    },
    actions:{
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
      async getProveedor({commit}, id){
          let proveedor = {id:'', nombre:'', cuit:'', telefono:'', categorias: []}
          let aux = {}
          let p = await axios.get(`http://127.0.0.1:8000/proveedores/${id}`).then(response => {
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
          commit('setRespuesta', response.data.message)
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
      agregarCategoriaProveedor({commit, dispatch},[categoria, proveedor, descuento]){
        let id = proveedor.id
        let  cat = parseInt(categoria)
        let prov = {nombre: proveedor.nombre, telefono: proveedor.telefono, cuit: proveedor.cuit, id_cat: cat, descuento: descuento}
        axios.put(`http://127.0.0.1:8000/proveedores/${id}`, prov).then(function (response) {
            commit('setRespuesta', response.data.message)
            dispatch('getProveedor', id)
            dispatch('getProveedores')
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      resetResp({commit}, resp){
        commit('setRespuesta', resp)
    },
    },
    getters:{
        filtered_proveedores(state){
            if(state.filter.query.length >= 1){
              return state.proveedores.filter(proveedor => proveedor.nombre.toLowerCase().includes(state.filter.query))
            }else{
              return state.proveedores
            }
        },
    }   
}