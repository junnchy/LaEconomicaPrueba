import Axios from "axios"

export default {
    namespaced: true,
    state:{
        bancos: [],
        filter:{
            query: null
        }
    },
    mutations: {
        setBancos(state, bancos){
            state.bancos = bancos
        },
        SET_QUERY(state, query){
            state.filter.query = query;
        },        

    },
    actions:{
        async getBancos({commit}){
            
          try {
            var bancos= await axios.get('http://127.0.0.1:8000/bancos')
          }catch (error) {
            console.log(error)
            Vue.$toast.open({
                message: 'Upp! Hay Algun Error',
                type: 'error',
            });
          }
          finally{
            commit('setBancos', bancos.data)
          }
        } 
    }, 
    getters:{
        filtered_bancos(state){
            if(state.filter.query != null){
                return state.bancos.filter(banco=> banco.denominacion.toLowerCase().includes(state.filter.query))
            }else{
                return state.bancos
            }
        }

    }
}