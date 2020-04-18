<template>
    <div>
        <h6>Filtros <i class="fas fa-filter"></i></h6>
        <hr>
        <div class="container">
            <label>
                Categoria 
            </label> 
            <select class="form-control" v-model="fcat">
                <option selected :value=0>Todos</option>
                <option v-for="(categoria, index) in categorias" :key="index" :value='categoria.id'>{{categoria.nombre}}</option>
            </select>
            <hr/>
            <label>
                Proveedor 
            </label> 
            <select class="form-control" v-model="fpro">
                <option selected :value=0>Todos</option>
                <option v-for="(proveedor, index) in proveedores" :key="index" :value='proveedor.id'>{{proveedor.nombre}}</option>
            </select>
            <hr/>
            <label>
                Estado
            </label> 
            <select class="form-control" v-model="epro">
                <option selected :value="null">Todos</option>
                <option :value="1">Activos </option>
                <option :value="0">Inactivos </option>
            </select>
        </div>
        <hr/>
        <div class="container mt-4">
         <router-link :to="{name: 'listadoCategorias'}" >
            <button class="btn btn-outline-dark btn-block mt-2">
                Categorias <i class="fas fa-info text-info"></i>
            </button>
        </router-link>
        <router-link :to="{name: 'actualizarPrecios'}" >
            <button class="btn btn-outline-dark btn-block mt-2">
                Actualizar Precios <i class="fas fa-wrench text-info"></i>
            </button>
        </router-link>
        <router-link :to="{name: 'compararProductos'}" >
            <button class="btn btn-outline-dark btn-block mt-2">
                Comparar Productos <i class="fas fa-compress-alt text-info"></i>
            </button>
        </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions('productos',['getProductos']),
    },
    created() {
        this.getProductos()
        this.getProveedores()
        this.getCategoriasO()
    },
    computed: {
        ...mapState('productos',['productos']),
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
        ...mapGetters('productos',['filtered_productos']),
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
        },
        epro:{
            get(){
                return this.$store.state.productos.filter.estado;
            },
            set(val){
                this.$store.commit('productos/SET_ESTADO', val)
            }
        }
    },
}
</script>