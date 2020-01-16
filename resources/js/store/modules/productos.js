export default {
    namespaced: true,
    state:{
        respuesta: null,
        productos: [],
        producto: {},
        filter: {
            query: '',
            categoria: 0,
            proveedor: 0
        }
    },
    mutations: {
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
        setProducto(state, producto){
            state.producto = producto
        },
        setProductos(state, productos){
            state.productos = productos
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
        SET_CATEGORIA(state, categoria){
        state.filter.categoria = categoria;
        },
        SET_PROVEEDOR(state, proveedor){
        state.filter.proveedor = proveedor;
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
        
    },
    actions:{
      async getProductos({commit}){
          let prod = []
          try {
            let productos = await axios.get('http://127.0.0.1:8000/productos')
            productos.data.forEach(producto => {
              prod.push(producto)
            });
          } catch (error) {
            console.log(error)
          }
          finally{
            commit('setProductos', prod)
          }
        },
        agregarProducto({commit}, producto){
          producto.id = null   
          axios.post('http://127.0.0.1:8000/productos', producto).then(function (response) {
            commit('setRespuesta', response.data.message)
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        async getProducto({commit}, id){
          var prod
          let producto = await axios.get(`http://127.0.0.1:8000/productos/${id}`).then(response => {
            prod = response.data
            commit('setProducto', prod)
          })
        },
        editarProducto({commit},producto){
          var id = producto.id
          axios.put(`http://127.0.0.1:8000/productos/${id}`, producto).then(function (response) {
            commit('setRespuesta', response.data.message)
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
        filtered_productos(state){
            let pfil = state.productos
            if(state.filter.categoria > 0){
              pfil = pfil.filter(producto => producto.categoria_id === state.filter.categoria)
            }
            if (state.filter.proveedor > 0){
              pfil = pfil.filter(producto => producto.proveedor_id === state.filter.proveedor)
            }
            if(state.filter.query.length >= 1){
              return pfil.filter(producto => producto.nombre.toLowerCase().includes(state.filter.query))
            }else{
              return pfil
            }   
        },
    }
}