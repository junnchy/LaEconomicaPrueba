export default {
    namespaced: true,
    state:{
        clientes: [],
        categoriasCli: [],
        cliente: {},
        respuestaS: null
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
        }
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
            axios.post('http://127.0.0.1:8000/clientes', cliente).then(function (response) {
              console.log(response);
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
            console.log(id)
            let cliente = await axios.get(`http://127.0.0.1:8000/clientes/${id}`).then(response => {
              console.log(response.data)
              commit('setCliente', response.data)
            }) 
        },
    }, 
}

