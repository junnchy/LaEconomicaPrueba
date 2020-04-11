import Axios from "axios";

export default {
    namespaced: true,
    state:{
        formasDePago : [],
        respuestaS: null
    },
    mutations: {
        setFormasDePago(state, formas){
            state.formasDePago = formas;
        },
        setRespuestaServidor(state, respuesta){
            state.respuestaS = respuesta
        },
        
    },
    actions:{
        async getFormasDePago({commit}){
            await axios.get('http://127.0.0.1:8000/formaDePago').then(response=>{
                commit('setFormasDePago', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
              });
        },
        agregarFormaDePago({commit, dispatch}, fdp){
            axios.post('http://127.0.0.1:8000/formaDePago', fdp).then(function (response) {
                commit('setRespuestaServidor', response.data.message)
                dispatch('getFormasDePago')
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