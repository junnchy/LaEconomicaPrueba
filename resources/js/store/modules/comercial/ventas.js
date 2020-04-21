export default {
    namespaced: true,
    state:{
        status: 0,
        respuesta: null,
    },
    mutations: {
        setStatus(state, status){
            state.status = status
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
    },
    actions:{
        agregarVenta({commit}, venta){
            console.log(venta)
            var dd = venta.fecha_emision.getDate();
            var mm = venta.fecha_emision.getMonth()+1; //January is 0!
            var yyyy = venta.fecha_emision.getFullYear();
            venta.fecha_emision = (yyyy+'-'+mm+'-'+dd);
            console.log(venta.fecha_emision)
            /* axios.post('http://127.0.0.1:8000/ventas', venta).then(function (response) {
                commit('setRespuesta', response.data.message)
                commit('setStatus',response.status)
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            }); */
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },
        resetStatus({commit}){
            commit('setStatus', 0)
        },
    }, 
}