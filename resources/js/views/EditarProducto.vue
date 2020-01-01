<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Editar Producto</h3>
                </div>
                <div class="col-4">
                    <router-link :to="{name:'MenuProductos'}">
                        <button class="btn btn-warning" v-if="respuesta != null" @click="$store.state.respuesta = null">
                            Finalizar
                        </button>
                    </router-link>
                    <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                        <button class="btn btn-danger" v-if="respuesta === null">
                            Cancelar
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                {{respuesta}} 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <form @submit.prevent="editarProducto(producto)">
            <div class="form-group">
                <label>Nombre Producto</label>
                <input type="text" v-model="producto.nombre" class="form-control" >
            </div> 
            <componente-fcosto v-bind:producto="producto"></componente-fcosto>
            <div class="form-group">
                <div class="row">
                    <div class="col-10">
                        <label>Proveedor:</label> 
                        <select class="custom-select" v-model="producto.proveedor">
                            <option selected :value="producto.proveedor">{{producto.proveedor.id}}-{{producto.proveedor.nombre}}</option>
                            <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor">{{proveedor.id}} - {{proveedor.nombre}}</option>
                        </select>
                    </div>
                     <div class="col-2" v-if="producto.proveedor.nombre != ''">
                        <hr/>
                        <componente-facp :proveedor="producto.proveedor"></componente-facp>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label>Categoria:</label> 
                <select class="custom-select" v-model="producto.categoria">
                    <option selected :value="producto.categoria" v-if="producto.proveedor_id === producto.proveedor.id">{{producto.categoria.id}}-{{producto.categoria.nombre}}</option>
                    <option v-for="categoria in producto.proveedor.categorias" :key="categoria.id" :value="categoria">{{categoria.id}} - {{categoria.nombre}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-warning btn-block" v-if="respuesta === null">Guardar Cambios</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'editarProducto', 
    data() {
        return {
            id: this.$route.params.id,
            dre: 0,
        }
    },
    methods: {
        ...mapActions(['getProducto', 'getCategoriasO', 'getProveedores','editarProducto'])
    },
    created() {
        this.getProducto(this.id)
        this.getCategoriasO()
        this.getProveedores()

    },
    computed: {
        ...mapState(['producto','categorias','proveedores', 'respuesta', 'descuentosProducto']),    
    }
}
</script>