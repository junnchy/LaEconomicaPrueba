export default {
    namespaced: true,
    state:{
        clientes: [],
        categoriasCli: [],
        cliente: {},
        respuestaS: null,
        filter: {
            query: '',
        }
    },
    mutations: {
        setClientes(state, clientes){
            state.clientes = clientes
        },
        setCategoriasCli(state, categorias){
            state.categoriasCli = categorias
        },
        setRespuestaServidor(state, respuesta){
            state.respuestaS = respuesta
        },
        setCliente(state, cliente){
            state.cliente = cliente
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
    },
    actions:{
        async getClientes({commit}){
            let c = []
            try {
                let clientes = await axios.get('http://127.0.0.1:8000/clientes')
                clientes.data.forEach(element => {
                c.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setClientes', c)
            }
        },
        async getCategoriasCli({commit}){
            let c = []
            try {
                let clientes = await axios.get('http://127.0.0.1:8000/categoriaCliente')
                clientes.data.forEach(element => {
                c.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setCategoriasCli', c)
            }
        },
        agregarCliente({commit}, cliente){
            console.log(cliente)
            axios.post('http://127.0.0.1:8000/clientes', cliente).then(function (response) {
              commit('setRespuestaServidor', response.data.message)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        resetResp({commit}, resp){
            commit('setRespuestaServidor', resp)
        },
        async getCliente({commit}, id){
            let cliente = await axios.get(`http://127.0.0.1:8000/clientes/${id}`).then(response => {
              commit('setCliente', response.data)
            }) 
        },
        editarCliente({commit},cliente){
            let id = cliente.id
            axios.put(`http://127.0.0.1:8000/clientes/${id}`, cliente).then(function (response) {
              commit('setRespuestaServidor', response.data.message)
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        agregarCategoriaCli({commit, dispatch}, categoria){
            axios.post('http://127.0.0.1:8000/categoriaCliente', categoria).then(function (response) {
              dispatch('getCategoriasCli')
              commit('setRespuestaServidor', response.data.message)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }, 
    getters:{
        filtered_clientes(state){
            if(state.filter.query.length >= 1){
              return state.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(state.filter.query))
            }else{
              return state.clientes
            }
        },
    }  
}

