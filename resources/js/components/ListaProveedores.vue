<template>
    <div>
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
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('proveedores', ['getProveedores']),
        ...mapActions(['cambiarEstado']),
    },
    created() {
        this.getProveedores(),
        this.cambiarEstado(0)
    },
    computed: {
        ...mapState('proveedores',['proveedores']),
        ...mapGetters('proveedores',['filtered_proveedores']),
    }
}
</script>

