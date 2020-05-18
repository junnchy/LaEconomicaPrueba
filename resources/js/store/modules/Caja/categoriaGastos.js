import Axios from "axios"

export default {
    namespaced: true,
    state:{
        categorias: [],
        status: null,
        message: null
    },
    mutations: {
        setCategorias(state, categorias){
            state.categorias = categorias
        },
        setStatus(state, status){
            state.status = status
        },
        setMessage(state, message){
            state.message = message
        }
    },
    actions:{
        async getCategorias({commit}){
            var categorias = []
            try {
                var c = await axios.get('http://127.0.0.1:8000/categoriaGastos')
                c.data.forEach(cat => {
                   categorias.push(cat)
                });
            }
            catch(error){
                console.log(error.response.data)
            }
            finally{
                commit('setCategorias', categorias)
            }
        },
        agregarCategoria({commit, dispatch}, categoria){
            axios.post('http://127.0.0.1:8000/categoriaGastos', categoria).then(function (response) {
                commit('setStatus', response.status)
                commit('setMessage', response.data.message)
                dispatch('getCategorias')
            })
            .catch(function(error){
                console.log(error.data)
            })
        }
    }, 
}