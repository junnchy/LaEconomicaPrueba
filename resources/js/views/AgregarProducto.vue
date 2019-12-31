<template>
    <div>
        <form @submit.prevent="agregarProducto(producto)">
            <div class="form-group mt-5">
                <div class="row">
                    <div class="col-8">
                        <h3>Ingreso de Nuevo Producto</h3>
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
                    <div class="row">
                        <div class="col-10">
                            <label>Proveedor:</label> 
                            <select class="custom-select" v-model="producto.proveedor">
                                <option v-for="proveedor in proveedores" :key="proveedor.id" :value='proveedor'>{{proveedor.id}} - {{proveedor.nombre}}</option>
                            </select>
                        </div>
                        <div class="col-2" v-if="producto.proveedor.nombre != ''">
                            <hr/>
                            <componente-facp :proveedor="producto.proveedor"></componente-facp>
                        </div>
                    </div>
                
                    <div class="form-group my-4">
                        <label>Categoria:</label> 
                        <select class="custom-select" v-model="producto.categoria">
                            <option v-for="(cate, index) in producto.proveedor.categorias" :key="index" :value='cate'>{{cate.id}} - {{cate.nombre}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-success btn-block" v-if="respuesta === ''">Agregar</button>
        </form>
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
            producto: {nombre: '', descuentoProducto: [0, 0, 0, 0, 0], dre: 0, precioBase: 0, categoria: {}, proveedor: {nombre: ''}, precioCosto: 0, iva: 0, flete: 0},
        }
    },
    methods: {
        ...mapActions(['agregarProducto', 'getCategoriasO', 'getProveedores','agregarCategoriaProveedor'])
    },
    created() {
        this.getCategoriasO()
        this.getProveedores()
    },
    computed: {
        ...mapState(['categorias','proveedores', 'respuesta']),
        setDre(){
            var p = 0
            var i = 0
            this.producto.precioBase = parseFloat(this.producto.precioBase)
            this.producto.descuentoProducto.forEach(element => {
                if (element > 0) {                   
                    p = (1-(element/100))
                    if(i>0){
                        i = i * p
                    }else{
                        i = p
                    }

                }
            })
            this.producto.dre = (1 - i)
            if (this.producto.dre != 1) {
                this.producto.precioCosto = this.producto.precioBase - (this.producto.precioBase * this.producto.dre)
                if(this.producto.iva != 0){
                    this.producto.precioCosto = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.iva/100))
                }
                if(this.producto.flete != 0){
                    this.producto.flete = parseFloat(this.producto.flete)
                    this.producto.precioCosto = this.producto.precioCosto + this.producto.flete
                }
                return [this.producto.dre, this.producto.precioCosto]
            }else{
                this.producto.precioCosto = this.producto.precioBase
                if(this.producto.iva != 0){
                    this.producto.precioCosto = this.producto.precioCosto + (this.producto.precioCosto * (this.producto.iva/100))
                }
                if(this.producto.flete != 0){
                    this.producto.flete = parseFloat(this.producto.flete)
                    this.producto.precioCosto = this.producto.precioCosto + this.producto.flete
                }
                return [this.producto.dre, this.producto.precioCosto]
            }    
        }
    },
}
</script>