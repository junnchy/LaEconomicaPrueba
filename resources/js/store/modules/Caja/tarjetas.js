import Axios from "axios"

export default {
    namespaced: true,
    state:{
        tarjetas: [],
        respuestaS: null
    },
    mutations: {
        setTarjetas(state, tarjetas){
            state.tarjetas = tarjetas
        },
        setRespuestaServidor(state, respuesta){
            state.respuestaS = respuesta
        },
        
    },
    actions:{
        async getTarjetas({commit}){
            try {
                var tarjetas = await axios.get('http://127.0.0.1:8000/tarjetas')
            }catch (error) {
                console.log(error)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            }
            finally{
                commit('setTarjetas', tarjetas.data)
            }
        },
        agregarTarjeta({commit, dispatch}, tarjeta){
            axios.post('http://127.0.0.1:8000/tarjetas', tarjeta).then(function (response) {
                commit('setRespuestaServidor', response.data.message)
                dispatch('getTarjetas')
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                console.log(error.response.data)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            });
        },
        resetResp({commit}, resp){
            commit('setRespuestaServidor', resp)
        },
    }, 
}