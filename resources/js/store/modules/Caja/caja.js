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
        async getCajas({commit}, date){
            try {
                var cajas = await axios.get('http://127.0.0.1:8000/caja',{ params: {fecha: date}})
            } catch (error) {
                console.log(error.response.data)
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
        async getCaja({commit}, param){
            try {
                var id = param[0]
                var fecha = param[1]    
                console.log(fecha)
                var caja = await axios.get(`http://127.0.0.1:8000/caja/${id}`, { params: {fechas: fecha}})
            } catch (error) {
                console.log(error.response.data)
            }
            finally{
                console.log(caja)
                commit('setCaja', caja.data)
            }
        }
    }, 
}