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
        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a :class=this.ctab0 @click=" setTab(0)">Datos Generales</a>
            </li>
            <li class="nav-item">
                <a :class=this.ctab1 @click=" setTab(1)">Precios</a>
            </li>
        </ul>
        <form @submit.prevent="editarProducto(producto)">
            <componente-fdatosprod v-bind:producto="producto" v-if="tab === 0"></componente-fdatosprod>
            <div class="form-group my-4">
                <componente-fcosto v-bind:producto="producto" v-if="tab === 1"></componente-fcosto>
                <componente-frentabilidad v-bind:producto="producto" v-if="tab === 1"></componente-frentabilidad>
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
            tab: 0,
            ctab0: 'nav-link active',
            ctab1: 'nav-link'
        }
    },
    methods: {
        ...mapActions(['getProducto', 'getCategoriasO', 'getProveedores','editarProducto']),
        setTab(nro){
            this.tab = nro
            if (nro===0) {
                this.ctab0 ='nav-link active'
                this.ctab1 ='nav-link'
            }
            if (nro===1) {
                this.ctab1 ='nav-link active'
                this.ctab0 ='nav-link'
            }
        }
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