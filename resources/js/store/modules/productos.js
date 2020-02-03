export default {
    namespaced: true,
    state:{
      respuesta: null,
      productos: [],
      producto: {},
      filter: {
          query: '',
          categoria: 0,
          proveedor: 0,
          estado: null
      },
      errors: {
        nombre:'',
        precioBase: '',
        iva: '',
        rentabilidad:'',
        proveedor_id:'',
        categoria_id:''
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
        SET_ESTADO(state, estado){
          state.filter.estado = estado;
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
        setError(state, error){
          if (error.nombre != undefined) {
              state.errors.nombre = error.nombre
          }
          if (error.precioBase != undefined) {
              state.errors.precioBase = error.precioBase
          }
          if (error.iva != undefined) {
              state.errors.iva = error.iva
          }
          if (error.rentabilidad != undefined) {
              state.errors.rentabilidad = error.rentabilidad
          }
          if (error.proveedor_id != undefined) {
              state.errors.proveedor_id = error.proveedor_id
          }
          if (error.categoria_id != undefined) {
              state.errors.categoria_id = error.categoria_id
          }
        }
    },
    actions:{
      async getProductos({commit}){
          let prod = []
          try {
            let productos = await axios.get('http://127.0.0.1:8000/productos')
            productos.data.forEach(producto => {
              prod.push(producto)
            });
          }catch (error) {
            console.log(error)
          }
          finally{
            commit('setProductos', prod)
          }
        },
        agregarProducto({commit}, producto){
          producto.id = null   
          console.log(producto)
          axios.post('http://127.0.0.1:8000/productos', producto).then(function (response) {
            commit('setRespuesta', response.data.message)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
            commit('setError',error.response.data.errors)
          });
        },
        async getProducto({commit}, id){
          var prod
          let producto = await axios.get(`http://127.0.0.1:8000/productos/${id}`).then(response => {
            prod = response.data
            console.log(prod)
            commit('setProducto', prod)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        editarProducto({commit},producto){
          var id = producto.id
          console.log(producto)
          axios.put(`http://127.0.0.1:8000/productos/${id}`, producto).then(function (response) {
            commit('setRespuesta', response.data.message)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
            commit('setError',error.response.data.errors)
          });
        },
        resetResp({commit}, resp){
          commit('setRespuesta', resp)
      },
      resetError({commit}){
        let error = {
          nombre:'',
          precioBase: '',
          iva: '',
          rentabilidad:'',
          proveedor_id:'',
          categoria_id:''
        }
        commit('setError', error)
      }
    },
    getters:{
        filtered_productos(state){
            let pfil = state.productos
            if(state.filter.estado != null){
              pfil = pfil.filter(producto => (producto.estado === state.filter.estado))
            }
            if(state.filter.categoria > 0){
              pfil = pfil.filter(producto => (producto.categoria.categoria_id === state.filter.categoria || producto.categoria_id === state.filter.categoria))
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