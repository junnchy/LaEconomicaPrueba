export default {
    namespaced: true,
    state:{
        localidades: [],
        localidad: {},
        respuesta: null,
        provincias: [],
        provincia: {},
        filter: {
            provinciaId: null,
        },
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
        },
        setProvincia(state, provincia){
            state.provincia = provincia
        },
        SET_PROVINCIA(state, provincia){
            state.filter.provinciaId = provincia
        }
    },
    actions:{
        async getLocalidades({commit}){
            let l = []
            try {
                let localidades = await axios.get('http://127.0.0.1:8000/localidades', 2)
                localidades.data.forEach(element => {
                l.push(element)
                });
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
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
                console.log(error.response.data)
            }
            finally{
                commit('setProvincias', p)
            }
        },
        async getProvincia({commit}, id){
            try {
                let provincia = await axios.get(`http://127.0.0.1:8000/provincias/${id}`)
                console.log(provincia.data)
                commit('setProvincia', provincia.data)
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
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
    getters:{
        filtered_localidades(state){
            let loc = state.localidades
            if (state.filter.provinciaId != null) {
                loc = loc.filter(localidad=>(localidad.provincia_id === state.filter.provinciaId))
            }
            return loc  
        }
    }
}

