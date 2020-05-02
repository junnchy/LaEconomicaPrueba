<template>
    <div v-if="caja" class="container">
        <div class="row p-3 border border-secondary rounded">
            <div class="col-12 text-center">
                <h2 v-if="caja"><i class="fas fa-cash-register"></i> Detalle de Caja: {{caja.id}}</h2>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6">
                <div class="alert alert-primary border border-primary text-center" role="alert">
                    Cobros Totales <br> 
                    <strong>${{caja.vTotales.toFixed(2)}}</strong> 
                </div>
            </div>
            <div class="col-6">
                <div class="alert alert-success border border-success text-center" role="alert">
                    Efectivo en caja <br> 
                    <strong>${{caja.pesos.toFixed(2)}}</strong> 
                </div>
            </div>
        </div>
        <div class="row m-1 p-2">
            <div class="col-8">
                <button class="btn btn-outline-primary mr-2">
                    Transferir <i class="fas fa-exchange-alt"></i>
                </button>
                <button class="btn btn-outline-primary mr-2">
                    Igreso <i class="fas fa-arrow-up"></i>
                </button>
                <button class="btn btn-outline-danger mr-2">
                    Egreso <i class="fas fa-arrow-down"></i>
                </button>
            </div>
            <div class="col-4">
                <date-picker v-model="fechas" type="date" range placeholder="Filtrar por Fecha"></date-picker>
            </div>
        </div>
        <hr>
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
                        <a class="nav-item nav-link" id="nav-transferencias-tab" data-toggle="tab" href="#nav-transferencias" role="tab" aria-controls="nav-transferencias" aria-selected="false">
                            Transferencias
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
                        <cheques v-bind:cheques="caja.fcheques"/>
                    </div>
                    <div class="tab-pane fade" id="nav-transferencias" role="tabpanel" aria-labelledby="nav-transferencias-tab">
                    </div>
                    <div class="tab-pane fade" id="nav-informe" role="tabpanel" aria-labelledby="nav-informe-tab">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <informe/>
                            </div>
                        </div>
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
import informe from '../components/Caja/InformeCaja'
import cheques from '../components/Caja/Cheques'
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
        cheques,
        informe,
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
                var aux = []
                this.fechas.forEach(date => {
                    let mm = date.getMonth() + 1
                    if(parseInt(mm) < 10){
                        mm = '0' + mm
                    }
                    let dd = date.getDate()
                    if(parseInt(dd) < 10){
                        dd = '0' + dd
                    }
                    let yyyy = date.getFullYear()
                    let d = (yyyy+','+mm+','+dd);
                    
                    aux.push(d)
                })
        
                console.log(aux)
                var param = [this.id, aux]
                this.getCaja(param)
            }
        }
    }
    
}
</script>