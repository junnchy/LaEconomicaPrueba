<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Nombre y Apellido</label>
                    <input 
                        type="text" 
                        :class="fNombre" 
                        name="nombre" 
                        placeholder="Nombre"
                        v-model="usuario.nombre"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.nombre != ''"> 
                        <strong>{{errors.nombre[0]}}</strong>
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>DNI</label>
                    <input 
                        type="text" 
                        :class="fDni" 
                        name="dni" 
                        placeholder="DNI"
                        v-model="usuario.dni"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.dni != ''"> 
                        <strong>{{errors.dni[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>CUIL</label>
                    <input 
                        type="text" 
                        :class="fCuil" 
                        name="cuil" 
                        placeholder="Cuil"
                        v-model="usuario.cuil"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.cuil != ''"> 
                        <strong>{{errors.cuil[0]}}</strong>
                    </span>
                </div>
            </div>            
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Celular</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="celular" 
                        placeholder="Celular"
                        v-model="usuario.celular"/>
                </div>
            </div>
            <div class="col-6">
                    <div class="form-group">
                    <label>Teléfono</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="telefono" 
                        placeholder="Teléfono"
                        v-model="usuario.telefono"/>
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
                    v-model="usuario.email"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.email != ''"> 
                        <strong>{{errors.email[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input 
                        type="date" 
                        class="form-control" 
                        name="fecha_nacimiento" 
                        placeholder="dd/mm/aaaa"
                        v-model="usuario.fecha_nacimiento"/>
                </div>
            </div> 
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Provincia</label>
                    <select class="form-control" 
                        v-model="provincia">
                        <option selected :value="provincia"
                            v-if="usuario.localidad && usuario.id != null">
                            {{provincia.iso_nombre}}
                        </option>
                        <option v-for="(provincia, index) in provincias" 
                            :key="index" 
                            :value="provincia">
                            {{provincia.nombre}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-6" v-if="usuario.localidad">
                <label>Localidad</label>
                <select class="form-control" 
                    v-model="usuario.localidad_id" 
                    type="number">
                    <option selected :value="usuario.localidad_id" 
                        v-if="usuario.localidad_id === usuario.localidad.id && usuario.id != null">
                        {{usuario.localidad.nombre}}
                    </option>
                    <option v-for="(localidad, index) in provincia.localidades"
                        :key="index" :value="localidad.id">
                        {{localidad.nombre}}
                    </option>
                    {{localidadUs}}
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Dirección</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="direccion" 
                    placeholder="Dirección" 
                    v-model="usuario.direccion"/>
                </div>
            </div>
        </div>
        <div class="row" v-if="formpassword === true">
            <div class="col-6">
                <div class="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        :class="fPassword" 
                        name="password" 
                        placeholder="Contraseña"
                        v-model="usuario.password"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.password != ''"> 
                        <strong>{{errors.password[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Confirmación de Contraseña</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        name="password_confirmation" 
                        placeholder="Confirmación de Contraseña"/>
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
            locAc: 0,
            proAc: 0,
            fNombre: "form-control",
            fDni: "form-control",
            fCuil: "form-control",
            fEmail: "form-control",
            fPassword: "form-control",
            formClass: "form-control",
            iFormClass: "form-control is-invalid",
            provincia:{iso_nombre: '', id: null},
        }
    },
    props:{
        usuario:{
            type: Object,
            required: true
        },
        formpassword:{
            type: Boolean
        }
    },
    methods: {
        ...mapActions('localidades',['getLocalidades', 'getLocalidad', 'getProvincias'])
    },
    created() {
        this.getProvincias()
        this.getLocalidades()  
        if (this.usuario.id != null) {
            this.provincia = this.usuario.localidad.provincia
        }         
    },
    computed: {
        ...mapState('usuarios',['errors']),
        ...mapState('localidades', ['localidades','localidad', 'provincias']),
        localidadUs(){
            if(this.usuario.localidad_id > 0 && this.usuario.localidad_id != this.locAc){
                this.getLocalidad(this.usuario.localidad_id)
                this.usuario.localidad = this.localidad
                this.locAc = this.usuario.localidad.id
                return this.localidad
            } else{
                return this.localidad
            }
        },
        validar(){
            if(this.errors.nombre != ''){
                this.fNombre = this.iFormClass
            }else{
                this.fNombre = this.formClass
            }
            if(this.errors.dni!= ''){
                this.fDni = this.iFormClass
            }else{
                this.fDni = this.formClass
            }
            if(this.errors.cuil != ''){
                this.fCuil = this.iFormClass
            }else{
                this.fCuil = this.formClass
            }
            if(this.errors.email != ''){
                this.fEmail = this.iFormClass
            }else{
                this.fEmail = this.formClass
            }
            if(this.errors.password != ''){
                this.fPassword = this.iFormClass
            } else{
                this.fPassword = this.formClass
            }
        }
    }
}
</script>