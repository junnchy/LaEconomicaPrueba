export default {
    namespaced: true,
    state:{
        status: null,
        message: '',
        transferencias: [],
        transferencia: {}
    },
    mutations: {
        setStatus(state, status){
            state.status = status
        },
        setMessage(state, message){
            state.message = message
        }
    },
    actions:{
        cargarTranferencia({commit}, transferencia){
            axios.post('http://127.0.0.1:8000/transferenciaCaja', transferencia).then(function (response) {
                commit('setStatus', response.status)
                commit('setMessage', response.data.message)
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