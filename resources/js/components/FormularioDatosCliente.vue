<template>
    <div>
        <div class="row">
            <div class="col-8">
                <div class="form-group">
                    <label>Nombre y Apellido/Razón Social</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="nombre" 
                        placeholder="Nombre"
                        v-model="cliente.nombre"
                    />
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>CUIT/CUIL</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        name="cuit" 
                        placeholder="CUIT/CUIL"
                        v-model="cliente.cuit"
                    />
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
                    <input type="text" class="form-control" name="email" placeholder="Email" v-model="cliente.email"/>
                </div>
            </div>
            <div class="col-6">
                
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" class="form-control" name="direccion" placeholder="Dirección" v-model="cliente.direccion"/>
                </div>
            </div>
            <div class="col-6">
                <label>Localidad</label>
                <select class="form-control" v-model="cliente.localidad_id" type="number">
                    <option selected :value="cliente.localidad_id" 
                    v-if="cliente.localidad_id === cliente.localidad.id">{{cliente.localidad.cod_postal}}-{{cliente.localidad.localidad}}</option>
                    <option v-for="(localidad, index) in localidades" :key="index" :value="localidad.id">
                        {{localidad.cod_postal}} - {{localidad.localidad}}
                    </option>
                </select>
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
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        props:{
            cliente:{
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions('clientes',['getCategoriasCli']),
            ...mapActions('localidades',['getLocalidades']),
            ...mapActions('condicionIva',['getCondicionesIva'])
        
        },
        created() {
            this.getCategoriasCli()
            this.getLocalidades()
            this.getCondicionesIva()
            
        },
        computed: {
            ...mapState('clientes', ['categoriasCli']),
            ...mapState('localidades', ['localidades']),
            ...mapState('condicionIva', ['condicionIva']),
        
        }
    }
</script>