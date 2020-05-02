<template>
    <div class="container bg-cheque p-3 border border-secondary rounded modal-card">
         <div class="row">
             <div class="col-8">
                    <h1> <strong>Cheque</strong></h1>
             </div>
            <div class="col-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="importe">Importe</span>
                        <input type="text" v-model="ncheque.importe"
                        class="form-control" placeholder="Importe" aria-label="importe" aria-describedby="importe">
                    </div>
            </div> 
        </div>
        <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-5">
                 <div class="input-group-prepend">
                    <span class="input-group-text" id="inicioAct">Fecha Emision</span>
                    <date-picker 
                    v-model="ncheque.fecha_emision"
                    format="DD-MM-YYYY"
                    type="date"
                    :disabled="datepick">
                    </date-picker>
                </div>
            </div> 
            <div class="col-5">
                 <div class="input-group-prepend">
                    <span class="input-group-text" id="inicioAct">Fecha de Pago</span>
                    <date-picker 
                    v-model="ncheque.fecha_pago"
                    format="DD-MM-YYYY"
                    type="date"
                    :disabled="datepick">
                    </date-picker>
                 </div>
            </div> 
            <div class="col-2"></div>
        </div>
        <div class="row mt-3">
            <div class="col-10">
                 <label for="cliente">Cliente</label>
                <multiselect v-model="ncheque.cliente" deselect-label="Can't remove this value" track-by="nombre" label="nombre" placeholder="Select one" :options="clientes" :searchable="true" :allow-empty="false">
                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.nombre }}</strong></template>
                </multiselect>
            </div>
            <div class="col-2">
                <div class="form-check content-center mt-4">
                    <input type="checkbox" v-model="ncheque.propio" class="form-check-input" id="chequePropiedad">
                    <label class="form-check-label" for="chequePropiedad">Cheque:</label>
                    <p class="text-success" v-if="ncheque.propio === true ||  ncheque.propio === 1">
                        Propio 
                    </p>
                    <p class="text-primary" v-if="ncheque.propio === false ||  ncheque.propio === 0">
                        Tercero 
                    </p>
                </div>
            </div>
        </div>
        <div class="row" v-if="ncheque.propio === false ||  ncheque.propio === 0">
            <div class="col-6">
                <label>Cuit Emisor:</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="cuitEmisor" 
                    placeholder="Cuit Emisor"
                    v-model="ncheque.cuit_emisor"
                />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-8">
                <label for="banco">Banco</label>
                <multiselect v-model="ncheque.banco" deselect-label="Can't remove this value" track-by="denominacion" label="denominacion" placeholder="Select one" :options="bancos" :searchable="true" :allow-empty="false">
                    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.denominacion }}</strong></template>
                </multiselect>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>Numero de Cheque</label>
                    <input 
                        type="text" 
                        class="form-control"
                        name="NumeroCheque" 
                        placeholder="Numero de Cheque"
                        v-model="ncheque.nro_cheque"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Multiselect from 'vue-multiselect';
import { mapActions, mapState } from 'vuex';
export default {
    components: { 
        DatePicker,
        Multiselect
    },
    props:{
        ncheque:{
            type: Object,
            required: true
        }
    },
    created(){
        this.getBancos()
        this.getClientes()
    },
    methods: {
        ...mapActions('bancos', ['getBancos']),
        ...mapActions('clientes', ['getClientes'])
    },
    computed:{
        ...mapState('bancos', ['bancos']),
        ...mapState('clientes', ['clientes']),
        numeroEstado(){
            if(this.nfdp.estado === true){
                this.nfdp.estado = 1
            }
            if(this.nfdp.estado === false){
                this.nfdp.estado = 0
            }
        }
    }
    
}
</script>

<style>
    .bg-cheque {
        background-color: #DDF0F7;
    }

    .mx-datepicker-popup{ z-index: 2000 !important}

</style>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>