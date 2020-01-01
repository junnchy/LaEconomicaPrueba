import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    producto: {},
    respuesta: null,
    productos: [],
    proveedores: [],
    categorias: [],
    proveedor:{id:'', nombre:'', cuit:'', telefono:''},
    categoria: {},
    filter: {
      query: '',
      categoria: 0,
      proveedor: 0
    }
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
    setRespuesta(state, respuesta){
      state.respuesta = respuesta
    },
    setProducto(state, producto){
      producto.descuentoProducto= [
        producto.descuentoProducto_1,
        producto.descuentoProducto_2,
        producto.descuentoProducto_3,
        producto.descuentoProducto_4,
        producto.descuentoProducto_5,
      ]
      state.producto = producto
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
          cat.push(element)
        });
      } catch (error) {
        console.log(error)
      }
      finally{
        commit('setCategorias', cat)
      }
    },
    agregarCategoriaProveedor({commit, dispatch},[categoria, proveedor, descuento]){
      let id = proveedor.id
      let  cat = parseInt(categoria)
      let prov = {nombre: proveedor.nombre, telefono: proveedor.telefono, cuit: proveedor.cuit, id_cat: cat, descuento: descuento}
      axios.put(`http://127.0.0.1:8000/proveedores/${id}`, prov).then(function (response) {
        dispatch('getProveedor', id)
        dispatch('getProveedores')
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
      var cat
      let categoria = await axios.get(`http://127.0.0.1:8000/categoria/${id}`).then(response => {
        cat = response.data
        cat.cant_hijos = cat.children.length
        console.log(cat)
        commit('setCategoria', cat)
      })
    },
    editarCategoria({commit},categoria){
      var id = categoria.id
      if (categoria.categoria_id != null) {
        let catid = parseInt(categoria.categoria_id)
        var cat = {id: categoria.id, nombre: categoria.nombre, categoria_id: catid}
      }else{
        var cat = {id: categoria.id, nombre: categoria.nombre, categoria_id: null}
      }
      console.log(cat)
      axios.put(`http://127.0.0.1:8000/categoria/${id}`, cat).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    agregarCategoria({commit, dispatch}, categoria){
      axios.post('http://127.0.0.1:8000/categoria', categoria).then(function (response) {
        console.log(response);
        dispatch('getCategoriasO')
        commit('SET_QUERY', '')
      })
      .catch(function (error) {
        console.log(error);
      });
    },
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
      let prod = {id: null, nombre: producto.nombre, precioBase: producto.precioBase,
        descuentoProducto_1: producto.descuentoProducto[0],
        descuentoProducto_2: producto.descuentoProducto[1],
        descuentoProducto_3: producto.descuentoProducto[2],
        descuentoProducto_4: producto.descuentoProducto[3],
        descuentoProducto_5: producto.descuentoProducto[4],
        dtoReal: producto.dre, iva: producto.iva, flete: producto.flete,
        precioCosto: producto.precioCosto,
        proveedor_id: producto.proveedor.id, categoria_id: producto.categoria.id}
      console.log(prod)
      axios.post('http://127.0.0.1:8000/productos', prod).then(function (response) {
        console.log(response);
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
        console.log(prod)
        commit('setProducto', prod)
        commit('setProveedor',prod.proveedor)
        commit('setCategoria',prod.categoria)
      })
    },
    editarProducto({commit},producto){
      var id = producto.id
      producto.descuentoProducto_1= producto.descuentoProducto[0],
      producto.descuentoProducto_2= producto.descuentoProducto[1],
      producto.descuentoProducto_3= producto.descuentoProducto[2],
      producto.descuentoProducto_4= producto.descuentoProducto[3],
      producto.descuentoProducto_5= producto.descuentoProducto[4],
      producto.proveedor_id= producto.proveedor.id, 
      producto.categoria_id= producto.categoria.id
      axios.put(`http://127.0.0.1:8000/productos/${id}`, producto).then(function (response) {
        console.log(response);
        commit('setRespuesta', response.data.message)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  getters:{
    filtered_categorias(state){
      if(state.filter.query.length >= 1){
        return state.categorias.filter(categoria => categoria.nombre.toLowerCase().includes(state.filter.query))
      }else{
        return state.categorias
      }
    },
    filtered_proveedores(state){
      if(state.filter.query.length >= 1){
        return state.proveedores.filter(proveedor => proveedor.nombre.toLowerCase().includes(state.filter.query))
      }else{
        return state.proveedores
      }
    },
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
})    