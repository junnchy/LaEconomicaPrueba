export default {
    namespaced: true,
    state:{
        depositos: [],
        fichasDeStock:[],
        respuesta: null,
        fichaDeStock:{producto_id: 0, cantidadActual: 0}
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
        setFichaStock(state, ficha){
            state.fichaDeStock = ficha
        }
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
        agregarLinea({commit}, linea){
            axios.post('http://127.0.0.1:8000/lineaFichaStock', linea).then(function (response) {
                commit('setRespuesta', response.data.message)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response.data)
            });
        }, 
        async getFichaStock({commit}, id){
            let ficha = await axios.get(`http://127.0.0.1:8000/fichaStock/${id}`).then(response => {
            console.log(response.data)
            commit('setFichaStock', response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        ajustarStock({commit, dispatch}, linea){
            let id = linea.ficha_id
            axios.put(`http://127.0.0.1:8000/fichaStock/${id}`, linea).then(function (response) {
            console.log( response.data.message)
            dispatch('getFichaStock', id)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        }
    }, 
}