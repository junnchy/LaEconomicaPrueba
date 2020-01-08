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
              console.log(element)
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
            commit('setProveedor', response.data)
          })
      },
      agregarProveedor({commit}, proveedor){
        axios.post('http://127.0.0.1:8000/proveedores', proveedor).then(function (response) {
          router.push({name: 'listadoProveedores'})
          commit('setRespuesta', response.data.message)
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      editarProveedor({commit},proveedor){
        let id = proveedor.id
        axios.put(`http://127.0.0.1:8000/proveedores/${id}`, proveedor).then(function (response) {
          router.push({name: 'detalleProv', params:{id: proveedor.id}})
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      agregarCategoriaProveedor({commit, dispatch},[categoria, proveedor, descuento]){
        let id = proveedor.id
        let  cat = parseInt(categoria)
        proveedor.id_cat = cat
        proveedor.descuento = descuento
        console.log(proveedor)
        axios.put(`http://127.0.0.1:8000/proveedores/${id}`, proveedor).then(function (response) {
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