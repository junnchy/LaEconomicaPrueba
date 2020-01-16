export default {
    namespaced: true,
    state:{
        respuesta: null,
        categorias: [],
        categoria: {},
        filter: {
            query: '',
        }
    },
    mutations: {
        setCategorias(state, categorias){
            state.categorias = categorias
        },
        setCategoria(state, categoria){
            state.categoria = categoria
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
    },
    actions:{
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
        async getCategoriasO({commit}){
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
        async getCategoria({commit}, id){
        var cat
        let categoria = await axios.get(`http://127.0.0.1:8000/categoria/${id}`).then(response => {
            cat = response.data
            cat.cant_hijos = cat.children.length
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
                dispatch('getCategoriasO')
                commit('setRespuesta', response.data.message)
                commit('SET_QUERY', '')
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
        filtered_categorias(state){
            if(state.filter.query.length >= 1){
              return state.categorias.filter(categoria => categoria.nombre.toLowerCase().includes(state.filter.query))
            }else{
              return state.categorias
            }
        },
    }
}