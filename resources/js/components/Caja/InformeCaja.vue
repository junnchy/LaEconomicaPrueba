<template>
  <div class="container">
    <div class="row mt-2 p-3">
        <div class="col-3">
            <div class="alert alert-primary border border-primary text-center" role="alert">
                Cobros en Efectivo <br> 
                <strong>${{$store.state.cajas.caja.vEfectivo.toFixed(2)}}</strong> 
            </div>
        </div>
        <div class="col-3">
            <div class="alert alert-primary border border-primary text-center" role="alert">
                Cobros con Tarjeta <br> 
                <strong>${{$store.state.cajas.caja.vTarjeta.toFixed(2)}}</strong> 
            </div>
        </div>
         <div class="col-3">
            <div class="alert alert-primary border border-primary text-center" role="alert">
                Cobros con Cheque <br> 
                <strong>${{$store.state.cajas.caja.vCheque.toFixed(2)}}</strong> 
            </div>
        </div>
        <div class="col-3">
            <div class="alert alert-primary border border-primary text-center" role="alert">
                Cobros Totales <br> 
                <strong>${{$store.state.cajas.caja.vTotales.toFixed(2)}}</strong> 
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
          
        </div>
        <div class="col-6">
          <estadisticaTipoPago/>
        </div>
    </div>
    
  </div>
</template>

<script>
  import estadisticaTipoPago from './Informes/EstadisticaTipoPago'
  import { mapState } from 'vuex'

  export default {
    components: {
      estadisticaTipoPago
    },
  }
</script>
