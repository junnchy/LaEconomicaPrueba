<template>
    <div>
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-primary btn-sm" 
        data-toggle="modal" 
        data-target="#cargarCheque" 
        data-whatever="@mdo"
        >
            Nuevo Cheque <i class="fas fa-money-check"></i>
        </button>
        <div class="modal fade " id="cargarCheque" tabindex="-1" role="dialog" aria-labelledby="cargarChequeLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg " role="document">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cargarChequeLabel">
                            Ingresar Cheque
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-success alert-dismissible fade show" v-if="status === 200">
                            {{message}} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="container bg-cheque p-3 border border-secondary rounded modal-card">
                            <form>
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
                                            type="date">
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
                                <button type="button" class="btn btn-outline-success btn-block sticky-button mt-4" @click="cargaCheque(ncheque)">
                                    Cargar Cheque <i class="fas fa-check-circle"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{setCuit}}
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import {mapActions, mapState} from 'vuex'
    export default {
        components:{Multiselect},
        data() {
            return{
                carga: false,
                ncheque:{
                    nro_cheque: null,
                    importe: 0,
                    fecha_emision:null,
                    fecha_pago: null,
                    banco_id: 0,
                    cuit_emisor: null,
                    propio: 0
                }
            }
        },
        created(){
            this.getDatos(),
            this.getBancos()
        },
        methods: {
            LNB(){
                $('#MenuLateral').collapse('show')
            },
            ...mapActions('cheques', ['cargaCheque']),
            ...mapActions('datos', ['getDatos']),
            ...mapActions('bancos', ['getBancos'])
        },
        destroyed(){
        },
        computed: {
            ...mapState('cheques', ['status', 'message']),
            ...mapState('datos', ['datos']),
            ...mapState('bancos', ['bancos']),
            setCuit(){
                this.ncheque.cuit_emisor = this.datos.cuit
            }
                    
        }
    }
</script>

<style>
    .modal-lg {
        max-width: 80% !important;
        margin: 30px auto;
    }   
    .bg-cheque {
        background-color: #DDF0F7;
    }

    .mx-datepicker-popup{ z-index: 2000 !important}
 
</style>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>