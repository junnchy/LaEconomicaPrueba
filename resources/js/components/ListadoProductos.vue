<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in arregloPaginado" :key="producto.id">
                    <th scope="row">{{producto.id}}</th>
                    <th><img :src="producto.imagen" width="50px" class="border border-secondary"></th>
                    <td>{{producto.nombre}}</td>
                    <td v-if="producto.estado === 1"><p class="text-success"><i class="fas fa-check-circle"></i></p></td>
                    <td v-if="producto.estado === 0"><p class="text-danger"><i class="fas fa-exclamation-circle"></i></p></td>
                    <td>${{producto.precioVenta}}</td>
                    <td>
                        <div class="row">
                            <div class="col-6">
                                <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                                    <button class="btn btn-warning btn-sm">
                                        Ver <i class="fas fa-eye"></i>
                                    </button>
                                </router-link>
                            </div>
                            <div class="col-6">
                                <div class="dropdown">
                                    <button class="btn btn-outline-dark border-0 " type="button" id="subMenuProducto" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="subMenuProducto">
                                        <a class="dropdown-item" href="#">
                                            <router-link :to="{name: 'fichaStock', params:{id: producto.ficha_stock.id}}">
                                                <a class="dropdown-item" href="#"> Ficha de Stock </a>
                                            </router-link>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
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