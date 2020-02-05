<template>
    <div>
        <div class="form-group">
            <label>Nombre Proveedor</label>
            <input 
            type="text" 
            v-model="proveedor.nombre" 
            :class="fNombre">
            <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                <strong>{{errors.nombre[0]}}</strong>
            </span>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">     
                    <label>CUIT</label>
                    <input 
                    type="number" 
                    v-model="proveedor.cuit" 
                    :class="fCuit">
                    <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                        <strong>{{errors.cuit[0]}}</strong>
                    </span>
                </div> 
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Condición de IVA</label>
                    <select class="form-control" v-model="proveedor.condicion_iva_id">
                            <option selected :value="proveedor.condicion_iva_id" 
                            v-if="proveedor.condicion_iva_id === proveedor.condicion_iva.id">{{proveedor.condicion_iva.denominacion}}</option>
                            <option v-for="(condicion, index) in condicionIva" :key="index" :value="condicion.id">
                                {{condicion.denominacion}}
                            </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">     
                    <label>Email</label>
                    <input 
                    type="text" 
                    v-model="proveedor.email" 
                    :class="fEmail">
                    <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                        <strong>{{errors.email[0]}}</strong>
                    </span>
                </div> 
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Telefono</label>
                    <input type="number" v-model="proveedor.telefono" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <div class="form-group">
                    <label>Dirección</label>
                    <input 
                    type="text" 
                    :class="fDireccion" 
                    name="direccion" 
                    placeholder="Dirección" 
                    v-model="proveedor.direccion"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                        <strong>{{errors.direccion[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-3">
                
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Provincia</label>
                    <select class="form-control" v-model="provincia">
                        <option selected :value="provincia"
                        v-if="proveedor.localidad && proveedor.id != null">{{provincia.iso_nombre}}</option>
                        <option v-for="(provincia, index) in provincias" :key="index" :value="provincia">
                            {{provincia.nombre}}
                        </option>
                    </select>
                </div>
            </div>        
            <div class="col-6">
                <label>Localidad</label>
                <select class="form-control" v-model="proveedor.localidad_id" type="number">
                    <option selected :value="proveedor.localidad_id" 
                    v-if="proveedor.localidad_id === proveedor.localidad.id">{{proveedor.localidad.nombre}}</option>
                    <option v-for="(localidad, index) in provincia.localidades" :key="index" :value="localidad.id">
                        {{localidad.nombre}}
                    </option>
                </select>
            </div>
        </div>         
        {{validar}}
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                fNombre: "form-control",
                fDireccion: "form-control",
                fEmail: "form-control",
                fCuit: "form-control",
                formClass: "form-control",
                iFormClass: "form-control is-invalid",
                provincia: {}
            }
        },
        props:{
            proveedor:{
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions('localidades',['getLocalidades', 'getProvincias']),
            ...mapActions('condicionIva',['getCondicionesIva']),
        
        },
        created() {
            this.getLocalidades()
            this.getCondicionesIva()
            this.getProvincias()
            if(this.proveedor.id != null){
                this.provincia = this.proveedor.localidad.provincia
            }
        },
        computed: {
            ...mapState('localidades', ['localidades', 'provincias']),
            ...mapState('proveedores', ['errors']),
            ...mapState('condicionIva', ['condicionIva']),
            validar(){
                if(this.errors.nombre != ''){
                    this.fNombre = this.iFormClass
                }else{
                     this.fNombre = this.formClass
                }
                if(this.errors.direccion!= ''){
                    this.fDireccion = this.iFormClass
                }else{
                     this.fDireccion = this.formClass
                }
                if(this.errors.cuit != ''){
                    this.fCuit = this.iFormClass
                }else{
                     this.fCuit = this.formClass
                }
                if(this.errors.email!= ''){
                    this.fEmail = this.iFormClass
                }else{
                     this.fEmail = this.formClass
                }
            }
        }
    }
</script>


<div class="col-6">
                <div class="form-group">
                    <label>Provincia</label>
                    <select class="form-control" v-model="provincia">
                        <option selected :value="provincia"
                        v-if="cliente.localidad && cliente.id != null">{{provincia.iso_nombre}}</option>
                        <option v-for="(provincia, index) in provincias" :key="index" :value="provincia">
                            {{provincia.nombre}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-6" v-if="cliente.localidad">
                <label>Localidad</label>
                <select class="form-control" v-model="cliente.localidad_id" type="number">
                    <option selected :value="cliente.localidad_id" 
                    v-if="cliente.localidad_id === cliente.localidad.id && cliente.id != null">{{cliente.localidad.nombre}}</option>
                    <option v-for="(localidad, index) in provincia.localidades"
                        :key="index" :value="localidad.id">
                        {{localidad.nombre}}
                    </option>
                    {{localidadC}}
                </select>
            </div>