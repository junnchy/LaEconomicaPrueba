<template>
    <div>
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
                        <option v-for="proveedor in this.$store.state.proveedores.proveedores" :key="proveedor.id" :value='proveedor'>{{proveedor.id}} - {{proveedor.nombre}}</option>
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
            <label>Categoria:</label> 
            <select 
            :class="fCat" 
            v-model="producto.categoria">
                <option selected :value="producto.categoria" v-if="producto.proveedor_id === producto.proveedor.id">{{producto.categoria.id}}-{{producto.categoria.nombre}}</option>
                <option v-for="(cate, index) in producto.proveedor.categorias" :key="index" :value='cate'>{{cate.id}} - {{cate.nombre}}</option>
                <span class="invalid-feedback" role="alert" v-if="errors.categoria_id != ''"> 
                    <strong>{{errors.categoria_id[0]}}</strong>
                </span>
            </select>
        </div>
        <div class="form-group">
            <div class="form-group">
                <label for="exampleFormControlFile1">Imagen de Producto</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
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