<template>
    <div>
        <div class="form-group mt-5">
            <div class="row">
                <div class="col-8">
                    <h3>Ingreso de Nuevo Proveedor</h3>
                </div>
                <div class="col-4">
                    <router-link :to="{name:'listadoProveedores'}">
                        <button class="btn btn-danger" @click="resetError()">
                            Cancelar
                        </button>
                    </router-link>
                </div>
            </div> 
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
                        <label>Telefono</label>
                        <input type="number" v-model="proveedor.telefono" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
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
                <div class="col-4">
                    
                </div>
            </div>
            <div class="row">
                <div class="col-6">
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
                <div class="col-6">
                    <label>Localidad</label>
                    <select class="form-control" v-model="proveedor.localidad_id" type="number">
                        <option selected :value="proveedor.localidad_id" 
                        v-if="proveedor.localidad_id === proveedor.localidad.id">{{proveedor.localidad.cod_postal}}-{{proveedor.localidad.localidad}}</option>
                        <option v-for="(localidad, index) in localidades" :key="index" :value="localidad.id">
                            {{localidad.cod_postal}} - {{localidad.localidad}}, {{localidad.provincia.iso_nombre}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
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
                <div class="col-6">
                    
                </div>
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
            }
        },
        props:{
            proveedor:{
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions('localidades',['getLocalidades']),
            ...mapActions('condicionIva',['getCondicionesIva']),
            ...mapActions('proveedores',['resetError'])
        
        },
        created() {
            this.getLocalidades()
            this.getCondicionesIva()
            
        },
        computed: {
            ...mapState('localidades', ['localidades']),
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