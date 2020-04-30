<template>
    <div v-if="caja" class="container">
        <div class="row p-3 border border-secondary rounded">
            <div class="col-12 text-center">
                <h2 v-if="caja"><i class="fas fa-cash-register"></i> Detalle de Caja: {{caja.id}}</h2>
            </div>
        </div>
        <div class="row mt-2 p-3">
            <div class="col-4">
                <div class="alert alert-primary border border-primary" role="alert">
                    Efectivo <strong>${{caja.pesos}}</strong> 
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-primary border border-primary" role="alert">
                    Tarjetas <strong>${{caja.tarjetaTotal}}</strong> 
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-success border border-success" role="alert">
                    Totales <strong>${{caja.totales}}</strong> 
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-6">
                <date-picker v-model="fechas" type="date" range placeholder="Filtrar por Fecha"></date-picker>
            </div>
        </div>
        <div class="row mt-2" v-if="caja">
            <div class="col-12">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-pagos-tab" data-toggle="tab" href="#nav-pagos" role="tab" aria-controls="nav-pagos" aria-selected="true">
                            Pagos
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
                    <div class="tab-pane fade show active" id="nav-pagos" role="tabpanel" aria-labelledby="nav-pagos-tab">
                        <listaPagos v-bind:pagos="caja.fpagos"/>
                    </div>
                    <div class="tab-pane fade" id="nav-cupones" role="tabpanel" aria-labelledby="nav-cupones-tab">
                        <cupones v-bind:cupones="caja.fcupones"/>
                    </div>
                    <div class="tab-pane fade" id="nav-cheque" role="tabpanel" aria-labelledby="nav-cheque-tab">

                    </div>
                    <div class="tab-pane fade" id="nav-informe" role="tabpanel" aria-labelledby="nav-informe-tab">

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                
            </div>      
        </div>
        {{tomar}}
    </div>    
</template>

<script>
import { mapState, mapActions } from 'vuex'
import listaPagos from '../components/Caja/ListaPagos'
import cupones from '../components/Caja/Cupones'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/Es'
export default {
    data() {
        return {
            fechas: null,
            id: this.$route.params.id,
        }
    },
    components:{
        listaPagos,
        cupones,
        DatePicker
    },
    created(){
        var param = [this.id, null]
        this.getCaja(param)
    },
    methods:{
        ...mapActions('cajas',['getCaja'])
    },
    computed:{
        ...mapState('cajas', ['caja']),
        tomar(){
            if (this.fechas != null) {
                var param = [this.id, this.fecha[0]]
                this.getCaja(param)
            }
        }
    }
    
}
</script>