<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Cliente </h2>
            </div>
            <div class="col-4">
                <button class="btn btn-warning">
                    Editar
                </button>
                <router-link :to="{name: 'menuClientes'}">
                    <button class="btn btn-danger">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li class="list-group-item"><strong><h3>{{cliente.nombre}}</h3></strong></li>
            <li class="list-group-item"><strong>Codigo: </strong> {{cliente.id}}</li>
            <li class="list-group-item"><strong>Direccion: </strong> {{cliente.direccion}}</li>
            <li class="list-group-item"><strong>Telefono: </strong>{{cliente.telefono}} </li>
            <li class="list-group-item"><strong>Celular: </strong> {{cliente.celular}}</li>
            <li class="list-group-item"><strong>Email: </strong> {{cliente.email}}</li>
            <li class="list-group-item"><strong>Ultima Actualizacion: </strong> {{cliente.updated_at}}</li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleCliente',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('clientes',['getCliente'])
    },
    created() {
        this.getCliente(this.id)
    },
    computed: {
        ...mapState('clientes',['cliente'])
    },

}
</script>