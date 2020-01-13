export default {
    namespaced: true,
    state:{
        localidades: [],
        localidad: {},
        respuesta: null,
        provincias: []
    },
    mutations: {
        setLocalidades(state, localidades){
            state.localidades = localidades
        },
        setRespuesta(state, respuesta){
            state.respuesta = respuesta
        },
        setLocalidad(state, localidad){
            state.localidad = localidad
        },
        setProvincias(state, provincias){
            state.provincias = provincias
        }
    },
    actions:{
        async getLocalidades({commit}){
            let l = []
            try {
                let localidades = await axios.get('http://127.0.0.1:8000/localidades')
                localidades.data.forEach(element => {
                l.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setLocalidades', l)
            }
        },
        async getProvincias({commit}){
            let p = []
            try {
                let provincias = await axios.get('http://127.0.0.1:8000/provincias')
                provincias.data.forEach(element => {
                p.push(element)
                });
                console.log(p)
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setProvincias', p)
            }
        },
        agregarLocalidad({commit, dispatch}, localidad){
            console.log(localidad)
            axios.post('http://127.0.0.1:8000/localidades', localidad).then(function (response) {
                // dispatch('getCategoriasO')
                commit('setRespuesta', response.data.message)
                dispatch('getLocalidades')
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        resetResp({commit}, resp){
            commit('setRespuesta', resp)
        },
        
        async getLocalidad({commit}, id){
            var loc
            let localidad = await axios.get(`http://127.0.0.1:8000/localidades/${id}`).then(response=>{
                loc = response.data
                commit('setLocalidad', loc)
            })
        }
    }, 
}
