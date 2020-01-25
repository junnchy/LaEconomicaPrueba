<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Cliente </h2>
            </div>
            <div class="col-4">
                <router-link :to="{name: 'editarCliente', params:{id: cliente.id}}">
                    <button class="btn btn-warning">
                        Editar <i class="fas fa-pen"></i>
                    </button>
                </router-link>
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
            <li class="list-group-item" v-if="cliente.localidad"><strong>Direccion: </strong> {{cliente.direccion}} - {{cliente.localidad.localidad}}, {{cliente.localidad.provincia.iso_nombre}}</li>
            <li class="list-group-item"><strong>Telefono: </strong>{{cliente.telefono}} </li>
            <li class="list-group-item"><strong>Celular: </strong> {{cliente.celular}}</li>
            <li class="list-group-item"><strong>Email: </strong> {{cliente.email}}</li>
            <li class="list-group-item" v-if="cliente.condicion_iva"><strong>Condicon de Iva: </strong> {{cliente.condicion_iva.denominacion}}</li>
            <li class="list-group-item"><strong v-if="cliente.categoria != undefined">Tipo de Cliente: </strong> {{cliente.categoria.denominacion}}</li>
            <li class="list-group-item"><strong>Ultima Actualizacion: </strong> {{cliente.updated_at}}</li>
        </ul>
        <div class="container mt-5">
            <h3><i class="fas fa-map-marker-alt"></i> Ubicacion en Mapa: </h3>
            <componente-gmap v-bind:cliente="cliente"/>
        </div>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleCliente',
    data() {
        return {
            data() {
                return {
     
                }
            },
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('clientes',['getCliente']),
    },
    created() {
        this.getCliente(this.id)
        
    },
    mounted(){
    },
    computed: {
        ...mapState('clientes',['cliente']),
    },

}
</script>