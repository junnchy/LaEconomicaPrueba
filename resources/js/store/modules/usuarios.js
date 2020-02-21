export default {
    namespaced: true,
    state:{
        usuarioActual:{},
        vendedorActual:{},
        contadoresPresupuestos:{
            enEspera: 0,
            confirmados: 0,
            rechazados: 0,
            enSeguimiento: 0
        },
        datos: []
    },
    mutations: {
        setUsuario(state, usuario){
            state.usuarioActual = usuario
        },
        setVendedor(state, vendedor){
            state.vendedorActual = vendedor
        },
        setContadoresPresupuestos(state, respuesta){

            state.datos.splice(0, state.datos.length);

            state.contadoresPresupuestos.enEspera = ['En espera', respuesta.enEspera]
            state.contadoresPresupuestos.confirmados = ['Confirmados',respuesta.confirmados]
            state.contadoresPresupuestos.rechazados = ['Rechazados',respuesta.rechazados]
            state.contadoresPresupuestos.enSeguimiento = ['En seguimiento',respuesta.enSeguimiento]

            state.datos.push(['Tipo', 'Cantidad'],)
            state.datos.push(state.contadoresPresupuestos.enEspera)
            state.datos.push(state.contadoresPresupuestos.confirmados)
            state.datos.push(state.contadoresPresupuestos.rechazados)
            state.datos.push(state.contadoresPresupuestos.enSeguimiento)
        }
    },
    actions:{
        async getUsuarioActual({commit}, id){
            let usuario = await axios.get(`http://127.0.0.1:8000/usuarios/${id}`).then(response => {
                console.log(response)
                commit('setUsuario', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response)
            });
        },
        async getVendedorActual({commit}, id){
            let usuario = await axios.get(`http://127.0.0.1:8000/vendedores/${id}`).then(response => {
                console.log(response)
                commit('setVendedor', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response)
            });
        },
        async recuentoPresupuestos({commit}, id){
            let presupuestos = await axios.get(`http://127.0.0.1:8000/recuentoPresupuestos/${id}`).then(response => {
                console.log(response.data)
                commit('setContadoresPresupuestos', response.data)
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response)
            });
        }
    }, 
}