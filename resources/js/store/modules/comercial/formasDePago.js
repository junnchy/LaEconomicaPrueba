import Axios from "axios";

export default {
    namespaced: true,
    state:{
        formasDePago : [],
    },
    mutations: {
        setFormasDePago(state, formas){
            state.formasDePago = formas;
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
        }
    }, 
}