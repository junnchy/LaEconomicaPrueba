import Axios from "axios";

export default {
    namespaced: true,
    state:{
        formasDePago : [],
        respuestaS: null,
        formaDePago: {id: null, descripcion: '', coeficiente: 0, recargo: 0, estado: 0}
    },
    mutations: {
        setFormasDePago(state, formas){
            state.formasDePago = formas;
        },
        setRespuestaServidor(state, respuesta){
            state.respuestaS = respuesta
        },
        setFormaDePago(state, fdp){
            state.formaDePago = fdp
        }
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
        editarFormaDePago({commit, dispatch}, fdp){
            let id = fdp.id
            axios.put(`http://127.0.0.1:8000/formaDePago/${id}`, fdp).then(function (response) {
                commit('setRespuestaServidor', response.data.message)
                dispatch('getFormasDePago')
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                commit('setError',error.response.data.errors)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            });
        },
        async getFormaDePago({commit}, id){
            console.log(id)
            await axios.get(`http://127.0.0.1:8000/formaDePago/${id}`).then(response => {
                commit('setFormaDePago', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
              }); 
        },
        resetResp({commit}, resp){
            commit('setRespuestaServidor', resp)
        },
    }, 
}