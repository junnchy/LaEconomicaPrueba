<template>
    <div>
        <div class="container mt-2">
            <datosvendedor v-bind:npresupuesto="npresupuesto"/>    
            <div class="row my-3">
                <div class="col-5">
                    <!-- <v-select
                        label="nombre"
                        @input="setCliente"
                        :options="clientes"
                        :value="npresupuesto.cliente"
                        maxHeight="200px"
                        placeholder="Cliente"
                        :disabled="ingresoCliente"
                    ></v-select> -->
                    <multiselect v-model="npresupuesto.cliente" deselect-label="Can't remove this value" track-by="nombre" label="nombre" placeholder="Select one" :options="clientes" :searchable="true" :allow-empty="false">
                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.nombre }}</strong></template>
                    </multiselect>
                </div>
                <div class="col-1 mt-1">
                    <modaladdcliente/>
                </div>
                <div class="col-5">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="direccion">Direccion</span>
                        </div>
                        <input type="text" v-model="npresupuesto.cliente.direccion" disabled
                        class="form-control" placeholder="direccion" aria-label="direccion" aria-describedby="direccion">   
                    </div>
                </div>
                <div class="col-1 mt-1">
                    <button class="btn btn-outline-primary btn-sm" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#mapa" 
                    aria-expanded="false" 
                    aria-controls="mapa"
                    v-if="npresupuesto.id === null">
                        <a data-toggle="tooltip" data-placement="top" title="Ver Mapa">
                            <i class="fas fa-map-marked-alt"></i>
                        </a>                        
                    </button>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <div class="collapse" id="mapa">
                       <componente-gmap v-bind:cliente="npresupuesto.cliente"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="telefono">Telefono</span>
                        </div>
                        <input type="text" v-model="npresupuesto.cliente.telefono"
                        class="form-control" placeholder="telefono" aria-label="telefono" aria-describedby="telefono">   
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="celular">Celular</span>
                        </div>
                        <input type="text" v-model="npresupuesto.cliente.celular"
                        class="form-control" placeholder="celular" aria-label="celular" aria-describedby="celular">   
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="condicion_iva">Condicion Iva</span>
                        </div>
                        <input type="text" v-model="npresupuesto.cliente.condicion_iva.denominacion" disabled
                        class="form-control" placeholder="condicion_iva" aria-label="condicion_iva" aria-describedby="condicion_iva">   
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3 ml-3 alert alert-secondary text-center">
                    <h5>
                        <i class="fas fa-money-bill-wave-alt"></i> Forma de Pago:  
                    </h5>
                </div>
                <div class="col-8 mt-2">
                    <v-select
                        label="descripcion"
                        @input="setFDP"
                        :options="filtered_fdp"
                        :value="npresupuesto.formaDePago"
                        maxHeight="200px"
                        placeholder="Forma De Pago"
                    ></v-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import datosvendedor from './Comprobante-Vendedor'
import modaladdcliente from '../components/ModalAgregarCliente'
import Multiselect from 'vue-multiselect';
export default {
    components: {
        datosvendedor,
        modaladdcliente,
        Multiselect
    },
    data() {
        return {
            place: 'Cliente',
            cliente: null,
            ingresoCliente: false
        }
    },
    props:{
        npresupuesto:{
            type:Object,
            required: true
        }
    },
    created(){
        this.getClientes()
        this.getDatos()
        this.getFormasDePago()
        this.filter.estado = 1
    },
    methods:{
        ...mapActions('datos', ['getDatos']),
        ...mapActions('clientes', ['getClientes']),
        ...mapActions('formasDePago', ['getFormasDePago']),
        setCliente(val){
            this.ingresoCliente = true
            this.npresupuesto.cliente = val
        },
        setFDP(val){
            this.npresupuesto.formaDePago = val
        }
    },
    computed:{
        ...mapState('datos', ['datos']),
        ...mapState('clientes', ['clientes']),
        ...mapState('formasDePago', ['formasDePago', 'filter']),
        ...mapGetters('formasDePago', ['filtered_fdp'])
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>