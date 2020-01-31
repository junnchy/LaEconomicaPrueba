<template>
    <div>
        <div>
            <table class="table table-striped">
                <thead class="thead">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cuit</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Botones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(proveedor, index) in arregloPaginado" :key="index">
                        <th scope="row">{{proveedor.id}}</th>
                        <td>{{proveedor.nombre}}</td>
                        <td>{{proveedor.cuit}}</td>
                        <td>{{proveedor.telefono}}</td>
                        <td>
                            <router-link :to="{name: 'detalleProv', params:{id: proveedor.id}}">
                                <button  class="btn btn-warning btn-sm">
                                    Ver Mas <i class="fas fa-eye"></i>
                                </button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Paginacion v-bind:filtered="filtered_proveedores" v-bind:nro_filas="7"/>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'
import Paginacion from '../components/Paginacion'
export default {
    data() {
        return {
        }
    },
    components:{
        Paginacion
    },
    methods: {
        ...mapActions('proveedores', ['getProveedores']),
        ...mapActions(['cambiarEstado']),
    },
    created() {
        this.getProveedores(),
        this.cambiarEstado(0),
        this.$store.commit('setArregloPaginado', this.filtered_proveedores)
    },
    computed: {
        ...mapState(['arregloPaginado']),
        ...mapState('proveedores',['proveedores']),
        ...mapGetters('proveedores',['filtered_proveedores']),
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>

