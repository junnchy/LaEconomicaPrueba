export default {
    namespaced: true,
    state:{
        usuarioActual:{},
    },
    mutations: {
        setUsuario(state, usuario){
            state.usuarioActual = usuario
        }
    },
    actions:{
        async getUsuarioActual({commit}, id){
            let usuario = await axios.get(`http://127.0.0.1:8000/usuarios/${id}`).then(response => {
                console.log(response)
                commit('setUsuario', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response)
            });
        }
    }, 
}