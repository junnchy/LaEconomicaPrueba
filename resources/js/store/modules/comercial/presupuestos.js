export default {
    namespaced: true,
    state:{
        presupuesto: {},
        respuesta: null,
        presupuestos: [],
        filter: {
            dates: [],
            estado: null
        },
        status: 0,
        estadosPresupuesto: []
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
        },
        setEstadosPresupuestos(state, estados){
            state.estadosPresupuesto = estados
        },
        SET_DATE(state, val){
            state.filter.dates = val
        },
        SET_ESTADO(state, val){
            state.filter.estado = val
        },
    },
    actions:{
        agregarPresupuesto({commit}, presupuesto){
            console.log(presupuesto)
            var dd = presupuesto.fecha_emision.getDate();
            var mm = presupuesto.fecha_emision.getMonth()+1; //January is 0!
            var yyyy = presupuesto.fecha_emision.getFullYear();
            presupuesto.fecha_emision = (yyyy+'-'+mm+'-'+dd);
            console.log(presupuesto.fecha_emision)
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
            response.data.fecha_emision = new Date(
                response.data.fecha_emision.substring(0,4), 
                parseInt(response.data.fecha_emision.substring(5,7)) - 1,
                response.data.fecha_emision.substring(8,10)
            );
            console.log(response.data.fecha_emision)
            commit('setPresupuesto', response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        async getPresupuestos({commit}){
            let prespuesto = await axios.get('http://127.0.0.1:8000/presupuestos').then(response => {
            response.data.forEach(presupuesto => {
                let $date
                $date = new Date(presupuesto.created_at)
                presupuesto.created_at = $date
            });
            commit('setPresupuestos', response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log('algo va mal')
            console.log(error.response.data)
          });
        },
        cambiarEstadoPresupuesto({commit}, presupuesto){
            axios.put(`http://127.0.0.1:8000/presupuestos/${presupuesto.id}`, presupuesto).then(response => {    
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
        async getEstadosPresupuesto({commit}){
            await axios.get('http://127.0.0.1:8000/estadoPresupuesto').then(response => {
            commit('setEstadosPresupuestos', response.data)
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
                duration: 6000
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
    getters:{
        filtered_presupuestos(state){
            let pfil = state.presupuestos
            if(state.filter.estado != null){
                pfil = pfil.filter(presupuesto => (presupuesto.estadoPresupuesto_id === state.filter.estado))
                return pfil
            }
            if(state.filter.dates[0] != null){
                pfil = pfil.filter(presupuesto => (presupuesto.created_at >= state.filter.dates[0] && presupuesto.created_at <= state.filter.dates[1]))
                return pfil
            }else{
              return pfil
            }   
        },
    } 
}