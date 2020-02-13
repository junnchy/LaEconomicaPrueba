<template>
    <div>
        <div class="container mt-5">
            <table class="table table-striped">
                <thead class="thead">
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
                            <div class="d-flex flex-row">
                                <div class="mr-3">
                                    <router-link :to="{name: 'detalleCliente', params:{id: cliente.id}}">
                                        <button  class="btn btn-warning btn-sm">
                                            Ver Mas <i class="fas fa-eye"></i>
                                        </button>
                                    </router-link>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-outline-dark border-0 " type="button" id="subMenuProducto" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="subMenuProducto">
                                        <router-link :to="{name: 'listadoPresupuestosCliente', params:{id: cliente.id}}">
                                            <a class="dropdown-item" href="#">
                                                Presupuestos de Cliente
                                            </a>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
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
