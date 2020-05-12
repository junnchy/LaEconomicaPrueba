import Axios from "axios"

export default {
    namespaced: true,
    state:{
        cheques: [],
        cheque: {},
        status: null,
        message: null,
        filter:{
            estado: null
        }
    },
    mutations: {
        setCheques(state, cheques){
            state.cheques = cheques
        },
        setStatus(state, status){
            state.status = status
        },
        setMessage(state, message){
            state.message = message
        },
        setCheque(state, cheque){
            state.cheque = cheque
        },
        SET_ESTADO(state, estado){
            state.filter.estado = estado;
        },
    },
    actions:{
        async getCheques({commit}, param){
            console.log(param)
            let cheques = []
            try {
                var c = await axios.get('http://127.0.0.1:8000/cheques', { params: {fechas: param.fechas, tipof: param.tipof}})
                c.data.forEach(cheque => {
                    cheques.push(cheque)
                  });
                
            } catch (error) {
                console.log(error.response.data)
            }
            finally{
                console.log(cheques)
                commit('setCheques', cheques)
            }
        },
        cargaCheque({commit, dispatch}, cheque){

            let dd = cheque.fecha_emision.getDate();
            let mm = cheque.fecha_emision.getMonth()+1; //January is 0!
            let yyyy = cheque.fecha_emision.getFullYear();
            cheque.fecha_emision = (yyyy+'-'+mm+'-'+dd);

            let dd2 = cheque.fecha_pago.getDate();
            let mm2 = cheque.fecha_pago.getMonth()+1; //January is 0!
            let yyyy2 = cheque.fecha_pago.getFullYear();
            cheque.fecha_pago = (yyyy2+'-'+mm2+'-'+dd2);

            console.log(cheque)

            axios.post('http://127.0.0.1:8000/cheques', cheque).then(function (response) {
                commit('setStatus', response.status)
                commit('setMessage', response.data.message)
                Vue.$toast.open(response.data.message)
                var filter = {
                    tipof: null,
                    fechas: null
                }
                dispatch('getCheques', filter)
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
    getters:{
        filtered_cheques(state){
            var chfill = state.cheques
            if(state.filter.estado != null){
                if(state.filter.estado == 1){
                    chfill = chfill.filter(cheque=> cheque.destinatario_id != null)
                }
                if(state.filter.estado == 0){
                    chfill =chfill.filter(cheque=> cheque.destinatario_id === null)
                }
            }
            return chfill
        }
    }
}