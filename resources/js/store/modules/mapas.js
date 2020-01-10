export default {
    namespaced: true,
    state:{
        latlog: {lat:-33.029912, lng:-60.651809}
    },
    mutations: {
        setDireccion(state, direccion){
            state.latlog = direccion
        }
    },
    actions:{
        async getDireccion({commit}, direccion){
            let key='AIzaSyCbASazHk3QISMptpk_C-AN99YU1gO5JFM'
            var dire = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${key}`).then(response => {
                if (response.data.results[0] != undefined) {
                    commit('setDireccion', response.data.results[0].geometry.location)
                }
            })
        }
    }
}

