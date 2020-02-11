export default {
    namespaced: true,
    state:{
        presupuesto: {},
        respuesta: null,
    },
    mutations: {
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
    },
    actions:{
        agregarPresupuesto({commit}, presupuesto){
            console.log(presupuesto)
            var dd = presupuesto.fecha.getDate();
            var mm = presupuesto.fecha.getMonth(); //January is 0!
            var yyyy = presupuesto.fecha.getFullYear();
            presupuesto.fecha = (yyyy+'-'+mm+'-'+dd);
            console.log(presupuesto.fecha)
            axios.post('http://127.0.0.1:8000/presupuestos', presupuesto).then(function (response) {
                commit('setRespuesta', response.data.message)
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            });
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },
    }, 
}