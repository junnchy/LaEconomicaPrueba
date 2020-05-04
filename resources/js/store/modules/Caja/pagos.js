export default {
    namespaced: true,
    state:{
        pagos: [],
        status: null,
        pago: {}
    },
    mutations: {
        setStatus(state, status){
            state.status = status
        },
        setPago(state, pago){
            state.pago = pago
        }
    },
    actions:{
        agregarPago({commit}, pago){
            if (pago.cheques != []) {
                pago.cheques.forEach(cheque => {
                    let dd = cheque.fecha_emision.getDate();
                    let mm = cheque.fecha_emision.getMonth()+1; //January is 0!
                    let yyyy = cheque.fecha_emision.getFullYear();
                    cheque.fecha_emision = (yyyy+'-'+mm+'-'+dd);

                    let dd2 = cheque.fecha_pago.getDate();
                    let mm2 = cheque.fecha_pago.getMonth()+1; //January is 0!
                    let yyyy2 = cheque.fecha_pago.getFullYear();
                    cheque.fecha_pago = (yyyy2+'-'+mm2+'-'+dd2);
                });
                
            }
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
        },
        async getPago({commit}, id){
            try 
            {
               var pago = await axios.get(`http://127.0.0.1:8000/pago/${id}`)
            } 
            catch (error) {
                console.log(error.response.data)
            }
            finally{
                commit('setPago', pago.data)
            }
        }
        
    }, 
}