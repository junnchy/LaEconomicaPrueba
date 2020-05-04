<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>Detalle de Venta</h2>
            </div>
            <div class="col-4">
                <div class="alert alert-primary text-center" role="alert">
                    Saldo de venta <strong>${{ventaActual.saldo}}</strong>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <datos v-bind:ventaActual="ventaActual"/>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <productos v-bind:lineas="ventaActual.lineas" v-bind:totalVenta="ventaActual.total"/>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <pagos v-bind:pagos="ventaActual.pago"/>
            </div>
        </div>
    </div>
</template>
<script>
import productos from '../../../components/Clientes/Cuenta/ProductosVenta'
import datos from '../../../components/Clientes/Cuenta/DatosVenta'
import pagos  from '../../../components/Clientes/Cuenta/PagoVenta'
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    components:{
        productos,
        pagos,
        datos
    },
    created(){
        this.getVenta(this.id)
    },
    methods:{
        ...mapActions('ventas', ['getVenta'])
    },
    computed:{
        ...mapState('ventas', ['ventaActual'])
    }
}
</script>