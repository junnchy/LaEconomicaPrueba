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
                    <button class="btn btn-danger" @click="resetError()">
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
        <div class="progress mt-3">
            <div :class="barStyle" role="progressbar" :style="progress" 
            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a :class="ctab0" @click="setTab(0)">Datos Generales</a>
            </li>
            <li class="nav-item">
                <a :class="ctab1" @click="setTab(1)">Precios</a>
            </li>
            <li class="nav-item">
                <a :class="ctab2" @click="setTab(2)">Descripcion</a>
            </li>
        </ul>
        <form @submit.prevent="agregarProducto(producto)" enctype="multipart/form-data">
            <div class="form-group my-4">
                <componente-fdatosprod v-bind:producto="producto" v-if="tab === 0"></componente-fdatosprod>
                <componente-fcosto v-bind:producto="producto" v-if="tab === 1"></componente-fcosto>
                <componente-frentabilidad v-bind:producto="producto" v-if="tab === 1"></componente-frentabilidad>
                <descripcionProducto v-bind:producto="producto" v-if="tab === 2"/>
            </div>
            <button type="submit" @click="completarBarra()" class="btn btn-success btn-block" v-if="respuesta === null && tab === 2">
                Agregar <i class="fas fa-check-circle"></i>
            </button>
        </form>
        <button class="btn btn-primary btn-block" v-if="tab === 0" @click="setTab(1)">
            Continuar <i class="fas fa-chevron-circle-right"></i>
        </button>
        <button class="btn btn-primary btn-block" v-if="tab === 1 " @click="setTab(2)">
            Continuar <i class="fas fa-chevron-circle-right"></i>
        </button>
        
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import descripcionProducto from '../components/FormularioDescripcionProducto'
export default {
    name: 'agregarProducto', 
    data() {
        return {
            descuento: 0,
            cate: {},
            progress: "width: 30%" ,
            producto: {
                id: null,
                nombre: '', descuentoProducto: [0, 0, 0, 0, 0], dre: 0, precioBase: 0, 
                categoria: {}, proveedor: {nombre: ''}, precioCosto: 0, iva: 0, flete: 0,
                precioVenta: 0, rentabilidad: 0, descripcion:'', imagen: 'http://127.0.0.1:8000/assets/4fxp8923.bmp', 
                estado: true, 
            },
            tab: 0,
            ctab0: 'nav-link active',
            ctab1: 'nav-link',
            ctab2: 'nav-link',
            barStyle: "progress-bar progress-bar-striped",
        }
    },
    components:{
        descripcionProducto,
    },
    methods: {
        ...mapActions('categorias',['getCategoriasO']),
        ...mapActions('proveedores',['getProveedores','agregarCategoriaProveedor']),
        ...mapActions('productos',['agregarProducto', 'resetResp', 'resetError']),
        ...mapActions(['cambiarEstado']),
        setTab(nro){
            this.tab = nro
            if (this.tab===0) {
                this.ctab0 ='nav-link active'
                this.ctab1 ='nav-link'
                this.ctab2 ='nav-link'
                this.barStyle= "progress-bar progress-bar-striped"
                this.progress = "width: 30%" 
            }
            if (this.tab===1) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link active'
                this.ctab2 ='nav-link'
                this.barStyle= "progress-bar progress-bar-striped"
                this.progress = "width: 60%" 
            }
            if (this.tab===2) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link'
                this.ctab2 ='nav-link active'
                this.barStyle= "progress-bar progress-bar-striped"
                this.progress = "width: 90%" 
            }
        },
        completarBarra(){
            this.barStyle = "progress-bar progress-bar-striped bg-success",
            this.progress = "width: 100%" 
        }
    },
    created() {
        this.getCategoriasO()
        this.getProveedores()
        this.cambiarEstado(1)
    },
    computed: {
        ...mapState('categorias',['categorias']),
        ...mapState('proveedores',['proveedores']),
        ...mapState('productos',['respuesta'])
    }
}
</script>