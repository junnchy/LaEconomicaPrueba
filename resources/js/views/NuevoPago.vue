<template>
    <div class="container border border-secondary bg-ecogray rounded p-4">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 text-center">
                <h2>Recibo de Pago <i class="fas fa-receipt text-secondary"></i></h2>
            </div>
            <div class="col-2">
                 <router-link :to="{name:'menuComercial'}" >
                    <button class="btn btn-outline-danger p-2 px-3 btn-sm">
                        Salir
                    </button>
                </router-link>
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
                        <h5 class="card-header">Ventas <i class="fas fa-shopping-cart text-primary"></i></h5>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <label for="cliente">Cliente</label>
                                    <multiselect v-model="npago.cliente" deselect-label="Can't remove this value" track-by="nombre" label="nombre" placeholder="Select one" :options="clientes" :searchable="true" :allow-empty="false">
                                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.nombre }}</strong></template>
                                    </multiselect>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <label for="cliente">Cuenta</label>
                                    <multiselect v-model="cta" deselect-label="Can't remove this value" track-by="id" label="id" placeholder="Select one" :options="c.cuentas" :searchable="false" :allow-empty="false">
                                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.id }}</strong></template>
                                    </multiselect>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Ventas a Apagar</label>
                                        <select multiple class="form-control" id="exampleFormControlSelect1" v-model="vtas">
                                            <option v-for="(venta, index) in cta.ventas_con_saldo" :key="index" :value="{id: venta.id, saldo:venta.saldo}">
                                                <strong>{{venta.created_at.slice(0,11)}}</strong> - ${{venta.saldo}} - [{{venta.fdp.descripcion}}]
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card-footer text-center">
                            <h5 class="card-title">Total a Pagar: <strong>${{a_pagar}}</strong></h5>
                        </div>
                    </div>
                    <div :class="cardPago">
                        <h5 class="card-header">Pago <i class="fas fa-wallet text-success"></i></h5>
                        <div class="card-body">
                            <label>Efectivo en Pesos</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input 
                                    type="number"
                                    step="0.01" 
                                    class="form-control"
                                    name="PagoEfectivo"
                                    v-model="npago.pesos"
                                />
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Pagos disponibles</label>
                                        <select multiple class="form-control" id="exampleFormControlSelect1" v-model="npago.pagos_a_imputar">
                                            <option v-for="(pago, index) in cta.pagos_con_saldo" :key="index" :value="{id: pago.id, saldo:pago.saldo}">
                                                <strong>{{pago.created_at.slice(0,11)}}</strong> - ${{pago.saldo}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center" v-if="npago.cheques.length > 0 || npago.cupones.length > 0">
                                <hr>
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
                                    <table class="table table-striped"  v-if="npago.cheques.length > 0">
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
                                <hr>
                            </div>
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-5">
                                    <ingresaCupon v-bind:cupones="npago.cupones"/>
                                </div>
                                <div class="col-5">
                                    <ingresaCheque v-bind:cheques="npago.cheques"/>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <h5 class="card-title">Importe del Pago: <strong>${{importe}}</strong></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-6 text-center">
                
            </div>    
            <div class="col-6 text-center">
                <button class="btn btn-success btn-block" @click="agregarPago(npago)">
                    Cargar Pago
                </button>
            </div>
        </div>
        {{cli}}
    </div>
</template>

<script>
import ingresaCupon from '../components/ModalCargaCuponT'
import ingresaCheque from '../components/ModalCargaCheque'
import Multiselect from 'vue-multiselect';
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { mapActions, mapState} from 'vuex'
export default {
    components:{
        ingresaCupon,
        ingresaCheque,
        Multiselect
    },
    data() {
        return {
            c: {
                id: null, 
                cuentas: []
            },
            cardPago: "card border-success",
            value: null,
            cta:{
                ventas_con_saldo:[]
            },
            vtas:[],
            npago:{
                importe: 0,
                pesos: null,
                dolares: 0,
                ctac_id: null,
                vtas_id: [],
                cupones:[],
                cheques: [],
                pagos_a_imputar: [],
                cliente:{
                    id: null,
                    nombre: '',
                    cuentas:{
                        ventas_con_saldo:[],
                        pagos_con_saldo:[]
                    }
                }
            }
        }
    },
    created(){
        /* if (ventaActual != null) {
             if (this.ventaActual.fdp.id === 1) {
                this.npago.pesos = this.ventaActual.saldo
            }
            this.npago.ctac_id = this.ventaActual.ctac_id
            this.npago.vtas_id.push(this.ventaActual.id)
        }else{ */
            this.getClientes()
        /* } */
       
    },
    methods:{
        ...mapActions('ventas', ['getVenta']),
        ...mapActions('pagos', ['agregarPago']),
        ...mapActions('clientes', ['getClientes', 'getCliente']),
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
        ...mapState('clientes', ['clientes', 'cliente']),
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
            this.npago.ctac_id = this.cta.id
            var saldo = 0
            this.npago.vtas_id = []
            this.vtas.forEach(venta => {
                saldo += venta.saldo
                this.npago.vtas_id.push(venta.id)
            });
            this.npago.pagos_a_imputar.forEach(pago=>{
                saldo -= pago.saldo
            });
            
            return saldo 
        },
        cli(){
            if(this.npago.cliente.id === null || this.npago.cliente.id != this.c.id){
                this.getCliente(this.npago.cliente.id)
                this.c = this.cliente
            }
        }
    }
}
</script>

<style>
.bg-ecogray{
    background-color: #E9ECEF !important;
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>