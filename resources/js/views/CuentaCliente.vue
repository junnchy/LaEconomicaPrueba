<template>
    <div>
        <div class="row">
            <div class="col-4">
                <h2><i class="fas fa-file-invoice-dollar"></i> Cuenta Cliente</h2>
                <h5 class="mt-4">
                    {{cuentaCliente.cliente.nombre}}
                </h5>
            </div>
            <div class="col-4">
                
            </div>
            <div class="col-4">
                <div class="alert alert-primary p-3 border border-primary text-center" role="alert">
                    <p class="font-weight-bolder">
                        Saldo
                    </p>
                   <h3>${{cuentaCliente.saldo}}</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-2">

            </div>
        </div>
          <div class="row mt-2">
            <div class="col-12">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-movimientos-tab" data-toggle="tab" href="#nav-movimientos" role="tab" aria-controls="nav-movimientos" aria-selected="true">
                            Movimientos
                        </a>
                        <a class="nav-item nav-link" id="nav-cupones-tab" data-toggle="tab" href="#nav-cupones" role="tab" aria-controls="nav-cupones" aria-selected="false">
                            Cupones
                        </a>
                        <a class="nav-item nav-link" id="nav-cheque-tab" data-toggle="tab" href="#nav-cheque" role="tab" aria-controls="nav-cheque" aria-selected="false">
                            Cheques
                        </a>
                        <a class="nav-item nav-link" id="nav-informe-tab" data-toggle="tab" href="#nav-informe" role="tab" aria-controls="nav-informe" aria-selected="false">
                            Informe
                        </a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-movimientos" role="tabpanel" aria-labelledby="nav-movimientos-tab">
                        <movimientos v-bind:movimientos="cuentaCliente.movimientos"/>
                    </div>
                    <div class="tab-pane fade" id="nav-cupones" role="tabpanel" aria-labelledby="nav-cupones-tab">
                        <cupones v-bind:cupones="cuentaCliente.cupones"/>
                    </div>
                    <div class="tab-pane fade" id="nav-cheque" role="tabpanel" aria-labelledby="nav-cheque-tab">
                        <cheques v-bind:cupones="cuentaCliente.cheques"/>
                    </div>
                    <div class="tab-pane fade" id="nav-informe" role="tabpanel" aria-labelledby="nav-informe-tab">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import movimientos from '../components/Clientes/Movimientos'
import cupones from '../components/Caja/Cupones'
import cheques from '../components/Caja/Cheques'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    components:{
        movimientos,
        DatePicker,
        cupones,
        cheques
    },
    created(){
        this.getCuentaCliente(this.id)
    },
    methods:{
        ...mapActions('cuentaCliente', ['getCuentaCliente'])
    },
    computed:{
        ...mapState('cuentaCliente', ['cuentaCliente'])
    }
}
</script>