<template>
    <div>
        <div class="container">
            <h1 class="text-center mt-5">Productos</h1>
        </div>
        <div class="container"> 
            <div class="row">
                <div class="col-9">
                        <input class="form-control my-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
                </div>
                <div class="col-3">
                    <router-link :to="{name:'agregarProducto'}">
                        <button class="btn btn-success btn-block my-3"> Agregar Producto</button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <br>
                    <hr/>
                    <label>Categoria</label> 
                    <select class="custom-select" v-model="fcat">
                        <option selected :value=0>Todos</option>
                        <option v-for="(categoria, index) in categorias" :key="index" :value='categoria.id'>{{categoria.id}} - {{categoria.nombre}}</option>
                    </select>
                    <hr/>
                    <label>Proveedor</label> 
                    <select class="custom-select" v-model="fpro">
                        <option selected :value=0>Todos</option>
                        <option v-for="(proveedor, index) in proveedores" :key="index" :value='proveedor.id'>{{proveedor.id}} - {{proveedor.nombre}}</option>
                    </select>
                </div>
                <div class="col-9">
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
                            <tr v-for="producto in filtered_productos" :key="producto.id">
                                <th scope="row">{{producto.id}}</th>
                                <td>{{producto.nombre}}</td>
                                <td>{{producto.precioVenta}}</td>
                                <td>
                                    <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                                        <button class="btn btn-warning btn-sm">Ver</button>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    name: 'MenuProductos',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions('productos',['getProductos'])
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

get(){
                    return this.$store.state.categorias.filter.query;
                },
                set(val){
                    this.$store.commit('categorias/SET_QUERY', val)
                }