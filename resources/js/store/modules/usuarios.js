export default {
    namespaced: true,
    state:{
        usuarios: [],
        usuario: {},
        respuestaS: null,
        filter: {
            query: '',
        },
        errors: {
            nombre:'',
            email: '',
            password: '',
            dni:'',
            cuil: ''
        }
    },
    mutations: {
        setUsuarios(state, usuarios){
            state.usuarios = usuarios
        },
        setRespuestaServidor(state, respuesta){
            state.respuestaS = respuesta
        },
        setUsuario(state, cliente){
            state.cliente = cliente
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },
        setError(state, error){
            if (error.nombre != undefined) {
                state.errors.nombre = error.nombre
            }
            if (error.password != undefined) {
                state.errors.password = error.password
            }
            if (error.email != undefined) {
                state.errors.email = error.email
            }
            if (error.cuil != undefined) {
                state.errors.cuil = error.cuil
            }
            if (error.dni != undefined) {
                state.errors.dni = error.dni
            }
            
        }
    },
    actions:{
        async getUsuarios({commit}){
            let u = []
            try {
                let usuarios = await axios.get('http://127.0.0.1:8000/usuarios')
                usuarios.data.forEach(element => {
                    u.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setUsuarios', u)
            }
        },
        agregarUsuario({commit}, usuario){
            axios.post('http://127.0.0.1:8000/usuarios', usuario).then(function (response) {
                commit('setRespuestaServidor', response.data.message)
            })
            .catch(function (error) {
                commit('setError', error.response.data.errors)
                console.log(error.response.data)
            });
        },
        resetResp({commit}, resp){
            commit('setRespuestaServidor', resp)
        },
        async getUsuario({commit}, id){
            let usuario = await axios.get(`http://127.0.0.1:8000/usuarios/${id}`).then(response => {
                commit('setUsuario', response.data)
            })
        },
        editarUsuario({commit}, usuario){
            let id = usuario.id
            axios.put(`http://127.0.0.1:8000/usuarios/${id}`, usuario).then(function (response) {
                commit('setRespuestaServidor', response.data.message)
            })
            .catch(function (error) {
                commit('setError', error.response.data.errors)
            });
        },        
        resetError({commit}){
            let error = {
                nombre:'',
                password: '',
                email: '',
                dni:'',
                cuil: ''
            }
            commit('setError', error)
        }
    }, 
    getters:{
        filtered_usuarios(state){
            if(state.filter.query.length >= 1){
              return state.usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(state.filter.query))
            }else{
              return state.usuarios
            }
        },
    }  
}