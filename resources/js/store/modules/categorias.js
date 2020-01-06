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