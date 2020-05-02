<template>
    <div class="container border border-secondary bg-ecogray rounded p-4">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Recibo de Pago <i class="fas fa-receipt text-secondary"></i></h2>
            </div>
        </div>
        <div class="alert alert-success alert-dismissible fade show my-3" v-if="$store.state.pagos.status == 200">
            "Pago Cargado"
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <div class="card-deck">
                    <div class="card border-primary">
                        <h5 class="card-header">Venta <i class="fas fa-shopping-cart text-primary"></i></h5>
                        <div class="card-body">
                            <p class="card-text">Forma de Pago: <strong>{{ventaActual.fdp.descripcion}}</strong></p>
                            <p class="card-text">Cliente: <strong>{{ventaActual.cuenta.cliente.nombre}}</strong></p>
                        </div>
                        <div class="card-footer text-center">
                            <h5 class="card-title">Total a Pagar: <strong>${{ventaActual.saldo}}</strong></h5>
                        </div>
                    </div>
                    <div :class="cardPago">
                        <h5 class="card-header">Pago <i class="fas fa-wallet text-success"></i></h5>
                        <div class="card-body">
                            <h5 class="card-title">Importe del Pago: <strong>${{importe}}</strong></h5>
                            <hr>
                                <div class="form-group">
                                    <label>Efectivo en Pesos</label>
                                    <input 
                                        type="number"
                                        step="0.01" 
                                        class="form-control"
                                        name="PagoEfectivo"
                                        v-model="npago.pesos"
                                    />
                                </div>
                            <hr>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <table class="table table-striped" v-if="npago.cupones.length > 0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nro Cupon</th>
                                                <th scope="col">Cuotas</th>
                                                <th scope="col">Importe</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(cupon, index) in npago.cupones" :key="index">
                                                <td>{{cupon.nro_cupon}}</td>
                                                <td>{{cupon.cuotas}}</td>
                                                <td>${{cupon.importe}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-danger border-0 btn-sm" 
                                                    @click="deleteCupon(index)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-striped" v-if="npago.cheques.length > 0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nro cheque</th>
                                                <th scope="col">Banco</th>
                                                <th scope="col">Importe</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(cheque, index) in npago.cheques" :key="index">
                                                <td>{{cheque.nro_cheque}}</td>
                                                <td>{{cheque.cuotas}}</td>
                                                <td>${{cheque.importe}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-danger border-0 btn-sm" 
                                                    @click="deleteCheque(index)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-6">
                                    <ingresaCupon v-bind:cupones="npago.cupones"/>
                                </div>
                                <div class="col-6">
                                    <ingresaCheque v-bind:cheques="npago.cheques"/>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-success btn-block" @click="agregarPago(npago)">
                                Cargar Pago
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 text-center">
                <router-link :to="{name:'menuComercial'}" >
                    <button class="btn btn-success p-2 px-3">
                        Finalizar
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ingresaCupon from '../components/ModalCargaCuponT'
import ingresaCheque from '../components/ModalCargaCheque'
import { mapActions, mapState} from 'vuex'
export default {
    components:{
        ingresaCupon,
        ingresaCheque
    },
    data() {
        return {
            cardPago: "card border-success",
            npago:{
                importe: 0,
                pesos: null,
                dolares: 0,
                ctac_id: null,
                vta_id: null,
                cupones:[],
                cheques: []
            }
        }
    },
    created(){
        if (this.ventaActual.fdp.id === 1) {
            this.npago.pesos = this.ventaActual.saldo
        }
        this.npago.ctac_id = this.ventaActual.ctac_id
        this.npago.vta_id = this.ventaActual.id
    },
    methods:{
        ...mapActions('ventas', ['getVenta']),
        ...mapActions('pagos', ['agregarPago']),
        deleteCupon(index){
            this.npago.cupones.splice(index, 1);
            Vue.$toast.open({
                message: 'Cupon Borrado',
                type: 'error',
            });
        },
        deleteCheque(index){
            this.npago.cheques.splice(index, 1);
            Vue.$toast.open({
                message: 'Cheque Borrado',
                type: 'error',
            });
        }
    },
    computed:{
        ...mapState('ventas',['ventaActual']),
        ...mapState('pagos', ['status']),
        importe(){
            this.npago.importe = 0  
            if(this.npago.pesos > 0){
                this.npago.importe = parseFloat(this.npago.importe) + parseFloat(this.npago.pesos)
            }
            if(this.npago.cupones.length > 0){
                this.npago.cupones.forEach(cupon => {
                    this.npago.importe = parseFloat(this.npago.importe) + parseFloat(cupon.importe)
                });
            }
            if(this.npago.cheques.length > 0){
                this.npago.cheques.forEach(cheque => {
                    this.npago.importe = parseFloat(this.npago.importe) + parseFloat(cheque.importe)
                });
            }
            return this.npago.importe
        },
        a_pagar(){
            return (this.ventaActual.saldo - this.npago.importe)
        }
    }
}
</script>

<style>
.bg-ecogray{
    background-color: #E9ECEF !important;
    }
</style>

 