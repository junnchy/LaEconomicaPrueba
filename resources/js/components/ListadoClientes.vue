<template>
    <div>
        <div class="container mt-5">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre y Apellido/Razón Social</th>
                    <th scope="col">CUIT/CUIL</th>    
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cliente in clientes" :key="cliente.id">
                        <th scope="row">{{cliente.id}}</th>
                        <td class="mt-2">{{cliente.nombre}}</td>
                        <td class="mt-2">{{cliente.cuit}}</td>
                        <td>
                            <router-link :to="{name: 'detalleCliente', params:{id: cliente.id}}">
                                <button  class="btn btn-warning btn-sm">Ver Mas</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'MenuClientes',
    data() {
        return {
        }
    },
    methods: {
        
    },
    created() {
    },
    computed: {
        ...mapState('clientes', ['clientes']),
    },
}
</script>        