<template>
    <div>
        <button type="button" 
        @click="LNB()"
        class="btn btn-primary btn-sm" 
        data-toggle="modal" 
        data-target="#cargarCupon" 
        data-whatever="@mdo"
        >
            Ingresar Cupon <i class="fas fa-money-check"></i>
        </button>
        <div class="modal fade" id="cargarCupon" tabindex="-1" role="dialog" aria-labelledby="cargarCuponLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cargarCuponLabel">
                            Ingresar Cupon de Tarjeta
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-success alert-dismissible fade show" v-if="carga">
                            {{rta}} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="carga = false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            <form>
                                <fdatos v-bind:ncupon="ncupon"/>
                                <button type="button" class="btn btn-success btn-block sticky-button" @click="cargarCupon()">
                                    Guardar Cupon <i class="fas fa-check-circle"></i>
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
import fdatos from './DatosCuponT'
import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return{
                carga: false,
                rta: 'Cupon Cargado',
                ncupon:{
                    nro_cupon: null,
                    importe: 0,
                    cuotas:0,
                    tarjeta_id: 0
                },
            }
        },
        destroyed(){
            this.carga = false
        },
        props:{
            cupones:{
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
            },
            cargarCupon(){
                this.cupones.push(this.ncupon)
                this.carga = true
                this.ncupon = {
                    nro_cupon: null,
                    importe: 0,
                    cuotas:0,
                    tarjeta_id: 0 
                }
            }
        },
        destroyed(){
        },
        computed: {
                    
        }
    }
</script>