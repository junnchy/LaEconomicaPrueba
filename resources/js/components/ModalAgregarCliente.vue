<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-success btn-block" 
        data-toggle="modal" 
        data-target="#AgregarClienteModal" 
        data-whatever="@mdo"
        >
            Agregar Cliente <i class="fas fa-plus-circle"></i>
        </button>
        <div class="modal fade" id="AgregarClienteModal" tabindex="-1" role="dialog" aria-labelledby="AgregarClienteModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AgregarClienteModalLabel">
                            <i class="fas fa-address-card"></i> Agregar Cliente
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                         <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuestaS != null">
                            {{respuestaS}} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="container mt-5">
                            <form @submit.prevent="agregarCliente(ncliente)" v-if="respuestaS === null">
                                <componente-fdatoscliente v-bind:cliente="ncliente"/>
                                <button type="submit" class="btn btn-success btn-block sticky-button" v-if="respuestaS === null">
                                    Agregar Cliente <i class="fas fa-check-circle"></i>
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
                ncliente:{
                    id: null,
                    nombre:'', cuit:'', telefono:'', celular:'', email:'', direccion:'', 
                    localidad_id: 0, cat_clientes_id: 0, condicion_iva_id: 0,
                    localidad:{nombre: '', cod_postal: ''},
                    categoria:{denominacion: ''},
                    condicion_iva:{denominacion: ''}
                }
            }
        },
        methods: {
            ...mapActions('clientes', ['resetResp', 'agregarCliente', 'resetError', 'editarCliente']),
            ...mapActions(['cambiarEstado']),
            LNB(){
                $('#MenuLateral').collapse('show')
            },
            cancelar(){
                this.resetError()
                this.resetResp(null)
            }
        },
        destroyed(){
            this.resetError()
            this.resetResp(null)
        },
        computed: {
            ...mapState('clientes', ['respuestaS', 'errors', 'cliente']),            
        }
    }
</script>