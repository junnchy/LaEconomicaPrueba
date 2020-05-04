<template>
    <div>
        <h2>Detalle de Pago</h2>
        <div class="row mt-2">
            <div class="col-12">
                <div class="card text-center">
                    <div class="card-header">
                        <h4>Datos</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 border-right ">
                                <ul class="list-group list-group-flush text-left">
                                    <li class="list-group-item">Fecha: <strong>{{pago.created_at}}</strong> </li>
                                    <li class="list-group-item">Cliente: <strong>{{pago.cuenta.cliente.nombre}}</strong> </li>
                                    <li class="list-group-item">Ingreso en Caja Nro: <strong>{{pago.caja_id}}</strong> </li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul class="list-group list-group-flush text-left">
                                    <li class="list-group-item">Importe: <strong>{{pago.importe}}</strong></i>
                                    <li class="list-group-item">Pago en Pesos: <strong>{{pago.pesos}}</strong> </li>
                                    <li class="list-group-item">Forma de Pago en Venta: <strong>{{pago.fdp.descripcion}}</strong> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <cupones v-bind:cupones="pago.cupones" v-if="pago.cupones.length > 0"/>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <cheques v-bind:cheques="pago.cheques" v-if="pago.cheques.length > 0"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import cupones from '../../../components/Caja/Cupones'
import cheques from '../../../components/Caja/Cheques'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components:{
        cheques,
        cupones
    },
    created(){
        this.getPago(this.id)
    },
    methods:{
        ...mapActions('pagos', ['getPago'])
    },
    computed:{
        ...mapState('pagos',['pago'])
    }
    
}
</script>