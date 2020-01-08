<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle Proveedor: </h2>
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
            <li class="list-group-item"><strong><h3>{{proveedor.nombre}}</h3></strong></li>
            <li class="list-group-item"><strong>Codigo: </strong> {{proveedor.id}}</li>
            <li class="list-group-item"><strong>CUIT: </strong> {{proveedor.cuit}}</li>
            <li class="list-group-item"><strong>Telefono: </strong> {{proveedor.telefono}}</li>
            <li class="list-group-item"><strong>Telefono: </strong> {{proveedor.direccion}} - ({{proveedor.localidad.cod_postal}}) {{proveedor.localidad.localidad}}, {{proveedor.localidad.provincia}}</li>
            <li class="list-group-item"><strong>Telefono: </strong> {{proveedor.condicion_iva.denominacion}}</li>
            <li class="list-group-item"><strong>Categorias: </strong> 
                <div class="row">
                    <div class="col-md-8">
                        <ul>
                            <li v-for="(categoria, index) in proveedor.categorias" :key="index">
                                {{categoria.nombre}}
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <componente-facp :proveedor="proveedor"></componente-facp>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleProv',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions('proveedores',['getProveedor']),
        ...mapActions('categorias', ['getCategoriasO', 'agregarCategoriaProveedor'])
    },
    created() {
        this.getProveedor(this.id)
        this.getCategoriasO()
    },
    computed: {
        ...mapState('proveedores', ['proveedor']),
        ...mapState('categorias', ['categorias'])
    },

}
</script>