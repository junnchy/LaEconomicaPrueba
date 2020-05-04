import Axios from "axios"

export default {
    namespaced: true,
    state:{
        cheques: [],
        cheque: {}
    },
    mutations: {
        setCheques(state, cheques){
            state.cheques = cheques
        },
        setCheque(state, cheque){
            state.cheque = cheque
        }
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
        }
        
    }, 
}