<template>
    <div class="container">
        <div class="row">
            <h2><i class="fas fa-university text-secondary"></i> Bancos </h2>
        </div>
        <div class="row">
            <div class="col-9">
                    <input class="form-control mt-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
            </div>
            <div class="col-3">
                <router-link :to="{name:'agregarCliente'}">
                    <button class="btn btn-outline-success btn-block my-3"> 
                        Agregar Banco <i class="fas fa-plus-circle"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(banco, index) in arregloPaginado" :key="index">
                            <th scope="row">{{banco.id}}</th>
                            <td>{{banco.denominacion}}</td>
                            <td>
                                <button class="btn btn-outline-primary btn-sm">
                                    Ver mas <i class="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                 <Paginacion v-bind:filtered="filtered_bancos" v-bind:nro_filas="15"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
 import Paginacion from '../components/Paginacion'
export default {
    created(){
        this.getBancos()
        this.$store.commit('setArregloPaginado', this.filtered_bancos)
    },
    components:{
        Paginacion
    },
    methods: {
        ...mapActions('bancos', ['getBancos']),
    },
    computed: {
        ...mapState('bancos', ['bancos']),
        ...mapState(['arregloPaginado']),
        ...mapGetters('bancos', ['filtered_bancos']),
        search:{
            get(){
                return this.$store.state.bancos.filter.query;
            },
            set(val){
                this.$store.commit('bancos/SET_QUERY', val)
            }
        },
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>