<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h3>Ingreso de Nuevo Producto</h3>
            </div>
            <div class="col-4">
                <router-link :to="{name:'MenuProductos'}">
                    <button class="btn btn-warning" v-if="respuesta != null" @click="resetResp(null)">
                        Finalizar
                    </button>
                </router-link>
                <router-link :to="{name:'MenuProductos'}" v-if="respuesta === null">
                    <button class="btn btn-danger">
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
        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a :class=this.ctab0 @click="setTab(0)">Datos Generales</a>
            </li>
            <li class="nav-item">
                <a :class=this.ctab1 @click="setTab(1)">Precios</a>
            </li>
        </ul>
        <form @submit.prevent="agregarProducto(producto)">
            <div class="form-group my-4">
                <componente-fdatosprod v-bind:producto="producto" v-if="tab === 0"></componente-fdatosprod>
                <componente-fcosto v-bind:producto="producto" v-if="tab === 1"></componente-fcosto>
                <componente-frentabilidad v-bind:producto="producto" v-if="tab === 1"></componente-frentabilidad>
            </div>
            <button type="submit" class="btn btn-success btn-block" v-if="respuesta === null && tab === 1">Agregar</button>
        </form>
        <button class="btn btn-success btn-block" v-if="tab === 0" @click="setTab(1)">Continuar</button>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'agregarProducto', 
    data() {
        return {
            descuento: 0,
            cate: {},
            producto: {
                nombre: '', descuentoProducto: [0, 0, 0, 0, 0], dre: 0, precioBase: 0, 
                categoria: {}, proveedor: {nombre: ''}, precioCosto: 0, iva: 0, flete: 0,
                precioVenta: 0, rentabilidad: 0
            },
            tab: 0,
            ctab0: 'nav-link active',
            ctab1: 'nav-link'
        }
    },
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores','agregarCategoriaProveedor']),
        ...mapActions('productos',['agregarProducto', 'resetResp']),
        setTab(nro){
            this.tab = nro
            if (this.tab===0) {
                this.ctab0 ='nav-link active'
                this.ctab1 ='nav-link'
            }
            if (this.tab===1) {
                this.ctab1 ='nav-link active'
                this.ctab0 ='nav-link'
            }
        }
    },
    created() {
        this.getCategoriasO()
        this.getProveedores()
    },
    computed: {
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
        ...mapState('productos',['respuesta']),
    }
}
</script>