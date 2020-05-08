<template>
    <div>
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-primary btn-sm" 
        data-toggle="modal" 
        data-target="#imputarComprobantes" 
        data-whatever="@mdo"
        >
            Imputar Comprobantes
        </button>
        <div class="modal fade " id="imputarComprobantes" tabindex="-1" role="dialog" aria-labelledby="imputarComprobantesLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg " role="document">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="imputarComprobantesLabel">
                            Imputar Comprobantes
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
                        <div class="container">
                            <form>
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="card-deck">
                                            <div class="card border-primary">
                                                <h5 class="card-header">Ventas a Imputar <i class="fas fa-shopping-cart text-primary"></i></h5>
                                                <div class="card-body">
                                                    <div class="row mt-3">
                                                        <div class="col-12">
                                                            <v-select
                                                                label="id"
                                                                @input="setCuenta"
                                                                :options="cliente.cuentas"
                                                                :value="cuenta"
                                                                maxHeight="200px"
                                                                placeholder="Cuenta"
                                                            ></v-select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-3">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label for="exampleFormControlSelect1">Ventas a Apagar</label>
                                                                <select multiple class="form-control" id="exampleFormControlSelect1" v-model="nimp.vtas_id">
                                                                    <option v-for="(venta, index) in cta.ventas_con_saldo" :key="index" :value="venta.id">
                                                                        <strong>{{venta.created_at.slice(0,11)}}</strong> - ${{venta.saldo}} - [{{venta.fdp.descripcion}}]
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div class="card-footer text-center">
                                                    <h5 class="card-title">Total a Imputar: <strong>$</strong></h5>
                                                </div>
                                            </div>
                                            <div class="card border-success">
                                                <h5 class="card-header">Pagos a Favor <i class="fas fa-wallet text-success"></i></h5>
                                                <div class="card-body">
                                                    <div class="row mt-3">
                                                        <div class="col-12">
                                                            <div class="form-group">
                                                                <label for="exampleFormControlSelect1">Pagos disponibles</label>
                                                                <select multiple class="form-control" id="exampleFormControlSelect1" v-model="nimp.pagos_a_imputar">
                                                                    <option v-for="(pago, index) in cta.pagos_con_saldo" :key="index" :value="{id: pago.id}">
                                                                        <strong>{{pago.created_at.slice(0,11)}}</strong> - ${{pago.saldo}}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer text-center">
                                                    <h5 class="card-title">Importe de los Pagos: <strong>$</strong></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-outline-success btn-block sticky-button mt-4" @click="imputarComprobantes(nimp, cta.id)">
                                    Imputar <i class="fas fa-check-circle"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return{
                cta:{
                    ventas_con_saldo:[]
                },
                nimp:{
                    pagos_a_imputar: [],
                    vtas_id: []
                }
            }
        },
        props:{
            cliente:{
                type: Object,
                required: true
            },
            /* ctac_id:{
                type: Number,
                required: true
            } */
        },
        methods: {
            ...mapActions('pagos', ['imputarComprobantes']),
            LNB(){
                $('#MenuLateral').collapse('show')
            },
            setCuenta(val){
                this.cta = val
            },
        },
        destroyed(){
        },
        computed: {
            ...mapState('pagos', ['status', 'message'])
        }
    }
</script>

<style>
    .modal-lg {
        max-width: 80% !important;
        margin: 30px auto;
    }    
</style>

