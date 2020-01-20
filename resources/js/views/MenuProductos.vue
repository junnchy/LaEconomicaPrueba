<template>
    <div>
        <div class="container">
            <h1 >Productos</h1>
        </div>
        <div class="container"> 
            <div class="row">
                <div class="col-9">
                        <input class="form-control my-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
                </div>
                <div class="col-3">
                    <router-link :to="{name:'agregarProducto'}">
                        <button class="btn btn-outline-success btn-block my-3"> Agregar Producto</button>
                    </router-link>
                </div>
            </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="producto in arregloPaginado" :key="producto.id">
                            <th scope="row">{{producto.id}}</th>
                            <td>{{producto.nombre}}</td>
                            <td>${{producto.precioVenta}}</td>
                            <td>
                                <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                                    <button class="btn btn-warning btn-sm">Ver</button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            <Paginacion v-bind:filtered="filtered_productos" v-bind:nro_filas="7"/>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import Paginacion from '../components/Paginacion'
export default {
    name: 'MenuProductos',
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
        this.getProveedores()
        this.getCategoriasO()
        this.cambiarEstado(2)
        this.$store.commit('setArregloPaginado', this.filtered_productos)
    },
    computed: {
        ...mapState('productos',['productos']),
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
        ...mapState(['arregloPaginado']),
        ...mapGetters('productos',['filtered_productos']),
        search:{
            get(){
                return this.$store.state.productos.filter.query;
            },
            set(val){
                this.$store.commit('productos/SET_QUERY', val)
            }
        },
        fcat:{
            get(){
                return this.$store.state.productos.filter.categoria;
            },
            set(val){
                this.$store.commit('productos/SET_CATEGORIA', val)
            }
        },
        fpro:{
            get(){
                return this.$store.state.productos.filter.proveedor;
            },
            set(val){
                this.$store.commit('productos/SET_PROVEEDOR', val)
            }
        }
    },
}
</script>
