<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3><i class="fas fa-edit"></i> Editar Producto</h3>
                </div>
                <div class="col-4">
                    <router-link :to="{name:'MenuProductos'}">
                        <button class="btn btn-warning" v-if="respuesta != null" @click="$store.state.productos.respuesta = null">
                            Finalizar
                        </button>
                    </router-link>
                    <router-link :to="{name:'detalleProducto',params:{id: producto.id}}">
                        <button class="btn btn-danger" v-if="respuesta === null" @click="resetError()">
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
                <a :class="ctab0" @click=" setTab(0)">Datos Generales</a>
            </li>
            <li class="nav-item">
                <a :class="ctab1" @click=" setTab(1)">Precios</a>
            </li>
            <li class="nav-item">
                <a :class="ctab2" @click="setTab(2)">Descripcion</a>
            </li>
        </ul>
        <form @submit.prevent="editarProducto(producto)">
            <componente-fdatosprod v-bind:producto="producto" v-if="tab === 0"></componente-fdatosprod>
            <div class="form-group my-4">
                <componente-fcosto v-bind:producto="producto" v-if="tab === 1"></componente-fcosto>
                <componente-frentabilidad v-bind:producto="producto" v-if="tab === 1"></componente-frentabilidad>
            </div>
            <descripcionProducto v-bind:producto="producto" v-if="tab === 2"/>
            <button type="submit" class="btn btn-warning btn-block sticky-button" v-if="respuesta === null">
                Guardar Cambios <i class="fas fa-save"></i>
            </button>
        </form>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import descripcionProducto from '../components/FormularioDescripcionProducto'
export default {
    name: 'editarProducto', 
    data() {
        return {
            id: this.$route.params.id,
            dre: 0,
            tab: 0,
            ctab0: 'nav-link active',
            ctab1: 'nav-link',
            ctab2: 'nav-link',
        }
    },
    components:{
        descripcionProducto,
    },
    methods: {
        ...mapActions('productos',['getProducto','editarProducto','resetError']),
        ...mapActions('categorias',[ 'getCategoriasO']),
        ...mapActions('proveedores',['getProveedores']),
        setTab(nro){
            this.tab = nro
             if (this.tab===0) {
                this.ctab0 ='nav-link active'
                this.ctab1 ='nav-link'
                this.ctab2 ='nav-link'
            }
            if (this.tab===1) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link active'
                this.ctab2 ='nav-link'
            }
            if (this.tab===2) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link'
                this.ctab2 ='nav-link active'
            }
        }
    },
    created() {
        this.getProducto(this.id)
        this.getCategoriasO()
        this.getProveedores()

    },
    computed: {
        ...mapState('productos',['producto', 'respuesta', 'descuentosProducto']),
        ...mapState('categorias',['categorias']),    
        ...mapState('proveedores',['proveedores']),        
    }
}
</script>
<style>
    .sticky-button {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    bottom: 10px;
    }
</style>