<template>
    <div>
        <div class="container">
            <h1 class="text-center mt-5">Productos</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="list-group">
                        <button type="button" class="list-group-item list-group-item-action" v-for="categoria in categorias" :key="categoria.id">
                            {{categoria.nombre}}
                        </button>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-6">
                                <input class="form-control my-3" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
                        </div>
                        <div class="col-6">
                            <router-link :to="{name:'agregarProducto'}">
                                <button class="btn btn-success btn-block my-3"> Agregar Producto</button>
                            </router-link>
                        </div>
                    </div>
                    
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Costo</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="producto in filtered_productos" :key="producto.id">
                                <th scope="row">{{producto.id}}</th>
                                <td>{{producto.nombre}}</td>
                                <td>{{producto.precioCosto}}</td>
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
        ...mapActions(['getProductos', 'getCategoriasO'])
    },
    created() {
        this.getProductos()
        this.getCategoriasO()
    },
    computed: {
        ...mapState(['productos', 'categorias']),
        ...mapGetters(['filtered_productos']),
        search:{
                get(){
                    return this.$store.state.filter.query;
                },
                set(val){
                    this.$store.commit('SET_QUERY', val);
                }
            },
    },
}
</script>