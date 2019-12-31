<template>
    <div>
        <form @submit.prevent="editarProducto([producto,descuentosProducto])">
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
                 <div class="row">
                    <div class="col-6">
                        <div class="form-group">     
                            <label>Precio Base</label>
                            <input type="number" step=0.01 v-model="producto.precioBase" class="form-control">
                        </div>
                    </div>
                    <div class="col-6">
                        <label>Precio Costo</label>
                        <h3>{{setDre[1]}}</h3> 
                    </div>
                </div>
                <label class="text-center">Descuentos</label> 
                <div class="row form-group">
                    <div class="col-2">
                        <hr/>
                        <input type="number" step=0.01 v-model="producto.descuentoProducto_1" class="form-control">
                    </div>
                    <div class="col-2">
                        <hr/>
                        <input type="number" step=0.01 v-model="producto.descuentoProducto_2" class="form-control">
                    </div>
                    <div class="col-2">
                        <hr/>
                        <input type="number" step=0.01 v-model="producto.descuentoProducto_3" class="form-control">
                    </div>
                    <div class="col-2">
                        <hr/>
                        <input type="number" step=0.01 v-model="producto.descuentoProducto_4" class="form-control">
                    </div>
                    <div class="col-2">
                        <hr/>
                        <input type="number" step=0.01 v-model="producto.descuentoProducto_5" class="form-control">
                    </div>
                    <div class="col-2">
                        <p>Dto Total</p>
                        <P>{{setDre[0] *100}}%</P>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label>IVA</label> 
                            <select class="custom-select" v-model="producto.iva">
                                <option :value=21>21%</option>
                                <option :value=10.5>10.5%</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label>Flete</label> 
                            <input type="number" step=0.01 v-model="producto.flete" class="form-control">
                        </div>
                    </div>
                </div>
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
            descuentosProducto: []
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
        setDescuentos(){
            this.descuentosProducto = [
                parseFloat(this.$store.state.producto.descuentoProducto_1),
                parseFloat(this.$store.state.producto.descuentoProducto_2),
                parseFloat(this.$store.state.producto.descuentoProducto_3),
                parseFloat(this.$store.state.producto.descuentoProducto_4),
                parseFloat(this.$store.state.producto.descuentoProducto_5)
            ]

            return this.descuentosProducto
        },
        setDre(){
            var p = 0
            var i = 0
            this.$store.state.producto.precioBase = parseFloat(this.$store.state.producto.precioBase)
            this.setDescuentos.forEach(element => {
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