<template>
    <div>
         <div class="container">
            <div class="row my-3">
                <div class="col-9 mt-5">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="nombre">Nombre</span>
                        </div>
                        <input type="text" v-model="datos.nombre"
                        class="form-control" placeholder="nombre" aria-label="nombre" aria-describedby="nombre">   
                    </div>
                </div>
                <div class="col-3">
                    <img :src="datos.logo" class="img-thumbnail" width="200px">
                    <div class="d-flex flex-row mt-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input form-control-sm" id="imagenProducto" @change="imageChanged">
                            <label class="custom-file-label col-form-label-sm" for="imagenProducto">{{imageName}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="RazonSocial">Razon Social</span>
                        </div>
                        <input type="text" disabled v-model="datos.razon_social"
                        class="form-control" placeholder="Razon Social" aria-label="Razon Social" aria-describedby="RazonSocial">   
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="cuit">CUIT</span>
                        </div>
                        <input type="text" v-model="datos.cuit" disabled
                        class="form-control" placeholder="Cuit" aria-label="Cuit" aria-describedby="cuit">   
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="IG_Brutos">N Ig. Brutos</span>
                        </div>
                        <input type="text" v-model="datos.nroIgBrutos"
                        class="form-control" placeholder="Ig_Bru" aria-label="Ig_Bru" aria-describedby="IG_Brutos">   
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inicioAct">Inicio Actividades</span>
                        </div>
                        <date-picker 
                        v-model="datos.inicio_actividades" 
                        disabled
                        format="DD-MM-YYYY"
                        type="date"
                        >
                        </date-picker>
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="condicionIva">Cond. IVA</label>
                        </div>
                        <select class="custom-select" id="condicionIva" v-model="datos.condicion_iva_id" v-if="datos.condicion_iva">
                            <option selected :value="datos.condicion_iva_id">{{datos.condicion_iva.denominacion}}</option>
                            <option v-for="(condicion, index) in condicionIva" :key="index" :value="condicion.id">
                                {{condicion.denominacion}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-8">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="email">Email</span>
                        </div>
                        <input type="email" v-model="datos.email"
                        class="form-control" placeholder="email" aria-label="email" aria-describedby="email">   
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="Telefono">Telefono</span>
                        </div>
                        <input type="number" v-model="datos.telefono"
                        class="form-control" placeholder="Telefono" aria-label="Telefono" aria-describedby="Telefono">   
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-5">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="direccion">Direccion</span>
                        </div>
                        <input type="text" v-model="datos.direccion"
                        class="form-control" placeholder="direccion" aria-label="direccion" aria-describedby="direccion">   
                    </div>
                </div>
                <div class="col-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="provincia">Provincia</label>
                        </div>
                        <select class="custom-select" id="provincia" v-model="provincia">
                            <option selected :value="provincia">{{datos.localidad.provincia.iso_nombre}}</option>
                            <option v-for="(provincia, index) in provincias" :key="index" :value="provincia">
                                {{provincia.nombre}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="localidad">Localidad</label>
                        </div>
                        <select class="custom-select" id="localidad" v-model="datos.localidad_id">
                            <option selected :value="datos.localidad_id">{{datos.localidad.nombre}}</option>
                            <option v-for="(localidad, index) in provincia.localidades"
                                :key="index" :value="localidad.id">
                                {{localidad.nombre}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: { 
        DatePicker 
    },
    data() {
        return {
            provincia: '',
            imageName: 'Seleccionar Imagen'
        }
    },
    props:{
        datos:{
            type: Object,
            required: true
        }
    },
     created(){
        this.getProvincias()
        this.getLocalidades()
        this.getCondicionesIva()
    },
    methods:{
        ...mapActions('condicionIva',['getCondicionesIva']),
        ...mapActions('localidades',['getLocalidades', 'getLocalidad', 'getProvincias']),
        imageChanged(e){
            var fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            this.imageName = e.target.files[0].name
            fileReader.onload = (e) =>{
                this.datos.logo = e.target.result
            }
            console.log(this.datos)
        }
    },
    computed:{
        ...mapState('localidades', ['localidades','localidad', 'provincias']),
        ...mapState('condicionIva', ['condicionIva']),
    }
}
</script>