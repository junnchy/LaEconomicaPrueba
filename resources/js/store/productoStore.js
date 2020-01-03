import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/productos.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: []
  },
  mutations: {
    setCategorias(state, categorias){
      state.categorias = categorias
    }
  },
    actions: {
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
        }
    }      
})