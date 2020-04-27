<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-success btn-block" 
        data-toggle="modal" 
        data-target="#AgregarTarjeta" 
        data-whatever="@mdo"
        >
            Agregar Tarjeta <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="AgregarTarjeta" tabindex="-1" role="dialog" aria-labelledby="AgregarTarjetaLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AgregarTarjetaLabel">
                            <i class="fas fa-plus-circle"></i> Agregar Tarjeta
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                         <div class="alert alert-success alert-dismissible fade show" v-if="respuestaS != null">
                            {{respuestaS}} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            <form @submit.prevent="agregarTarjeta(nTarjeta)">
                                <datos v-bind:nTarjeta="nTarjeta"/>
                                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                                    Agregar Tarjeta <i class="fas fa-check-circle"></i>
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
import datos from './ComponenteDatosTarjetaC'
    export default {
        data() {
            return{
                nTarjeta:{
                    nombre: '',
                    estado: true
                }
            }
        },
        components:{
            datos
        },
        methods: {
            ...mapActions('tarjetas', ['agregarTarjeta', 'resetResp']),
            ...mapActions(['cambiarEstado']),
            LNB(){
                $('#MenuLateral').collapse('show')
            }
        },
        destroyed(){
            this.resetResp(null)
        },
        computed: {
            ...mapState('tarjetas', ['respuestaS']),            
        }
    }
</script>