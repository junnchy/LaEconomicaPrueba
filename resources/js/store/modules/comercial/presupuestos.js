export default {
    namespaced: true,
    state:{
        presupuesto: {},
        respuesta: null,
        presupuestos: [],
        status: 0
    },
    mutations: {
        setPresupuestos(state, presupuestos){
            state.presupuestos = presupuestos
        },
        setPresupuesto(state, presupuesto){
            state.presupuesto = presupuesto
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
        setStatus(state, status){
            state.status = status
        }
    },
    actions:{
        agregarPresupuesto({commit}, presupuesto){
            console.log(presupuesto)
            var dd = presupuesto.fecha.getDay();
            var mm = presupuesto.fecha.getMonth(); //January is 0!
            var yyyy = presupuesto.fecha.getFullYear();
            presupuesto.fecha = (yyyy+'-'+mm+'-'+dd);
            console.log(presupuesto.fecha)
            axios.post('http://127.0.0.1:8000/presupuestos', presupuesto).then(function (response) {
                commit('setRespuesta', response.data.message)
                commit('setStatus',response.status)
                commit('setPresupuesto', response.data.presupuesto)
                Vue.$toast.open(response.data.message);
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
                Vue.$toast.open({
                    message: 'Upp! Hay Algun Error',
                    type: 'error',
                });
            });
        },
        async getPresupuesto({commit}, id){
            let prespuesto = await axios.get(`http://127.0.0.1:8000/presupuestos/${id}`).then(response => {
            commit('setPresupuesto', response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        async getPresupuestos({commit}){
            let prespuesto = await axios.get('http://127.0.0.1:8000/presupuestos').then(response => {
            commit('setPresupuestos', response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        imprimirPrespuesto({commit}, id){
            Vue.$toast.open({
                message: 'Imprimiendo... (aguarde)',
                type: 'warning',
                duration: '6000'
            });
            axios.get(`http://127.0.0.1:8000/imprimirPresupuesto/${id}`, {responseType: 'blob'}).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'presupuesto.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(function (error) {
                console.log('algo va mal')
                console.log(error.response.data)
            });
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },
        resetStatus({commit}){
            commit('setStatus', 0)
        },
    }, 
}