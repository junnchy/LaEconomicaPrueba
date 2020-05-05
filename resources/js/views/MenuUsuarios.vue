<template>
    <div>
        <div class="row">
            <div class="col-12">
                    <h1>Usuarios</h1>
            </div>
        </div>
         <div class="row">
            <div class="col-9">
                    <input class="form-control mt-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
            </div>
            <div class="col-3">
                <router-link :to="{name:'agregarUsuario'}">
                    <button class="btn btn-outline-success btn-block my-3"> 
                        Agregar Usuario <i class="fas fa-user-plus"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <ListadoUsuarios/>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ListadoUsuarios from '../components/ListadoUsuarios'
export default {
    name: 'MenuUsuarios',
    data() {
        return {
        }
    },
    components:{
        ListadoUsuarios
    },
    methods: {
        ...mapActions('usuarios',['getUsuarios']),
        ...mapActions(['cambiarEstado'])
    },
    created() {
        this.getUsuarios()
        this.cambiarEstado(4)
    },
    mounted(){
        console.log(this.$userName)
    },
    computed: {
        ...mapState('usuarios', ['usuarios']),
        search:{
            get(){
                return this.$store.state.usuarios.filter.query;
            },
            set(val){
                this.$store.commit('usarios/SET_QUERY', val)
            }
        },
    },
}
</script>