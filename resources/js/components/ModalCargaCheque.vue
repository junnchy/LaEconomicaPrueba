<template>
    <div>
        <button type="button" 
        @click="LNB()"
        class="btn btn-primary btn-sm" 
        data-toggle="modal" 
        data-target="#cargarCheque" 
        data-whatever="@mdo"
        >
            Ingresar Cheque <i class="fas fa-money-check"></i>
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
                        <div class="container">
                            <form>
                                <fdatos v-bind:ncheque="ncheque"/>
                                <button type="submit" class="btn btn-outline-success btn-block sticky-button mt-4">
                                    Cargar Cheque <i class="fas fa-check-circle"></i>
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
import fdatos from './DatosCheque'
import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return{
                ncheque:{
                    nro_cheque: null,
                    importe: 0,
                    fecha_emision:null,
                    fecha_pago: null,
                    banco_id: 0
                }
            }
        },
        props:{
            cheques:{
                type: Array,
                required: true
            }
        },
        components:{
           fdatos
        },
        methods: {
            LNB(){
                $('#MenuLateral').collapse('show')
            }
        },
        destroyed(){
        },
        computed: {
                    
        }
    }
</script>

<style>
    .modal-lg {
        max-width: 80% !important;
        margin: 30px auto;
    }
    .modal-card { overflow: visible; .modal-card-body { overflow: visible; } }


    
</style>