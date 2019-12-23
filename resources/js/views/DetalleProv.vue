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
                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Agregar</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Agregar Categoria</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="agregarCategoria([categoria, proveedor, descuento])">
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Categoria:</label>
                                        <select class="custom-select" v-model="categoria">
                                            <option v-for="(categoria, index) in categorias" :key="index">{{categoria.id}} - {{categoria.nombre}}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-form-label">Descuento:</label>
                                        <input type="number" v-model="descuento" class="form-control">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" class="btn btn-success btn-block">Agregar</button>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
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
            categoria:'',
            descuento: 0
        }
    },
    methods: {
        ...mapActions(['getProveedor', 'getCategorias', 'agregarCategoria'])
    },
    created() {
        this.getProveedor(this.id)
        this.getCategorias()
    },
    computed: {
        ...mapState(['proveedor', 'categorias'])
    },

}
</script>