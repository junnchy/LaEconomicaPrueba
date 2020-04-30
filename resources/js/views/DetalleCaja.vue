<template>
    <div class="container">
        <div class="row p-3 border border-secondary rounded">
            <div class="col-12 text-center">
                <h2 v-if="caja"><i class="fas fa-cash-register"></i> Detalle de Caja: {{caja.id}}</h2>
            </div>
        </div>
        <div class="row mt-2 p-3">
            <div class="col-4">
                <div class="alert alert-primary" role="alert">
                    Efectivo <strong>${{caja.pesos}}</strong> 
                </div>
            </div>
            <div class="col-4">
                <div class="alert alert-primary" role="alert">
                    Tarjetas <strong>${{caja.tarjetaTotal}}</strong> 
                </div>
            </div>
            <div class="col-4">
                
            </div>
        </div>
        <div class="row mt-2" v-if="caja.pagos">
            <div class="col-12">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-pagos-tab" data-toggle="tab" href="#nav-pagos" role="tab" aria-controls="nav-pagos" aria-selected="true">Pagos</a>
                        <a class="nav-item nav-link" id="nav-cupones-tab" data-toggle="tab" href="#nav-cupones" role="tab" aria-controls="nav-cupones" aria-selected="false">Cupones</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-pagos" role="tabpanel" aria-labelledby="nav-pagos-tab">
                        <listaPagos v-bind:pagos="caja.pagos"/>
                    </div>
                    <div class="tab-pane fade" id="nav-cupones" role="tabpanel" aria-labelledby="nav-cupones-tab">
                        <listaCupones v-bind:cupones="caja.cartera_cupones.cupones"/>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                
            </div>      
        </div>
    </div>    
</template>

<script>
import { mapState, mapActions } from 'vuex'
import listaPagos from '../components/ListaPagos'
import listaCupones from '../components/ListaCupones'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    components:{
        listaPagos,
        listaCupones
    },
    created(){
        this.getCaja(this.id)
    },
    methods:{
        ...mapActions('cajas',['getCaja'])
    },
    computed:{
        ...mapState('cajas', ['caja'])
    }
    
}
</script>