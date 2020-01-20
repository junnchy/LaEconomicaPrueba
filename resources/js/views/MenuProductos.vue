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
                        <tr v-for="producto in paginado" :key="producto.id">
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
            <!-- Pensar como pasar todo el navegador a un componente -->
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end pagination-sm">
                    <li :class="downType">
                    <a class="page-link" href="#" aria-label="Previous"  @click="changePageDown()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item" v-for="(item, index) in count" :key="index">
                        <a class="page-link" href="#" @click="nro = item">{{item}}</a>
                    </li>
                    <li :class="upType">
                    <a class="page-link" href="#" aria-label="Next" @click="changePageUp()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    name: 'MenuProductos',
    data() {
        return {
            upType: "page-item",
            downType:"page-item disabled",
            cantidadDeLineas: 0,
            linePerPage: 7,
            nro: 0,
            paginas: [],
            act: 1,
            nroItems: 3,
            pDesde: 0,
            PHasta: 3
        }
    },
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        ...mapActions('productos',['getProductos']),
        ...mapActions(['cambiarEstado']),
        changePageUp(){
            this.act++
            this.pDesde += this.nroItems
            this.PHasta += this.nroItems
            if (this.act === 1) {
                this.downType = "page-item disabled"
            }else{
                this.downType = "page-item"
            }
        },
        changePageDown(){
            this.act--
            this.pDesde -= this.nroItems
            this.PHasta -= this.nroItems
        },
    },
    created() {
        this.getProductos()
        this.getProveedores()
        this.getCategoriasO()
        this.cambiarEstado(2)
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
        },
        count(){
            let aux
            this.paginas = []
            this.cantidadDeLineas = this.filtered_productos.length
            aux = Math.ceil(this.cantidadDeLineas / this.linePerPage)
            for (let index = 0; index < aux; index++) {
                this.paginas.push(index)
            }
            return this.paginas.slice(this.pDesde, this.PHasta) 
        },
        paginado(){
            let desde 
            let hasta
            if (this.nro === 0) {
                desde = 0
                hasta = this.linePerPage
            }else{
                desde = this.nro*this.linePerPage
                hasta = desde + this.linePerPage
            }
            return this.filtered_productos.slice(desde,hasta)
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