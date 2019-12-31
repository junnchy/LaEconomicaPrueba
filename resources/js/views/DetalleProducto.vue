<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Producto </h2>
            </div>
            <div class="col-4">
                <router-link :to="{name: 'editarProducto', params:{id: producto.id}}">
                    <button class="btn btn-warning">
                        Editar
                    </button>
                </router-link>
                <router-link :to="{name: 'MenuProductos'}">
                    <button class="btn btn-danger">
                        Volver
                    </button>
                </router-link>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li class="list-group-item"><strong><h3>{{producto.nombre}}</h3></strong></li>
            <li class="list-group-item"><strong>Codigo: </strong> {{producto.id}}</li>
            <li class="list-group-item"><strong>Precio Costo: </strong> 
                <h5>${{producto.precioCosto}}</h5>
            </li>
            <li class="list-group-item"><strong>Proveedor: </strong> 
                <router-link :to="{name: 'detalleProv', params:{id: proveedor.id}}">
                    <a>{{proveedor.nombre}}</a>
                </router-link>
            </li>
            <li class="list-group-item"><strong>Categoria: </strong> 
                <router-link :to="{name: 'verEditarCategoria', params:{id: categoria.id}}">
                    <a>{{categoria.nombre}}</a>
                </router-link>
            </li>
            <li class="list-group-item"><strong>Ultima Actualizacion: </strong> {{producto.updated_at}}</li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name:'DetalleProdoucto',
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions(['getProducto'])
    },
    created() {
        this.getProducto(this.id)
    },
    computed: {
        ...mapState(['producto', 'proveedor', 'categoria'])
    },

}
</script>