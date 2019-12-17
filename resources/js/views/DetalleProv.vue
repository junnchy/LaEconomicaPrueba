<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle Proveedor: {{proveedor.nombre}}</h2>
            </div>
            <div class="col-4">
                <router-link :to="{name: 'editarProveedor'}">
                    <button class="btn btn-warning">
                        Editar
                    </button>
                </router-link>
                <router-link :to="{name: 'listadoProveedores'}">
                    <button class="btn btn-danger">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li class="list-group-item"><strong>Codigo: </strong> {{proveedor.id}}</li>
            <li class="list-group-item"><strong>CUIT: </strong> {{proveedor.cuit}}</li>
            <li class="list-group-item"><strong>Telefono: </strong> {{proveedor.telefono}}</li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleProv',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getProveedor'])
    },
    created() {
        this.getProveedor(this.id)
    },
    computed: {
        ...mapState(['proveedor'])
    },

}
</script>