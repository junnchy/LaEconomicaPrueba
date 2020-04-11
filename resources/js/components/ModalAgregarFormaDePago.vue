<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-success btn-block" 
        data-toggle="modal" 
        data-target="#AgregarFDP" 
        data-whatever="@mdo"
        >
            Agregar Forma de Pago<i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="AgregarFDP" tabindex="-1" role="dialog" aria-labelledby="AgregarFDPLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AgregarFDPLabel">
                            <i class="fas fa-plus-circle"></i> Agregar Forma de Pago
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
                            <form @submit.prevent="agregarFormaDePago(nfdp)">
                                <componenteDatosFDP v-bind:nfdp="nfdp"/>
                                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                                    Agregar Forma de Pago <i class="fas fa-check-circle"></i>
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
import componenteDatosFDP from './ComponenteDatosFDP'
    export default {
        data() {
            return{
                nfdp:{
                    id: null,
                    descripcion: '',
                    recargo: 0,
                    coeficiente: 0
                }
            }
        },
        components:{
            componenteDatosFDP
        },
        methods: {
            ...mapActions('formasDePago', ['agregarFormaDePago', 'resetResp']),
            ...mapActions(['cambiarEstado']),
            LNB(){
                $('#MenuLateral').collapse('show')
            }
        },
        destroyed(){
            this.resetResp(null)
        },
        computed: {
            ...mapState('formasDePago', ['respuestaS']),            
        }
    }
</script>