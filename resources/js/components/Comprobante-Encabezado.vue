<template>
    <div>
        <div class="container mt-2">
            <datosvendedor v-bind:npresupuesto="npresupuesto"/>    
            <div class="row my-3">
                <div class="col-5">
                    <v-select
                        label="nombre"
                        @input="setCliente"
                        :options="clientes"
                        :value="npresupuesto.cliente"
                        maxHeight="200px"
                        placeholder="Cliente"
                    ></v-select>
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
                <div class="col-2">
                    <button class="btn btn-outline-primary btn-block" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#mapa" 
                    aria-expanded="false" 
                    aria-controls="mapa"
                    v-if="npresupuesto.id === null">
                        Ver Mapa <i class="fas fa-map-marked-alt"></i>
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
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import datosvendedor from './Comprobante-Vendedor'


export default {
    components: {
        datosvendedor
    },
    data() {
        return {
            place: 'Cliente',
            cliente: null
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
    },
    methods:{
        ...mapActions('datos', ['getDatos']),
        ...mapActions('clientes', ['getClientes']),
        setCliente(val){
            this.npresupuesto.cliente = val
        }
    },
    computed:{
        ...mapState('datos', ['datos']),
        ...mapState('clientes', ['clientes']),
    }
}
</script>