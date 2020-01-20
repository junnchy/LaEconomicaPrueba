<template>
    <div>
        <div class="container mt-5">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre y Apellido/Razón Social</th>
                    <th scope="col">CUIT/CUIL</th>    
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in arregloPaginado" :key="cliente.id">
                        <th scope="row">{{cliente.id}}</th>
                        <td class="mt-2">{{cliente.nombre}}</td>
                        <td class="mt-2">{{cliente.cuit}}</td>
                        <td>
                            <router-link :to="{name: 'detalleCliente', params:{id: cliente.id}}">
                                <button  class="btn btn-warning btn-sm">Ver Mas</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Paginacion v-bind:filtered="filtered_clientes" v-bind:nro_filas="7"/>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import Paginacion from '../components/Paginacion'
export default {
    name: 'MenuClientes',
    data() {
        return {
        }
    },
    components:{
        Paginacion
    },
    created() {
        this.$store.commit('setArregloPaginado', this.filtered_clientes)
    },
    computed: {
        ...mapState(['arregloPaginado']),
        ...mapState('clientes', ['clientes']),
        ...mapGetters('clientes', ['filtered_clientes'])
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>        
