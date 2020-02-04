<template>
    <div>
        <div class="row">
            <div class="col-12">
                    <h1> <i class="fas fa-users"></i> Clientes</h1>
            </div>
        </div>
         <div class="row">
            <div class="col-9">
                    <input class="form-control mt-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
            </div>
            <div class="col-3">
                <router-link :to="{name:'agregarCliente'}">
                    <button class="btn btn-outline-success btn-block my-3"> 
                        Agregar Cliente <i class="fas fa-user-plus"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <componente-listadoClientes/>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'MenuClientes',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('clientes',['getClientes']),
        ...mapActions(['cambiarEstado'])
    },
    created() {
        this.getClientes()
        this.cambiarEstado(4)
    },
    mounted(){
        console.log(this.$userName)
    },
    computed: {
        ...mapState('clientes', ['clientes']),
        search:{
            get(){
                return this.$store.state.clientes.filter.query;
            },
            set(val){
                this.$store.commit('clientes/SET_QUERY', val)
            }
        },
    },
}
</script>