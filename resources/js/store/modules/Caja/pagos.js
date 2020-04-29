export default {
    namespaced: true,
    state:{
        pagos: [],
        status: null
    },
    mutations: {
        setStatus(state, status){
            state.status = status
        }
    },
    actions:{
        agregarPago({commit}, pago){
            axios.post('http://127.0.0.1:8000/pago', pago).then(function (response) {
                commit('setStatus', response.status)
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                console.log(error.response.data)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            }); 
        }
        
    }, 
}