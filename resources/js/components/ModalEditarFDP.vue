<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-primary btn-sm" 
        data-toggle="modal" 
        data-target="#editarFDP" 
        data-whatever="@mdo"
        >
            Editar <i class="fas fa-pencil-alt"></i>
        </button>
        <div class="modal fade" id="editarFDP" tabindex="-1" role="dialog" aria-labelledby="editarFDPLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editarFDPLabel">
                            <i class="fas fa-pen"></i>Editar Forma de Pago
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
                            <form @submit.prevent="editarFormaDePago(formaDePago)">
                                <componenteDatosFDP v-bind:nfdp="formaDePago"/>
                                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                                    Guardar Cambios <i class="fas fa-check-circle"></i>
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
            }
        },
        props:{
            fdpid:{
                type: Number,
                required: true
            }
        },
        components:{
            componenteDatosFDP
        },
        methods: {
            ...mapActions('formasDePago', ['editarFormaDePago', 'resetResp', 'getFormaDePago']),
            ...mapActions(['cambiarEstado']),
            LNB(){
                $('#MenuLateral').collapse('show')
                this.getFormaDePago(this.fdpid)
            }
        },
        destroyed(){
            this.resetResp(null)
        },
        computed: {
            ...mapState('formasDePago', ['respuestaS', 'formaDePago']),            
        }
    }
</script>