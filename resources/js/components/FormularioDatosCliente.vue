<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">
                    <label>Nombre y Apellido/Razón Social</label>
                    <input 
                        type="text" 
                        :class="fNombre" 
                        name="nombre" 
                        placeholder="Nombre"
                        v-model="cliente.nombre"
                    />
                    <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                        <strong>{{errors.nombre[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>DNI/Cuit</label>
                    <input 
                        type="text" 
                        :class="fCuit" 
                        name="cuit" 
                        placeholder="DNI/Cuit"
                        v-model="cliente.cuit"
                    />
                    <span class="invalid-feedback" role="alert" v-if="errors.cuit != ''"> 
                        <strong>{{errors.cuit[0]}}</strong>
                    </span>
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Categoría Cliente</label>
                    <select class="form-control" v-model="cliente.cat_clientes_id">
                        <option selected :value="cliente.cat_cliente_id" 
                        v-if="cliente.cat_clientes_id === cliente.categoria.id">{{cliente.categoria.denominacion}}</option>
                        <option v-for="(categoria, index) in categoriasCli" :key="index" :value="categoria.id">
                            {{categoria.denominacion}}
                        </option>
                    </select>
                </div>
            </div>        
            <div class="col-6">
                <div class="form-group">
                    <label>Condición de IVA</label>
                    <select class="form-control" v-model="cliente.condicion_iva_id">
                            <option selected :value="cliente.condicion_iva_id" 
                            v-if="cliente.condicion_iva_id === cliente.condicion_iva.id">{{cliente.condicion_iva.denominacion}}</option>
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
                    <label>Teléfono</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="telefono" 
                        placeholder="Teléfono"
                        v-model="cliente.telefono"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Celular</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="celular" 
                        placeholder="Celular"
                        v-model="cliente.celular"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Email</label>
                    <input 
                    type="text" 
                    :class="fEmail" 
                    name="email" 
                    placeholder="Email" 
                    v-model="cliente.email"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.email != ''"> 
                        <strong>{{errors.email[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                
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
                    v-model="cliente.direccion"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.direccion != ''"> 
                        <strong>{{errors.direccion[0]}}</strong>
                    </span>
                </div>
            </div>
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
        </div>
        <div class="row text-center my-4">
            <div class="col-12">
                <componente-gmap v-bind:cliente="cliente"/>
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
                locAc: 0,
                proAc: 0,
                fNombre: "form-control",
                fDireccion: "form-control",
                fEmail: "form-control",
                fCuit: "form-control",
                formClass: "form-control",
                iFormClass: "form-control is-invalid",
                provincia:{iso_nombre: '', id: null},

            }
        },
        props:{
            cliente:{
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions('clientes',['getCategoriasCli']),
            ...mapActions('localidades',['getLocalidades', 'getLocalidad', 'getProvincias']),
            ...mapActions('condicionIva',['getCondicionesIva'])
        },
        created() {
            this.getProvincias()
            this.getCategoriasCli()
            this.getLocalidades()
            this.getCondicionesIva()
            if (this.cliente.id != null) {
                this.provincia = this.cliente.localidad.provincia
            }
           
        },
        computed: {
            ...mapState('clientes', ['categoriasCli', 'errors']),
            ...mapState('localidades', ['localidades','localidad', 'provincias']),
            ...mapState('condicionIva', ['condicionIva']),
            localidadC(){
                if(this.cliente.localidad_id > 0 && this.cliente.localidad_id != this.locAc){
                        this.getLocalidad(this.cliente.localidad_id)
                        this.cliente.localidad = this.localidad
                        this.locAc = this.cliente.localidad.id
                        return this.localidad
                }else{
                    return this.localidad
                }
            },
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
        },
    }
</script>