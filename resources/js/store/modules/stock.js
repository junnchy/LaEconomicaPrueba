export default {
    namespaced: true,
    state:{
        depositos: [],
        fichasDeStock:[],
        respuesta: null,
        fichaDeStock:{}
    },
    mutations: {
        setDepositos(state, depositos){
            state.depositos = depositos
        },
        setFichasDeStock(state, fichas){
            state.fichasDeStock = fichas
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
    },
    actions:{
        agregarDeposito({commit}){
            axios.post('http://127.0.0.1:8000/depositos').then(function (response) {
                commit('setRespuesta', response.data.message)
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