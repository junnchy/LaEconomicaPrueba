export default {
    namespaced: true,
    state:{
        condicionIva: []
    },
    mutations: {
        setCondicionIva(state, condiciones){
            state.condicionIva = condiciones
        },
    },
    actions:{
        async getCondicionesIva({commit}){
            let l = []
            try {
                let condiciones = await axios.get('http://127.0.0.1:8000/condicionIva')
                condiciones.data.forEach(element => {
                l.push(element)
                });
            } catch (error) {
                console.log(error)
            }
            finally{
                commit('setCondicionIva', l)
            }
        },
        
    }, 
}