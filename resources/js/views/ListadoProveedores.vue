<template>
    <div>
        <table class="table">
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
                <tr v-for="(proveedor, index) in proveedores" :key="index">
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
        <div class="container my-4">
            <router-link :to="{name: 'agregarProv'}">
                <button class="btn btn-primary btn-block">
                    Agregar Proveedor
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'ListadoProveedores', 
    methods: {
        ...mapActions(['getProveedores'])
    },
    created() {
        this.getProveedores()
    },
    computed: {
        ...mapState(['proveedores'])
    },
}
</script>