export default {
    namespaced: true,
    state:{
        localidades: []
    },
    mutations: {
        setLocalidades(state, localidades){
            state.localidades = localidades
        },
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
        
    }, 
}