<template>
   <div class="container">
        <button type="button" 
        @click="LNB()"
        class="btn btn-outline-info btn-block" 
        data-toggle="modal" 
        data-target="#AjustarStockManual" 
        data-whatever="@mdo"
        >
            Ajuste Manual de Stock <i class="fas fa-wrench"></i>
        </button>
        <div class="modal fade" id="AjustarStockManual" tabindex="-1" role="dialog" aria-labelledby="AjustarStockManualLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="AjustarStockManualLabel">
                            Ajustar Stock <i class="fas fa-wrench"></i>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="resetResp(null)">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="procesar()">
                            <div class="alert alert-success alert-dismissible fade show mt-4" v-if="respuesta != null">
                                {{respuesta}} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="container">
                                <div :class="etiquetaCantidad" role="alert">
                                    <h4>Cantidad Final</h4>
                                    <h3>{{cantFinal}}</h3>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Cantidad a Ajustar:</label>
                                <input type="number" v-model="nLDS.cantidad" class="form-control">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetResp(null)">Cerrar</button>
                                <button type="submit" class="btn btn-success btn-block">
                                    Ajustar <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </form>
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
                nLDS: {
                    cantidad: 0, 
                    ficha_id: 0, 
                    usuario: this.$userName,
                    tipo: 'Manual'
                },
                cEC: 'alert alert-info text-center',
                estado: false,
                aux: 0
            }
        },
        props:{
            nFicha:{
                type: Number,
                required: true
            },
            cantAct:{
                type: Number,
                required: true
            },
        },
        methods: {
            ...mapActions('stock', ['agregarLinea', 'resetResp', 'ajustarStock']),
            LNB(){
                $('#MenuLateral').collapse('show')
            },
            procesar(){
                this.agregarLinea(this.nLDS),
                this.ajustarStock(this.nLDS),
                this.estado = false
            }
        },
        created() {
            this.nLDS.ficha_id = this.nFicha;
            console.log(this.$userName)
        },
        computed: {
            ...mapState('stock',['respuesta']),
            cantFinal(){
                if (!this.estado) {
                    this.aux = this.cantAct + parseInt(this.nLDS.cantidad)
                    return this.aux
                }else{
                    this.nLDS.cantidad = 0
                    return this.aux
                }
            },
            etiquetaCantidad(){
            if (this.cantFinal === 0) {
                this.cEC ='alert alert-warning text-center'
            }
            if (this.cantFinal > 0) {
                this.cEC ='alert alert-success text-center'
            }
            if (this.cantFinal < 0) {
                this.cEC ='alert alert-danger text-center'
            }
            return this.cEC
        }
        },
    }
</script>