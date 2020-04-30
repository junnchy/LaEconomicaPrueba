import Axios from "axios"

export default {
    namespaced: true,
    state:{
        cajas: [],
        caja: null
    },
    mutations: {
        setCajas(state, cajas){
            state.cajas = cajas
        },
        setCaja(state, caja){
            state.caja = caja
        }        
    },
    actions:{
        async getCajas({commit}){
            try {
                var cajas = await axios.get('http://127.0.0.1:8000/caja')
            } catch (error) {
                console.log(error)
            }
            finally{
                console.log(cajas)
                commit('setCajas', cajas.data)
            }
        },
        agregarCaja({commit, dispatch}, caja){
            axios.post('http://127.0.0.1:8000/caja', caja).then(function (response) {
                dispatch('getCajas')
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
        async getCaja({commit}, id){
            try {
                var caja = await axios.get(`http://127.0.0.1:8000/caja/${id}`)
            } catch (error) {
                console.log(error)
            }
            finally{
                console.log(caja)
                commit('setCaja', caja.data)
            }
        }
    }, 
}