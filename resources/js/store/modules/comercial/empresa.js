export default {
    namespaced: true,
    state:{
        datos:{},
        respuesta: null,
    },
    mutations: {
        setDatos(state, data){
            state.datos = data
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
    },
    actions:{
        async getDatos({commit}){
            try{
                let datos = await axios.get('http://127.0.0.1:8000/datosDeEmpresa').then( function (response) {
                    response.data.inicio_actividades = new Date(
                        response.data.inicio_actividades.substring(0,4), 
                        response.data.inicio_actividades.substring(5,7),
                        response.data.inicio_actividades.substring(9,11)
                    );
                    commit('setDatos', response.data)
                    console.log(typeof(response.data.inicio_actividades))
                    console.log(response.data)
                })
            }
            catch (error) {
                console.log(error.response)
            }
        },
        editarDatos({commit}, datos){
            axios.put(`http://127.0.0.1:8000/datosDeEmpresa/${datos.id}`, datos).then(function (response) {
                commit('setRespuesta', response.data.message)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response);
            });
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },
        
    }, 
}

