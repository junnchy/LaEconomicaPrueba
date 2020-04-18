export default {
    namespaced: true,
    state:{
    },
    mutations: {
        
    },
    actions:{
        actualizarPrecios({commit}, peticion){
            console.log(peticion)
            axios.post('http://127.0.0.1:8000/precios', peticion).then(function (response) {
              Vue.$toast.open(response.data.message);
              console.log(response.data)
            })
            .catch(function (error) {
              console.log('algo va mal')
              console.log(error.response.data)
              Vue.$toast.open({
                  message: 'Upp! Hay Algun Error',
                  type: 'error',
              });
            });
        }
    }, 
}