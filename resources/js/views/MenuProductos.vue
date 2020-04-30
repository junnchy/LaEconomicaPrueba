<template>
    <div>
        <div class="container">
            <h1> <i class="fas fa-boxes"></i> Productos</h1>
        </div>
        <div class="container"> 
            <div class="row">
                <div class="col-9">
                    <input class="form-control my-3" type="search" placeholder="Buscar " aria-label="Search" v-model="search">
                </div>
                <div class="col-3">
                    <router-link :to="{name:'agregarProducto'}">
                        <button class="btn btn-outline-success btn-block my-3"> 
                            Agregar Producto <i class="fas fa-plus-circle"></i>
                        </button>
                    </router-link>
                </div>
            </div>
            <listadoProductos/>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import listadoProductos from '../components/ListadoProductos'
export default {
    name: 'MenuProductos',
    data() {
        return {
        }
    },
    components:{
        listadoProductos
    },
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions(['cambiarEstado','setArregloPaginado']),
    },
    created() {
        this.getProveedores()
        this.getCategoriasO()
        this.cambiarEstado(2)
    },
    computed: {
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
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
