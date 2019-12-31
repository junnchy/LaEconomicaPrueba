<template>
    <div>
        <form @submit.prevent="editarProducto(producto)">
            <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Editar Producto</h3>
                    </div>
                    <div class="col-4">
                        <router-link :to="{name:'MenuProductos'}">
                            <button class="btn btn-warning" v-if="respuesta != ''" @click="$store.state.respuesta = ''">
                                Finalizar
                            </button>
                        </router-link>
                        <router-link :to="{name:'MenuProductos'}" v-if="respuesta === ''">
                            <button class="btn btn-danger">
                                Cancelar
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != ''">
                    {{respuesta}} 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="form-group">
                    <label>Nombre Producto</label>
                    <input type="text" v-model="producto.nombre" class="form-control" >
                </div> 
                <componente-fcosto v-bind:producto="producto"></componente-fcosto>
                <div class="form-group">
                    <label>Proveedor:</label> 
                    <select class="custom-select" v-model="producto.proveedor_id">
                        <option selected :value=proveedor.id>{{proveedor.id}}-{{proveedor.nombre}}</option>
                        <option v-for="proveedor in proveedores" :key="proveedor.id" :value='proveedor.id'>{{proveedor.id}} - {{proveedor.nombre}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Categoria:</label> 
                    <select class="custom-select" v-model="producto.categoria_id">
                        <option selected :value=categoria.id>{{categoria.id}}-{{categoria.nombre}}</option>
                        <option v-for="(cate, index) in categorias" :key="index" :value='cate.id'>{{cate.id}} - {{cate.nombre}}</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-warning btn-block" v-if="respuesta === ''">Guardar Cambios</button>
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
        ...mapState(['producto','categorias','proveedores', 'respuesta', 'descuentosProducto', 'proveedor', 'categoria']),
        setDre(){
            var p = 0
            var i = 0
            this.$store.state.producto.precioBase = parseFloat(this.$store.state.producto.precioBase)
            this.$store.state.producto.descuentoProducto.forEach(element => {
                if (element > 0) {                   
                    p = (1-(element/100))
                    if(i>0){
                        i = i * p
                    }else{
                        i = p
                    }
                }
            })
            this.dre = (1 - i)
            if (this.dre != 1) {
                this.$store.state.producto.precioCosto = this.$store.state.producto.precioBase - (this.$store.state.producto.precioBase * this.dre)
                if(this.$store.state.producto.iva != 0){
                    this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + (this.$store.state.producto.precioCosto * (this.$store.state.producto.iva/100))
                }
                if(this.$store.state.producto.flete != 0){
                   this.$store.state.producto.flete = parseFloat(this.$store.state.producto.flete)
                   this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.flete
                }
                return [this.dre,this.$store.state.producto.precioCosto]
            }else{
                this.$store.state.producto.precioCosto = this.$store.state.producto.precioBase
                if(this.$store.state.producto.iva != 0){
                   this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + (this.$store.state.producto.precioCosto * (this.$store.state.producto.iva/100))
                }
                if(this.this.$store.state.producto.flete != 0){
                   this.$store.state.producto.flete = parseFloat(this.$store.state.producto.flete)
                    this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.flete
                }
                return [this.dre, this.$store.state.producto.precioCosto]
            }    
        }
    },
}
</script>