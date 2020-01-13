<template>
    <div>
        <form class="my-4">
            <h1 class="text-center">Proveedores</h1>
            <div class="row mt-3">
                <div class="col-10">
                    <input class="form-control mr-sm-2 form-block" type="search" placeholder="Buscar" aria-label="Search" v-model="search">
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </div>
            </div>
        </form>
        <div class="container my-4">
            <router-link :to="{name: 'agregarProv'}">
                <button class="btn btn-success btn-block">
                    Agregar Proveedor
                </button>
            </router-link>
        </div>
        <table class="table table-hover">
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
                <tr v-for="(proveedor, index) in filtered_proveedores" :key="index">
                    <th scope="row">{{proveedor.id}}</th>
                    <td>{{proveedor.nombre}}</td>
                    <td>{{proveedor.cuit}}</td>
                    <td>{{proveedor.telefono}}</td>
                    <td>
                        <router-link :to="{name: 'detalleProv', params:{id: proveedor.id}}">
                            <button  class="btn btn-warning btn-sm">Ver Mas</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
    name: 'ListadoProveedores', 
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('proveedores', ['getProveedores'])
    },
    created() {
        this.getProveedores()
    },
    computed: {
        ...mapState('proveedores',['proveedores']),
        ...mapGetters('proveedores',['filtered_proveedores']),
        search:{
            get(){
                return this.$store.state.proveedores.filter.query;
            },
            set(val){
                this.$store.commit('proveedores/SET_QUERY', val)
            }
        },
    }
}
</script>