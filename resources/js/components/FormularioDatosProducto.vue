<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label>Codigo Interno</label>
                    <input 
                    type="text" 
                    v-model="producto.codigo_interno" 
                    class="form-control disabled">
                </div> 
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>Codigo de Producto</label>
                    <input 
                    disabled
                    type="number" 
                    v-model="producto.id" 
                    class="form-control disabled">
                </div> 
            </div>
            <div class="col-4">
                <div class="custom-control custom-checkbox content-center mt-4">
                    <input type="checkbox" v-model="producto.estado" class="custom-control-input" id="estadoProducto">
                    <label class="custom-control-label" for="estadoProducto">Estado de Producto:</label>
                    <p class="text-success" v-if="producto.estado === true ||  producto.estado === 1">
                        Activo <i class="fas fa-check-circle"></i>
                    </p>
                    <p class="text-danger" v-if="producto.estado === false ||  producto.estado === 0">
                        Inactivo <i class="fas fa-exclamation-circle"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>Nombre Producto</label>
            <input 
            type="text" 
            v-model="producto.nombre" 
            :class="fNombre" >
            <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                <strong>{{errors.nombre[0]}}</strong>
            </span>
        </div> 
        <div class="form-group">
            <div class="row">
                <div class="col-10">
                    <label>Proveedor:</label> 
                    <select 
                    :class="fPro" 
                    v-model="producto.proveedor">
                        <option selected :value="producto.proveedor" v-if="producto.id != null">{{producto.proveedor.id}}-{{producto.proveedor.nombre}}</option>
                        <option v-for="proveedor in this.$store.state.proveedores.proveedores" :key="proveedor.id" :value='proveedor'>{{proveedor.nombre}}</option>
                    </select>
                    <span class="invalid-feedback" role="alert" v-if="errors.proveedor_id != ''"> 
                        <strong>{{errors.proveedor_id[0]}}</strong>
                    </span>
                </div>
                <div class="col-2" v-if="producto.proveedor.nombre != ''">
                    <hr/>
                    
                    <agregarcategoriaproveedor v-bind:proveedor="producto.proveedor"/>
                </div>
            </div>
        </div>
        <div class="form-group my-4">
            <div class="row">
                <div class="col-6">
                    <label>Categoria:</label> 
                    <select 
                    :class="fCat" 
                    v-model="producto.categoria">
                        <option selected :value="producto.categoria" v-if="producto.proveedor_id === producto.proveedor.id">{{producto.categoria.id}}-{{producto.categoria.nombre}}</option>
                        <option v-for="(cate, index) in producto.proveedor.categorias" :key="index" :value='cate'>{{cate.nombre}}</option>
                        <span class="invalid-feedback" role="alert" v-if="errors.categoria_id != ''"> 
                            <strong>{{errors.categoria_id[0]}}</strong>
                        </span>
                    </select>
                </div>
                <div class="col-6">
                    <label>Codigo de Proveedor (SKU)</label>
                    <input 
                    type="text" 
                    v-model="producto.codigoProveedor" 
                    class="form-control" >
                </div>
            </div>
        </div>
        {{validar}}
    </div>
</template>

<script>
import agregarcategoriaproveedor from './FormularioAgregarCategoriaProveedor'
import { mapState } from 'vuex'
export default {
    components:{
        agregarcategoriaproveedor,
    },
    data() {
        return {
            fNombre: "form-control",
            fPro: "form-control",
            fCat: "form-control",
            formClass: "form-control",
            iFormClass: "form-control is-invalid",
        }
    },
    props:{
        producto: {
            type: Object,
            required: true
        },
    },
    computed:{
        ...mapState('productos', ['errors']),
        validar(){
            if(this.errors.nombre != ''){
                this.fNombre = this.iFormClass
            }else{
                this.fNombre = this.formClass
            }
            if(this.errors.proveedor_id != ''){
                this.fPro = this.iFormClass
            }else{
                this.fPro = this.formClass
            }
            if(this.errors.categoria_id != ''){
                this.fCat = this.iFormClass
            }else{
                this.fCat = this.formClass
            }
        }
    }
}
</script>