export default {
    namespaced: true,
    state:{
        localidades: [],
        respuesta: null,
    },
    mutations: {
        setLocalidades(state, localidades){
            state.localidades = localidades
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
    },
    actions:{
        async getLocalidades({commit}){
            let l = []
            try {
                let localidades = await axios.get('http://127.0.0.1:8000/localidades')
                localidades.data.forEach(element => {
                l.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setLocalidades', l)
            }
        },
        agregarLocalidad({commit, dispatch}, localidad){
            axios.post('http://127.0.0.1:8000/localidades', localidad).then(function (response) {
                // dispatch('getCategoriasO')
                commit('setRespuesta', response.data.message)
                dispatch('getLocalidades')
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },   
    }, 
}