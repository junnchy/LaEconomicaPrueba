<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">IMG</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in arregloPaginado" :key="producto.id">
                    <th scope="row">{{producto.id}}</th>
                    <th><img :src="producto.imagen" width="50px" class="rounded-circle"></th>
                    <td>{{producto.nombre}}</td>
                    <td>${{producto.precioVenta}}</td>
                    <td>
                        <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                            <button class="btn btn-warning btn-sm">
                                Ver <i class="fas fa-eye"></i>
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <Paginacion v-bind:filtered="filtered_productos" v-bind:nro_filas="7"/>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
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
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions('productos',['getProductos']),
        ...mapActions(['cambiarEstado','setArregloPaginado']),
    },
    created() {
        this.getProductos()
        this.$store.commit('setArregloPaginado', this.filtered_productos)
    },
     computed: {
        ...mapState('productos',['productos']),
        ...mapState(['arregloPaginado']),
        ...mapGetters('productos',['filtered_productos']),
    }
}
</script>