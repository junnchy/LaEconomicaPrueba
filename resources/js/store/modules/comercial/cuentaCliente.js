export default {
    namespaced: true,
    state:{
        cuentaCliente: null

    },
    mutations: {
        setCC(state, cc){
            state.cuentaCliente = cc;
        }
    },
    actions:{
        async getCuentaCliente({commit}, id){
            let cc = await axios.get(`http://127.0.0.1:8000/cuentaClientes/${id}`).then(response => {    
            console.log(response.data.movimientos)
            commit('setCC', response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
    }, 
}